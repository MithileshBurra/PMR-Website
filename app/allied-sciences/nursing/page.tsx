import Link from "next/link";
import { Stethoscope, CheckCircle2, ArrowLeft, Award, ShieldCheck } from "lucide-react";

export default function NursingPage() {
  return (
    <div className="py-16 bg-surface-light min-h-screen text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/">Home</Link> / <Link href="/allied-sciences">Allied Sciences</Link> / <span className="text-emerald-brand">College of Nursing</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-emerald-brand tracking-tight">
            PMR College of <span className="gold-gradient-text italic font-normal">Nursing</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl">
            Recognised by Indian Nursing Council (INC), New Delhi & Telangana Nursing Council. Affiliated with Kaloji Narayana Rao University of Health Sciences (KNRUHS).
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mb-10">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
            <div>
              <span className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-900 font-bold text-xs uppercase">
                INC Approved Institute
              </span>
              <h2 className="text-2xl font-serif font-bold text-emerald-brand mt-2">B.Sc & M.Sc Nursing Degree Programs</h2>
            </div>
            <div className="text-right">
              <div className="text-2xl font-serif font-bold text-emerald-brand">100 Seats</div>
              <div className="text-xs text-slate-400">Annual B.Sc Intake</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="p-6 rounded-2xl bg-surface-light border border-slate-200">
              <h3 className="text-xl font-serif font-bold text-emerald-brand mb-2">B.Sc Nursing (4-Year Degree)</h3>
              <p className="text-xs text-slate-500 font-technical leading-relaxed mb-4">
                Comprehensive professional nursing education covering medical-surgical nursing, maternal & child health, community health, and operating theater skills.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-emerald-950">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-muted" /> High-Fidelity Patient Simulation Lab</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-muted" /> Clinical Postings in PMR 1200+ Bed Hospital</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-muted" /> 100% Placement Guidance in Premier Hospitals</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-surface-light border border-slate-200">
              <h3 className="text-xl font-serif font-bold text-emerald-brand mb-2">Post Basic & M.Sc Nursing</h3>
              <p className="text-xs text-slate-500 font-technical leading-relaxed mb-4">
                Postgraduate degree programs for clinical nurse specialists in Critical Care, Obstetrics, Pediatrics, and Mental Health Nursing.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-emerald-950">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-muted" /> Specialized ICU & OT Clinical Rotations</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-muted" /> Nursing Administration & Educational Methodology</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-muted" /> Research Dissertation & Nursing Audit</li>
              </ul>
            </div>
          </div>
        </div>

        <Link href="/allied-sciences" className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1.5">
          <ArrowLeft className="w-4 h-4" /> Back to Allied Sciences Overview
        </Link>
      </div>
    </div>
  );
}
