"use client";

import { motion } from "framer-motion";
import { Hospital, HeartPulse, Activity, Brain, Bone, Eye, Sparkles, Phone, Clock, MapPin } from "lucide-react";

export default function HospitalHighlights() {
  const departments = [
    {
      name: "Emergency & Level-1 Trauma",
      icon: HeartPulse,
      timing: "24 Hours / 7 Days",
      features: "Dedicated Triage, Resuscitation Bay, Cardiac Ambulances",
    },
    {
      name: "Super-Specialty ICU & Critical Care",
      icon: Activity,
      timing: "24 Hours / 7 Days",
      features: "Ventilators, Dialysis, Centralized Hemodynamic Monitors",
    },
    {
      name: "Neurology & Neurosurgery",
      icon: Brain,
      timing: "OPD 9:00 AM - 3:00 PM",
      features: "Stroke Protocol, Brain Mapping, Spine Surgery Wing",
    },
    {
      name: "Orthopedics & Joint Replacement",
      icon: Bone,
      timing: "OPD 9:00 AM - 4:00 PM",
      features: "Arthroscopy, Fracture Care, Total Knee & Hip Replacement",
    },
    {
      name: "Advanced Radiology & MRI",
      icon: Sparkles,
      timing: "24 Hours / 7 Days",
      features: "1.5T MRI Scanner, 128-Slice CT, 4D Ultrasound & Mammography",
    },
    {
      name: "Ophthalmology & ENT Surgery",
      icon: Eye,
      timing: "OPD 9:00 AM - 3:00 PM",
      features: "Phacoemulsification, Microscopic Ear Surgery, Laser Center",
    },
  ];

  return (
    <section id="hospital-highlights" className="py-24 bg-emerald-950 text-white relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-brand/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900 border border-gold-brand/30 text-gold-brand text-xs font-semibold uppercase tracking-wider mb-4">
            <Hospital className="w-3.5 h-3.5" /> 1200+ Bed Teaching Hospital
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            Clinical Care & <span className="gold-gradient-text italic font-normal">Diagnostic Excellence</span>
          </h2>
          <p className="text-slate-300 font-technical text-sm sm:text-base mt-3">
            Providing round-the-clock specialized care to over 1,000+ daily patients across Chevella & Telangana.
          </p>
        </div>

        {/* Clinical Specialty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {departments.map((dept, idx) => {
            const IconComp = dept.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-emerald-900/40 border border-gold-brand/20 hover:border-gold-brand/60 rounded-2xl p-6 shadow-xl backdrop-blur-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-gold-brand/30 flex items-center justify-center text-gold-brand shadow-md group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-gold-brand font-mono bg-emerald-950 px-2.5 py-1 rounded-md border border-gold-brand/20">
                      {dept.timing}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-gold-brand transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-xs text-slate-300 font-technical leading-relaxed">
                    {dept.features}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-emerald-800/60 flex items-center justify-between text-xs text-slate-400">
                  <span>Free OP Consultation</span>
                  <span className="text-gold-brand font-semibold">PMR Clinical Wing</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Hospital Contact Hotline Banner */}
        <div className="bg-gradient-to-r from-emerald-900 via-emerald-950 to-emerald-900 border-2 border-gold-brand/40 rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gold-brand text-emerald-950 flex items-center justify-center font-bold shadow-gold-glow shrink-0">
              <Phone className="w-8 h-8" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-gold-brand">PMR Hospital Desk & OPD Appointments</div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white mt-0.5">08417-299918</div>
              <div className="text-xs text-slate-300 font-technical mt-1 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-brand" /> Chevella Road, Rangareddy Dist, TS 501503
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full lg:w-auto">
            <a
              href="tel:08417299918"
              className="w-full lg:w-auto px-8 py-4 rounded-xl bg-gold-brand hover:bg-gold-muted text-emerald-950 font-extrabold text-xs uppercase tracking-wider text-center shadow-gold-glow transition-all"
            >
              Call Hospital Reception →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
