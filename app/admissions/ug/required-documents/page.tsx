import Link from "next/link";
import { ADMISSIONS_CONFIG } from "@/config/admissions-docs";
import { getDocumentsByCategory } from "@/config/documents";
import { FileText, Download, CheckCircle2, AlertCircle, ArrowLeft, ExternalLink, FileCheck } from "lucide-react";

export default function UGRequiredDocumentsPage() {
  const admissionPdfDocs = getDocumentsByCategory("ug-document");

  return (
    <div className="py-16 bg-transparent min-h-screen text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <span>Admissions</span>
            <span>/</span>
            <span className="text-blue-600">Required Documents Checklist</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            MBBS Admission <span className="text-blue-600 italic font-normal">Required Documents</span> & Official PDFs
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl leading-relaxed">
            Official mandatory document checklist and downloadable instructions, fee schedules, and admission bond formats for MBBS Candidates allotted under {ADMISSIONS_CONFIG.academicYear} KNRUHS Counselling.
          </p>
        </div>

        {/* Verification Instructions Note */}
        <div className="mb-10 p-6 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950 shadow-sm flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-sm text-amber-900">Mandatory Verification Guidelines for Session {ADMISSIONS_CONFIG.academicYear}</h3>
            <p className="text-xs text-amber-800 font-technical mt-1 leading-relaxed">
              Candidates must submit all <strong>Original Certificates</strong> along with specified sets of self-attested photocopies during physical reporting at the PMRIMS Academic Block, Chevella Campus. Laminated original certificates must be un-laminated prior to submission.
            </p>
          </div>
        </div>

        {/* NEW: Official Downloadable PDF Documents Block */}
        <div className="mb-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-institutional">
          <div className="flex items-center gap-2 mb-6 border-b border-slate-200 pb-3">
            <FileCheck className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-serif font-bold text-slate-900">
              Official Admissions Downloads & Instructions (2026-2027)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {admissionPdfDocs.map((pdf) => (
              <div
                key={pdf.id}
                className="p-6 rounded-2xl bg-transparent border border-slate-200 hover:border-blue-500 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-extrabold uppercase tracking-wider">
                    {pdf.academicYear}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-2 group-hover:text-blue-600 transition-colors leading-snug">
                    {pdf.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-technical leading-relaxed">
                    {pdf.description}
                  </p>
                  <div className="text-[11px] font-mono text-blue-700 mt-2">
                    Size: {pdf.fileSize}
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-slate-200">
                  <a
                    href={pdf.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-300 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-blue-600" /> View PDF
                  </a>
                  <a
                    href={pdf.pdfUrl}
                    download
                    className="flex-1 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" /> Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>



        {/* Back Link */}
        <div className="flex items-center justify-between">
          <Link
            href="/admissions/ug/seat-matrix"
            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" /> Back to MBBS Seat Matrix
          </Link>
        </div>
      </div>
    </div>
  );
}
