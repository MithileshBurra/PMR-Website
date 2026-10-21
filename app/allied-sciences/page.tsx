import Link from "next/link";
import { Stethoscope, HeartPulse, GraduationCap, Award, CheckCircle2, ArrowRight } from "lucide-react";

export default function AlliedSciencesPage() {
  return (
    <div className="py-16 bg-transparent min-h-screen text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-emerald-brand">Home</Link>
            <span>/</span>
            <span className="text-emerald-brand">Allied Sciences</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-emerald-brand tracking-tight">
            Colleges of Nursing & <span className="gold-gradient-text italic font-normal">Physiotherapy</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl">
            Empowering allied health professionals through accredited degree programs affiliated with Kaloji Narayana Rao University of Health Sciences.
          </p>
        </div>

        {/* 1. College of Physiotherapy */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-institutional mb-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-900 text-gold-brand flex items-center justify-center shadow-md">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-emerald-brand">PMR College of Physiotherapy</h2>
                <p className="text-xs text-slate-500 font-technical">Affiliated to KNRUHS & Telangana State Paramedical Board</p>
              </div>
            </div>
            <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-900 font-bold text-xs">BPT Program</span>
          </div>

          <p className="text-slate-600 font-technical text-sm leading-relaxed mb-6">
            Offers 4.5-year Bachelor of Physiotherapy (BPT) with 6 months clinical internship at PMR 1200+ Bed Hospital. Specializations include Orthopedic Physiotherapy, Neurological Rehabilitation, and Sports Medicine.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-100 pt-4 text-xs font-bold text-emerald-950">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-muted" /> 50 Annual BPT Seats</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-muted" /> Gait & Electrotherapy Labs</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-muted" /> Hospital Clinical Rotations</div>
          </div>
        </div>

        {/* 2. College of Nursing */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-institutional mb-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gold-brand text-emerald-950 flex items-center justify-center shadow-md">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-emerald-brand">PMR College of Nursing</h2>
                <p className="text-xs text-slate-500 font-technical">Approved by INC & TS Nursing Council • Exclusive Women&apos;s College</p>
              </div>
            </div>
            <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-900 font-bold text-xs">B.Sc Nursing Program</span>
          </div>

          <p className="text-slate-600 font-technical text-sm leading-relaxed mb-6">
            Comprehensive 4-year B.Sc Nursing degree training women students with attached 1200+ bed hospital clinical rotations, mandatory certified CPR drills, and active academic conference encouragement.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-100 pt-4 text-xs font-bold text-emerald-950">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-muted shrink-0" /> Exclusive Women&apos;s College</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-muted shrink-0" /> Attached 1200+ Bed Hospital</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-muted shrink-0" /> Mandatory CPR Training</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-muted shrink-0" /> Seminars & Conferences</div>
          </div>
        </div>
      </div>
    </div>
  );
}
