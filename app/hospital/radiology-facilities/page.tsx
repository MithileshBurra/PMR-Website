"use client";

import Link from "next/link";
import { 
  Sparkles, 
  ArrowLeft, 
  CheckCircle2, 
  Activity, 
  Eye, 
  ShieldCheck 
} from "lucide-react";

export default function RadiologyPage() {

  return (
    <div className="py-16 bg-slate-50 min-h-screen text-slate-800 font-technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link> / <Link href="/hospital" className="hover:text-blue-600 transition-colors">Hospital</Link> / <span className="text-blue-600">Radiology Facilities</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Radio-Diagnosis & <span className="text-blue-600 italic font-normal">Imaging Facilities</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl leading-relaxed">
            The Department of Radio-Diagnosis at PMRIMS Teaching Hospital provides 24/7 diagnostic and interventional radiology services equipped with high-field MRI, multi-slice CT, digital X-Ray, and 4D Color Doppler.
          </p>
        </div>

        {/* Imaging Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl w-max">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">1.5 Tesla Whole-Body MRI</h3>
            <p className="text-xs text-slate-600 font-technical leading-relaxed">
              High-resolution neuro-imaging, brain & spine scans, musculoskeletal joint MRI, abdominal MRI, and zero-radiation vascular angiography.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl w-max">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">Multi-Slice Spiral CT Scanner</h3>
            <p className="text-xs text-slate-600 font-technical leading-relaxed">
              Sub-second emergency head trauma CT, chest & abdominal scans, 3D bone reconstructions, and guided diagnostic biopsy procedures.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl w-max">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">4D Ultrasound & Color Doppler</h3>
            <p className="text-xs text-slate-600 font-technical leading-relaxed">
              High-frequency antenatal anomaly scans, 4D fetal echocardiography, peripheral arterial/venous Doppler, and organ sonography.
            </p>
          </div>
        </div>

        {/* Diagnostic Services & Link Card */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900">24/7 Emergency Radiology & Digital DR X-Ray</h2>
              <p className="text-xs text-slate-500">Instant Picture Archiving & Communication System (PACS)</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-700 font-technical">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Digital Mammography & Breast Cancer Screening Suite</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>24/7 Emergency Portable Digital X-Ray Wards & ICU Beds</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Mobile C-Arm High Resolution Image Intensifier for OTs</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Medical Hospital Desk: <strong>08417-299918</strong></span>
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
