"use client";

import { motion } from "framer-motion";
import { Hospital, GraduationCap, Users, HeartPulse, Building2, ShieldCheck } from "lucide-react";

export default function QuickStats() {
  const stats = [
    {
      icon: Hospital,
      value: "1200+",
      label: "Teaching Hospital Beds",
      subtext: "Equipped with intensive care & surgical suites",
      color: "from-emerald-900 to-emerald-950",
      accent: "text-gold-brand",
    },
    {
      icon: GraduationCap,
      value: "150",
      label: "Annual MBBS Seats",
      subtext: "National Medical Commission approved intake",
      color: "from-emerald-950 to-slate-900",
      accent: "text-gold-brand",
    },
    {
      icon: Users,
      value: "1,000+",
      label: "Daily OPD Outpatients",
      subtext: "Free clinical consultation for Chevella & district",
      color: "from-slate-900 to-emerald-950",
      accent: "text-gold-brand",
    },
    {
      icon: HeartPulse,
      value: "45+",
      label: "Specialties & Super-Specialties",
      subtext: "Cardiology, Neurology, Nephrology & Orthopedics",
      color: "from-emerald-900 to-emerald-950",
      accent: "text-gold-brand",
    },
  ];

  return (
    <section className="py-20 bg-emerald-brand text-white relative overflow-hidden">
      {/* Background Subtle Gradient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-gold-brand/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold-brand flex items-center justify-center gap-1.5 mb-3">
            <ShieldCheck className="w-4 h-4" /> Institutional Footprint
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
            PMRIMS By The <span className="gold-gradient-text italic font-normal">Numbers</span>
          </h2>
          <p className="text-slate-300 text-sm font-technical mt-2">
            Verified institutional metrics reflecting our academic capacity and patient throughput.
          </p>
        </div>

        {/* Asymmetrical Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative rounded-3xl p-8 bg-emerald-900/60 border border-gold-brand/30 shadow-2xl backdrop-blur-md flex flex-col justify-between group overflow-hidden"
              >
                {/* Subtle Hover Gradient Fill */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-brand/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-950 border border-gold-brand/40 flex items-center justify-center text-gold-brand mb-6 shadow-gold-glow group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-2">
                    <span className="gold-gradient-text">{stat.value}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-100 mb-1">{stat.label}</h3>
                  <p className="text-xs text-slate-400 font-technical leading-relaxed">{stat.subtext}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-emerald-800/80 flex items-center justify-between text-[11px] text-gold-muted font-semibold uppercase tracking-wider">
                  <span>PMR Verified</span>
                  <span>2026 Mandate</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
