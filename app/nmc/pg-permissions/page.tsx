"use client";

import Link from "next/link";
import { FileText, Download, ShieldCheck, ArrowLeft, ExternalLink, Stethoscope, Award } from "lucide-react";
import { getDocumentsBySubCategory, getDocumentsByCategory } from "@/config/documents";

export default function PGPermissionsPage() {
  const clinicalPermissions = getDocumentsBySubCategory("pg-permission", "clinical");
  const preParaPermissions = getDocumentsBySubCategory("pg-permission", "pre-para");
  const allPgPermissions = getDocumentsByCategory("pg-permission");

  return (
    <div className="py-16 bg-surface-light min-h-screen text-charcoal font-technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumb Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <span>NMC</span>
            <span>/</span>
            <span className="text-blue-600">PG Permissions & MD/MS Orders</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            NMC <span className="text-blue-600 italic font-normal">PG Permissions</span> & MD/MS LOP Orders
          </h1>
          <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-3xl leading-relaxed">
            Official Letters of Permission (LOP) issued by the Postgraduate Medical Education Board (PGMEB), National Medical Commission for MD & MS residency intake at PMRIMS.
          </p>
        </div>

        {/* Audit Compliance Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-institutional mb-10">
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-blue-50 text-blue-950 border border-blue-200 mb-8">
            <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" />
            <div className="text-xs sm:text-sm">
              <strong>Statutory Compliance Verification:</strong> Below are all {allPgPermissions.length} official LOP orders for Postgraduate Medical Specialties at PMRIMS. Total PG Intake Capacity across all 15 specialties: <strong>94 Seats</strong>.
            </div>
          </div>

          {/* SECTION 1: Clinical Specialties (12 Departments) */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6 border-b border-slate-200 pb-3">
              <Stethoscope className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-serif font-bold text-slate-900">
                1. Clinical Specialty MD / MS Permissions ({clinicalPermissions.length} Departments)
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {clinicalPermissions.map((doc) => (
                <div
                  key={doc.id}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        {doc.seats && (
                          <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-900 text-[11px] font-extrabold uppercase tracking-wide border border-emerald-300">
                            {doc.seats}
                          </span>
                        )}
                        <span className="px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-bold uppercase">
                          Clinical Residency
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{doc.title}</h3>
                      <p className="text-xs text-slate-500 mt-1">{doc.description}</p>
                      <div className="text-xs font-mono text-blue-700 mt-1.5 flex flex-wrap items-center gap-3">
                        <span>Ref: {doc.referenceNo}</span>
                        <span>•</span>
                        <span>Issued by: {doc.issuedBy}</span>
                        {doc.fileSize && (
                          <>
                            <span>•</span>
                            <span className="font-semibold">{doc.fileSize}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 border-t sm:border-t-0 border-slate-200 pt-3 sm:pt-0">
                    <a
                      href={doc.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-300 transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <ExternalLink className="w-4 h-4 text-blue-600" /> View LOP
                    </a>
                    <a
                      href={doc.pdfUrl}
                      download
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md transition-colors flex items-center gap-1.5"
                    >
                      <Download className="w-4 h-4" /> Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 2: Pre & Para-Clinical Specialties (3 Departments) */}
          <div>
            <div className="flex items-center gap-2 mb-6 border-b border-slate-200 pb-3">
              <Award className="w-5 h-5 text-indigo-600" />
              <h2 className="text-xl font-serif font-bold text-slate-900">
                2. Pre & Para-Clinical Specialty MD Permissions ({preParaPermissions.length} Departments)
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {preParaPermissions.map((doc) => (
                <div
                  key={doc.id}
                  className="p-5 sm:p-6 rounded-2xl bg-indigo-50/40 border border-indigo-200/80 hover:border-indigo-500 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        {doc.seats && (
                          <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-900 text-[11px] font-extrabold uppercase tracking-wide border border-emerald-300">
                            {doc.seats}
                          </span>
                        )}
                        <span className="px-2.5 py-0.5 rounded bg-indigo-100 text-indigo-800 text-[10px] font-bold uppercase">
                          Pre / Para-Clinical
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{doc.title}</h3>
                      <p className="text-xs text-slate-500 mt-1">{doc.description}</p>
                      <div className="text-xs font-mono text-indigo-700 mt-1.5 flex flex-wrap items-center gap-3">
                        <span>Ref: {doc.referenceNo}</span>
                        <span>•</span>
                        <span>Issued by: {doc.issuedBy}</span>
                        {doc.fileSize && (
                          <>
                            <span>•</span>
                            <span className="font-semibold">{doc.fileSize}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 border-t sm:border-t-0 border-slate-200 pt-3 sm:pt-0">
                    <a
                      href={doc.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-300 transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <ExternalLink className="w-4 h-4 text-indigo-600" /> View LOP
                    </a>
                    <a
                      href={doc.pdfUrl}
                      download
                      className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md transition-colors flex items-center gap-1.5"
                    >
                      <Download className="w-4 h-4" /> Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200">
          <Link href="/nmc/ug-permissions" className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1.5">
            <ArrowLeft className="w-4 h-4" /> Back to UG Permissions & Renewals Page
          </Link>
          <Link href="/nmc" className="text-xs font-bold text-slate-600 hover:text-slate-900">
            NMC Disclosures Overview →
          </Link>
        </div>
      </div>
    </div>
  );
}
