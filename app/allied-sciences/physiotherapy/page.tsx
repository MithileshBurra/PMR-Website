import Link from "next/link";
import { 
  HeartPulse, 
  CheckCircle2, 
  ArrowLeft, 
  Award, 
  BookOpen, 
  Clock, 
  GraduationCap, 
  Building2, 
  Briefcase, 
  Activity, 
  Sparkles 
} from "lucide-react";

export default function PhysiotherapyPage() {
  return (
    <div className="py-16 bg-transparent min-h-screen text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Breadcrumb & Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/">Home</Link> / <Link href="/allied-sciences">Allied Sciences</Link> / <span className="text-emerald-brand">College of Physiotherapy</span>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
              KNRUHS & TSPB Affiliated
            </span>
            <span className="px-3 py-1 rounded-full bg-gold-brand/20 text-emerald-950 border border-gold-brand/40 text-xs font-bold uppercase tracking-wider">
              Established 2023
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-emerald-brand tracking-tight">
            Bachelor of <span className="gold-gradient-text italic font-normal">Physiotherapy (BPT)</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl leading-relaxed">
            Dr. Patnam Mahender Reddy Institute of Medical Sciences (PMRIMS) proudly introduced the Bachelor of Physiotherapy (BPT) program in 2023, expanding quality allied health education and cultivating skilled healthcare professionals equipped for modern rehabilitative medicine.
          </p>
        </div>

        {/* Quick Facts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Course Duration</div>
            <div className="text-xl font-serif font-bold text-emerald-brand mt-1">4.5 Years</div>
            <p className="text-xs text-slate-500 font-technical mt-1">4 Years Academic Study + 6 Months Compulsory Rotatory Internship</p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-gold-brand/20 text-emerald-950 flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-emerald-950" />
            </div>
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Annual Intake</div>
            <div className="text-xl font-serif font-bold text-emerald-brand mt-1">50 Seats</div>
            <p className="text-xs text-slate-500 font-technical mt-1">Government & Management Quota via KNRUHS Counseling</p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Eligibility</div>
            <div className="text-xl font-serif font-bold text-emerald-brand mt-1">10+2 (BiPC)</div>
            <p className="text-xs text-slate-500 font-technical mt-1">Min. 45% in Class 12 Biology, Physics, Chemistry (40% for reserved)</p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Clinical Hospital</div>
            <div className="text-xl font-serif font-bold text-emerald-brand mt-1">1,200+ Beds</div>
            <p className="text-xs text-slate-500 font-technical mt-1">Direct bedside training at Dr. Patnam Mahender Reddy General Hospital</p>
          </div>
        </div>

        {/* Program Overview & Infrastructure */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mb-10">
          <div className="border-b border-slate-100 pb-6 mb-8">
            <span className="px-3 py-1 rounded-md bg-gold-brand/20 text-emerald-950 font-bold text-xs uppercase">
              Undergraduate Degree Program
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-brand mt-2">
              About the BPT Program & Clinical Exposure
            </h2>
            <p className="text-sm text-slate-600 font-technical leading-relaxed mt-3 max-w-4xl">
              The Bachelor of Physiotherapy (BPT) equips students with in-depth knowledge and clinical skills to evaluate, diagnose, and rehabilitate physical disabilities, movement dysfunctions, and chronic pain. Delivered by experienced medical faculty, the curriculum combines rigorous theoretical foundations with extensive bedside exposure from the very beginning at the attached 1,200+ bedded PMR General Hospital.
            </p>
          </div>

          {/* Curriculum Highlights */}
          <div className="mb-10">
            <h3 className="text-xl font-serif font-bold text-emerald-brand mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-gold-muted" /> Curriculum Structure
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-100">
                <h4 className="font-bold text-sm text-emerald-950 mb-3">Foundational Medical Sciences</h4>
                <ul className="space-y-2 text-xs font-technical text-slate-600">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" /> Human Anatomy, Histology & Physiology</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" /> Biomechanics, Kinesiology & Exercise Physiology</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" /> Pathology, Microbiology & Pharmacology</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" /> Electrotherapy & Therapeutic Gymnasium Workstations</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-100">
                <h4 className="font-bold text-sm text-emerald-950 mb-3">Advanced Clinical Specialties</h4>
                <ul className="space-y-2 text-xs font-technical text-slate-600">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" /> Orthopaedics & Musculoskeletal Rehabilitation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" /> Neuro-Physiotherapy & Stroke Recovery</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" /> Cardio-Respiratory & ICU Bedside Pulmonary Care</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" /> Sports Medicine, Paediatrics & Community Rehabilitation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Clinical Training Facilities */}
          <div className="mb-10">
            <h3 className="text-xl font-serif font-bold text-emerald-brand mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-gold-muted" /> Clinical Training Infrastructure
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-semibold text-emerald-950">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-gold-muted shrink-0" />
                <span>Electrotherapy & Biomechanics Labs</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-gold-muted shrink-0" />
                <span>Kinesiology & Exercise Physiology</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-gold-muted shrink-0" />
                <span>Orthopedic & Neuro Rehabilitation OPD</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-gold-muted shrink-0" />
                <span>Sports Injury Management Center</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-gold-muted shrink-0" />
                <span>ICU Bedside Pulmonary Care</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-gold-muted shrink-0" />
                <span>Advanced Manual Therapy & Gait Training</span>
              </div>
            </div>
          </div>

          {/* Career Opportunities */}
          <div>
            <h3 className="text-xl font-serif font-bold text-emerald-brand mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-gold-muted" /> Career Opportunities
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-technical leading-relaxed mb-4 max-w-4xl">
              Graduates of the BPT program command diverse clinical, academic, and athletic opportunities across healthcare ecosystems:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-technical">
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <div className="font-bold text-emerald-950 mb-1">Multi-Specialty Hospitals</div>
                <div className="text-slate-500">Inpatient/outpatient physiotherapy, post-operative surgical rehabilitation, and trauma care.</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <div className="font-bold text-emerald-950 mb-1">Sports & Athletic Clinics</div>
                <div className="text-slate-500">Sports injury recovery, biomechanical optimization, and athletic fitness conditioning.</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <div className="font-bold text-emerald-950 mb-1">Specialized Rehabilitation</div>
                <div className="text-slate-500">Orthopaedic, stroke, neurological, paediatric, and geriatric recovery centers.</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <div className="font-bold text-emerald-950 mb-1">Private Consulting & Research</div>
                <div className="text-slate-500">Independent rehabilitation consulting, fitness setups, and higher academic research.</div>
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
