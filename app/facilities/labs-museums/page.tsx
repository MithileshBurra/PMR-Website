"use client";

import Link from "next/link";
import { 
  FlaskConical, 
  ArrowLeft, 
  CheckCircle2, 
  Microscope, 
  BookOpen, 
  ShieldAlert 
} from "lucide-react";

export default function LabsMuseumsPage() {

  return (
    <div className="py-16 bg-transparent min-h-screen text-slate-800 font-technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link> / <Link href="/facilities" className="hover:text-blue-600 transition-colors">Facilities</Link> / <span className="text-blue-600">Labs & Museums</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Academic Labs & <span className="text-blue-600 italic font-normal">Medical Museums</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl leading-relaxed">
            PMRIMS teaching campus houses dedicated practical laboratories and curated educational museums for Anatomy, Pathology, Forensic Medicine, Pharmacology, and Community Medicine.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl w-max">
              <Microscope className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900">Anatomy Dissection & Specimen Museum</h3>
            <p className="text-xs sm:text-sm text-slate-600 font-technical leading-relaxed">
              Equipped with cadaveric dissection halls, embalming units, histology binocular microscope stations, and over 500+ mounted embryology, osteology, and neuroanatomy specimens.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl w-max">
              <FlaskConical className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900">Pathology & Microbiology Practical Labs</h3>
            <p className="text-xs sm:text-sm text-slate-600 font-technical leading-relaxed">
              Features individual binocular microscopes for 250 MBBS students, histopathology slide banks, bacteriology culture incubators, and gross pathology museum.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl w-max">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900">Forensic Toxicology & Anthropology Museum</h3>
            <p className="text-xs sm:text-sm text-slate-600 font-technical leading-relaxed">
              Curated collection of poisons, weapons of assault, bone injury models, medicolegal charts, court simulation setup, and forensic autopsy demonstration units.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl w-max">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900">Pharmacology & Community Medicine Units</h3>
            <p className="text-xs sm:text-sm text-slate-600 font-technical leading-relaxed">
              Experimental pharmacology computer-assisted learning (CAL) lab, pharmacy dispensing stations, epidemiology research lab, and public health models.
            </p>
          </div>
        </div>

        {/* Academic Labs & Museums Photo Gallery */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider">
                Photo Gallery
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
                Laboratories & Departmental Museums
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
                Inside view of pre-clinical practical workstations, dissection setups, slide study units, and specimen collections
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-2xl bg-slate-100 text-slate-800 text-xs font-bold font-mono shrink-0">
              6 Facility Photos
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { src: "/images/facilities/labs-museums/DSC00170.jpg", title: "Pre-Clinical Student Laboratory & Workstations" },
              { src: "/images/facilities/labs-museums/DSC00172.jpg", title: "Practical Workbenches & Microscope Stations" },
              { src: "/images/facilities/labs-museums/DSC00179.jpg", title: "Anatomy Museum & Specimen Displays" },
              { src: "/images/facilities/labs-museums/DSC00180.jpg", title: "Curated Pathological Specimens & Models" },
              { src: "/images/facilities/labs-museums/DSC00181.jpg", title: "Departmental Slide Study & Demonstration Hall" },
              { src: "/images/facilities/labs-museums/DSC00183.jpg", title: "Academic Medical Museum Collections" }
            ].map((img, idx) => (
              <div key={idx} className="group rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="overflow-hidden aspect-[16/10]">
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="p-4 sm:p-5 text-sm sm:text-base text-slate-800 bg-white font-semibold border-t border-slate-100 flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portal Link Card */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900">Departmental Laboratory Infrastructure</h2>
              <p className="text-xs text-slate-500">NMC-Compliant Practical Teaching & Research Facilities</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-700 font-technical">
            <div className="p-4 rounded-2xl bg-transparent border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Full Practical Seating for 250 MBBS Batch Strength</span>
            </div>
            <div className="p-4 rounded-2xl bg-transparent border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>High-Resolution Projection & Digital Microscopy Demonstration</span>
            </div>
          </div>
        </div>

        <Link href="/facilities" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800">
          <ArrowLeft className="w-4 h-4" /> Back to Facilities Overview
        </Link>
      </div>
    </div>
  );
}
