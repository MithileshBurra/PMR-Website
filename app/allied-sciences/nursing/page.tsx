import Link from "next/link";
import { 
  Stethoscope, 
  CheckCircle2, 
  ArrowLeft, 
  Award, 
  ShieldCheck, 
  Building2, 
  HeartPulse, 
  BookOpen, 
  GraduationCap 
} from "lucide-react";

export default function NursingPage() {
  return (
    <div className="py-16 bg-transparent min-h-screen text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/">Home</Link> / <Link href="/allied-sciences">Allied Sciences</Link> / <span className="text-emerald-brand">College of Nursing</span>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
              INC & TS Nursing Council Approved
            </span>
            <span className="px-3 py-1 rounded-full bg-gold-brand/20 text-emerald-950 border border-gold-brand/40 text-xs font-bold uppercase tracking-wider">
              Exclusive Women&apos;s College
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-emerald-brand tracking-tight">
            PMR College of <span className="gold-gradient-text italic font-normal">Nursing</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl leading-relaxed">
            Recognised by the Indian Nursing Council (INC), New Delhi & Telangana Nursing Council. Affiliated with Kaloji Narayana Rao University of Health Sciences (KNRUHS). An exclusive premier women&apos;s institution empowering female healthcare professionals with rigorous clinical training, life-support competencies, and academic scholarship.
          </p>
        </div>

        {/* 4 Core Institutional Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Pillar 1: Attached Hospital */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4 shadow-sm">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold text-emerald-brand mb-2">Attached 1200+ Bed Hospital</h3>
            <p className="text-xs text-slate-600 font-technical leading-relaxed">
              Direct, daily bedside clinical exposure at PMRIMS 1200+ Bed Multi-Specialty Teaching Hospital. Students train seamlessly in intensive care units (ICUs), OT suites, casualty, and specialized wards right on campus.
            </p>
          </div>

          {/* Pillar 2: Mandatory CPR Training */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center mb-4 shadow-sm">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold text-emerald-brand mb-2">Mandatory CPR Training</h3>
            <p className="text-xs text-slate-600 font-technical leading-relaxed">
              Compulsory Cardiopulmonary Resuscitation (CPR) & Basic Life Support (BLS) certification. Rigorous simulation drill training equips all nursing cadets with rapid emergency response reflexes and lifesaving capabilities.
            </p>
          </div>

          {/* Pillar 3: Encouragement of Seminars and Conferences */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-gold-brand/20 text-emerald-950 flex items-center justify-center mb-4 shadow-sm">
              <BookOpen className="w-6 h-6 text-emerald-950" />
            </div>
            <h3 className="text-lg font-serif font-bold text-emerald-brand mb-2">Seminars & Conferences</h3>
            <p className="text-xs text-slate-600 font-technical leading-relaxed">
              Active institutional sponsorship and faculty mentoring for state, national, and international health conferences, research paper presentations, CNE workshops, and medical symposiums.
            </p>
          </div>

          {/* Pillar 4: Only Women College */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4 shadow-sm">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold text-emerald-brand mb-2">Exclusive Women&apos;s College</h3>
            <p className="text-xs text-slate-600 font-technical leading-relaxed">
              A secure, empowering, and disciplined environment exclusively for women students. Features 24/7 guarded residential hostels, dedicated faculty mentoring, and comprehensive safety infrastructure.
            </p>
          </div>
        </div>

        {/* Academic Degree Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mb-10">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
            <div>
              <span className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-900 font-bold text-xs uppercase">
                INC Approved Institute
              </span>
              <h2 className="text-2xl font-serif font-bold text-emerald-brand mt-2">B.Sc Nursing Degree Program</h2>
            </div>
            <div className="text-right">
              <div className="text-2xl font-serif font-bold text-emerald-brand">100 Seats</div>
              <div className="text-xs text-slate-400">Annual B.Sc Intake</div>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-transparent border border-slate-200 mb-8">
            <h3 className="text-xl font-serif font-bold text-emerald-brand mb-2">B.Sc Nursing (4-Year Professional Degree)</h3>
            <p className="text-sm text-slate-600 font-technical leading-relaxed mb-6 max-w-4xl">
              Comprehensive 4-year professional nursing education recognized by Indian Nursing Council (INC) and Telangana Nursing Council. Prepares female graduates with rigorous clinical training covering medical-surgical nursing, maternal & child health, community health, intensive care, and operating theater skills.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-semibold text-emerald-950">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-gold-muted shrink-0" />
                <span>High-Fidelity Patient Simulation Lab</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-gold-muted shrink-0" />
                <span>Clinical Postings in Attached 1200+ Bed Hospital</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-gold-muted shrink-0" />
                <span>100% Placement Guidance in Premier Hospitals</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-gold-muted shrink-0" />
                <span>Specialized ICU, Emergency & OT Rotations</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-gold-muted shrink-0" />
                <span>Maternal, Child & Neonatal Care Units</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-gold-muted shrink-0" />
                <span>Mandatory CPR & Life Support Drills</span>
              </div>
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
