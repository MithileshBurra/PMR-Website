import Link from "next/link";
import { 
  FlaskConical, 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle2, 
  Activity, 
  Microscope, 
  Dna, 
  Bug,
  Sparkles,
  PhoneCall
} from "lucide-react";

export default function LabsPage() {
  // Configured image lists - populated with uploaded lab photos
  const BIOCHEMISTRY_IMAGES = [
    { src: "/images/hospital/labs/biochemistry/vlcsnap-2026-02-17-12h57m11s117.jpg", alt: "Biochemistry Automated Chemistry Analyzer", caption: "High-Throughput Clinical Chemistry Analyzer" },
    { src: "/images/hospital/labs/biochemistry/vlcsnap-2026-02-17-12h57m16s709.jpg", alt: "Biochemistry Diagnostic Workstation", caption: "Automated Immunoassay & Chemistry System" },
    { src: "/images/hospital/labs/biochemistry/vlcsnap-2026-02-17-12h57m22s777.jpg", alt: "Biochemistry Clinical Laboratory", caption: "Continuous Sample Processing & Quality Control" },
    { src: "/images/hospital/labs/biochemistry/vlcsnap-2026-02-17-12h57m12s057.jpg", alt: "Biochemistry Reagents & Sample Management", caption: "Precision Reagent Handling & Diagnostics" },
    { src: "/images/hospital/labs/biochemistry/vlcsnap-2026-02-17-12h57m15s416.jpg", alt: "Biochemistry Testing Equipment", caption: "Automated Electrolyte & Enzyme Analysis" },
    { src: "/images/hospital/labs/biochemistry/vlcsnap-2026-02-17-12h57m27s492.jpg", alt: "Biochemistry Laboratory Facility", caption: "Diagnostic Infrastructure at PMR Hospital" },
    { src: "/images/hospital/labs/biochemistry/vlcsnap-2026-02-17-12h57m13s579.jpg", alt: "Biochemistry Sample Testing Unit", caption: "High-Precision Blood Chemistry Station" }
  ];

  const MICROBIOLOGY_IMAGES = [
    { src: "/images/hospital/labs/microbiology/vlcsnap-2026-02-17-12h58m09s260.jpg", alt: "Microbiology Culture & Microscopy Workstation", caption: "Bacterial Culture & Sensitivity Testing Area" },
    { src: "/images/hospital/labs/microbiology/vlcsnap-2026-02-17-12h58m11s224.jpg", alt: "Microbiology Diagnostic Facilities", caption: "Infectious Disease Identification & Surveillance" }
  ];

  const PATHOLOGY_IMAGES = [
    { src: "/images/hospital/labs/pathology/vlcsnap-2026-02-17-12h58m23s939.jpg", alt: "Pathology Histopathology & Hematology Lab", caption: "Automated Hematology & Cell Counter Systems" },
    { src: "/images/hospital/labs/pathology/vlcsnap-2026-02-17-12h58m25s290.jpg", alt: "Pathology Microtome & Biopsy Station", caption: "Histopathology Biopsy & Tissue Processing" },
    { src: "/images/hospital/labs/pathology/vlcsnap-2026-02-17-12h58m29s633.jpg", alt: "Pathology Microscopy & Diagnostics", caption: "Cytopathology & Peripheral Smear Examination" }
  ];

  const BIOCHEMISTRY_SERVICES = [
    "Routine and advanced blood chemistry analysis",
    "Liver function tests (LFT), kidney function tests (KFT), and lipid profiles",
    "Blood glucose monitoring and HbA1c testing",
    "Thyroid function tests and hormonal assays",
    "Electrolyte and enzyme analysis",
    "Cardiac marker testing including Troponin and CK-MB"
  ];

  const MICROBIOLOGY_SERVICES = [
    "Bacterial culture and sensitivity testing (AST)",
    "Fungal and parasitic investigations",
    "Serological tests for infectious diseases",
    "Blood culture and wound swab analysis",
    "Urine, sputum, and stool culture examinations",
    "Infection surveillance and antimicrobial resistance monitoring"
  ];

  const PATHOLOGY_SERVICES = [
    "Complete blood count (CBC) and peripheral smear examination",
    "Histopathology and biopsy analysis",
    "Cytopathology including FNAC and Pap smear",
    "Coagulation studies and bleeding disorder investigations",
    "Urine routine and microscopy examination",
    "Body fluid analysis including CSF, pleural, and ascitic fluid",
    "Frozen section examination for intraoperative diagnosis"
  ];

  const RTPCR_SERVICES = [
    "RT-PCR testing for respiratory infections including COVID-19 and Influenza",
    "Molecular detection of viral pathogens including Hepatitis B, Hepatitis C, and HIV",
    "Tuberculosis (TB) molecular diagnosis using advanced PCR-based methods",
    "Detection of vector-borne diseases including Dengue and Chikungunya",
    "Oncology-related molecular diagnostic testing"
  ];

  return (
    <div className="py-16 bg-transparent min-h-screen text-slate-800 font-technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Breadcrumb & Main Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link> / <Link href="/hospital" className="hover:text-blue-600 transition-colors">Hospital</Link> / <span className="text-blue-600">Central Diagnostic Labs</span>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider">
              24/7 NABL-Grade Standards
            </span>
            <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
              Internal (IQC) & External (EQAS) Quality Assured
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Central Diagnostic <span className="text-blue-600 italic font-normal">Laboratories</span>
          </h1>
          <p className="text-slate-600 font-technical mt-3 text-sm sm:text-base max-w-4xl leading-relaxed">
            The diagnostic laboratories at Dr. Patnam Mahender Reddy Institute of Medical Sciences (PMRIMS) are equipped with modern technology and managed by qualified specialists and trained laboratory staff. These facilities support both clinical patient care and academic training, providing accurate, timely, and reliable diagnostic services to patients across all departments of the PMRIMS Hospital.
          </p>
        </div>

        <div className="space-y-12 mb-12">
          
          {/* 1. Biochemistry Laboratory */}
          <section id="biochemistry" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-sm">
                    <FlaskConical className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-900 text-[11px] font-bold uppercase tracking-wider">
                      High-Throughput Clinical Chemistry
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">Biochemistry Laboratory</h2>
                  </div>
                </div>

                <p className="text-sm text-slate-600 font-technical leading-relaxed">
                  The PMRIMS Biochemistry Laboratory is a fully equipped, high-throughput diagnostic facility that plays a critical role in the detection, monitoring, and management of a wide range of medical conditions. Staffed by qualified biochemists and trained technicians, the lab provides accurate and timely analysis of blood, urine, and other biological samples to support clinical decision-making across all hospital departments.
                </p>

                <div className="pt-2">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Services Include:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                    {BIOCHEMISTRY_SERVICES.map((service, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50/80 border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Biochemistry Photo Gallery */}
            {BIOCHEMISTRY_IMAGES.length > 0 && (
              <div className="mt-8 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Biochemistry Laboratory Facility & Equipment</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {BIOCHEMISTRY_IMAGES.map((img, idx) => (
                    <div key={idx} className="group rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 hover:shadow-xl transition-all duration-300">
                      <div className="overflow-hidden aspect-[16/10]">
                        <img 
                          src={img.src} 
                          alt={img.alt} 
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                        />
                      </div>
                      {img.caption && (
                        <div className="p-4 sm:p-5 text-sm sm:text-base text-slate-800 bg-white font-semibold border-t border-slate-100 flex items-center gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                          <span>{img.caption}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* 2. Microbiology Laboratory */}
          <section id="microbiology" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shadow-sm">
                  <Bug className="w-6 h-6" />
                </div>
                <div>
                  <span className="px-3 py-0.5 rounded-full bg-purple-50 text-purple-900 text-[11px] font-bold uppercase tracking-wider">
                    Infectious Disease Diagnostics
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">Microbiology Laboratory</h2>
                </div>
              </div>

              <p className="text-sm text-slate-600 font-technical leading-relaxed max-w-4xl">
                The PMRIMS Microbiology Laboratory is a state-of-the-art facility dedicated to the identification, analysis, and study of microorganisms responsible for infectious diseases. Equipped with advanced culture systems, microscopy equipment, and sensitivity testing tools, the lab supports clinical diagnosis, infection control, and antimicrobial stewardship across the hospital.
              </p>

              <div className="pt-2">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Services Include:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs text-slate-700">
                  {MICROBIOLOGY_SERVICES.map((service, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50/80 border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Microbiology Photo Gallery */}
            {MICROBIOLOGY_IMAGES.length > 0 && (
              <div className="mt-8 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Microbiology Laboratory Facilities</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {MICROBIOLOGY_IMAGES.map((img, idx) => (
                    <div key={idx} className="group rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 hover:shadow-xl transition-all duration-300">
                      <div className="overflow-hidden aspect-[16/10]">
                        <img 
                          src={img.src} 
                          alt={img.alt} 
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                        />
                      </div>
                      {img.caption && (
                        <div className="p-4 sm:p-5 text-sm sm:text-base text-slate-800 bg-white font-semibold border-t border-slate-100 flex items-center gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
                          <span>{img.caption}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* 3. Pathology Laboratory */}
          <section id="pathology" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm">
                  <Microscope className="w-6 h-6" />
                </div>
                <div>
                  <span className="px-3 py-0.5 rounded-full bg-blue-50 text-blue-900 text-[11px] font-bold uppercase tracking-wider">
                    Histopathology & Hematology
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">Pathology Laboratory</h2>
                </div>
              </div>

              <p className="text-sm text-slate-600 font-technical leading-relaxed max-w-4xl">
                The PMRIMS Pathology Laboratory is a comprehensive diagnostic facility equipped to handle a wide range of histopathological, cytopathological, and haematological investigations. Staffed by experienced pathologists and skilled technicians, the laboratory provides precise and timely diagnostic reports that form the foundation of accurate clinical diagnosis and effective patient management across all departments of the hospital.
              </p>

              <div className="pt-2">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Services Include:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs text-slate-700">
                  {PATHOLOGY_SERVICES.map((service, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50/80 border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pathology Photo Gallery */}
            {PATHOLOGY_IMAGES.length > 0 && (
              <div className="mt-8 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Pathology Diagnostic Facilities</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {PATHOLOGY_IMAGES.map((img, idx) => (
                    <div key={idx} className="group rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 hover:shadow-xl transition-all duration-300">
                      <div className="overflow-hidden aspect-[16/10]">
                        <img 
                          src={img.src} 
                          alt={img.alt} 
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                        />
                      </div>
                      {img.caption && (
                        <div className="p-4 sm:p-5 text-sm sm:text-base text-slate-800 bg-white font-semibold border-t border-slate-100 flex items-center gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                          <span>{img.caption}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* 4. RT-PCR Laboratory (Positioned at bottom, no image requirement) */}
          <section id="rt-pcr" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shadow-sm">
                  <Dna className="w-6 h-6" />
                </div>
                <div>
                  <span className="px-3 py-0.5 rounded-full bg-amber-50 text-amber-900 text-[11px] font-bold uppercase tracking-wider">
                    Molecular Diagnostic Facility
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">RT-PCR Laboratory</h2>
                </div>
              </div>

              <p className="text-sm text-slate-600 font-technical leading-relaxed max-w-4xl">
                The PMRIMS RT-PCR Laboratory is a dedicated molecular diagnostic facility equipped with advanced Real-Time Polymerase Chain Reaction (RT-PCR) technology. This laboratory enables rapid, highly sensitive, and accurate detection of viral and bacterial pathogens at the molecular level — providing clinicians with precise diagnostic information to guide timely and effective treatment decisions.
              </p>

              <div className="pt-2">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Services Include:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs text-slate-700">
                  {RTPCR_SERVICES.map((service, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-slate-50/80 border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 24/7 Quality & Helpdesk Card */}
          <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" /> 24/7 STAT Diagnostic Reporting
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">Need Diagnostic Enquiries or Sample Collection Details?</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-technical leading-relaxed">
                Our central sample collection counters operate around the clock for outpatients and inpatient wards, ensuring timely turnaround times for urgent emergency samples.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
              <a 
                href="tel:08417299918" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md w-full sm:w-auto"
              >
                <PhoneCall className="w-4 h-4" /> 08417-299918
              </a>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all border border-white/20 w-full sm:w-auto"
              >
                Contact Helpdesk
              </Link>
            </div>
          </section>

        </div>

        <Link href="/hospital" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800">
          <ArrowLeft className="w-4 h-4" /> Back to Hospital Facilities
        </Link>
      </div>
    </div>
  );
}
