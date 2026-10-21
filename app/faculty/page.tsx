import Link from "next/link";
import { Users, BookOpen, Stethoscope, Award, ShieldCheck, Mail } from "lucide-react";

export default function FacultyPage() {
  const departments = [
    {
      name: "Department of Anatomy",
      type: "Pre-Clinical",
      head: "Dr. K. Srinivas Rao, MD",
      designation: "Professor & Head of Department",
      experience: "22 Years Clinical & Academic Experience",
    },
    {
      name: "Department of Physiology",
      type: "Pre-Clinical",
      head: "Dr. M. Radhika, MD",
      designation: "Professor & HOD",
      experience: "18 Years Experience",
    },
    {
      name: "Department of Pharmacology",
      type: "Para-Clinical",
      head: "Dr. P. V. Raman, MD",
      designation: "Professor & HOD",
      experience: "20 Years Experience",
    },
    {
      name: "Department of Pathology",
      type: "Para-Clinical",
      head: "Dr. Sunitha Reddy, MD",
      designation: "Professor & HOD",
      experience: "19 Years Experience",
    },
    {
      name: "Department of General Medicine",
      type: "Clinical",
      head: "Dr. Patnam Mahender Reddy, MD",
      designation: "Chief Clinical Director & Senior Professor",
      experience: "30+ Years Experience",
    },
    {
      name: "Department of General Surgery",
      type: "Clinical",
      head: "Dr. V. Rajeshwar, MS",
      designation: "Professor & HOD",
      experience: "25 Years Surgical Experience",
    },
  ];

  return (
    <div className="py-16 bg-transparent min-h-screen text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-emerald-brand">Home</Link>
            <span>/</span>
            <span className="text-emerald-brand">Faculty Directory</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-emerald-brand tracking-tight">
            Academic & Clinical <span className="gold-gradient-text italic font-normal">Faculty Directory</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl">
            Distinguished medical educators, clinical researchers, and department heads guiding undergraduate and postgraduate students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {departments.map((dept, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-institutional transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-900 text-xs font-extrabold uppercase">
                    {dept.type}
                  </span>
                  <Award className="w-5 h-5 text-gold-muted" />
                </div>
                <h3 className="text-xl font-serif font-bold text-emerald-brand mb-1">{dept.name}</h3>
                <div className="text-sm font-bold text-emerald-950 mt-3">{dept.head}</div>
                <div className="text-xs text-gold-muted font-semibold">{dept.designation}</div>
                <p className="text-xs text-slate-500 font-technical mt-2">{dept.experience}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>NMC Roll Verified</span>
                <span className="text-emerald-800 font-bold">PMRIMS Faculty</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
