"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Pill, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Phone, 
  Building2, 
  Award, 
  Activity, 
  FileText,
  Camera,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const PHARMACY_PHOTOS = [
  {
    src: "/images/hospital/Pharmacy/pharmacy_opd_counters.jpg",
    title: "Dedicated Outpatient (OPD) Dispensing Counters",
    dept: "OPD Medication Counters",
    desc: "Spacious patient dispensing facility featuring segregated counters for male, female, and physically challenged patients with orderly queue management.",
    objectPosition: "object-[center_75%]"
  },
  {
    src: "/images/hospital/Pharmacy/pharmacy_dispensing_unit.jpg",
    title: "Computerized Billing & Inpatient Dispensing Unit",
    dept: "Clinical Dispensary Desk",
    desc: "Qualified registered pharmacists managing digital prescription verification, computerized inventory tracking, and rapid medication delivery.",
    objectPosition: "object-center"
  },
  {
    src: "/images/hospital/Pharmacy/pharmacy_central_store.jpg",
    title: "Central Medicine Stores & Cold-Chain Biological Hub",
    dept: "Hospital Central Pharmacy Stores",
    desc: "High-capacity pharmaceutical warehouse equipped with temperature-controlled cold-chain refrigeration (2°C–8°C) for vaccines and biologicals.",
    objectPosition: "object-center"
  }
];

const PHARMACY_FEATURES = [
  "24/7 Round-the-Clock Emergency & Casualty Pharmacy Counter",
  "Dedicated Outpatient (OPD) & Inpatient (IPD) Medication Outlets",
  "Cold-Chain Vaccine & Biological Storage (2°C to 8°C Controlled)",
  "Full Stock of Critical ICU, Cardiac, Emergency & Surgical Drugs",
  "Computerized Inventory & Barcode Scanned Prescription Dispensing",
  "NMC Statutory Pharmacovigilance & Drug Safety Protocols",
  "Qualified M.Pharm & B.Pharm Registered Pharmacists on Duty",
  "Subsidized & Cashless Medicine Supply under Aarogyasri Scheme"
];

export default function PharmacyPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="w-full bg-transparent min-h-screen text-slate-800 font-technical">
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
            <Clock className="w-4 h-4 text-gold-brand" />
            24/7 Hospital Medicine Services
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4">
            Central Hospital Pharmacy <span className="text-blue-400 italic font-normal">(24x7)</span>
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed">
            The Central Pharmacy Services at PMRIMS Hospital operate 24 hours a day to provide un-interrupted supply of authentic, essential, and life-saving medications for outpatient, inpatient, emergency casualty, and ICU patients.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Infrastructure & Services */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
                  <Pill className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-slate-900">Comprehensive Medicine Dispensary</h2>
                  <p className="text-xs text-slate-500">Quality-Assured Pharmaceutical Distribution</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                PMRIMS Central Pharmacy maintains an extensive inventory of WHO-essential medicines, intravenous fluids, surgical consumables, antibiotics, and specialty drugs. All medicines undergo strict temperature-controlled storage and batch verification before patient dispensing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-800 border-t border-slate-100 pt-6">
                {PHARMACY_FEATURES.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-transparent border border-slate-200/70">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Pharmacy Helpline & Outlets */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 font-technical">
              <h3 className="text-xl font-serif font-bold text-slate-900">Pharmacy Counter Locations</h3>
              <p className="text-xs text-slate-500">Accessible Medicine Counters across Campus</p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-transparent border border-slate-200/80">
                  <div className="font-bold text-slate-900">Emergency & Casualty Outlet</div>
                  <div className="text-[11px] text-slate-500">Ground Floor, Emergency Block (Open 24/7)</div>
                </div>

                <div className="p-3 rounded-xl bg-transparent border border-slate-200/80">
                  <div className="font-bold text-slate-900">OPD Central Outlet</div>
                  <div className="text-[11px] text-slate-500">Main OPD Building, Ground Floor (8:00 AM – 8:00 PM)</div>
                </div>

                <div className="p-3 rounded-xl bg-transparent border border-slate-200/80">
                  <div className="font-bold text-slate-900">IPD Surgical Pharmacy</div>
                  <div className="text-[11px] text-slate-500">Inpatient Block, 1st Floor (Open 24/7)</div>
                </div>
              </div>
            </div>

            {/* Quick 24/7 Helpline Card */}
            <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-xl space-y-4 font-technical">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5 text-gold-brand" /> 24/7 Medicine Desk
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">Need Medicine Information?</h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                For emergency prescription availability, critical care injectables, or Aarogyasri medicine inquiries, contact our round-the-clock hospital dispensary:
              </p>
              <div className="pt-2 border-t border-white/20 flex items-center justify-between">
                <span className="text-xs text-blue-100">Dispensary Helpline:</span>
                <a href="tel:08417299918" className="text-lg font-bold text-white hover:underline">08417-299918</a>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Pharmacy Photo Gallery */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 w-max">
                <Camera className="w-3.5 h-3.5 text-blue-600" />
                Clinical Photo Gallery
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
                PMR Hospital Central Pharmacy Facilities
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
                Visual tour of our outpatient dispensing counters, computerized billing units, and central medicine storage hub
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-2xl bg-slate-100 text-slate-800 text-xs font-bold font-mono shrink-0">
              {PHARMACY_PHOTOS.length} Facility Photos
            </span>
          </div>

          {/* 3-Photo Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PHARMACY_PHOTOS.map((img, idx) => (
              <div 
                key={idx} 
                onClick={() => setLightboxIndex(idx)}
                className="group rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm bg-slate-50 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="relative overflow-hidden aspect-[16/10] bg-slate-100">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className={`object-cover ${img.objectPosition || "object-center"} group-hover:scale-105 transition-transform duration-500`}
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
              onClick={() => setLightboxIndex((lightboxIndex - 1 + PHARMACY_PHOTOS.length) % PHARMACY_PHOTOS.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-950/70 text-white hover:bg-slate-950 transition-colors"
              title="Previous Photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setLightboxIndex((lightboxIndex + 1) % PHARMACY_PHOTOS.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-950/70 text-white hover:bg-slate-950 transition-colors"
              title="Next Photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Large Image */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              <Image
                src={PHARMACY_PHOTOS[lightboxIndex].src}
                alt={PHARMACY_PHOTOS[lightboxIndex].title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Caption Bar */}
            <div className="p-6 bg-slate-900 border-t border-white/10 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="px-2.5 py-0.5 rounded-md bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                  {PHARMACY_PHOTOS[lightboxIndex].dept}
                </span>
                <h3 className="text-lg font-serif font-bold mt-1 text-white">
                  {PHARMACY_PHOTOS[lightboxIndex].title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {PHARMACY_PHOTOS[lightboxIndex].desc}
                </p>
              </div>
              <div className="text-xs font-mono text-slate-400 shrink-0">
                {lightboxIndex + 1} / {PHARMACY_PHOTOS.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
