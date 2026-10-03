"use client";

import Link from "next/link";
import { FileCheck, Download, ShieldCheck, FileText, CheckCircle2, AlertCircle } from "lucide-react";

export default function NmcPage() {
  const nmcDocs = [
    { title: "NMC Letter of Permission (LOP) for 250 MBBS Seats", code: "NMC/UG/PMRIMS/LOP-2026", size: "2.4 MB PDF" },
    { title: "Statutory Declaration & Mandate (Form-1)", code: "STAT/FORM-1/2026", size: "1.9 MB PDF" },
    { title: "Monthly Hospital Bed Occupancy Audit Report", code: "AUDIT/BEDS/1200/2026", size: "3.2 MB PDF" },
    { title: "AEBAS Bio-Metric Faculty Roll Compliance", code: "NMC/AEBAS/ROLL/2026", size: "1.4 MB PDF" },
    { title: "TS TAFRC Government Gazette Fee Order", code: "TAFRC/TS/GAZETTE/2026", size: "2.1 MB PDF" },
    { title: "Bio-Medical Waste Management Annual Authorization", code: "TSPCB/BMW/PMR/2026", size: "1.6 MB PDF" },
  ];

  return (
    <div className="py-16 bg-surface-light min-h-screen text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/">Home</Link> / <span className="text-emerald-brand">NMC Mandatory Disclosures</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-emerald-brand tracking-tight">
            NMC Statutory <span className="gold-gradient-text italic font-normal">Mandatory Disclosures</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl">
            In strict accordance with National Medical Commission (NMC) MSR guidelines and KNRUHS statutory transparency requirements.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-institutional mb-12">
          <div className="flex items-center gap-3 mb-6 p-4 rounded-2xl bg-emerald-50 text-emerald-950 border border-emerald-200">
            <ShieldCheck className="w-6 h-6 text-emerald-700 shrink-0" />
            <div className="text-xs font-technical">
              <strong>Statutory Compliance Verification:</strong> All documents listed below are audited and verified by National Medical Commission inspectors.
            </div>
          </div>

          <div className="space-y-4">
            {nmcDocs.map((doc, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-surface-light border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-emerald-brand">{doc.title}</h3>
                    <div className="text-xs text-slate-400 font-mono mt-0.5">{doc.code} • {doc.size}</div>
                  </div>
                </div>

                <a
                  href={`#`}
                  onClick={(e) => { e.preventDefault(); alert(`Downloading: ${doc.title}`); }}
                  className="px-4 py-2 rounded-xl bg-emerald-900 hover:bg-gold-brand text-gold-brand hover:text-emerald-950 text-xs font-bold transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <Download className="w-3.5 h-3.5" /> Download Official PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
