"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, Hospital, ArrowUpRight, BookOpen, Stethoscope, Users, Building, Shield, Cpu, Clock, FileCheck } from "lucide-react";

export default function DualPersonaGrid() {
  const [activeTab, setActiveTab] = useState<"academic" | "clinical">("academic");

  return (
    <section className="py-24 bg-surface-light text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-muted flex items-center gap-1.5 mb-2">
              <Shield className="w-4 h-4 text-emerald-brand" /> Institutional Segmentation
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-emerald-brand">
              Dual Portals of <span className="gold-gradient-text italic font-normal">Excellence</span>
            </h2>
          </div>

          {/* Interactive Switcher */}
          <div className="flex items-center p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300 w-fit">
            <button
              onClick={() => setActiveTab("academic")}
              className={`px-6 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === "academic"
                  ? "bg-emerald-brand text-gold-brand shadow-lg"
                  : "text-slate-600 hover:text-emerald-brand"
              }`}
            >
              <GraduationCap className="w-4 h-4" /> Academic Portal
            </button>
            <button
              onClick={() => setActiveTab("clinical")}
              className={`px-6 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === "clinical"
                  ? "bg-emerald-brand text-gold-brand shadow-lg"
                  : "text-slate-600 hover:text-emerald-brand"
              }`}
            >
              <Hospital className="w-4 h-4" /> Clinical Hospital
            </button>
          </div>
        </div>

        {/* Dual Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card A: ACADEMIC PORTAL */}
          <motion.div
            id="academic-portal"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className={`group relative rounded-3xl p-8 sm:p-10 border transition-all duration-300 flex flex-col justify-between ${
              activeTab === "academic"
                ? "bg-white border-gold-brand shadow-institutional ring-2 ring-gold-brand/20"
                : "bg-white/80 border-slate-200 hover:border-gold-brand/50 shadow-md"
            }`}
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-emerald-900 text-gold-brand flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                  NMC Recognized
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-brand mb-4 group-hover:text-emerald-900 transition-colors">
                Academic & Medical Education Portal
              </h3>
              <p className="text-slate-600 font-technical text-sm leading-relaxed mb-8">
                Empowering the next generation of medical specialists through rigorous MBBS curricula, postgraduate MD/MS clinical residencies, advanced anatomy labs, and central library resources.
              </p>

              {/* Feature Grid List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-surface-light border border-slate-100 flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-gold-muted shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-xs text-emerald-950 uppercase">MBBS Undergraduate</div>
                    <div className="text-xs text-slate-500">150 Annual Seats, NEET UG Intake</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-surface-light border border-slate-100 flex items-start gap-3">
                  <Stethoscope className="w-5 h-5 text-gold-muted shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-xs text-emerald-950 uppercase">PG MD / MS Courses</div>
                    <div className="text-xs text-slate-500">Clinical Speciality Residency</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-surface-light border border-slate-100 flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-gold-muted shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-xs text-emerald-950 uppercase">NMC Seat Matrix</div>
                    <div className="text-xs text-slate-500">Regulatory Tuition & Quota Rules</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-surface-light border border-slate-100 flex items-start gap-3">
                  <Users className="w-5 h-5 text-gold-muted shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-xs text-emerald-950 uppercase">Professor Directory</div>
                    <div className="text-xs text-slate-500">Renowned Medical Faculty</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action CTA Link */}
            <Link
              href="#nmc-matrix"
              className="w-full py-4 rounded-xl bg-emerald-brand hover:bg-emerald-900 text-gold-brand font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              Access Academic Matrix & Admissions <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Card B: CLINICAL HOSPITAL PORTAL */}
          <motion.div
            id="clinical-portal"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className={`group relative rounded-3xl p-8 sm:p-10 border transition-all duration-300 flex flex-col justify-between ${
              activeTab === "clinical"
                ? "bg-white border-gold-brand shadow-institutional ring-2 ring-gold-brand/20"
                : "bg-white/80 border-slate-200 hover:border-gold-brand/50 shadow-md"
            }`}
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gold-brand text-emerald-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Hospital className="w-7 h-7" />
                </div>
                <span className="px-3.5 py-1 rounded-full bg-red-50 text-red-700 border border-red-200 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span> 24/7 Emergency Active
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-brand mb-4 group-hover:text-emerald-900 transition-colors">
                PMR Hospital & Clinical Care
              </h3>
              <p className="text-slate-600 font-technical text-sm leading-relaxed mb-8">
                A 1200+ bed multispecialty hospital complex serving Chevella and Rangareddy district with round-the-clock intensive care units, 1.5T MRI, 128-slice CT, and surgical suites.
              </p>

              {/* Feature Image Frame */}
              <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-8 border border-slate-200">
                <Image
                  src="/images/hospital_facility.jpg"
                  alt="1200 Bed PMR Hospital ICU Unit"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-gold-brand">Clinical Infrastructure</div>
                  <div className="text-sm font-serif">1200 Bed Capacity & 45+ Super Specialties</div>
                </div>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-3.5 rounded-xl bg-surface-light border border-slate-100 flex items-center gap-3">
                  <Building className="w-5 h-5 text-emerald-800" />
                  <span className="text-xs font-bold text-slate-800">1200+ Teaching Beds</span>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-light border border-slate-100 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-emerald-800" />
                  <span className="text-xs font-bold text-slate-800">Daily OPD 8:00 AM - 4:00 PM</span>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-light border border-slate-100 flex items-center gap-3">
                  <Cpu className="w-5 h-5 text-emerald-800" />
                  <span className="text-xs font-bold text-slate-800">Advanced 1.5T MRI & CT</span>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-light border border-slate-100 flex items-center gap-3">
                  <Stethoscope className="w-5 h-5 text-emerald-800" />
                  <span className="text-xs font-bold text-slate-800">Free Patient OPD Services</span>
                </div>
              </div>
            </div>

            {/* Action CTA Link */}
            <Link
              href="#hospital-highlights"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-brand to-gold-muted text-emerald-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:opacity-95 transition-all"
            >
              Explore PMR Hospital & OPD Schedule <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
