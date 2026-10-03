"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  Stethoscope, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  Award
} from "lucide-react";

const OT_SLIDES = [
  {
    title: "Advanced Modular Operation Theatre",
    subtitle: "State-of-the-art sterile surgical suite with Laminar Air Flow & HEPA filtration",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
    badge: "14 Fully Equipped OTs"
  },
  {
    title: "High-Precision Surgical Workstations",
    subtitle: "Outfitted with cutting-edge instrumentation & C-Arm fluoroscopy for complex procedures",
    image: "/images/ot_slider_2.jpg",
    badge: "International Sterility Standards"
  },
  {
    title: "Laparoscopic & Specialty OT Suites",
    subtitle: "Enabling minimally invasive surgeries, orthopedic joint replacements, and emergency trauma operations",
    image: "/images/ot_slider_3.jpg",
    badge: "24/7 Emergency Surgery"
  }
];

const OT_FEATURES = [
  "Modular Operation Theatres with Laminar Air Flow & HEPA Filters",
  "Dedicated OTs for Orthopaedics & Joint Replacement Surgeries",
  "Advanced Laparoscopic & Endoscopic Surgical Suites",
  "Obstetrics & Gynaecological Major & Emergency Delivery OTs",
  "Ophthalmic & ENT Micro-Surgical Operating Rooms",
  "Centralized Anaesthesia Workstations & Multi-para Patient Monitors",
  "Autoclave & Sterilization (CSSD) Infrastructure",
  "Immediate Post-Anaesthesia Care Unit (PACU) & ICU Recovery"
];

export default function OperationTheatrePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? OT_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === OT_SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen text-slate-800 font-technical">
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
            <Activity className="w-4 h-4 text-gold-brand" />
            14 State-of-the-Art Operation Theatres
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4">
            Operation <span className="text-blue-400 italic font-normal">Theatres (OT)</span>
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            PMRIMS Teaching Hospital houses an advanced surgical complex engineered to meet the highest international standards of surgical safety, sterility, and infection control.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Interactive Image Slider */}
        <div className="relative w-full h-[350px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl mb-12 bg-slate-900 group">
          <img
            src={OT_SLIDES[currentSlide].image}
            alt={OT_SLIDES[currentSlide].title}
            className="w-full h-full object-cover object-center transition-all duration-700 brightness-75 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent p-6 sm:p-10 flex flex-col justify-end">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider w-max mb-2">
              <Sparkles className="w-3.5 h-3.5 text-gold-brand" />
              {OT_SLIDES[currentSlide].badge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              {OT_SLIDES[currentSlide].title}
            </h2>
            <p className="text-slate-200 text-xs sm:text-sm mt-1 max-w-2xl">
              {OT_SLIDES[currentSlide].subtitle}
            </p>
          </div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md transition-all shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md transition-all shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 right-6 flex gap-2 z-10">
            {OT_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  currentSlide === idx ? "w-8 bg-blue-500" : "w-2.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Surgical Complex Detailed Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Key Highlights & Specifications */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-slate-900">Surgical Excellence & Sterility Standards</h2>
                  <p className="text-xs text-slate-500">Infection-Controlled Modular Surgical Infrastructure</p>
                </div>
              </div>

              {/* PDF Specified Key Bullet Points */}
              <ul className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-technical">
                <li className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>PMRIMS houses a state-of-the-art Operation Theatre complex comprising 14 fully equipped operation theatres</strong>, including advanced modular theatres designed and maintained to meet the highest international standards of surgical safety, sterility, and infection control.
                  </span>
                </li>

                <li className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Each theatre is outfitted with modern surgical workstations, cutting-edge instrumentation</strong>, and advanced medical technology, enabling the performance of a wide range of routine, emergency, and highly specialized surgical procedures with precision, efficiency, and clinical excellence.
                  </span>
                </li>
              </ul>

              {/* Additional Features Grid */}
              <div className="border-t border-slate-100 pt-6">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Surgical Suite Features:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-800">
                  {OT_FEATURES.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Surgical Coordination Helpline */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-blue-600 text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-6">
              <h3 className="text-2xl font-serif font-bold text-white">Surgical Coordination Cell</h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                For pre-operative clearance, OT scheduling, and surgical package enquiries, contact our hospital surgical desk:
              </p>

              <div className="space-y-3 pt-2 text-xs font-semibold font-technical border-t border-white/20">
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">Medical Hospital:</span>
                  <a href="tel:08417299918" className="text-base font-bold text-white hover:underline">08417-299918</a>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-white text-blue-700 font-extrabold text-xs uppercase tracking-wider shadow hover:bg-slate-100 transition-colors"
              >
                Contact PMR Hospital
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
