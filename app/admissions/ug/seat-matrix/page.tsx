import Link from "next/link";
import { ADMISSIONS_CONFIG } from "@/config/admissions-docs";
import { ShieldCheck, GraduationCap, ArrowRight, CheckCircle2, Phone, Calendar } from "lucide-react";

export default function UGSeatMatrixPage() {
  return (
    <div className="py-16 bg-transparent min-h-screen text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-emerald-brand">Home</Link>
            <span>/</span>
            <span>Admissions</span>
            <span>/</span>
            <span className="text-emerald-brand">MBBS Seat Matrix</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-emerald-brand tracking-tight">
            MBBS Seat Matrix & <span className="gold-gradient-text italic font-normal">Quota Rules</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl">
            Official 250 MBBS Seat Matrix distribution for Academic Session <span className="font-bold text-emerald-950 font-mono">{ADMISSIONS_CONFIG.academicYear}</span>, governed by {ADMISSIONS_CONFIG.counsellingAuthority}.
          </p>
        </div>

        {/* Live Session Alert */}
        <div className="mb-10 p-4 rounded-2xl bg-emerald-950 text-white border border-gold-brand/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gold-brand text-emerald-950 font-bold">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-gold-brand uppercase font-bold">Academic Session Active</div>
              <div className="text-sm font-serif font-bold">Admissions Session {ADMISSIONS_CONFIG.academicYear} Intake Verified</div>
            </div>
          </div>
          <Link
            href="/admissions/ug/required-documents"
            className="px-5 py-2.5 rounded-xl bg-gold-brand hover:bg-gold-muted text-emerald-950 font-extrabold text-xs uppercase tracking-wider shadow-md flex items-center gap-1.5"
          >
            Required Documents Checklist <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Seat Matrix Grid */}
        <div className="space-y-6 mb-12">
          {ADMISSIONS_CONFIG.ugSeatMatrix.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-gold-brand shadow-sm hover:shadow-institutional transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-900 text-gold-brand flex items-center justify-center font-serif font-bold text-xl shrink-0 mt-1 shadow-md">
                  {item.percentage}
                </div>
                <div>
                  <span className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-900 text-xs font-extrabold uppercase tracking-wider border border-emerald-200">
                    Quota Category {item.quotaCode}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-emerald-brand mt-2">{item.quotaCategory}</h3>
                  <p className="text-xs text-slate-500 font-technical mt-1 leading-relaxed max-w-xl">
                    <strong className="text-slate-700">Eligibility:</strong> {item.eligibility}
                  </p>
                  <p className="text-xs text-slate-500 font-technical mt-1">
                    <strong className="text-slate-700">Counselling Body:</strong> {item.counsellingBody}
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:items-end border-t md:border-t-0 border-slate-100 pt-4 md:pt-0 justify-between">
                <div className="text-left md:text-right">
                  <div className="text-3xl font-serif font-bold text-emerald-brand">{item.seatCount} Seats</div>
                  <div className="text-xs text-slate-400 font-technical">{item.feeStructureDescription}</div>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" /> Active Intake
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Admissions Help Desk Box */}
        <div className="bg-emerald-900 text-white rounded-3xl p-8 border border-gold-brand/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-serif font-bold text-gold-brand">PMRIMS Admission Help Desk</h3>
            <p className="text-xs text-slate-300 font-technical mt-1">
              Have questions regarding KNRUHS web counselling or document verification?
            </p>
            <div className="text-sm font-mono text-white mt-2 font-bold">
              {ADMISSIONS_CONFIG.contactInfo.helpline1} / {ADMISSIONS_CONFIG.contactInfo.helpline2}
            </div>
          </div>

          <a
            href={`tel:${ADMISSIONS_CONFIG.contactInfo.helpline1}`}
            className="px-6 py-3 rounded-xl bg-gold-brand hover:bg-gold-muted text-emerald-950 font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-gold-glow shrink-0"
          >
            <Phone className="w-4 h-4" /> Call Admissions Desk
          </a>
        </div>
      </div>
    </div>
  );
}
