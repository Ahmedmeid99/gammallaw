import { createServerFn, createServerOnlyFn } from "@tanstack/react-start";

export type AppointmentStatus = "pending" | "approved" | "rejected";

export type AppointmentRecord = {
  id: string;
  reference: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  office: string;
  practiceArea: string;
  notes: string;
  status: AppointmentStatus;
  createdAt: string;
  updatedAt: string;
};

type AppointmentInput = Pick<
  AppointmentRecord,
  "name" | "email" | "phone" | "date" | "time" | "office" | "practiceArea" | "notes"
>;

const cleanText = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

const validateAppointment = (input: AppointmentInput): AppointmentInput => {
  const appointment = {
    name: cleanText(input?.name, 100),
    email: cleanText(input?.email, 160).toLowerCase(),
    phone: cleanText(input?.phone, 40),
    date: cleanText(input?.date, 10),
    time: cleanText(input?.time, 5),
    office: cleanText(input?.office, 60),
    practiceArea: cleanText(input?.practiceArea, 120),
    notes: cleanText(input?.notes, 2000),
  };

  if (appointment.name.length < 2) throw new Error("Please enter your full name.");
  if (!/^\S+@\S+\.\S+$/.test(appointment.email)) throw new Error("Enter a valid email address.");
  if (appointment.phone.length < 7) throw new Error("Enter a valid phone number.");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(appointment.date)) throw new Error("Choose a valid date.");
  if (!/^\d{2}:\d{2}$/.test(appointment.time)) throw new Error("Choose a valid time.");
  if (!appointment.office || !appointment.practiceArea)
    throw new Error("Complete all required fields.");

  const requestedDate = new Date(`${appointment.date}T12:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (Number.isNaN(requestedDate.getTime()) || requestedDate < today) {
    throw new Error("Choose a future appointment date.");
  }
  if (requestedDate.getDay() === 5 || requestedDate.getDay() === 6) {
    throw new Error("Appointments are available Sunday through Thursday.");
  }

  return appointment;
};

const readAppointments = createServerOnlyFn(async (): Promise<AppointmentRecord[]> => {
  const fs = await import("node:fs/promises");
  const path = await import("node:path");
  const filePath =
    process.env.APPOINTMENTS_DATA_FILE || path.join(process.cwd(), "data", "appointments.json");

  try {
    return JSON.parse(await fs.readFile(filePath, "utf8")) as AppointmentRecord[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
});

const writeAppointments = createServerOnlyFn(async (appointments: AppointmentRecord[]) => {
  const fs = await import("node:fs/promises");
  const path = await import("node:path");
  const filePath =
    process.env.APPOINTMENTS_DATA_FILE || path.join(process.cwd(), "data", "appointments.json");
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, `${JSON.stringify(appointments, null, 2)}\n`, "utf8");
});

const getAdminKey = createServerOnlyFn(() => {
  const configured = process.env.APPOINTMENT_ADMIN_KEY?.trim();
  if (configured) return configured;
  return process.env.NODE_ENV === "production" ? "" : "mg-law-owner";
});

const notifyOwner = createServerOnlyFn(async (appointment: AppointmentRecord) => {
  const webhook = process.env.APPOINTMENT_WEBHOOK_URL?.trim();
  if (!webhook) return;

  try {
    await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        event: "appointment.requested",
        appointment,
      }),
    });
  } catch (error) {
    console.error("Appointment owner notification failed", error);
  }
});

const assertAdmin = async (key: string) => {
  const expected = getAdminKey();
  if (!expected || key !== expected) throw new Error("The owner access key is incorrect.");
};

export const createAppointment = createServerFn({ method: "POST" })
  .validator((input: AppointmentInput) => validateAppointment(input))
  .handler(async ({ data }) => {
    const { randomUUID } = await import("node:crypto");
    const appointments = await readAppointments();
    const now = new Date().toISOString();
    const record: AppointmentRecord = {
      ...data,
      id: randomUUID(),
      reference: `MG-${Date.now().toString(36).toUpperCase()}-${randomUUID().slice(0, 4).toUpperCase()}`,
      status: "pending",
      createdAt: now,
      updatedAt: now,
    };

    appointments.unshift(record);
    await writeAppointments(appointments);
    await notifyOwner(record);

    return { reference: record.reference, status: record.status };
  });

export const checkAppointment = createServerFn({ method: "GET" })
  .validator((input: { reference: string; email: string }) => ({
    reference: cleanText(input?.reference, 60).toUpperCase(),
    email: cleanText(input?.email, 160).toLowerCase(),
  }))
  .handler(async ({ data }) => {
    const appointments = await readAppointments();
    const match = appointments.find(
      (item) => item.reference === data.reference && item.email === data.email,
    );
    if (!match) throw new Error("No appointment request matches those details.");
    return {
      reference: match.reference,
      name: match.name,
      date: match.date,
      time: match.time,
      office: match.office,
      status: match.status,
      updatedAt: match.updatedAt,
    };
  });

export const listAppointments = createServerFn({ method: "GET" })
  .validator((input: { key: string }) => ({ key: cleanText(input?.key, 200) }))
  .handler(async ({ data }) => {
    await assertAdmin(data.key);
    return readAppointments();
  });

export const updateAppointmentStatus = createServerFn({ method: "POST" })
  .validator((input: { key: string; id: string; status: AppointmentStatus }) => ({
    key: cleanText(input?.key, 200),
    id: cleanText(input?.id, 100),
    status: input?.status,
  }))
  .handler(async ({ data }) => {
    await assertAdmin(data.key);
    if (!(["approved", "rejected"] as AppointmentStatus[]).includes(data.status)) {
      throw new Error("Choose a valid appointment status.");
    }

    const appointments = await readAppointments();
    const appointment = appointments.find((item) => item.id === data.id);
    if (!appointment) throw new Error("Appointment request not found.");
    appointment.status = data.status;
    appointment.updatedAt = new Date().toISOString();
    await writeAppointments(appointments);
    return appointment;
  });
