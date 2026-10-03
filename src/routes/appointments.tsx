import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { PRACTICE_CATALOG } from "../data/practiceCatalog";
import { createAppointment } from "../server/appointments";

export const Route = createFileRoute("/appointments")({
  component: AppointmentsPage,
  head: () => ({
    meta: [
      { title: "Appointments | MG LAW" },
      {
        name: "description",
        content: "Request a confidential legal consultation with MG Law Firm in Cairo.",
      },
    ],
  }),
});

const TIME_SLOTS = ["09:00", "10:30", "12:00", "13:30", "15:00", "16:30"];
const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const isoDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const isBookable = (date: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date >= today && date.getDay() !== 5 && date.getDay() !== 6;
};

function AppointmentsPage() {
  const now = new Date();
  const [calendarMonth, setCalendarMonth] = useState(
    () => new Date(now.getFullYear(), now.getMonth(), 1),
  );
  const [selectedDate, setSelectedDate] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    time: "09:00",
    office: "Mazhar Office, Zamalek",
    practiceArea: PRACTICE_CATALOG[0]?.titleEn ?? "Legal consultation",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [reference, setReference] = useState("");

  const calendarDays = useMemo(() => {
    const first = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth(), 1);
    const start = new Date(first);
    start.setDate(first.getDate() - first.getDay());
    return Array.from({ length: 42 }, (_, index) => {
      const date = new Date(start);
      date.setDate(start.getDate() + index);
      return date;
    });
  }, [calendarMonth]);

  const updateForm = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submitAppointment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionError("");
    if (!selectedDate) {
      setSubmissionError("Select an available date from the calendar.");
      return;
    }

    setSubmitting(true);
    try {
      const result = await createAppointment({ data: { ...form, date: selectedDate } });
      setReference(result.reference);
    } catch (error) {
      setSubmissionError(error instanceof Error ? error.message : "Unable to submit your request.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="top" className="site-shell appointment-page">
      <SiteHeader />
      <main>
        <section className="appointment-title-hero" aria-labelledby="appointment-title">
          <div className="appointment-title-inner">
            <h1 id="appointment-title">Appointments</h1>
            <div className="breadcrumbs" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">›</span>
              <strong>Appointments</strong>
            </div>
          </div>
        </section>

        <section className="appointment-booking" aria-labelledby="booking-title">
          <div className="appointment-intro">
            <p className="eyebrow">Confidential legal consultation</p>
            <h2 id="booking-title">Choose a suitable appointment</h2>
            <p>
              Select an available Sunday–Thursday date, then send your details. Our office will
              review the request before it is confirmed.
            </p>
          </div>

          <div className="appointment-layout">
            <div className="appointment-calendar" aria-label="Appointment calendar">
              <div className="calendar-toolbar">
                <button
                  type="button"
                  aria-label="Previous month"
                  onClick={() =>
                    setCalendarMonth(
                      new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1),
                    )
                  }
                >
                  ‹
                </button>
                <strong>
                  {calendarMonth.toLocaleDateString("en-GB", {
                    month: "long",
                    year: "numeric",
                  })}
                </strong>
                <button
                  type="button"
                  aria-label="Next month"
                  onClick={() =>
                    setCalendarMonth(
                      new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1),
                    )
                  }
                >
                  ›
                </button>
              </div>
              <div className="calendar-weekdays" aria-hidden="true">
                {WEEKDAYS.map((day) => (
                  <span key={day}>{day}</span>
                ))}
              </div>
              <div className="calendar-grid">
                {calendarDays.map((date) => {
                  const value = isoDate(date);
                  const currentMonth = date.getMonth() === calendarMonth.getMonth();
                  const available = currentMonth && isBookable(date);
                  return (
                    <button
                      type="button"
                      key={value}
                      className={`${currentMonth ? "" : "outside-month"} ${
                        selectedDate === value ? "selected" : ""
                      }`}
                      disabled={!available}
                      aria-label={date.toLocaleDateString("en-GB", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                      aria-pressed={selectedDate === value}
                      onClick={() => setSelectedDate(value)}
                    >
                      {date.getDate()}
                    </button>
                  );
                })}
              </div>
              <p className="calendar-note">
                <span /> Available dates · Fridays and Saturdays are closed
              </p>
            </div>

            <div className="appointment-form-card">
              {reference ? (
                <div className="appointment-success" role="status">
                  <span className="success-icon">✓</span>
                  <p className="eyebrow">Request received</p>
                  <h2>Thank you, {form.name}</h2>
                  <p>
                    Your appointment request has been received. Our team will review your preferred
                    date and contact you by phone or email to confirm the appointment.
                  </p>
                  <button type="button" onClick={() => setReference("")}>
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={submitAppointment}>
                  <h2>Request an appointment</h2>
                  <p className="selected-date-copy">
                    {selectedDate
                      ? new Date(`${selectedDate}T12:00:00`).toLocaleDateString("en-GB", {
                          weekday: "long",
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })
                      : "Choose a date from the calendar"}
                  </p>
                  <div className="appointment-fields two-columns">
                    <label>
                      <span>Full name *</span>
                      <input
                        required
                        value={form.name}
                        onChange={(event) => updateForm("name", event.target.value)}
                        autoComplete="name"
                      />
                    </label>
                    <label>
                      <span>Phone number *</span>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(event) => updateForm("phone", event.target.value)}
                        autoComplete="tel"
                      />
                    </label>
                  </div>
                  <div className="appointment-fields two-columns">
                    <label>
                      <span>Email address *</span>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(event) => updateForm("email", event.target.value)}
                        autoComplete="email"
                      />
                    </label>
                    <label>
                      <span>Preferred time *</span>
                      <select
                        value={form.time}
                        onChange={(event) => updateForm("time", event.target.value)}
                      >
                        {TIME_SLOTS.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <div className="appointment-fields two-columns">
                    <label>
                      <span>Office *</span>
                      <select
                        value={form.office}
                        onChange={(event) => updateForm("office", event.target.value)}
                      >
                        <option>Mazhar Office, Zamalek</option>
                        <option>Mohandesin Office, Giza</option>
                        <option>Video consultation</option>
                      </select>
                    </label>
                    <label>
                      <span>Practice area *</span>
                      <select
                        value={form.practiceArea}
                        onChange={(event) => updateForm("practiceArea", event.target.value)}
                      >
                        {PRACTICE_CATALOG.map((area) => (
                          <option key={area.id}>{area.titleEn}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <label className="appointment-notes">
                    <span>Briefly describe your legal matter</span>
                    <textarea
                      rows={4}
                      value={form.notes}
                      onChange={(event) => updateForm("notes", event.target.value)}
                    />
                  </label>
                  <label className="appointment-consent">
                    <input type="checkbox" required />
                    <span>
                      I agree that my submitted data may be stored to process this request.
                    </span>
                  </label>
                  {submissionError && <p className="appointment-error">{submissionError}</p>}
                  <button className="appointment-submit" type="submit" disabled={submitting}>
                    {submitting ? "Sending request…" : "Send appointment request"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
