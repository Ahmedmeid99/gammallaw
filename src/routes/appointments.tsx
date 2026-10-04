import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { PRACTICE_CATALOG } from "../data/practiceCatalog";
import { useLanguage } from "../i18n/LanguageContext";
import { createAppointment } from "../server/appointments";
import { breadcrumbJsonLd, createSeoHead } from "../lib/seo";

export const Route = createFileRoute("/appointments")({
  component: AppointmentsPage,
  head: () =>
    createSeoHead({
      title: "Book a Legal Consultation in Cairo | MG Law Firm",
      description:
        "Request a confidential appointment with an MG Law Firm lawyer for corporate, litigation, contracts, labour, intellectual property, real estate, or residency advice.",
      path: "/appointments",
      keywords: ["book lawyer Cairo", "legal consultation appointment Egypt"],
      jsonLd: breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Appointments", path: "/appointments" },
      ]),
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
  const { isArabic } = useLanguage();
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
      setSubmissionError(
        isArabic ? "اختر تاريخاً متاحاً من التقويم." : "Select an available date from the calendar.",
      );
      return;
    }

    setSubmitting(true);
    try {
      const result = await createAppointment({ data: { ...form, date: selectedDate } });
      setReference(result.reference);
    } catch (error) {
      setSubmissionError(
        error instanceof Error
          ? error.message
          : isArabic
            ? "تعذر إرسال طلبك."
            : "Unable to submit your request.",
      );
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
            <h1 id="appointment-title">{isArabic ? "حجز موعد" : "Appointments"}</h1>
            <div className="breadcrumbs" aria-label={isArabic ? "مسار الصفحة" : "Breadcrumb"}>
              <a href="/">{isArabic ? "الرئيسية" : "Home"}</a>
              <span aria-hidden="true">›</span>
              <strong>{isArabic ? "حجز موعد" : "Appointments"}</strong>
            </div>
          </div>
        </section>

        <section className="appointment-booking" aria-labelledby="booking-title">
          <div className="appointment-intro">
            <p className="eyebrow">
              {isArabic ? "استشارة قانونية سرية" : "Confidential legal consultation"}
            </p>
            <h2 id="booking-title">
              {isArabic ? "اختر موعداً مناسباً" : "Choose a suitable appointment"}
            </h2>
            <p>
              {isArabic
                ? "اختر موعداً متاحاً من الأحد إلى الخميس ثم أرسل بياناتك. سيراجع المكتب الطلب قبل تأكيده."
                : "Select an available Sunday–Thursday date, then send your details. Our office will review the request before it is confirmed."}
            </p>
          </div>

          <div className="appointment-layout">
            <div
              className="appointment-calendar"
              aria-label={isArabic ? "تقويم المواعيد" : "Appointment calendar"}
            >
              <div className="calendar-toolbar">
                <button
                  type="button"
                  aria-label={isArabic ? "الشهر السابق" : "Previous month"}
                  onClick={() =>
                    setCalendarMonth(
                      new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1),
                    )
                  }
                >
                  ‹
                </button>
                <strong>
                  {calendarMonth.toLocaleDateString(isArabic ? "ar-EG" : "en-GB", {
                    month: "long",
                    year: "numeric",
                  })}
                </strong>
                <button
                  type="button"
                  aria-label={isArabic ? "الشهر التالي" : "Next month"}
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
                {WEEKDAYS.map((day, index) => (
                  <span key={day}>
                    {isArabic ? ["أحد", "إثن", "ثلا", "أرب", "خمي", "جمع", "سبت"][index] : day}
                  </span>
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
                      aria-label={date.toLocaleDateString(isArabic ? "ar-EG" : "en-GB", {
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
                <span />
                {isArabic
                  ? "المواعيد المتاحة · الجمعة والسبت عطلة"
                  : "Available dates · Fridays and Saturdays are closed"}
              </p>
            </div>

            <div className="appointment-form-card">
              {reference ? (
                <div className="appointment-success" role="status">
                  <span className="success-icon">✓</span>
                  <p className="eyebrow">{isArabic ? "تم استلام الطلب" : "Request received"}</p>
                  <h2>{isArabic ? `شكراً، ${form.name}` : `Thank you, ${form.name}`}</h2>
                  <p>
                    {isArabic
                      ? "تم استلام طلب الموعد. سيراجع فريقنا التاريخ المفضل ويتواصل معك هاتفياً أو عبر البريد الإلكتروني لتأكيد الموعد."
                      : "Your appointment request has been received. Our team will review your preferred date and contact you by phone or email to confirm the appointment."}
                  </p>
                  <button type="button" onClick={() => setReference("")}>
                    {isArabic ? "إرسال طلب آخر" : "Submit another request"}
                  </button>
                </div>
              ) : (
                <form onSubmit={submitAppointment}>
                  <h2>{isArabic ? "طلب موعد" : "Request an appointment"}</h2>
                  <p className="selected-date-copy">
                    {selectedDate
                      ? new Date(`${selectedDate}T12:00:00`).toLocaleDateString(
                          isArabic ? "ar-EG" : "en-GB",
                          {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          },
                        )
                      : isArabic
                        ? "اختر تاريخاً من التقويم"
                        : "Choose a date from the calendar"}
                  </p>
                  <div className="appointment-fields two-columns">
                    <label>
                      <span>{isArabic ? "الاسم الكامل *" : "Full name *"}</span>
                      <input
                        required
                        value={form.name}
                        onChange={(event) => updateForm("name", event.target.value)}
                        autoComplete="name"
                      />
                    </label>
                    <label>
                      <span>{isArabic ? "رقم الهاتف *" : "Phone number *"}</span>
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
                      <span>{isArabic ? "البريد الإلكتروني *" : "Email address *"}</span>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(event) => updateForm("email", event.target.value)}
                        autoComplete="email"
                      />
                    </label>
                    <label>
                      <span>{isArabic ? "الوقت المفضل *" : "Preferred time *"}</span>
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
                      <span>{isArabic ? "المكتب *" : "Office *"}</span>
                      <select
                        value={form.office}
                        onChange={(event) => updateForm("office", event.target.value)}
                      >
                        <option value="Mazhar Office, Zamalek">
                          {isArabic ? "مكتب مظهر، الزمالك" : "Mazhar Office, Zamalek"}
                        </option>
                        <option value="Mohandesin Office, Giza">
                          {isArabic ? "مكتب المهندسين، الجيزة" : "Mohandesin Office, Giza"}
                        </option>
                        <option value="Video consultation">
                          {isArabic ? "استشارة عبر الفيديو" : "Video consultation"}
                        </option>
                      </select>
                    </label>
                    <label>
                      <span>{isArabic ? "المجال القانوني *" : "Practice area *"}</span>
                      <select
                        value={form.practiceArea}
                        onChange={(event) => updateForm("practiceArea", event.target.value)}
                      >
                        {PRACTICE_CATALOG.map((area) => (
                          <option key={area.id} value={area.titleEn}>
                            {isArabic ? area.titleAr : area.titleEn}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <label className="appointment-notes">
                    <span>
                      {isArabic
                        ? "اكتب نبذة عن المسألة القانونية"
                        : "Briefly describe your legal matter"}
                    </span>
                    <textarea
                      rows={4}
                      value={form.notes}
                      onChange={(event) => updateForm("notes", event.target.value)}
                    />
                  </label>
                  <label className="appointment-consent">
                    <input type="checkbox" required />
                    <span>
                      {isArabic
                        ? "أوافق على حفظ البيانات المقدمة لمعالجة هذا الطلب."
                        : "I agree that my submitted data may be stored to process this request."}
                    </span>
                  </label>
                  {submissionError && <p className="appointment-error">{submissionError}</p>}
                  <button className="appointment-submit" type="submit" disabled={submitting}>
                    {submitting
                      ? isArabic
                        ? "جارٍ إرسال الطلب…"
                        : "Sending request…"
                      : isArabic
                        ? "إرسال طلب الموعد"
                        : "Send appointment request"}
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
