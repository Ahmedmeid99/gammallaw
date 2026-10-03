import { useState } from "react";
import { SITE_DATA } from "../data/siteData";

interface AppointmentSectionProps {
  lang: "en" | "ar";
}

export function AppointmentSection({ lang }: AppointmentSectionProps) {
  const isAr = lang === "ar";
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    practiceArea: "corporate-commercial",
    office: "zamalek",
    date: "",
    time: "10:00",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0d172e] text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#101b38] via-[#0d172e] to-[#080e1c] z-0" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#293d7a]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs uppercase font-bold tracking-widest text-[#c5a880] bg-[#c5a880]/10 px-3.5 py-1.5 rounded-full mb-3 border border-[#c5a880]/20">
            {isAr ? "تواصل معنا" : "Get in Touch"}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            {isAr ? "نحن هنا لمساعدتكم وحماية مصالحكم" : "We Are Here to Help You"}
          </h2>
          <div className="w-20 h-1 bg-[#c5a880] mx-auto rounded-full mb-6" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {isAr
              ? "فريقنا القانوني المتخصص مستعد لتقديم الاستشارة، وتحديد الاستراتيجية القانونية الفضلى لشركتكم أو قضيتكم."
              : "Schedule a confidential consultation with our seasoned partners across our Cairo locations or via video conference."}
          </p>
        </div>

        {/* 2 Column Layout: Booking Form & Office Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Booking Form */}
          <div className="lg:col-span-7 bg-[#14234b]/90 border border-[#273a6f] rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
            <h3 className="font-serif text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-[#c5a880]">⚖️</span>
              <span>{isAr ? "حجز استشارة قانونية" : "Book Legal Appointment"}</span>
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mb-6">
              {isAr
                ? "يرجى ملء النموذج أدناه وسيقوم مستشارنا بالتواصل معكم لتأكيد الموعد."
                : "Fill out the consultation request below and our legal coordinator will confirm within 2 business hours."}
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-[#1b3166] border border-[#c5a880]/50 text-center animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-[#c5a880] text-[#0d172e] flex items-center justify-center text-2xl mx-auto mb-4 font-bold">
                  ✓
                </div>
                <h4 className="font-serif text-xl font-bold text-white mb-2">
                  {isAr ? "تم استلام طلب الاستشارة بنجاح" : "Appointment Request Received"}
                </h4>
                <p className="text-sm text-slate-300 mb-6">
                  {isAr
                    ? `شكراً لك أستاذ ${formData.name}. سيقوم فريق مكتب الدكتور محمد الجمال بالتواصل معك هاتفياً على الرقم ${formData.phone} لتأكيد الموعد وتنسيق الاستشارة.`
                    : `Thank you, ${formData.name}. Our legal coordination desk will contact you shortly at ${formData.phone} to confirm your appointment.`}
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href={`https://wa.me/20227353328?text=${encodeURIComponent(
                      `Hello MG Law, I submitted an appointment request for ${formData.name}`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#25D366] text-white text-xs font-bold flex items-center gap-1.5 shadow"
                  >
                    <span>WhatsApp Direct Support</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-lg bg-[#213566] text-slate-200 text-xs hover:text-white"
                  >
                    {isAr ? "تقديم طلب آخر" : "Submit another request"}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      {isAr ? "الاسم الكامل *" : "Full Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={isAr ? "مثال: د. أحمد المنصوري" : "e.g. John Doe"}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1936] border border-[#2b3e75] text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      {isAr ? "رقم الهاتف / واتساب *" : "Phone Number *"}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+20 1..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1936] border border-[#2b3e75] text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      {isAr ? "البريد الإلكتروني" : "Email Address"}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="client@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1936] border border-[#2b3e75] text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      {isAr ? "مجال التخصص القانوني" : "Practice Area"}
                    </label>
                    <select
                      value={formData.practiceArea}
                      onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1936] border border-[#2b3e75] text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors"
                    >
                      {SITE_DATA.practiceAreas.map((area) => (
                        <option key={area.id} value={area.id}>
                          {isAr ? area.titleAr : area.titleEn}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      {isAr ? "المكتب المفضل" : "Preferred Office"}
                    </label>
                    <select
                      value={formData.office}
                      onChange={(e) => setFormData({ ...formData, office: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1936] border border-[#2b3e75] text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors"
                    >
                      <option value="zamalek">
                        {isAr ? "مكتب الزمالك (مظهر)" : "Zamalek (Mazhar)"}
                      </option>
                      <option value="mohandesin">
                        {isAr ? "مكتب المهندسين (شارع لبنان)" : "Mohandesin (Lebanon St)"}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      {isAr ? "التاريخ المفضل" : "Preferred Date"}
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1936] border border-[#2b3e75] text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      {isAr ? "التوقيت" : "Time Slot"}
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1936] border border-[#2b3e75] text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors"
                    >
                      <option value="10:00">10:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    {isAr ? "نبذة عن المسألة القانونية" : "Case / Legal Summary"}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={
                      isAr
                        ? "اكتب تفاصيل موجزة عن موضوع الاستشارة..."
                        : "Briefly outline your corporate matter or dispute..."
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1936] border border-[#2b3e75] text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-gradient-to-r from-[#c5a880] to-[#b38f59] hover:from-[#d2b68f] hover:to-[#c5a880] text-[#0d172e] font-bold text-sm sm:text-base tracking-wide transition-all shadow-lg hover:shadow-xl duration-200"
                >
                  {isAr ? "تأكيد وإرسال طلب الموعد" : "Confirm Appointment Request"}
                </button>
              </form>
            )}
          </div>

          {/* Office Details & Contacts */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="mb-2">
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                {isAr
                  ? "خدمات قانونية شاملة عبر مقراتنا"
                  : "Comprehensive Legal Services Across Our Offices"}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm">
                {isAr
                  ? "يسعدنا استقبالكم في مقرينا المتميزين بحي الزمالك العريق وحي المهندسين بالجيزة."
                  : "Visit our dedicated law offices in Zamalek and Mohandesin for private consultations."}
              </p>
            </div>

            {SITE_DATA.offices.map((off, idx) => (
              <div
                key={idx}
                className="bg-[#14234b]/70 border border-[#273a6f] rounded-2xl p-6 hover:border-[#c5a880]/50 transition-all shadow-md group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-serif text-lg font-bold text-[#c5a880]">
                    {isAr ? off.nameAr : off.nameEn}
                  </h4>
                  <span className="text-[11px] bg-[#223567] text-slate-300 px-2.5 py-0.5 rounded">
                    {idx === 0
                      ? isAr
                        ? "المقر الرئيسي"
                        : "Main Office"
                      : isAr
                        ? "فرع المهندسين"
                        : "Mohandesin Branch"}
                  </span>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#c5a880] mt-0.5">📍</span>
                    <span>{isAr ? off.addressAr : off.addressEn}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <span className="text-[#c5a880]">📞</span>
                    <a
                      href={`tel:${off.phone.replace(/\s+/g, "")}`}
                      className="hover:text-white transition-colors"
                      dir="ltr"
                    >
                      {off.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <span className="text-[#c5a880]">✉️</span>
                    <a href={`mailto:${off.email}`} className="hover:text-white transition-colors">
                      {off.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <span className="text-[#c5a880]">🕒</span>
                    <span>{isAr ? off.hoursAr : off.hoursEn}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[#233566] flex justify-between items-center">
                  <a
                    href={off.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-[#c5a880] hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>{isAr ? "عرض على الخريطة" : "Get Directions"}</span>
                    <span>&rarr;</span>
                  </a>

                  <a
                    href={`tel:${off.phone.replace(/\s+/g, "")}`}
                    className="text-xs bg-[#203366] hover:bg-[#c5a880] text-slate-200 hover:text-[#0d172e] px-3 py-1.5 rounded transition-all font-medium"
                    dir="ltr"
                  >
                    Call Office
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
