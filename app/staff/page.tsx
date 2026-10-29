import Link from "next/link";
import { 
  Users, 
  ShieldCheck, 
  Building2, 
  GraduationCap, 
  CheckCircle2, 
  ArrowLeft,
  FileText,
  Briefcase,
  Stethoscope
} from "lucide-react";

export default function StaffPage() {
  return (
    <div className="w-full bg-transparent min-h-screen text-slate-800 font-technical">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-blue-400">Institutional Staff</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
            <ShieldCheck className="w-4 h-4 text-gold-brand" />
            NMC Regulatory Compliance & Standards
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4">
            Faculty & <span className="text-blue-400 italic font-normal">Institutional Staff</span>
          </h1>

          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed font-technical">
            Academic, clinical, and administrative staffing standards at Dr. Patnam Mahender Reddy Institute of Medical Sciences.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-8">
        {/* Official Staffing Statement Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-institutional space-y-8">
          
          <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
            <div className="p-3.5 rounded-2xl bg-blue-50 text-blue-600 shrink-0">
              <Users className="w-7 h-7 text-blue-600" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                Official Institutional Declaration
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-0.5">
                Faculty & Personnel Provision
              </h2>
            </div>
          </div>

          {/* User-Specified Official Text */}
          <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed font-technical">
            <p className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 font-medium text-slate-800 leading-relaxed">
              Dr. Patnam Mahender Reddy Institute of Medical Sciences (PMR Medical College) maintains adequate teaching faculty, medical staff, and supporting personnel for its Undergraduate (UG) and Postgraduate (PG) medical programmes in accordance with the applicable norms and regulations prescribed by the National Medical Commission (NMC).
            </p>

            <p className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 font-medium text-slate-800 leading-relaxed">
              The institution is committed to ensuring the availability of qualified faculty, clinical staff, and essential support personnel to facilitate quality medical education, effective clinical training, patient care, and academic excellence. Staffing requirements are addressed in accordance with the applicable NMC regulations and prescribed standards for the respective courses and departments.
            </p>
          </div>

          {/* Key Compliance Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-100">
            <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">NMC Prescribed Standards</h4>
                <p className="text-xs text-slate-600 mt-1 font-technical">
                  Strict adherence to teacher-student ratios and department staffing regulations.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">UG & PG Medical Programmes</h4>
                <p className="text-xs text-slate-600 mt-1 font-technical">
                  Comprehensive personnel deployment for MBBS and postgraduate clinical specializations.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 flex items-start gap-3">
              <Stethoscope className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Clinical Training & Patient Care</h4>
                <p className="text-xs text-slate-600 mt-1 font-technical">
                  Round-the-clock medical officers, specialists, and nursing care in our 1200+ bed teaching hospital.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100 flex items-start gap-3">
              <Building2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Continuous Support Personnel</h4>
                <p className="text-xs text-slate-600 mt-1 font-technical">
                  Adequate technical, laboratory, nursing, and administrative personnel across all wings.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Navigation */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Link
            href="/nmc"
            className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
          >
            <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 w-max mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
              NMC Information & Approvals
            </h3>
            <p className="text-xs text-slate-500 font-technical">
              Statutory permissions, approvals, and compliance records.
            </p>
          </Link>

          <Link
            href="/clinical-departments"
            className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
          >
            <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 w-max mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Stethoscope className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-emerald-600 transition-colors">
              Clinical Departments
            </h3>
            <p className="text-xs text-slate-500 font-technical">
              Medical and surgical specialty departments at PMRIMS.
            </p>
          </Link>

          <Link
            href="/careers"
            className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
          >
            <div className="p-3 rounded-2xl bg-purple-50 text-purple-600 w-max mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-purple-600 transition-colors">
              Faculty Recruitment
            </h3>
            <p className="text-xs text-slate-500 font-technical">
              Open medical faculty vacancies and application portal.
            </p>
          </Link>
        </div>

        {/* Back Link */}
        <div className="pt-10 mt-10 border-t border-slate-200/70">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
