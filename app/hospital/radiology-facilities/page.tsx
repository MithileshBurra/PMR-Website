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
    <div className="py-16 bg-transparent min-h-screen text-slate-800 font-technical">
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
            <div className="p-4 rounded-2xl bg-transparent border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Digital Mammography & Breast Cancer Screening Suite</span>
            </div>
            <div className="p-4 rounded-2xl bg-transparent border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>24/7 Emergency Portable Digital X-Ray Wards & ICU Beds</span>
            </div>
            <div className="p-4 rounded-2xl bg-transparent border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Mobile C-Arm High Resolution Image Intensifier for OTs</span>
            </div>
            <div className="p-4 rounded-2xl bg-transparent border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Medical Hospital Desk: <strong>08417-299918</strong></span>
            </div>
          </div>
        </div>

        {/* Radiology Photo Gallery */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider">
                Photo Gallery
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
                Radiology Equipment & Scan Suites
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
                Visual tour of our MRI, CT Scan, Ultrasound, and Digital X-Ray installations
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-2xl bg-slate-100 text-slate-800 text-xs font-bold font-mono shrink-0">
              7 Facility Photos
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { src: "/images/hospital/radiology-facilities/vlcsnap-2026-02-25-11h42m38s224.jpg", title: "Siemens CT Scanner Suite" },
              { src: "/images/hospital/radiology-facilities/vlcsnap-2026-02-25-11h42m41s739.jpg", title: "MRI Magnetom Sempra 1.5 Tesla Unit" },
              { src: "/images/hospital/radiology-facilities/vlcsnap-2026-02-25-11h42m44s338.jpg", title: "Sonoscape Ultrasound & Doppler" },
              { src: "/images/hospital/radiology-facilities/vlcsnap-2026-02-25-11h42m46s616.jpg", title: "Allengers Digital Radiography Room" },
              { src: "/images/hospital/radiology-facilities/vlcsnap-2026-02-25-11h42m48s289.jpg", title: "Mammography & Fluoroscopy Unit" },
              { src: "/images/hospital/radiology-facilities/vlcsnap-2026-02-25-11h43m04s311.jpg", title: "Radiology Console & PACS Workstation" },
              { src: "/images/hospital/radiology-facilities/vlcsnap-2026-02-25-11h43m07s966.jpg", title: "Scan Monitoring & Reporting Station" }
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

        {/* Major Equipment Table */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider">
                Advanced Diagnostic & Interventional Imaging
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
                Radiological Equipment Inventory
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
                High-field MRI, multi-slice CT, ultrasound Doppler, digital radiography, and fluoroscopy systems
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="px-3.5 py-1.5 rounded-2xl bg-slate-100 text-slate-800 text-xs font-bold font-mono">
                11 Major Installations (14 Units)
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-technical border-collapse">
              <thead>
                <tr className="bg-slate-50 border-y border-slate-200 text-slate-700 uppercase tracking-wider font-bold">
                  <th className="py-3.5 px-4 w-20 text-center">S.No</th>
                  <th className="py-3.5 px-6">Name of the Equipment</th>
                  <th className="py-3.5 px-6 text-center w-36">Quantity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { sNo: 1, name: "MRI MAGNETOM SEMPRA 1.5 TESLA", quantity: 1 },
                  { sNo: 2, name: "CT SEIMENS ACTIVE GO NOW 3 2 SLICE", quantity: 1 },
                  { sNo: 3, name: "CT SINGLE BARREL INJECTOR APO 100", quantity: 1 },
                  { sNo: 4, name: "USG 1 SONOSCAPE P40", quantity: 1 },
                  { sNo: 5, name: "USG 2 SONOSCAPE E2", quantity: 1 },
                  { sNo: 6, name: "USG 3 SONOSCAPE S11 PLUS", quantity: 1 },
                  { sNo: 7, name: "XRAY 1 ALLENGERS 600MA", quantity: 2 },
                  { sNo: 8, name: "XRAY 2 ALLENGERS 300MA", quantity: 2 },
                  { sNo: 9, name: "XRAY 3 ALLENGERS 800MA FLUOROSCOPY", quantity: 1 },
                  { sNo: 10, name: "XRAY 4 ALLENGERS 800MA", quantity: 1 },
                  { sNo: 11, name: "FLUOROSCOPY MAMMOGRAPHY MAM – VENUS", quantity: 1 }
                ].map((item) => (
                  <tr key={item.sNo} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 text-center font-bold text-slate-500">{item.sNo}</td>
                    <td className="py-3.5 px-6 font-semibold text-slate-900 text-sm">{item.name}</td>
                    <td className="py-3.5 px-6 text-center">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold font-mono text-xs border border-blue-100">
                        {item.quantity} {item.quantity > 1 ? "Units" : "Unit"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Link href="/hospital" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800">
          <ArrowLeft className="w-4 h-4" /> Back to Hospital Facilities
        </Link>
      </div>
    </div>
  );
}
