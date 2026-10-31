"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Play, Award, GraduationCap, Hospital, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-emerald-950 text-white">
      {/* Background Media Layer - Ambient Image/Video Canvas */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/PMR IMAGES/Campus/HomePage_Thumbnail.png"
          alt="PMRIMS Chevella Campus Architecture"
          fill
          priority
          className="object-cover object-center opacity-35 scale-105 transition-transform duration-10000 animate-pulse-slow"
        />
        {/* Dynamic Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-emerald-950/60 to-emerald-950" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 w-full">
        <div className="max-w-3xl">
          {/* Institutional Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/80 border border-gold-brand/40 backdrop-blur-md mb-6 shadow-gold-glow"
          >
            <Sparkles className="w-4 h-4 text-gold-brand animate-spin-slow" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-brand">
              Premier NMC Recognised Medical Institute & 1200+ Bed Hospital
            </span>
          </motion.div>

          {/* Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-[1.15] mb-6"
          >
            Cultivating <span className="gold-gradient-text italic font-normal">Clinical Mastery</span> & Ethical Healthcare.
          </motion.h1>

          {/* Subtitle Body Text */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-2xl font-technical"
          >
            Dr. Patnam Mahender Reddy Institute of Medical Sciences delivers world-class medical education, state-of-the-art diagnostic laboratories, and compassionate healthcare to over 1,000+ patients daily at Chevella, Telangana.
          </motion.p>

          {/* Dual CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
          >
            {/* Primary Solid Gold Button */}
            <Link
              href="#academic-portal"
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-gold-brand to-gold-muted text-emerald-950 font-extrabold text-sm uppercase tracking-wider shadow-gold-glow hover:opacity-95 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <GraduationCap className="w-5 h-5 text-emerald-950" />
              Explore Academic Programs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>

            {/* Ghost Button for PMR Hospital */}
            <Link
              href="#clinical-portal"
              className="px-8 py-4 rounded-xl border border-gold-brand/40 bg-emerald-900/40 hover:bg-emerald-900/80 backdrop-blur-md text-white font-bold text-sm uppercase tracking-wider transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <Hospital className="w-5 h-5 text-gold-brand" />
              PMR Hospital Services
            </Link>
          </motion.div>

          {/* Quick Institutional Highlights Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-14 pt-8 border-t border-emerald-800/80 grid grid-cols-2 sm:grid-cols-3 gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-900/80 border border-gold-brand/30 flex items-center justify-center text-gold-brand shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-bold font-serif text-white">150 Seats</div>
                <div className="text-xs text-slate-400">Annual MBBS Intake</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-900/80 border border-gold-brand/30 flex items-center justify-center text-gold-brand shrink-0">
                <Hospital className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-bold font-serif text-white">1200+ Beds</div>
                <div className="text-xs text-slate-400">Teaching Hospital Facility</div>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-900/80 border border-gold-brand/30 flex items-center justify-center text-gold-brand shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-bold font-serif text-white">NMC Approved</div>
                <div className="text-xs text-slate-400">Ministry of Health Recognised</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
