"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Stethoscope, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  Building2, 
  Phone, 
  Users, 
  Award,
  Scan,
  HeartPulse,
  Pill,
  ArrowRight,
  Camera,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const OPD_PHOTOS = [
  {
    src: "/images/hospital/OPD/opd_consultation_1.png",
    title: "Senior Specialist & Faculty Consultation Chamber",
    dept: "General Medicine & Specialist OPD",
    desc: "Senior attending physicians and clinical specialists conducting comprehensive outpatient evaluations, diagnosis, and patient care."
  },
  {
    src: "/images/hospital/OPD/opd_consultation_2.png",
    title: "Clinical OPD Consultation & Medical Examination Desk",
    dept: "Outpatient Clinical Suite",
    desc: "Resident doctors and healthcare team reviewing medical case records and offering personalized treatment guidance."
  },
  {
    src: "/images/hospital/OPD/opd_consultation_3.png",
    title: "Outpatient Diagnosis & Patient Review Room",
    dept: "Clinical Diagnostic Unit",
    desc: "Spacious OPD consultation units facilitating active diagnostic discussion and patient counselling."
  },
  {
    src: "/images/hospital/OPD/opd_ophthalmology.png",
    title: "Ophthalmology (Eye) OPD & Slit-Lamp Examination Suite",
    dept: "Ophthalmology Clinic",
    desc: "Specialized eye clinic equipped with precision slit-lamp biomicroscopy for advanced anterior segment and retinal assessment."
  },
  {
    src: "/images/hospital/OPD/opd_dental.png",
    title: "Dental Surgery & Oral Medicine Examination Unit",
    dept: "Dental OPD Clinic",
    desc: "Modern motorized dental operatory chair with high-intensity surgical light and precision instrumentation for comprehensive oral care."
  }
];

const OPD_SERVICES = [
  {
    title: "Outpatient Consultation",
    category: "Specialist OPD Clinics",
    description: "Comprehensive medical and surgical consultations across 15+ clinical departments, headed by experienced professors, senior specialists, and resident doctors.",
    timing: "Mon – Sat: 9:00 AM – 4:00 PM",
    icon: Stethoscope,
    badge: "Daily Consultations",
    link: "#consultation-schedule",
    linkText: "View Consultation Schedule"
  },
  {
    title: "Radiological Facilities",
    category: "Advanced Diagnostic Imaging",
    description: "Cutting-edge radiological suite featuring Siemens 1.5 Tesla MRI, 16-slice spiral CT scanner, digital radiography (X-Ray), and Color Doppler ultrasonography.",
    timing: "24/7 Diagnostic Support",
    icon: Scan,
    badge: "NABH / AERB Compliant",
    link: "/hospital/radiology-facilities",
    linkText: "Explore Radiological Facilities"
  },
  {
    title: "Emergency and Casualty",
    category: "Immediate Acute & Trauma Care",
    description: "Round-the-clock emergency casualty wing equipped with red-zone resuscitation bays, multi-para cardiac monitors, mobile defibrillators, and dedicated trauma surgeons.",
    timing: "24/7 Immediate Response",
    icon: HeartPulse,
    badge: "24/7 Trauma Care",
    link: "/hospital/casualty",
    linkText: "Visit Emergency & Casualty"
  },
  {
    title: "24/7 Pharmacy",
    category: "Central Medical Dispensary",
    description: "Round-the-clock licensed in-house pharmacy providing authentic prescription medicines, critical care injectables, surgical consumables, and vaccine storage.",
    timing: "Open 24 Hours / 365 Days",
    icon: Pill,
    badge: "Round-the-Clock",
    link: "/hospital/Pharmacy",
    linkText: "View Pharmacy Services"
  }
];

const OPD_DEPARTMENTS = [
  "General Medicine",
  "General Surgery",
  "Obstetrics & Gynaecology",
  "Paediatrics & Child Health",
  "Orthopaedics & Joint Replacement",
  "Dermatology Venereology & Leprosy",
  "Otorhinolaryngology (ENT)",
  "Ophthalmology (Eye)",
  "Psychiatry & Behavioral Sciences",
  "Respiratory & Chest Medicine",
  "Dental Surgery & Oral Medicine",
  "Physiotherapy & Rehabilitation"
];

export default function OutpatientPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="w-full bg-transparent min-h-screen text-slate-800 font-technical">
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
            <Stethoscope className="w-4 h-4 text-gold-brand" />
            1000+ Daily Patients Served
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4">
            Outpatient Services <span className="text-blue-400 italic font-normal">(OPD)</span>
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed">
            PMRIMS Outpatient Department offers comprehensive clinical consultation across 15+ medical and surgical specialties with modern diagnostic integration and affordable care.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Core Outpatient Services Grid */}
        <div>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
              <Building2 className="w-4 h-4" /> Essential Clinical Wings
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
              Outpatient & Allied Hospital Services
            </h2>
            <p className="text-sm text-slate-600 font-technical mt-2 max-w-3xl">
              Comprehensive clinical consultation, high-end diagnostics, continuous trauma support, and round-the-clock pharmaceutical access seamlessly integrated for patient convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {OPD_SERVICES.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3.5 rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                        {service.badge}
                      </span>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-1">
                        {service.category}
                      </div>
                      <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-technical">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 space-y-3">
                    <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 font-technical">
                      <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{service.timing}</span>
                    </div>

                    <Link 
                      href={service.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors group-hover:translate-x-1 duration-200"
                    >
                      <span>{service.linkText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clinical Outpatient Facilities Photo Gallery */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 w-max">
                <Camera className="w-3.5 h-3.5 text-blue-600" />
                Clinical Photo Gallery
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
                PMR Hospital Outpatient Facilities
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
                Visual tour of our daily outpatient consultation suites, medical examination desks, ophthalmology clinic, and dental operatory unit
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-2xl bg-slate-100 text-slate-800 text-xs font-bold font-mono shrink-0">
              {OPD_PHOTOS.length} Hospital Photos
            </span>
          </div>

          {/* 5-Photo Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OPD_PHOTOS.map((img, idx) => (
              <div 
                key={idx} 
                onClick={() => setLightboxIndex(idx)}
                className={`group rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm bg-slate-50 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  idx === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="relative overflow-hidden aspect-[16/9] bg-slate-100">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                    {img.dept}
                  </div>
                  <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-lg flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-blue-600" /> View Photo
                    </span>
                  </div>
                </div>

                <div className="p-5 bg-white space-y-1.5 flex-1 flex flex-col justify-between border-t border-slate-100">
                  <h4 className="text-base font-serif font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {img.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-technical leading-relaxed">
                    {img.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timings, Departments & Booking Grid */}
        <div id="consultation-schedule" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-4">
          
          {/* Left Column: OPD Schedule & Departments */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-slate-900">OPD Timings & Consultation Schedule</h2>
                  <p className="text-xs text-slate-500">Daily Consultation Hours (Monday to Saturday)</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-800">
                <div className="p-4 rounded-2xl bg-transparent border border-slate-200/80">
                  <div className="text-xs font-bold text-blue-600 uppercase mb-1">Morning Session</div>
                  <div className="text-base font-bold text-slate-900">9:00 AM – 1:00 PM</div>
                  <div className="text-[11px] text-slate-500 mt-1">General OPD & Specialist Clinics</div>
                </div>

                <div className="p-4 rounded-2xl bg-transparent border border-slate-200/80">
                  <div className="text-xs font-bold text-blue-600 uppercase mb-1">Afternoon Session</div>
                  <div className="text-base font-bold text-slate-900">2:00 PM – 4:00 PM</div>
                  <div className="text-[11px] text-slate-500 mt-1">Follow-up & Super-Specialty Clinics</div>
                </div>
              </div>

              {/* Super-Specialty Consultation Days */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-slate-900">
                <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-600" /> Super-Specialty Consultation Schedule
                </div>
                <div className="space-y-1 text-xs font-semibold text-slate-700">
                  <p>• <strong className="text-slate-900">Cardiology Consultation:</strong> Every Wednesday</p>
                  <p>• <strong className="text-slate-900">Urologist Consultation:</strong> Every Thursday</p>
                </div>
              </div>
            </div>

            {/* Active OPD Specialty Departments */}
            <div id="opd-departments" className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Clinical Specialties</span>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mt-1">OPD Specialty Departments</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-800">
                {OPD_DEPARTMENTS.map((dept, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-transparent border border-slate-200/70">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{dept}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Helpline & Quick Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-blue-600 text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
                <Calendar className="w-4 h-4 text-gold-brand" /> Appointment Desk
              </div>
              <h3 className="text-3xl font-serif font-bold text-white">Book OPD Appointment</h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                Contact our OPD registration desk to book specialist consultations, health checkup packages, or diagnostic appointments:
              </p>

              <div className="space-y-4 pt-4 border-t border-white/20 font-technical">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-blue-100 font-semibold">Medical Hospital:</span>
                  <a href="tel:08417299918" className="text-xl font-bold text-white hover:underline">08417-299918</a>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-white text-blue-700 font-extrabold text-xs uppercase tracking-wider shadow hover:bg-slate-100 transition-colors"
                >
                  Contact OPD Registration Desk
                </Link>
              </div>
            </div>

            {/* Quick Emergency Notice */}
            <div className="bg-red-50 border border-red-200 rounded-3xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
                <HeartPulse className="w-5 h-5 text-red-600" />
                <span>24/7 Casualty & Emergency Wing</span>
              </div>
              <p className="text-xs text-red-900/80 leading-relaxed font-technical">
                For urgent trauma, cardiac, or acute emergencies, proceed directly to the PMRIMS 24/7 Casualty entrance without prior OPD appointment.
              </p>
              <Link 
                href="/hospital/casualty"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 hover:text-red-900"
              >
                <span>Casualty Details & Helplines</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Full View */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/70 text-white hover:bg-slate-950 transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev / Next Buttons */}
            <button
              onClick={() => setLightboxIndex((lightboxIndex - 1 + OPD_PHOTOS.length) % OPD_PHOTOS.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-950/70 text-white hover:bg-slate-950 transition-colors"
              title="Previous Photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setLightboxIndex((lightboxIndex + 1) % OPD_PHOTOS.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-950/70 text-white hover:bg-slate-950 transition-colors"
              title="Next Photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Large Image */}
            <div className="relative aspect-[16/9] w-full bg-black">
              <Image
                src={OPD_PHOTOS[lightboxIndex].src}
                alt={OPD_PHOTOS[lightboxIndex].title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Caption Bar */}
            <div className="p-6 bg-slate-900 border-t border-white/10 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="px-2.5 py-0.5 rounded-md bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                  {OPD_PHOTOS[lightboxIndex].dept}
                </span>
                <h3 className="text-lg font-serif font-bold mt-1 text-white">
                  {OPD_PHOTOS[lightboxIndex].title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {OPD_PHOTOS[lightboxIndex].desc}
                </p>
              </div>
              <div className="text-xs font-mono text-slate-400 shrink-0">
                {lightboxIndex + 1} / {OPD_PHOTOS.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
