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
    <div className="w-full bg-surface-light text-charcoal font-technical">
      {/* 1. Full-Width Clean Video Hero Canvas */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
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

          {/* Minimal Neutral Legibility Scrims (No Blue Tint) */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/40 to-transparent" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 w-full">
          <div className="max-w-3xl">
            {/* Accreditation Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider mb-6 shadow-md"
            >
              <Award className="w-4 h-4 text-gold-brand" />
              NMC Approved & KNRUHS Affiliated Institute
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-[1.15] mb-6 drop-shadow-md"
            >
              Excellence in <span className="text-blue-400 italic font-normal">Medical Education</span> & Patient Care.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-200 text-base sm:text-xl font-light leading-relaxed mb-10 max-w-2xl drop-shadow"
            >
              Dr. Patnam Mahender Reddy Institute of Medical Sciences delivers world-class MBBS, MD/MS residencies, and 1200+ bed hospital care at Chevella, Telangana.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Link
                href="/admissions/ug/seat-matrix"
                className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-5 h-5 text-gold-brand" />
                Explore Admissions 2026-27
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/hospital"
                className="px-8 py-4 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Hospital className="w-5 h-5 text-blue-400" />
                PMR Hospital & OPD Services
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Video Audio Control Overlay */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-6 right-6 z-20 px-3.5 py-2 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/20 text-white hover:bg-slate-900/80 transition-all flex items-center gap-2 text-xs font-semibold shadow-lg"
          title={isMuted ? "Unmute Video Sound" : "Mute Video Sound"}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-slate-300" />
              <span className="hidden sm:inline">Unmute Sound</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-blue-400 animate-pulse" />
              <span className="hidden sm:inline">Mute Sound</span>
            </>
          )}
        </button>
      </section>

      {/* 2. Key Portals Strip */}
      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: 250 MBBS Seats */}
          <Link href="/admissions/ug/seat-matrix" className="bg-white p-6 rounded-2xl border border-slate-200 shadow-institutional hover:border-blue-500 transition-all flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-blue-600 uppercase">Undergraduate</div>
              <div className="text-sm font-serif font-bold text-slate-900">250 MBBS Seats</div>
            </div>
          </Link>

          {/* Card 2: PG Specializations (MD / MS) */}
          <Link href="/admissions/pg/specializations" className="bg-white p-6 rounded-2xl border border-slate-200 shadow-institutional hover:border-blue-500 transition-all flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-blue-600 uppercase">Postgraduate</div>
              <div className="text-sm font-serif font-bold text-slate-900">PG Specializations (MD/MS)</div>
            </div>
          </Link>

          {/* Card 3: College of Nursing */}
          <Link href="/allied-sciences/nursing" className="bg-white p-6 rounded-2xl border border-slate-200 shadow-institutional hover:border-blue-500 transition-all flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-blue-600 uppercase">College of</div>
              <div className="text-sm font-serif font-bold text-slate-900">Nursing (B.Sc / M.Sc)</div>
            </div>
          </Link>

          {/* Card 4: College of Physiotherapy */}
          <Link href="/allied-sciences/physiotherapy" className="bg-white p-6 rounded-2xl border border-slate-200 shadow-institutional hover:border-blue-500 transition-all flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-blue-600 uppercase">College of</div>
              <div className="text-sm font-serif font-bold text-slate-900">Physiotherapy (BPT)</div>
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
      <section className="py-24 bg-slate-50/80 border-t border-b border-slate-200/60">
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
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
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

