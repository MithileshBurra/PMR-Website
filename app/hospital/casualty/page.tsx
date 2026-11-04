"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  HeartPulse, 
  Clock, 
  Phone, 
  CheckCircle2, 
  AlertTriangle, 
  Activity, 
  Stethoscope, 
  Truck,
  ArrowLeft,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const CASUALTY_PHOTOS = [
  {
    src: "/images/hospital/casualty/casualty_entrance.jpg",
    alt: "PMRIMS Casualty & Emergency Medicine Department Entrance",
  },
  {
    src: "/images/hospital/casualty/casualty_ambulances.jpg",
    alt: "24/7 Advanced Emergency Cardiac Ambulances",
  },
  {
    src: "/images/hospital/casualty/casualty_doctors_team.png",
    alt: "Emergency Doctors & Clinical Faculty Attending Casualty Patient",
  },
  {
    src: "/images/hospital/casualty/casualty_patient_ward.jpg",
    alt: "Casualty Acute Observation & Monitoring Bed",
  },
];

export default function CasualtyPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  return (
    <div className="w-full bg-transparent min-h-screen text-slate-800 font-technical">
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/30 text-red-300 text-xs font-bold uppercase tracking-wider mb-4 border border-red-500/30">
            <Clock className="w-4 h-4 text-red-400" />
            24/7 Emergency & Trauma Care
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4">
            Casualty & <span className="text-red-400 italic font-normal">Emergency Medicine</span>
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed">
            The Emergency Department at PMRIMS Teaching Hospital operates round-the-clock with dedicated trauma surgeons, critical care specialists, ACLS ambulances, and high-dependency triage resuscitation bays.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Facilities & Clinical Scope */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="p-3 rounded-2xl bg-red-50 text-red-600">
                  <Activity className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-slate-900">Immediate Triage & Resuscitation</h2>
                  <p className="text-xs text-slate-500">Rapid Response Polytrauma & Critical Care Unit</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                PMRIMS Emergency Casualty is equipped with 30+ dedicated acute observation beds, minor operating theatre (OT) for immediate wound debridement, crash carts, defibrillators, mobile digital X-Ray, and point-of-care ultrasound (POCUS) to manage acute medical emergencies, cardiac arrests, stroke protocols, and highway accident trauma.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-6 text-xs text-slate-800 font-semibold">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-transparent border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                  <span>24/7 On-Call Trauma & Orthopaedic Surgeons</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-transparent border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                  <span>ACLS & BCLS Advanced Cardiac Ambulances</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-transparent border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                  <span>Immediate Blood Bank & Central Lab Access</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-transparent border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                  <span>Direct Transfer to ICU & Major Surgical OTs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Emergency Helpline Callout */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-red-600 text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-300" /> Emergency Hotline
              </div>
              <h3 className="text-3xl font-serif font-bold text-white">Need Emergency Assistance?</h3>
              <p className="text-xs sm:text-sm text-red-100 leading-relaxed">
                Our emergency casualty desk and ambulance dispatch team can be reached immediately 24 hours a day, 7 days a week:
              </p>

              <div className="space-y-4 pt-4 border-t border-white/20 font-technical">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-red-100 font-semibold">Medical Hospital:</span>
                  <a href="tel:08417299918" className="text-xl font-bold text-white hover:underline">08417-299918</a>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-white text-red-700 font-extrabold text-xs uppercase tracking-wider shadow hover:bg-slate-100 transition-colors"
                >
                  View Hospital Location & Directions
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Casualty Photo Gallery */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mt-12 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
            <div>
              <span className="px-3 py-1 rounded-full bg-red-50 text-red-900 border border-red-200 text-xs font-bold uppercase tracking-wider">
                Photo Gallery
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
                Casualty & Emergency Department Facilities
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
                Visual tour of our emergency department entrance, triage resuscitation wards, clinical medical team, and 24/7 ambulance fleet
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-2xl bg-slate-100 text-slate-800 text-xs font-bold font-mono shrink-0">
              4 Facility Photos
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {CASUALTY_PHOTOS.map((img, idx) => (
              <div 
                key={idx} 
                onClick={() => setLightboxIndex(idx)}
                className="group rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 hover:shadow-xl transition-all duration-300 cursor-pointer relative"
              >
                <div className="overflow-hidden aspect-[16/10] relative">
                  <Image 
                    src={img.src} 
                    alt={img.alt} 
                    fill
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="p-3 rounded-full bg-white/90 text-slate-900 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <Maximize2 className="w-5 h-5 text-red-600" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-8">
          <Link href="/hospital" className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-800">
            <ArrowLeft className="w-4 h-4" /> Back to Hospital Facilities
          </Link>
        </div>
      </section>

      {/* Lightbox Modal (pure photo viewer, NO text below photo) */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : CASUALTY_PHOTOS.length - 1))}
              className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors z-10"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => setLightboxIndex((prev) => (prev! < CASUALTY_PHOTOS.length - 1 ? prev! + 1 : 0))}
              className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors z-10"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Photo Container */}
            <div className="relative w-full aspect-[16/10] max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl bg-black">
              <Image
                src={CASUALTY_PHOTOS[lightboxIndex].src}
                alt={CASUALTY_PHOTOS[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
