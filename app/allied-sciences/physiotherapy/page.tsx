import Link from "next/link";
import { HeartPulse, CheckCircle2, ArrowLeft, Award, BookOpen } from "lucide-react";

export default function PhysiotherapyPage() {
  return (
    <div className="py-16 bg-surface-light min-h-screen text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/">Home</Link> / <Link href="/allied-sciences">Allied Sciences</Link> / <span className="text-emerald-brand">College of Physiotherapy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-emerald-brand tracking-tight">
            PMR College of <span className="gold-gradient-text italic font-normal">Physiotherapy</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl">
            Affiliated to Kaloji Narayana Rao University of Health Sciences (KNRUHS) & Telangana State Paramedical Board. Offering BPT (Bachelor of Physiotherapy) and MPT postgraduate specializations.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mb-10">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
            <div>
              <span className="px-3 py-1 rounded-md bg-gold-brand/20 text-emerald-950 font-bold text-xs uppercase">
                Undergraduate & Postgraduate Degrees
              </span>
              <h2 className="text-2xl font-serif font-bold text-emerald-brand mt-2">Degree Programs & Clinical Rotations</h2>
            </div>
            <div className="text-right">
              <div className="text-2xl font-serif font-bold text-emerald-brand">50 Intake</div>
              <div className="text-xs text-slate-400">Annual BPT Quota</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="p-6 rounded-2xl bg-surface-light border border-slate-200">
              <h3 className="text-xl font-serif font-bold text-emerald-brand mb-2">Bachelor of Physiotherapy (BPT)</h3>
              <p className="text-xs text-slate-500 font-technical leading-relaxed mb-4">
                4.5 years degree program including 6 months compulsory rotatory clinical internship at PMRIMS 1200+ Bed Teaching Hospital.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-emerald-950">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-muted" /> Electrotherapy & Biomechanics Labs</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-muted" /> Kinesiology & Exercise Physiology</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-muted" /> Orthopedic & Neuro Rehabilitation OPD</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-surface-light border border-slate-200">
              <h3 className="text-xl font-serif font-bold text-emerald-brand mb-2">Master of Physiotherapy (MPT)</h3>
              <p className="text-xs text-slate-500 font-technical leading-relaxed mb-4">
                2-year postgraduate degree program with clinical specializations in Musculoskeletal, Neurology, and Sports Medicine.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-emerald-950">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-muted" /> Advanced Manual Therapy Techniques</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-muted" /> Clinical Research & Gait Analysis</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-muted" /> ICU Bedside Pulmonary Care</li>
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
