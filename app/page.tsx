"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Award, 
  GraduationCap, 
  Hospital, 
  ShieldCheck, 
  BookOpen, 
  Stethoscope, 
  HeartPulse, 
  Users, 
  CheckCircle2,
  Trophy,
  Sparkles,
  ChevronRight,
  Volume2,
  VolumeX
} from "lucide-react";
import { newsEventsData } from "@/config/news-events";
import InformationCards from "@/components/home/InformationCards";
import ExecutiveLeadership from "@/components/home/ExecutiveLeadership";
import StudentLifeSlider from "@/components/home/StudentLifeSlider";

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="w-full bg-medical-pattern-overlay text-charcoal font-technical">
      {/* 1. Full-Width Clean Video Hero Canvas */}
      <section className="relative w-full h-[75vh] sm:h-[82vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
        {/* Crisp Natural Background Video Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            poster="/images/campus_hero.jpg"
            className="w-full h-full object-cover scale-105 opacity-100 transition-opacity duration-1000"
          >
            <source
              src="/videos/hero_drone.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML5 video playback.
          </video>

          {/* Minimal Neutral Legibility Scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/20" />
        </div>

        {/* Video Audio Control Overlay */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-16 right-6 z-20 px-3.5 py-2 rounded-full bg-slate-900/70 backdrop-blur-md border border-white/20 text-white hover:bg-slate-900/90 transition-all flex items-center gap-2 text-xs font-semibold shadow-lg"
          title={isMuted ? "Unmute Video Sound" : "Mute Video Sound"}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-slate-300" />
              <span className="hidden sm:inline">Unmute Sound</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-orange-400 animate-pulse" />
              <span className="hidden sm:inline">Mute Sound</span>
            </>
          )}
        </button>

        {/* Continuous Bottom Scrolling Ticker Bar with Logo Colors (Blue, Orange, Red) */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-r from-blue-950 via-slate-950 to-blue-950 backdrop-blur-md border-t-2 border-orange-500/40 text-white py-3 overflow-hidden shadow-2xl">
          <div className="animate-marquee font-technical text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-8">
            <span className="text-orange-400 flex items-center gap-2 font-extrabold">
              <Sparkles className="w-4 h-4 text-orange-400" />
              Dr. Patnam Mahender Reddy Institute of Medical Sciences
            </span>
            <span className="text-red-400 font-extrabold bg-red-950/80 px-2.5 py-0.5 rounded border border-red-500/30">
              • Admissions Open 2026-27
            </span>
            <span className="text-blue-300">• 250 MBBS Seats</span>
            <span className="text-orange-300">• 94 MD/MS PG Seats</span>
            <span className="text-red-300">• 1200+ Bed Teaching Hospital</span>
            <span className="text-blue-200">• Chevella, Telangana</span>
            <span className="text-orange-400 flex items-center gap-2 font-extrabold">
              <Sparkles className="w-4 h-4 text-orange-400" />
              Dr. Patnam Mahender Reddy Institute of Medical Sciences
            </span>
            <span className="text-red-400 font-extrabold bg-red-950/80 px-2.5 py-0.5 rounded border border-red-500/30">
              • Admissions Open 2026-27
            </span>
            <span className="text-blue-300">• 250 MBBS Seats</span>
            <span className="text-orange-300">• 94 MD/MS PG Seats</span>
            <span className="text-red-300">• 1200+ Bed Teaching Hospital</span>
            <span className="text-blue-200">• Chevella, Telangana</span>
          </div>
        </div>
      </section>

      {/* 2. Compact Key Portals Strip in Logo Colors (Blue, Orange, Red) */}
      <section className="relative z-30 pt-8 sm:pt-10 max-w-7xl mx-auto px-4 sm:px-8 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: 250 MBBS Seats (Blue Theme) */}
          <Link 
            href="/admissions/ug/seat-matrix" 
            className="bg-white p-5 rounded-2xl border-2 border-slate-200/90 shadow-xl hover:border-blue-500 hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md shadow-blue-600/30">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="overflow-hidden">
              <div className="text-[10px] font-extrabold uppercase text-blue-600 tracking-wider">Undergraduate</div>
              <h3 className="text-base font-serif font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                250 MBBS Seats
              </h3>
              <div className="text-[11px] text-slate-500 font-technical flex items-center gap-1 mt-0.5 font-semibold">
                <span>View Seat Matrix</span>
                <ChevronRight className="w-3.5 h-3.5 text-blue-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Card 2: PG Specializations (Orange Theme) */}
          <Link 
            href="/admissions/pg/specializations" 
            className="bg-white p-5 rounded-2xl border-2 border-slate-200/90 shadow-xl hover:border-orange-500 hover:shadow-orange-500/20 hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md shadow-orange-500/30">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div className="overflow-hidden">
              <div className="text-[10px] font-extrabold uppercase text-orange-600 tracking-wider">Postgraduate</div>
              <h3 className="text-base font-serif font-bold text-slate-900 group-hover:text-orange-600 transition-colors truncate">
                PG Specializations
              </h3>
              <div className="text-[11px] text-slate-500 font-technical flex items-center gap-1 mt-0.5 font-semibold">
                <span>94 MD/MS Seats</span>
                <ChevronRight className="w-3.5 h-3.5 text-orange-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Card 3: College of Nursing (Green Theme) */}
          <Link 
            href="/allied-sciences/nursing" 
            className="bg-white p-5 rounded-2xl border-2 border-slate-200/90 shadow-xl hover:border-emerald-500 hover:shadow-emerald-500/20 hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md shadow-emerald-600/30">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="overflow-hidden">
              <div className="text-[10px] font-extrabold uppercase text-emerald-600 tracking-wider">College of</div>
              <h3 className="text-base font-serif font-bold text-slate-900 group-hover:text-emerald-600 transition-colors truncate">
                Nursing (B.Sc)
              </h3>
              <div className="text-[11px] text-slate-500 font-technical flex items-center gap-1 mt-0.5 font-semibold">
                <span>View Program</span>
                <ChevronRight className="w-3.5 h-3.5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Card 4: College of Physiotherapy (Red Theme) */}
          <Link 
            href="/allied-sciences/physiotherapy" 
            className="bg-white p-5 rounded-2xl border-2 border-slate-200/90 shadow-xl hover:border-red-500 hover:shadow-red-500/20 hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md shadow-red-600/30">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div className="overflow-hidden">
              <div className="text-[10px] font-extrabold uppercase text-red-600 tracking-wider">College of</div>
              <h3 className="text-base font-serif font-bold text-slate-900 group-hover:text-red-600 transition-colors truncate">
                Physiotherapy (BPT)
              </h3>
              <div className="text-[11px] text-slate-500 font-technical flex items-center gap-1 mt-0.5 font-semibold">
                <span>View BPT Degree</span>
                <ChevronRight className="w-3.5 h-3.5 text-red-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. Leadership Feature Section (Chairman & Vice Chairman) */}
      <ExecutiveLeadership />

      {/* 3.5 Quick Access Information Cards (Admissions, Documents, Careers, Helpdesk) */}
      <InformationCards />

      {/* 4. Student Life Feature Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center justify-center gap-1.5 mb-2">
            Campus Culture & Experience
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900">
            Life at <span className="text-blue-600 italic font-normal">PMRIMS</span>
          </h2>
          <p className="text-slate-600 font-technical text-sm sm:text-base mt-3">
            Extracurricular clubs, inter-med sports tournaments, residential hostel life, and academic camaraderie across our 35+ acre Chevella campus.
          </p>
        </div>

        {/* Recreated Sri Ramachandra Style Student Life Slider Grid */}
        <StudentLifeSlider />
      </section>

      {/* 5. News & Events Section (Editable via config/news-events.ts) */}
      <section className="py-24 bg-transparent border-t border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Section Subtitle & Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
              <span className="w-8 h-[2px] bg-blue-500 rounded-full" />
              LATEST NEWS & UPDATES
              <span className="w-8 h-[2px] bg-blue-500 rounded-full" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
              News & Events
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Stay updated with the latest happenings at PMRIMS.
            </p>
          </div>

          {/* 3 News Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {newsEventsData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs font-bold mb-3">
                      <span className="text-blue-600 uppercase tracking-wider">{item.category}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-400 font-normal">{item.date}</span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-3 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed font-technical line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Centered All News & Events Button */}
          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider shadow-sm hover:border-blue-500 hover:text-blue-600 transition-all"
            >
              All News & Events
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Statistics Counter */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-blue-700/60 border border-white/10">
            <div className="text-4xl sm:text-5xl font-serif font-bold text-gold-brand">1,200+</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200 mt-2">Hospital Beds</div>
          </div>

          <div className="p-6 rounded-2xl bg-blue-700/60 border border-white/10">
            <div className="text-4xl sm:text-5xl font-serif font-bold text-gold-brand">250</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200 mt-2">Annual MBBS Seats</div>
          </div>

          <div className="p-6 rounded-2xl bg-blue-700/60 border border-white/10">
            <div className="text-4xl sm:text-5xl font-serif font-bold text-gold-brand">1,000+</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200 mt-2">Daily OPD Patients</div>
          </div>

          <div className="p-6 rounded-2xl bg-blue-700/60 border border-white/10">
            <div className="text-4xl sm:text-5xl font-serif font-bold text-gold-brand">45+</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200 mt-2">Super Specialties</div>
          </div>
        </div>
      </section>
    </div>
  );
}

