"use client";

import Link from "next/link";
import { 
  FlaskConical, 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle2, 
  Activity, 
  Microscope, 
  Dna, 
  Bug 
} from "lucide-react";

export default function LabsPage() {

  return (
    <div className="py-16 bg-slate-50 min-h-screen text-slate-800 font-technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link> / <Link href="/hospital" className="hover:text-blue-600 transition-colors">Hospital</Link> / <span className="text-blue-600">Central Diagnostic Labs</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Central Diagnostic <span className="text-blue-600 italic font-normal">Laboratory</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl leading-relaxed">
            The 24/7 Central Diagnostic Laboratory at PMRIMS integrates Pathology, Clinical Biochemistry, Microbiology, and Molecular Diagnostics under one roof to deliver high-precision diagnostic testing.
          </p>
        </div>

        {/* Diagnostic Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Pathology & Hematology */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl w-max">
              <Dna className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-900">Pathology & Hematology</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-technical">
              Equipped with fully automated multi-parameter cell counters, coagulation analyzers, bone marrow evaluations, histopathology biopsy processing, FNAC cytopathology, and blood bank crossmatching.
            </p>
            <div className="space-y-2 pt-2 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>24/7 Emergency Routine & STAT Blood Investigation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Immunohistochemistry (IHC) & Cancer Screening</span>
              </div>
            </div>
          </div>

          {/* Clinical Biochemistry */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl w-max">
              <FlaskConical className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-900">Clinical Biochemistry</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-technical">
              High-throughput automated analyzers for liver function (LFT), renal profiles (KFT), cardiac troponin markers, lipid profiles, diabetes monitoring (HbA1c), thyroid panels, and hormone assays.
            </p>
            <div className="space-y-2 pt-2 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Automated Chemiluminescence & Photometry</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Arterial Blood Gas (ABG) & Electrolyte Analyzers</span>
              </div>
            </div>
          </div>

          {/* Microbiology & Serology */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl w-max">
              <Bug className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-900">Microbiology & Virology</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-technical">
              Bacteriology culture and antibiotic sensitivity testing (AST), mycology, parasitology, automated blood culture (BACTEC), serological assays, and BSL-2 molecular RT-PCR testing.
            </p>
            <div className="space-y-2 pt-2 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600" />
                <span>Automated Microbial Identification & Sensitivity</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600" />
                <span>Hospital Infection Control Surveillance (HICC)</span>
              </div>
            </div>
          </div>

          {/* Diagnostic Support & Portal */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl w-max mb-4">
                <Microscope className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-slate-900">24/7 Central Lab Services</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-technical mt-2">
                All laboratory investigations strictly follow Internal Quality Control (IQC) and External Quality Assessment Schemes (EQAS) to guarantee accuracy and reliability.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div className="text-xs font-bold text-slate-900">
                Medical Hospital Contact: <a href="tel:08417299918" className="text-blue-600 hover:underline font-mono text-sm ml-1">08417-299918</a>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 w-full justify-center px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                Inquire About Diagnostic Testing
              </Link>
            </div>
          </div>
        </div>

        <Link href="/hospital" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800">
          <ArrowLeft className="w-4 h-4" /> Back to Hospital Facilities
        </Link>
      </div>
    </div>
  );
}
