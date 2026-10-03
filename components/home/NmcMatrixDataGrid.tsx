"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Download, ShieldCheck, Search, Filter, ExternalLink, CheckCircle2, AlertCircle } from "lucide-react";

export default function NmcMatrixDataGrid() {
  const [activeCategory, setActiveCategory] = useState<"mbbs" | "pg" | "documents">("mbbs");
  const [searchTerm, setSearchTerm] = useState("");

  const mbbsSeatMatrix = [
    {
      category: "Category-A (Convenor Quota)",
      percentage: "50%",
      seats: 75,
      eligibility: "NEET UG Qualified & TS MEDADMISSIONS Counselling",
      feeStructure: "Government Fixed Regulatory Fee",
      status: "Verified Open",
    },
    {
      category: "Category-B (Management Quota)",
      percentage: "35%",
      seats: 53,
      eligibility: "NEET UG Merit Rank All India & TS State",
      feeStructure: "TS TAFRC Regulatory Slab",
      status: "Verified Open",
    },
    {
      category: "Category-C (NRI Quota)",
      percentage: "15%",
      seats: 22,
      eligibility: "NEET UG Qualified & NRI Sponsorship Documents",
      feeStructure: "TAFRC Approved NRI Slab",
      status: "Verified Open",
    },
  ];

  const pgSeatMatrix = [
    {
      specialty: "MD General Medicine",
      duration: "3 Years",
      seats: 8,
      recognition: "NMC Approved & Kaloji Narayana Rao University (KNRUHS)",
      status: "Active Rotation",
    },
    {
      specialty: "MS General Surgery",
      duration: "3 Years",
      seats: 6,
      recognition: "NMC Approved & KNRUHS Affiliated",
      status: "Active Rotation",
    },
    {
      specialty: "MD Pediatrics",
      duration: "3 Years",
      seats: 4,
      recognition: "NMC Approved & KNRUHS Affiliated",
      status: "Active Rotation",
    },
    {
      specialty: "MD Radiodiagnosis",
      duration: "3 Years",
      seats: 5,
      recognition: "NMC Approved & KNRUHS Affiliated",
      status: "Active Rotation",
    },
    {
      specialty: "MS Orthopedics",
      duration: "3 Years",
      seats: 4,
      recognition: "NMC Approved & KNRUHS Affiliated",
      status: "Active Rotation",
    },
    {
      specialty: "MS Obstetrics & Gynecology",
      duration: "3 Years",
      seats: 6,
      recognition: "NMC Approved & KNRUHS Affiliated",
      status: "Active Rotation",
    },
  ];

  const nmcDocuments = [
    {
      title: "NMC LOP & Recognition Order for MBBS",
      code: "NMC/UG/PMRIMS/2026",
      size: "2.4 MB PDF",
      updated: "2026 Official",
    },
    {
      title: "TS TAFRC Fee Structure Gazette Notification",
      code: "TS-MED-FEE-2026",
      size: "1.8 MB PDF",
      updated: "Govt Order",
    },
    {
      title: "Hospital Bed Strength & Infrastructure Declaration",
      code: "PMR/HOSP/1200BEDS",
      size: "3.1 MB PDF",
      updated: "Audit Compliance",
    },
    {
      title: "Faculty & Staff Bio-Metric Roll Compliance",
      code: "NMC/FAC/ROLL/2026",
      size: "1.2 MB PDF",
      updated: "Monthly Audit",
    },
  ];

  return (
    <section id="nmc-matrix" className="py-24 bg-surface-light text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/10 border border-emerald-900/20 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-muted" /> Statutory Transparency
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-emerald-brand">
            NMC Seat Matrix & <span className="gold-gradient-text italic font-normal">Regulatory Disclosures</span>
          </h2>
          <p className="text-slate-600 font-technical text-sm sm:text-base mt-3">
            In compliance with National Medical Commission (NMC) directives and Kaloji Narayana Rao University of Health Sciences (KNRUHS) regulations.
          </p>
        </div>

        {/* Tab Switcher & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-white p-3 rounded-2xl border border-slate-200 shadow-md">
          {/* Tabs */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto">
            <button
              onClick={() => setActiveCategory("mbbs")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeCategory === "mbbs"
                  ? "bg-emerald-brand text-gold-brand shadow-md"
                  : "text-slate-600 hover:text-emerald-brand"
              }`}
            >
              MBBS Seat Matrix (150 Seats)
            </button>
            <button
              onClick={() => setActiveCategory("pg")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeCategory === "pg"
                  ? "bg-emerald-brand text-gold-brand shadow-md"
                  : "text-slate-600 hover:text-emerald-brand"
              }`}
            >
              Postgraduate MD / MS
            </button>
            <button
              onClick={() => setActiveCategory("documents")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeCategory === "documents"
                  ? "bg-emerald-brand text-gold-brand shadow-md"
                  : "text-slate-600 hover:text-emerald-brand"
              }`}
            >
              NMC Affiliation Downloads
            </button>
          </div>

          {/* Quick Filter Info */}
          <div className="text-xs text-slate-500 font-technical flex items-center gap-1.5 px-3">
            <AlertCircle className="w-4 h-4 text-gold-muted" /> NEET UG 2026 Allotment Active
          </div>
        </div>

        {/* Category Content Panels (Modern Card-Row System replacing legacy HTML tables) */}
        {activeCategory === "mbbs" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            {mbbsSeatMatrix.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-gold-brand shadow-sm hover:shadow-institutional transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-900 text-gold-brand flex items-center justify-center font-serif font-bold text-lg shrink-0 mt-1">
                    {item.percentage}
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-900 text-[10px] font-extrabold uppercase tracking-wider">
                      Quota Category
                    </span>
                    <h3 className="text-xl font-serif font-bold text-emerald-brand mt-1">{item.category}</h3>
                    <p className="text-xs text-slate-500 font-technical mt-1">{item.eligibility}</p>
                  </div>
                </div>

                <div className="flex items-center gap-8 border-t md:border-t-0 border-slate-100 pt-4 md:pt-0 justify-between md:justify-end">
                  <div className="text-left md:text-right">
                    <div className="text-2xl font-serif font-bold text-emerald-brand">{item.seats} Seats</div>
                    <div className="text-xs text-slate-400 font-technical">{item.feeStructure}</div>
                  </div>

                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" /> {item.status}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeCategory === "pg" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {pgSeatMatrix.map((pg, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-gold-brand shadow-sm hover:shadow-institutional transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded bg-gold-brand/20 text-emerald-950 text-[10px] font-extrabold uppercase tracking-wider">
                      MD / MS Clinical Specialization
                    </span>
                    <span className="text-xs font-bold text-emerald-900 font-mono">{pg.duration}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-emerald-brand mb-2">{pg.specialty}</h3>
                  <p className="text-xs text-slate-500 font-technical mb-4">{pg.recognition}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-bold text-emerald-950">{pg.seats} Approved Seats</span>
                  <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {pg.status}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeCategory === "documents" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {nmcDocuments.map((doc, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-gold-brand shadow-sm hover:shadow-institutional transition-all flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-red-700 flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-emerald-brand leading-snug">{doc.title}</h3>
                    <div className="text-xs text-slate-400 font-technical mt-1 flex items-center gap-2">
                      <span className="font-mono text-emerald-800">{doc.code}</span>
                      <span>•</span>
                      <span>{doc.size}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => alert(`Downloading official document: ${doc.title}`)}
                  className="p-3 rounded-xl bg-emerald-900 hover:bg-gold-brand text-gold-brand hover:text-emerald-950 transition-colors shrink-0 shadow-md"
                  title="Download Official PDF Document"
                >
                  <Download className="w-5 h-5" />
                </button>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
