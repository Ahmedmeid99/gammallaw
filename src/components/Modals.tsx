import { useState } from "react";
import { SITE_DATA } from "../data/siteData";
import type { PracticeArea, TeamMember, NewsArticle, CareerOpportunity } from "../data/siteData";

// 1. Practice Area Details Modal
export function PracticeModal({
  area,
  lang,
  onClose,
  onOpenAppointment,
}: {
  area: PracticeArea;
  lang: "en" | "ar";
  onClose: () => void;
  onOpenAppointment: () => void;
}) {
  const isAr = lang === "ar";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#121c38] text-white border border-[#2b3e75] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-[#c5a880] text-white hover:text-[#0d172e] flex items-center justify-center transition-colors text-lg"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Header Image */}
        <div className="relative h-56 sm:h-64 w-full bg-slate-900">
          <img
            src={area.image}
            alt={isAr ? area.titleAr : area.titleEn}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121c38] via-transparent to-black/30" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-bold text-[#c5a880] uppercase tracking-wider block mb-1">
              {isAr ? area.tagAr : area.tagEn}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
              {isAr ? area.titleAr : area.titleEn}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-sm uppercase font-bold text-[#c5a880] tracking-wider mb-2">
              {isAr ? "نظرة عامة على الخدمة" : "Practice Overview"}
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {isAr ? area.shortDescAr : area.shortDescEn}
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase font-bold text-[#c5a880] tracking-wider mb-3">
              {isAr ? "نطاق الخدمات والتمثيل القانوني" : "Key Legal Scope & Deliverables"}
            </h4>
            <ul className="space-y-2.5">
              {(isAr ? area.detailsAr : area.detailsEn).map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <span className="text-[#c5a880] text-base leading-none mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-[#233566] flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => {
                onClose();
                onOpenAppointment();
              }}
              className="px-6 py-2.5 rounded-lg bg-[#c5a880] hover:bg-[#d8bb93] text-[#0d172e] font-bold text-sm tracking-wide transition-all shadow"
            >
              {isAr ? "طلب استشارة في هذا المجال" : "Request Consultation for this Area"}
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg bg-[#1a2954] hover:bg-[#233870] text-slate-300 text-sm"
            >
              {isAr ? "إغلاق" : "Close"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. Team Member Profile Modal
export function TeamModal({
  member,
  lang,
  onClose,
  onOpenAppointment,
}: {
  member: TeamMember;
  lang: "en" | "ar";
  onClose: () => void;
  onOpenAppointment: () => void;
}) {
  const isAr = lang === "ar";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#121c38] text-white border border-[#2b3e75] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-[#c5a880] text-white hover:text-[#0d172e] flex items-center justify-center transition-colors text-lg"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden bg-slate-800 shrink-0 border-2 border-[#c5a880] shadow-lg">
            <img
              src={member.image}
              alt={isAr ? member.nameAr : member.nameEn}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="text-center sm:text-left">
            <span className="text-xs uppercase font-bold text-[#c5a880] tracking-wider block mb-1">
              {isAr ? member.titleAr : member.titleEn}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
              {isAr ? member.nameAr : member.nameEn}
            </h3>
            <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
              {(isAr ? member.specialtiesAr : member.specialtiesEn).map((sp, i) => (
                <span
                  key={i}
                  className="text-[11px] bg-[#1a2b57] text-[#c5a880] px-2.5 py-0.5 rounded border border-[#2d427d]"
                >
                  {sp}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4 text-slate-300 text-sm leading-relaxed border-t border-[#223566] pt-5">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            {isAr ? "السيرة المهنية والأكاديمية" : "Professional & Academic Bio"}
          </h4>
          <p>{isAr ? member.bioAr : member.bioEn}</p>
        </div>

        <div className="pt-6 border-t border-[#223566] flex justify-between items-center mt-6">
          <button
            onClick={() => {
              onClose();
              onOpenAppointment();
            }}
            className="px-5 py-2.5 rounded-lg bg-[#c5a880] text-[#0d172e] font-bold text-xs sm:text-sm hover:bg-[#d8bb93] transition-all shadow"
          >
            {isAr ? "حجز استشارة مع المحامي" : "Consult with Counsel"}
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-lg bg-[#1a2954] text-slate-300 text-xs sm:text-sm hover:bg-[#24376c]"
          >
            {isAr ? "إغلاق" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
}

// 3. News Article Reader Modal
export function ArticleModal({
  article,
  lang,
  onClose,
  onOpenAppointment,
}: {
  article: NewsArticle;
  lang: "en" | "ar";
  onClose: () => void;
  onOpenAppointment: () => void;
}) {
  const isAr = lang === "ar";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#121c38] text-white border border-[#2b3e75] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-[#c5a880] text-white hover:text-[#0d172e] flex items-center justify-center transition-colors text-lg"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="relative h-52 sm:h-60 w-full bg-slate-900">
          <img
            src={article.image}
            alt={isAr ? article.titleAr : article.titleEn}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121c38] via-transparent to-black/30" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-bold text-[#c5a880] uppercase tracking-wider block mb-1">
              {isAr ? article.categoryAr : article.categoryEn} • {article.date}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
              {isAr ? article.titleAr : article.titleEn}
            </h3>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-700/60 pb-3">
            <span>By {article.author}</span>
            <span>{article.readTime}</span>
          </div>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            {isAr ? article.summaryAr : article.summaryEn}
          </p>

          <div className="p-4 rounded-xl bg-[#182752] border border-[#2b3e75] text-xs sm:text-sm text-slate-300">
            <div className="font-bold text-[#c5a880] mb-1">
              {isAr ? "رأي مكتب إم جي لو القانوني:" : "MG Law Firm Legal Advisory:"}
            </div>
            {isAr
              ? "ينصح فريقنا القانوني كافة الشركات المستثمرة بتوثيق علاماتها والالتزام بضوابط القيد المسبق لتفادي أي غرامات أو تعطيل لإجراءات الإفراج الجمركي."
              : "We advise corporate stakeholders to conduct preemptive statutory clearance to avoid administrative fines or port-of-entry shipment delays."}
          </div>

          <div className="pt-4 border-t border-[#233566] flex justify-between items-center">
            <button
              onClick={() => {
                onClose();
                onOpenAppointment();
              }}
              className="px-5 py-2.5 rounded-lg bg-[#c5a880] text-[#0d172e] font-bold text-xs sm:text-sm hover:bg-[#d8bb93]"
            >
              {isAr ? "استشارة في هذا الموضوع" : "Inquire Regarding This Topic"}
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg bg-[#1a2954] text-slate-300 text-xs sm:text-sm"
            >
              {isAr ? "إغلاق" : "Close"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 4. Quick Appointment Modal
export function AppointmentModal({ lang, onClose }: { lang: "en" | "ar"; onClose: () => void }) {
  const isAr = lang === "ar";
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [practice, setPractice] = useState("corporate-commercial");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#121c38] text-white border border-[#2b3e75] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-[#c5a880] text-white hover:text-[#0d172e] flex items-center justify-center transition-colors text-lg"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="mb-6">
          <div className="text-xs uppercase font-bold text-[#c5a880] tracking-wider mb-1">
            {isAr ? "طلب موعد فوري" : "Fast Track Appointment"}
          </div>
          <h3 className="text-2xl font-serif font-bold text-white">
            {isAr ? "حجز استشارة قانونية خاصة" : "Schedule Legal Consultation"}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            {isAr
              ? "مكتب الدكتور محمد الجمال للمحاماة (الزمالك والمهندسين)"
              : "MG Law Firm (Zamalek & Mohandesin Offices)"}
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-[#c5a880] text-[#0d172e] flex items-center justify-center text-2xl mx-auto mb-4 font-bold">
              ✓
            </div>
            <h4 className="font-serif text-xl font-bold text-white mb-2">
              {isAr ? "تم إرسال الطلب بنجاح" : "Request Submitted"}
            </h4>
            <p className="text-sm text-slate-300 mb-6">
              {isAr
                ? `شكراً أستاذ ${name}. سيتواصل معك منسق الاستشارات القانونية على ${phone} لتأكيد الميعاد المناسب.`
                : `Thank you, ${name}. Our legal team will call you at ${phone} to confirm the appointment.`}
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg bg-[#c5a880] text-[#0d172e] font-bold text-sm"
            >
              {isAr ? "تم" : "Done"}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                {isAr ? "الاسم الكامل *" : "Full Name *"}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={isAr ? "مثال: م. طارق رضوان" : "Your name"}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1936] border border-[#2b3e75] text-white text-sm focus:outline-none focus:border-[#c5a880]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                {isAr ? "رقم الهاتف / واتساب *" : "Phone Number *"}
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+20 1..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1936] border border-[#2b3e75] text-white text-sm focus:outline-none focus:border-[#c5a880]"
                dir="ltr"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                {isAr ? "البريد الإلكتروني" : "Email Address"}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1936] border border-[#2b3e75] text-white text-sm focus:outline-none focus:border-[#c5a880]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                {isAr ? "مجال الاستشارة" : "Practice Area"}
              </label>
              <select
                value={practice}
                onChange={(e) => setPractice(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1936] border border-[#2b3e75] text-white text-sm focus:outline-none focus:border-[#c5a880]"
              >
                {SITE_DATA.practiceAreas.map((area) => (
                  <option key={area.id} value={area.id}>
                    {isAr ? area.titleAr : area.titleEn}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#c5a880] to-[#b38f59] text-[#0d172e] font-bold text-sm transition-all shadow hover:shadow-lg mt-2"
            >
              {isAr ? "تأكيد الطلب" : "Submit Request"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// 5. Career Application Modal
export function CareerModal({
  career,
  lang,
  onClose,
}: {
  career: CareerOpportunity;
  lang: "en" | "ar";
  onClose: () => void;
}) {
  const isAr = lang === "ar";
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#121c38] text-white border border-[#2b3e75] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-[#c5a880] text-white hover:text-[#0d172e] flex items-center justify-center transition-colors text-lg"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="mb-6">
          <span className="text-xs uppercase font-bold text-[#c5a880] tracking-wider block mb-1">
            {isAr ? career.typeAr : career.typeEn}
          </span>
          <h3 className="text-2xl font-serif font-bold text-white">
            {isAr ? career.titleAr : career.titleEn}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            {isAr ? career.locationAr : career.locationEn}
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-[#c5a880] text-[#0d172e] flex items-center justify-center text-2xl mx-auto mb-4 font-bold">
              ✓
            </div>
            <h4 className="font-serif text-xl font-bold text-white mb-2">
              {isAr ? "تم استلام طلب التقديم" : "Application Submitted"}
            </h4>
            <p className="text-sm text-slate-300 mb-6">
              {isAr
                ? `شكراً أستاذ ${name}. سيقوم قسم الموارد البشرية بمراجعة سيرتك والتواصل معك.`
                : `Thank you, ${name}. Our HR department will review your application and contact you.`}
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg bg-[#c5a880] text-[#0d172e] font-bold text-sm"
            >
              {isAr ? "تم" : "Done"}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                {isAr ? "الاسم الكامل *" : "Full Name *"}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg bg-[#0e1936] border border-[#2b3e75] text-white text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                {isAr ? "البريد الإلكتروني *" : "Email Address *"}
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg bg-[#0e1936] border border-[#2b3e75] text-white text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                {isAr ? "رقم الهاتف *" : "Phone Number *"}
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg bg-[#0e1936] border border-[#2b3e75] text-white text-sm"
                dir="ltr"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                {isAr ? "إرفاق السيرة الذاتية (CV / Resume)" : "Upload Resume / CV"}
              </label>
              <input
                type="file"
                className="w-full text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-[#1f3266] file:text-slate-200 hover:file:bg-[#c5a880] hover:file:text-[#0d172e]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#c5a880] to-[#b38f59] text-[#0d172e] font-bold text-sm transition-all shadow hover:shadow-lg mt-2"
            >
              {isAr ? "إرسال طلب التقديم" : "Submit Application"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
