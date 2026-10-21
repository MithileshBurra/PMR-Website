"use client";

import { useState } from "react";
import { 
  Microscope, 
  BookOpen, 
  FlaskConical, 
  Dna, 
  ShieldAlert, 
  Bug, 
  Pill, 
  Activity, 
  CheckCircle2, 
  GraduationCap,
  Users,
  LucideIcon
} from "lucide-react";

interface DepartmentInfo {
  id: string;
  name: string;
  category: "Pre-Clinical" | "Para-Clinical";
  hod: string;
  description: string;
  labs: string[];
  seats: string;
  icon: LucideIcon;
}

const PRE_AND_PARA_DEPARTMENTS: DepartmentInfo[] = [
  {
    id: "anatomy",
    name: "Anatomy",
    category: "Pre-Clinical",
    hod: "Dr. M. Swarupa Rani, MS (Anatomy)",
    description: "Equipped with a modern cadaveric dissection hall, histology laboratory with binocular microscopes, embryology & osteology museum, and neuroanatomy demonstration rooms.",
    labs: ["Gross Anatomy Dissection Hall", "Histology Research Lab", "Embryology & Genetic Museum", "Demonstration Rooms"],
    seats: "8 PG Seats (MS Anatomy) + 250 MBBS",
    icon: BookOpen
  },
  {
    id: "biochemistry",
    name: "Biochemistry",
    category: "Pre-Clinical",
    hod: "Dr. S. Anuradha, MD (Biochemistry)",
    description: "Integrates fundamental medical biochemistry teaching with the 24/7 NABL-standard Central Clinical Biochemistry Laboratory, semi-automated analyzers, and molecular biology research.",
    labs: ["UG Student Practical Lab", "Central Clinical Biochemistry Lab", "Electrophoresis & Chromatography Room", "Research Lab"],
    seats: "2 PG Seats (MD Biochemistry) + 250 MBBS",
    icon: FlaskConical
  },
  {
    id: "community-medicine",
    name: "Community Medicine",
    category: "Para-Clinical",
    hod: "Dr. N. Sujatha, MD (SPM / Community Med)",
    description: "Oversees the Rural Health Training Centre (RHTC) and Urban Health Training Centre (UHTC), preventive medicine, epidemiology research, national health programs, and biostatistics.",
    labs: ["Rural Health Centre (RHTC)", "Urban Health Centre (UHTC)", "Public Health & Epidemiology Lab", "Community Health Museum"],
    seats: "6 PG Seats (MD Community Med) + 250 MBBS",
    icon: Users
  },
  {
    id: "forensic-medicine",
    name: "Forensic Medicine",
    category: "Para-Clinical",
    hod: "Dr. T. Ravinder, MD (Forensic Med)",
    description: "Trains medical students in medicolegal autopsy procedures, clinical forensic examinations, toxicology testing, court testimony protocols, and medical jurisprudence.",
    labs: ["Medicolegal Autopsy Complex", "Toxicology & Analytical Lab", "Forensic Anthropology Museum", "Court Simulation Room"],
    seats: "3 PG Seats (MD Forensic Med) + 250 MBBS",
    icon: ShieldAlert
  },
  {
    id: "microbiology",
    name: "Microbiology",
    category: "Para-Clinical",
    hod: "Dr. K. V. L. N. Prasad, MD (Microbiology)",
    description: "Diagnostic and research facilities for Bacteriology, Virology, Mycology, Parasitology, Serology, and Biosafety-Level (BSL) Molecular Testing (RT-PCR).",
    labs: ["Bacteriology & Culture Lab", "Virology & RT-PCR Unit", "Mycology & Parasitology Station", "Hospital Infection Control (HICC)"],
    seats: "4 PG Seats (MD Microbiology) + 250 MBBS",
    icon: Bug
  },
  {
    id: "pathology",
    name: "Pathology",
    category: "Para-Clinical",
    hod: "Dr. B. Venkat Reddy, MD (Pathology)",
    description: "Comprehensive diagnostic services including histopathology, cytopathology (FNAC), hematology, blood banking, and automated immunohistochemistry (IHC) testing.",
    labs: ["Histopathology Lab", "Cytology & FNAC Suite", "Hematology Analyzer Lab", "Autopsy Block & Museum"],
    seats: "4 PG Seats (MD Pathology) + 250 MBBS",
    icon: Dna
  },
  {
    id: "pharmacology",
    name: "Pharmacology",
    category: "Para-Clinical",
    hod: "Dr. C. Madhavi, MD (Pharmacology)",
    description: "Focuses on rational drug therapy, experimental pharmacology, clinical trials methodology, computer-assisted learning (CAL) labs, and active Pharmacovigilance Monitoring.",
    labs: ["Experimental Pharmacology Lab", "Clinical Pharmacology & CAL Unit", "Pharmacy & Dispensing Lab", "Pharmacovigilance Center"],
    seats: "5 PG Seats (MD Pharmacology) + 250 MBBS",
    icon: Pill
  },
  {
    id: "physiology",
    name: "Physiology",
    category: "Pre-Clinical",
    hod: "Dr. G. Ramesh Kumar, MD (Physiology)",
    description: "Features human physiology lab, amphibian & mammalian research labs, hematology testing stations, and clinical electrophysiology diagnostic facilities.",
    labs: ["Hematology Laboratory", "Clinical Physiology Lab", "Mammalian Research Lab", "Autonomic Function Lab"],
    seats: "5 PG Seats (MD Physiology) + 250 MBBS",
    icon: Activity
  }
];

export default function PreAndParaDepartmentsPage() {
  const [activeCategory, setActiveCategory] = useState<"All" | "Pre-Clinical" | "Para-Clinical">("All");

  const filteredDepts = PRE_AND_PARA_DEPARTMENTS.filter(
    (dept) => activeCategory === "All" || dept.category === activeCategory
  );

  return (
    <div className="w-full bg-transparent min-h-screen text-slate-800 font-technical">
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
            <Microscope className="w-4 h-4 text-gold-brand" />
            Academic Foundations & Diagnostic Research
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4">
            Pre & Para Clinical <span className="text-blue-400 italic font-normal">Departments</span>
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Discover the 8 foundational pre & para clinical departments taught at PMRIMS. Combining state-of-the-art practical laboratories, cadaveric dissection halls, NABL-grade diagnostic pathology, and public health research.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Category Filters */}
        <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-2">
          {["All", "Pre-Clinical", "Para-Clinical"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-6 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cat === "All" ? "All Pre & Para Departments (8)" : `${cat} Departments`}
            </button>
          ))}
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredDepts.map((dept) => {
            const IconComponent = dept.icon;
            return (
              <div
                key={dept.id}
                id={dept.id}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase">
                      {dept.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {dept.name}
                      </h3>
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                        {dept.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-technical">
                    {dept.description}
                  </p>

                  {/* Practical Labs & Infrastructure */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Teaching & Laboratory Facilities:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-semibold">
                      {dept.labs.map((lab, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-transparent border border-slate-200/70">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{lab}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
