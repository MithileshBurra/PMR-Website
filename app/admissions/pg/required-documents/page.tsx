import Link from "next/link";
import { ADMISSIONS_CONFIG } from "@/config/admissions-docs";
import { FileText, AlertCircle, ArrowLeft } from "lucide-react";

export default function PGRequiredDocumentsPage() {
  return (
    <div className="py-16 bg-surface-light min-h-screen text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-emerald-brand">Home</Link>
            <span>/</span>
            <span>Admissions</span>
            <span>/</span>
            <span className="text-emerald-brand">PG Required Documents</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-emerald-brand tracking-tight">
            Postgraduate <span className="gold-gradient-text italic font-normal">Required Documents</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl">
            Mandatory documents for MD / MS Candidates reporting for Session <span className="font-bold text-emerald-950 font-mono">{ADMISSIONS_CONFIG.academicYear}</span>.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-institutional mb-12">
          <div className="space-y-4">
            {ADMISSIONS_CONFIG.pgRequiredDocuments.map((doc, idx) => (
              <div
                key={doc.id}
                className="p-5 rounded-2xl bg-surface-light border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-900 text-gold-brand font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-emerald-950">{doc.title}</h3>
                    <p className="text-xs text-slate-500 font-technical mt-0.5">{doc.description}</p>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-red-100 text-red-800">
                    Original Required
                  </span>
                  <div className="text-[11px] text-slate-500 font-mono mt-0.5">{doc.copiesRequired} Sets Copies</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/admissions/pg/specializations"
          className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" /> Back to PG Specializations
        </Link>
      </div>
    </div>
  );
}
