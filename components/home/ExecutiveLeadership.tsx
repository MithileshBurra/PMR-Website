"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, ShieldCheck, CheckCircle2, Award, GraduationCap } from "lucide-react";

export default function ExecutiveLeadership() {
  return (
    <section id="executive-leadership" className="py-20 bg-slate-50/80 text-charcoal relative overflow-hidden border-t border-b border-slate-200/80">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-24">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <ShieldCheck className="w-4 h-4 text-blue-600" /> Institutional Vision & Leadership
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight"
          >
            Guiding <span className="text-blue-600 italic font-normal">PMRIMS</span> Towards Healthcare Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 mt-4 text-base sm:text-lg font-technical font-light max-w-2xl mx-auto"
          >
            Distinguished leaders committed to democratizing medical education and creating state-of-the-art clinical facilities for the region.
          </motion.p>
        </div>

        {/* 1. Chairman Block */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-lg border border-slate-200/80"
        >
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white p-2 group">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/images/chairman.jpg"
                  alt="Dr. Patnam Mahender Reddy Garu - Chairman"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded bg-blue-600 text-white font-extrabold text-[11px] uppercase tracking-wider shadow">
                    Chairman
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold mt-2 text-white">Dr. Patnam Mahender Reddy Garu</h3>
                  <p className="text-xs text-slate-200 font-technical">Chairman, PMRIMS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Statement & Bio Column */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1.5 mb-3">
                <Award className="w-4 h-4 text-blue-600" /> Chairman&apos;s Institutional Mandate
              </span>

              {/* Quote Block - Spacious & Elegant Layout */}
              <div className="relative p-6 sm:p-8 bg-blue-50/60 rounded-2xl border-l-4 border-blue-600 mb-6">
                <Quote className="w-8 h-8 text-blue-600/30 absolute top-4 right-4" />
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-slate-900 leading-relaxed">
                  &ldquo;Cultivating Clinical Expertise with <span className="text-blue-600 italic font-normal">Ethical Care</span> & Accessible Healthcare.&rdquo;
                </h3>
              </div>

              {/* Detailed Bio Paragraphs */}
              <div className="space-y-4 text-slate-700 font-technical text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>Dr. Patnam Mahender Reddy Garu</strong> was born on 23rd September 1963 in Golluriguda, Shabad Mandal, Ranga Reddy District, Telangana. A veterinary doctor by profession and a distinguished politician, he served as a four-time MLA from the Tandur constituency and as Telangana’s first Minister for Transportation from 2014 to 2018.
                </p>
                <p>
                  Driven by a vision to bring quality medical education and healthcare to the people of the region, Dr. Patnam Mahender Reddy Garu founded the <strong>Patnam Mahender Reddy Institute of Medical Sciences (PMRIMS)</strong> in 2019 at Chevella, Ranga Reddy District. The institution reflects his lifelong belief that quality healthcare and medical education must be accessible to all.
                </p>
              </div>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200 text-xs font-semibold text-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>NMC Statutory Compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>1200+ Bed Teaching Hospital</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Advanced Super Specialties</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Community Healthcare Mission</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. Vice Chairman Block */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-lg border border-slate-200/80"
        >
          {/* Statement & Bio Column */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 order-2 lg:order-1">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 flex items-center gap-1.5 mb-3">
                <GraduationCap className="w-4 h-4 text-indigo-600" /> Vice Chairman&apos;s Vision
              </span>

              {/* Quote Block - Spacious & Elegant Layout */}
              <div className="relative p-6 sm:p-8 bg-indigo-50/60 rounded-2xl border-l-4 border-indigo-600 mb-6">
                <Quote className="w-8 h-8 text-indigo-600/30 absolute top-4 right-4" />
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-slate-900 leading-relaxed">
                  &ldquo;Empowering Next-Gen Physicians Through <span className="text-indigo-600 italic font-normal">Educational Excellence & Innovation</span>.&rdquo;
                </h3>
              </div>

              {/* Detailed Bio Paragraphs */}
              <div className="space-y-4 text-slate-700 font-technical text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>Sri A. Varada Reddy Garu</strong> is a pioneer in providing quality education whose efforts have transformed the lives of many youngsters. A man known for discipline and vision, Sri Varada Reddy has been serving the field of education since 1976. With his unstinted efforts, SR Educational Institutions have become a trusted brand name.
                </p>
                <p>
                  The society runs 200+ educational institutions including schools, junior colleges, degree colleges, and professional colleges managed by the SR Group across Telangana, Andhra Pradesh, and Karnataka. The crowning achievement of his educational journey is the establishment of <strong>SR University, Warangal</strong> — a premier institution of higher learning that stands as a testament to his vision of bringing internationally benchmarked education to the heart of Telangana. International standards and values are given high priority across all SR institutions, and Sri Varada Reddy has made quality consciousness coupled with ethical practices the very DNA of the SR Group.
                </p>
              </div>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200 text-xs font-semibold text-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>45+ Years Educational Leadership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>200+ Institutions Across 3 States</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Founder, SR University Warangal</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Benchmarked Quality & Ethical Values</span>
              </div>
            </div>
          </div>

          {/* Portrait Column */}
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white p-2 group">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/images/vice_chairman.jpg"
                  alt="Sri A. Varada Reddy Garu - Vice Chairman"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded bg-indigo-600 text-white font-extrabold text-[11px] uppercase tracking-wider shadow">
                    Vice Chairman
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold mt-2 text-white">Sri A. Varada Reddy Garu</h3>
                  <p className="text-xs text-slate-200 font-technical">Vice Chairman, PMRIMS</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

