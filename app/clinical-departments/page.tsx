"use client";

import { 
  Stethoscope, 
  CheckCircle2, 
  GraduationCap,
  Bed,
  Brain,
  Eye,
  Activity,
  HeartPulse,
  Ear,
  Baby,
  Sun,
  ShieldCheck,
  LucideIcon
} from "lucide-react";

interface DepartmentInfo {
  id: string;
  name: string;
  category: string;
  hod: string;
  description: string;
  services: string[];
  bedCount: string;
  seats: string;
  icon: LucideIcon;
}

const CLINICAL_DEPARTMENTS: DepartmentInfo[] = [
  {
    id: "anesthesiology",
    name: "Anesthesiology",
    category: "Clinical Specialty",
    hod: "Dr. G. Vijaya Lakshmi, MD (Anaesthesiology)",
    description: "Provides pre-operative care, peri-operative anesthesia, post-anesthesia care (PACU), acute/chronic pain management, and 24/7 critical care management across all modular operation theatres.",
    services: ["General & Regional Anesthesia", "Post-Anesthesia Care Unit (PACU)", "Critical Care & Airway Management", "Pain Relief & Acute Pain Services"],
    bedCount: "Modular OT Complex & PACU",
    seats: "11 PG Seats (MD Anesthesiology)",
    icon: Stethoscope
  },
  {
    id: "dermatology",
    name: "Dermatology",
    category: "Clinical Specialty",
    hod: "Dr. D. Sandeep, MD (Dermatology)",
    description: "Diagnostic and therapeutic management of skin, hair, and nail disorders, dermatosurgery, phototherapy, STI clinics, vitiligo/psoriasis management, and specialized cosmetic procedure guidance.",
    services: ["Phototherapy Unit & Dermatosurgery", "Psoriasis & Vitiligo Clinics", "Sexually Transmitted Infections (STI) Care", "Cosmetic Dermatology & Biopsies"],
    bedCount: "30 Inpatient Beds",
    seats: "7 PG Seats (MD Dermatology)",
    icon: Sun
  },
  {
    id: "general-medicine",
    name: "General Medicine",
    category: "Clinical Specialty",
    hod: "Dr. V. Chandra Sekhar, MD (General Medicine)",
    description: "Comprehensive medical care running multi-bed general wards, Intensive Cardiac Care Unit (ICCU), Medical ICU (MICU), diabetes specialty care, hypertension, and daily outpatient clinics.",
    services: ["24/7 Medical ICU & Critical Care", "Diabetic & Endocrine Care", "Infectious Disease Isolation Wards", "Hypertension & Cardiology Clinics"],
    bedCount: "240 Inpatient Beds",
    seats: "13 PG Seats (MD General Medicine)",
    icon: HeartPulse
  },
  {
    id: "general-surgery",
    name: "General Surgery",
    category: "Clinical Specialty",
    hod: "Dr. K. Ashok Kumar, MS (General Surgery)",
    description: "Performs complex open and minimally invasive laparoscopic surgeries, gastrointestinal surgeries, trauma resuscitation, surgical oncology, thyroid, hernia, and breast surgical procedures.",
    services: ["Modular Laparoscopic Surgical Suites", "24/7 Emergency Polytrauma OT", "Gastrointestinal Surgery", "Endocrine & Surgical Oncology"],
    bedCount: "200 Inpatient Beds",
    seats: "6 PG Seats (MS General Surgery)",
    icon: Activity
  },
  {
    id: "obstetrics-and-gynecology",
    name: "Obstetrics and Gynecology",
    category: "Clinical Specialty",
    hod: "Dr. S. Lakshmi Prasanna, MD (OBG)",
    description: "Complete healthcare for women including antenatal care, high-risk pregnancy management, modern delivery suites, laparoscopic gynecological surgeries, infertility management, and cervical screening.",
    services: ["Modular Labor Theatres & Septic Suite", "High-Risk Pregnancy Care Unit", "Laparoscopic Gynecological Surgery", "Infertility & Antenatal Clinics"],
    bedCount: "120 Inpatient Beds",
    seats: "8 PG Seats (MS OBG)",
    icon: ShieldCheck
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology",
    category: "Clinical Specialty",
    hod: "Dr. A. Sunitha, MS (Ophthalmology)",
    description: "Advanced eye care including phacoemulsification cataract surgery, glaucoma detection & management, diabetic retinopathy screening, corneal disease treatment, and refraction services.",
    services: ["Phacoemulsification Cataract OT", "Diabetic Retinopathy Care", "Glaucoma Diagnostic Clinic", "Optometry & Refraction Services"],
    bedCount: "30 Inpatient Beds",
    seats: "7 PG Seats (MS Ophthalmology)",
    icon: Eye
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    category: "Clinical Specialty",
    hod: "Dr. R. Praveen Kumar, MS (Orthopedics)",
    description: "Specializes in 24/7 fracture & trauma management, total hip & knee joint replacements, arthroscopic sports injury treatments, spine surgeries, and pediatric orthopedic rehabilitation.",
    services: ["Joint Replacement & Arthroplasty", "Arthroscopy & Sports Injury Care", "24/7 Polytrauma & Fracture OT", "Spine Care & Rehabilitation"],
    bedCount: "120 Inpatient Beds",
    seats: "7 PG Seats (MS Orthopedics)",
    icon: Activity
  },
  {
    id: "neuro",
    name: "Neuro",
    category: "Super Specialty & Clinical Care",
    hod: "Dr. P. Srinivas, M.Ch (Neurosurgery) / DM (Neurology)",
    description: "Comprehensive neurology and neurosurgery department dedicated to stroke management, epilepsy clinics, spinal neurosurgery, head injury care, and neuro-critical care monitoring.",
    services: ["Stroke Resuscitation & ICU Care", "Epilepsy & Neuropathy OPD", "Head Injury & Spinal Trauma Care", "Neuro-Diagnostic Workup"],
    bedCount: "Dedicated Neuro Ward & ICU",
    seats: "Specialized Super Specialty Care",
    icon: Brain
  },
  {
    id: "laryngology",
    name: "Laryngology",
    category: "Clinical Specialty (ENT / Otorhinolaryngology)",
    hod: "Dr. B. Mahesh, MS (ENT / Laryngology)",
    description: "Focuses on voice disorders, airway pathology, swallowing difficulties, endoscopic sinus surgery, microscopic ear procedures, and comprehensive head and neck surgeries.",
    services: ["Voice Clinic & Stroboscopy", "Endoscopic Sinus Surgery (FESS)", "Microscopic Otology & Airway Care", "Audiometry & Speech Therapy"],
    bedCount: "30 Inpatient Beds",
    seats: "5 PG Seats (MS ENT)",
    icon: Ear
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    category: "Clinical Specialty",
    hod: "Dr. P. Sudhakar, MD (Pediatrics)",
    description: "State-of-the-art Neonatal Intensive Care Unit (NICU Level-3), Pediatric ICU (PICU), routine immunization, child development assessment, and emergency pediatric care.",
    services: ["Level-3 Neonatal Intensive Care (NICU)", "Pediatric Intensive Care Unit (PICU)", "Immunization & Well-Baby Clinic", "Pediatric Emergency Resuscitation"],
    bedCount: "90 Inpatient Beds",
    seats: "8 PG Seats (MD Pediatrics)",
    icon: Baby
  },
  {
    id: "psychiatry",
    name: "Psychiatry",
    category: "Clinical Specialty",
    hod: "Dr. B. Koteswara Rao, MD (Psychiatry)",
    description: "Offers adult psychiatry services, child and adolescent guidance, de-addiction therapy, clinical psychology counseling, biofeedback, and inpatient mental health support.",
    services: ["De-addiction & Rehabilitation", "Child & Adolescent Guidance", "Psychological Counseling & Testing", "Inpatient Mental Health Wards"],
    bedCount: "30 Inpatient Beds",
    seats: "4 PG Seats (MD Psychiatry)",
    icon: Brain
  },
  {
    id: "pulmonology",
    name: "Pulmonology",
    category: "Clinical Specialty",
    hod: "Dr. K. Srinivas, MD (Pulmonology)",
    description: "Dedicated to respiratory healthcare including asthma, COPD, tuberculosis care (RNTCP center), video bronchoscopy procedures, pulmonary function testing (PFT), and sleep apnea diagnosis.",
    services: ["Video Bronchoscopy Suite", "Pulmonary Function Testing (PFT)", "Sleep Apnea & Polysomnography Lab", "RNTCP Tuberculosis Care Center"],
    bedCount: "30 Inpatient Beds",
    seats: "3 PG Seats (MD Pulmonology)",
    icon: HeartPulse
  },
  {
    id: "radiology",
    name: "Radiology",
    category: "Clinical Diagnostic Specialty",
    hod: "Dr. M. Radhika, MD (Radiology)",
    description: "24/7 central diagnostic radiology providing 1.5T MRI, 16-slice CT scanner, digital radiography (DR), 4D color Doppler ultrasound, mammography, and interventional radiological procedures.",
    services: ["1.5 Tesla MRI & Multi-Slice CT", "Digital Radiography & 4D Color Doppler", "Mammography & Ultrasound Imaging", "24/7 Emergency Diagnostics"],
    bedCount: "Central Diagnostic Complex",
    seats: "5 PG Seats (MD Radiology)",
    icon: Stethoscope
  }
];

export default function ClinicalDepartmentsPage() {
  return (
    <div className="w-full bg-transparent min-h-screen text-slate-800 font-technical">
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
            <Stethoscope className="w-4 h-4 text-gold-brand" />
            Specialized Medical Care & Clinical Education
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4">
            Clinical <span className="text-blue-400 italic font-normal">Departments</span>
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Explore the 13 clinical departments of PMRIMS Medical College & Hospital. Equipped with state-of-the-art inpatient wards, intensive care units (ICU/NICU/PICU), modular operating theatres, and round-the-clock specialty care.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Clinical Departments Directory ({CLINICAL_DEPARTMENTS.length})
          </h2>
        </div>

        {/* Department Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CLINICAL_DEPARTMENTS.map((dept) => {
            const IconComponent = dept.icon;
            return (
              <div
                key={dept.id}
                id={dept.id}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Bed Count Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold flex items-center gap-1.5">
                      <Bed className="w-3.5 h-3.5 text-blue-600" /> {dept.bedCount}
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

                  {/* Key Clinical Services */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Key Services & Facilities:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-semibold">
                      {dept.services.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-transparent border border-slate-200/70">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{service}</span>
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
