"use client";

import Link from "next/link";
import { FileText, Download, ShieldCheck, ArrowLeft, ExternalLink, Stethoscope, Award, CheckCircle2 } from "lucide-react";
import { getDocumentById } from "@/config/documents";

const CLINICAL_DEPARTMENTS = [
  { sno: 1, department: "General Medicine", course: "MD" },
  { sno: 2, department: "General Surgery", course: "MS" },
  { sno: 3, department: "Anaesthesiology", course: "MD" },
  { sno: 4, department: "Paediatrics", course: "MD" },
  { sno: 5, department: "Orthopaedics", course: "MS" },
  { sno: 6, department: "Obstetrics & Gynaecology", course: "MS" },
  { sno: 7, department: "Radio-Diagnosis", course: "MD" },
  { sno: 8, department: "Dermatology, Venereology & Leprosy (DVL)", course: "MD" },
  { sno: 9, department: "Psychiatry", course: "MD" },
  { sno: 10, department: "Respiratory Medicine", course: "MD" },
  { sno: 11, department: "Ophthalmology", course: "MS" },
  { sno: 12, department: "Otorhinolaryngology (ENT)", course: "MS" },
];

const PRE_PARA_DEPARTMENTS = [
  { sno: 1, department: "Pathology", course: "MD", classification: "Para-Clinical" },
  { sno: 2, department: "Microbiology", course: "MD", classification: "Para-Clinical" },
  { sno: 3, department: "Biochemistry", course: "MD", classification: "Pre-Clinical" },
];

export default function PGPermissionsPage() {
  const masterDoc = getDocumentById("nmc-pg-permissions-renewal-2026-27");
  const pdfUrl = masterDoc?.pdfUrl || "/documents/permissions/pg/NMC-PG-Permissions-Renewal-AY-2026-27.pdf";
  const refNo = masterDoc?.referenceNo || "No.N-P011(20)/5/2026-PGMEB-NMC";
  const issuedBy = masterDoc?.issuedBy || "Post-Graduate Medical Education Board (PGMEB), National Medical Commission";
  const fileSize = masterDoc?.fileSize || "564 KB";

  return (
    <div className="py-16 bg-transparent min-h-screen text-charcoal font-technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumb Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span>NMC</span>
            <span>/</span>
            <span className="text-blue-600">PG Permissions &amp; MD/MS Orders</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            NMC <span className="text-blue-600 italic font-normal">PG Permissions</span> &amp; Renewal Orders
          </h1>
          <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-3xl leading-relaxed">
            Official Renewal of Broad Specialty (MD/ MS) courses permission orders issued by the Post-Graduate Medical Education Board (PGMEB), National Medical Commission for Academic Year 2026–27 at Dr. PMRIMS.
          </p>
        </div>

        {/* Audit Compliance Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-institutional mb-10">
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-blue-50 text-blue-950 border border-blue-200 mb-8">
            <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" />
            <div className="text-xs sm:text-sm leading-relaxed">
              <strong>Statutory Compliance Verification:</strong> The Post-Graduate Medical Education Board (PGMEB), NMC has accorded renewal to all 15 Postgraduate Medical Specialties (12 Clinical + 3 Pre &amp; Para-Clinical) based on assessment of ADR-2025. Total approved PG Intake Capacity: <strong>94 Seats</strong>.
            </div>
          </div>

          {/* SECTION 1: Clinical Specialties (12 Departments) */}
          <div className="mb-14">
            <div className="flex items-center justify-between gap-4 mb-6 border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-serif font-bold text-slate-900">
                  1. Clinical Specialty MD / MS Permissions (12 Departments)
                </h2>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> 12 Clinical Specialties
              </span>
            </div>

            {/* Department List Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-6">
              <table className="w-full text-left text-sm font-technical border-collapse">
                <thead className="bg-slate-50 text-slate-700 uppercase text-[11px] font-extrabold tracking-wider border-b border-slate-200">
                  <tr>
                    <th scope="col" className="py-3.5 px-4 sm:px-6 w-20 text-center">S.No.</th>
                    <th scope="col" className="py-3.5 px-4 sm:px-6">Department</th>
                    <th scope="col" className="py-3.5 px-4 sm:px-6 w-28 text-center">Course</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {CLINICAL_DEPARTMENTS.map((row) => (
                    <tr key={row.sno} className="hover:bg-blue-50/40 transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 text-center font-mono font-semibold text-slate-500">
                        {row.sno}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900">
                        {row.department}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-center">
                        <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-extrabold ${
                          row.course === "MD"
                            ? "bg-blue-100 text-blue-800 border border-blue-200"
                            : "bg-indigo-100 text-indigo-800 border border-indigo-200"
                        }`}>
                          {row.course}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Document Card: Clinical PDF Attachment */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group shadow-sm hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform shadow-md shadow-blue-600/20">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-extrabold uppercase tracking-wide">
                      Academic Year 2026–27
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-900 text-[10px] font-extrabold uppercase tracking-wide border border-emerald-300">
                      12 Clinical Departments
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-bold uppercase">
                      NMC Renewal Order
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    NMC Renewal of Broad Specialty (MD/ MS) Courses Order (AY 2026–27)
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Official order issued by the Post-Graduate Medical Education Board (PGMEB), National Medical Commission for renewal of MD / MS broad specialty courses based on assessment of ADR-2025.
                  </p>
                  <div className="text-xs font-mono text-blue-700 mt-1.5 flex flex-wrap items-center gap-3">
                    <span>Ref: {refNo}</span>
                    <span>•</span>
                    <span>Dated: 10-11-2026</span>
                    <span>•</span>
                    <span>Issued by: {issuedBy}</span>
                    <span>•</span>
                    <span className="font-semibold text-slate-700">{fileSize}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 border-t sm:border-t-0 border-slate-200 pt-3 sm:pt-0">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-300 transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <ExternalLink className="w-4 h-4 text-blue-600" /> View PDF
                </a>
                <a
                  href={pdfUrl}
                  download
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4" /> Download
                </a>
              </div>
            </div>
          </div>

          {/* SECTION 2: Pre & Para-Clinical Departments (3) */}
          <div>
            <div className="flex items-center justify-between gap-4 mb-6 border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-600" />
                <h2 className="text-xl font-serif font-bold text-slate-900">
                  2. Pre &amp; Para-Clinical Departments (3)
                </h2>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" /> 3 Pre &amp; Para Specialties
              </span>
            </div>

            {/* Department List Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-6">
              <table className="w-full text-left text-sm font-technical border-collapse">
                <thead className="bg-slate-50 text-slate-700 uppercase text-[11px] font-extrabold tracking-wider border-b border-slate-200">
                  <tr>
                    <th scope="col" className="py-3.5 px-4 sm:px-6 w-20 text-center">S.No.</th>
                    <th scope="col" className="py-3.5 px-4 sm:px-6">Department</th>
                    <th scope="col" className="py-3.5 px-4 sm:px-6 w-28 text-center">Course</th>
                    <th scope="col" className="py-3.5 px-4 sm:px-6 w-36 text-center">Classification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {PRE_PARA_DEPARTMENTS.map((row) => (
                    <tr key={row.sno} className="hover:bg-indigo-50/40 transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 text-center font-mono font-semibold text-slate-500">
                        {row.sno}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900">
                        {row.department}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-center">
                        <span className="inline-block px-3 py-0.5 rounded-full text-xs font-extrabold bg-blue-100 text-blue-800 border border-blue-200">
                          {row.course}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-center">
                        <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                          {row.classification}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Document Card: Pre & Para PDF Attachment */}
            <div className="p-5 sm:p-6 rounded-2xl bg-indigo-50/40 border border-indigo-200/80 hover:border-indigo-500 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group shadow-sm hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform shadow-md shadow-indigo-600/20">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded bg-indigo-100 text-indigo-800 text-[10px] font-extrabold uppercase tracking-wide">
                      Academic Year 2026–27
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-purple-100 text-purple-900 text-[10px] font-extrabold uppercase tracking-wide border border-purple-200">
                      Pre &amp; Para-Clinical (3 Departments)
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-bold uppercase">
                      NMC Renewal Order
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    NMC Renewal of Broad Specialty (MD/ MS) Courses Order (AY 2026–27)
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Official order issued by the Post-Graduate Medical Education Board (PGMEB), National Medical Commission for renewal of MD / MS broad specialty courses based on assessment of ADR-2025.
                  </p>
                  <div className="text-xs font-mono text-indigo-700 mt-1.5 flex flex-wrap items-center gap-3">
                    <span>Ref: {refNo}</span>
                    <span>•</span>
                    <span>Dated: 10-11-2026</span>
                    <span>•</span>
                    <span>Issued by: {issuedBy}</span>
                    <span>•</span>
                    <span className="font-semibold text-slate-700">{fileSize}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 border-t sm:border-t-0 border-slate-200 pt-3 sm:pt-0">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-300 transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <ExternalLink className="w-4 h-4 text-indigo-600" /> View PDF
                </a>
                <a
                  href={pdfUrl}
                  download
                  className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4" /> Download
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200">
          <Link href="/nmc/ug-permissions" className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1.5">
            <ArrowLeft className="w-4 h-4" /> Back to UG Permissions &amp; Renewals Page
          </Link>
          <Link href="/nmc" className="text-xs font-bold text-slate-600 hover:text-slate-900">
            NMC Disclosures Overview →
          </Link>
        </div>
      </div>
    </div>
  );
}
