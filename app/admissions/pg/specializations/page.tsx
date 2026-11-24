import Link from "next/link";
import { ADMISSIONS_CONFIG } from "@/config/admissions-docs";
import { Stethoscope, CheckCircle2, ArrowRight, ShieldCheck, Globe2 } from "lucide-react";

export default function PGSpecializationsPage() {
  return (
    <div className="py-16 bg-transparent min-h-screen text-charcoal font-technical">
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

        {/* PG Admissions & NMC Verification Stat Banner */}
        <div className="mb-10 p-6 rounded-3xl bg-gradient-to-r from-sriher-navy via-slate-900 to-sriher-blue text-white border-2 border-gold-brand/40 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-gold-brand/40 flex items-center justify-center shrink-0 text-gold-brand mt-1 backdrop-blur-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="px-3 py-0.5 rounded-full bg-gold-brand/20 text-gold-brand border border-gold-brand/35 text-[10px] font-extrabold uppercase tracking-wider">
                  NMC PGMEB Approved Intake
                </span>
                <span className="px-3 py-0.5 rounded-full bg-blue-900/60 text-blue-200 border border-blue-400/30 text-[10px] font-bold uppercase tracking-wider">
                  AY 2026–27 Renewal
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Total PG Intake: <span className="text-gold-brand">94 Approved Seats</span> across 15 Broad Specialties
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-technical mt-1 max-w-2xl">
                61 MD Seats (10 Departments) + 33 MS Seats (5 Departments) renewed by NMC PGMEB (Ref: No.N-P011(20)/5/2026-PGMEB-NMC Dated 10-11-2026).
              </p>
            </div>
          </div>

          <Link
            href="/nmc/pg-permissions"
            className="px-6 py-3 rounded-xl bg-gold-brand hover:bg-gold-muted text-sriher-navy font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-gold-brand/20 shrink-0 transition-transform active:scale-95"
          >
            <span>View NMC PG Order</span>
            <ArrowRight className="w-4 h-4 text-sriher-navy" />
          </Link>
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
            <span className="px-3.5 py-1.5 rounded-full bg-indigo-600 text-white font-bold text-xs uppercase tracking-wider">
              MD Departments (Doctor of Medicine)
            </span>
            <span className="text-xs text-slate-500 font-bold">10 Departments • 61 Total Seats</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADMISSIONS_CONFIG.pgSpecializationsMD.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-institutional transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded bg-indigo-50 text-indigo-700 text-[10px] font-extrabold uppercase">
                      MD Clinical &amp; Diagnostic
                    </span>
                    <span className="text-xs font-bold font-mono text-slate-500">{item.duration}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">{item.name}</h3>
                  <p className="text-xs text-slate-500 font-technical">Advanced residency, clinical rotations &amp; ICU care exposure.</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">{item.seats} Total Seats</span>
                  <span className="text-xs font-semibold text-indigo-600 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" /> NMC Recognised
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* International Collaboration Callout */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sriher-navy via-slate-900 to-sriher-blue text-white border-2 border-gold-brand/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-gold-brand/40 flex items-center justify-center shrink-0 text-gold-brand mt-1 backdrop-blur-sm">
              <Globe2 className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/70 text-blue-200 border border-blue-400/30 text-[10px] font-extrabold uppercase tracking-wider mb-1.5">
                Global Clinical & Research Collaboration
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Postgraduate Research & Symposia with <span className="text-gold-brand italic font-normal">University of Alabama at Birmingham (UAB), USA</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-technical mt-1.5 leading-relaxed max-w-2xl">
                Broaden your residency dissertation and clinical acumen through bilateral knowledge exchange, joint symposia, and global research publication initiatives under our formal UAB institutional MOU.
              </p>
            </div>
          </div>
          <Link
            href="/collaborations"
            className="px-6 py-3 rounded-xl bg-gold-brand hover:bg-gold-muted text-sriher-navy font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-gold-glow shrink-0 transition-transform active:scale-95"
          >
            Explore Collaboration <ArrowRight className="w-4 h-4 text-sriher-navy" />
          </Link>
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
