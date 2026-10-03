import Link from "next/link";
import { ADMISSIONS_CONFIG } from "@/config/admissions-docs";
import { Stethoscope, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export default function PGSpecializationsPage() {
  return (
    <div className="py-16 bg-surface-light min-h-screen text-charcoal font-technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header Breadcrumb */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <span>Admissions</span>
            <span>/</span>
            <span className="text-blue-600">PG Specializations</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Postgraduate <span className="text-blue-600 italic font-normal">MD & MS Specializations</span>
          </h1>
          <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-3xl">
            NMC Recognised MS (Master of Surgery) & MD (Doctor of Medicine) residency programs for Academic Session <span className="font-bold text-slate-900 font-mono">{ADMISSIONS_CONFIG.academicYear}</span>.
          </p>
        </div>

        {/* 1. MS Specializations (Master of Surgery) */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-200">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-600 text-white font-bold text-xs uppercase tracking-wider">
              MS Departments (Master of Surgery)
            </span>
            <span className="text-xs text-slate-500 font-bold">5 Departments • 33 Total Seats</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADMISSIONS_CONFIG.pgSpecializationsMS.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-institutional transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-600 text-[10px] font-extrabold uppercase">
                      MS Surgical Residency
                    </span>
                    <span className="text-xs font-bold font-mono text-slate-500">{item.duration}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">{item.name}</h3>
                  <p className="text-xs text-slate-500 font-technical">Hands-on surgical training at 1200+ Bed Teaching Hospital.</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">{item.seats} Total Seats</span>
                  <span className="text-xs font-semibold text-blue-600 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" /> NMC Recognised
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. MD Specializations (Doctor of Medicine) */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-200">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider">
              MD Departments (Doctor of Medicine)
            </span>
            <span className="text-xs text-slate-500 font-bold">10 Departments • 61 Total Seats</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADMISSIONS_CONFIG.pgSpecializationsMD.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-institutional transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 text-[10px] font-extrabold uppercase">
                      MD Clinical & Diagnostic
                    </span>
                    <span className="text-xs font-bold font-mono text-slate-500">{item.duration}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">{item.name}</h3>
                  <p className="text-xs text-slate-500 font-technical">Advanced residency, clinical rotations & ICU care exposure.</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">{item.seats} Total Seats</span>
                  <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> NMC Recognised
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-end">
          <Link
            href="/admissions/pg/required-documents"
            className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg"
          >
            View PG Required Documents Checklist <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
