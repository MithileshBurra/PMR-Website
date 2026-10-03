"use client";

import Link from "next/link";
import { 
  BookOpen, 
  CheckCircle2, 
  ArrowLeft, 
  Wifi, 
  Clock, 
  GraduationCap 
} from "lucide-react";

export default function LibraryPage() {

  return (
    <div className="py-16 bg-slate-50 min-h-screen text-slate-800 font-technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link> / <Link href="/facilities" className="hover:text-blue-600 transition-colors">Facilities</Link> / <span className="text-blue-600">Central Library</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Central Medical Library & <span className="text-blue-600 italic font-normal">Digital Knowledge Center</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl leading-relaxed">
            The Central Library at PMRIMS is a fully air-conditioned, multi-story academic facility holding over 12,000+ medical textbooks, subscriptions to leading national and international journals, digital e-libraries, and 24/7 reading halls.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl w-max">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">12,000+ Print Volumes</h3>
            <p className="text-xs text-slate-600 font-technical leading-relaxed">
              Vast collection of textbooks, reference manuals, WHO publications, and medical research atlases across pre-clinical, para-clinical, and clinical specialties.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl w-max">
              <Wifi className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">E-Library & PubMed Access</h3>
            <p className="text-xs text-slate-600 font-technical leading-relaxed">
              Dedicated high-speed computer terminals providing seamless online access to Medline, PubMed, ProQuest, and international peer-reviewed journals.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl w-max">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">24/7 Quiet Reading Halls</h3>
            <p className="text-xs text-slate-600 font-technical leading-relaxed">
              Separate soundproof reading halls for undergraduate MBBS students, postgraduates, and faculty members with ergonomic seating and climate control.
            </p>
          </div>
        </div>

        {/* Official Portal Banner Card */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900">Library Services & Digital Catalog</h2>
              <p className="text-xs text-slate-500">Automated OPAC cataloging, digital e-journal access, and quiet study halls</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-700 font-technical">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>OPAC Automated Book Search & Issue/Return Counters</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Reprographic, Printing & Scanning Services for Students</span>
            </div>
          </div>
        </div>

        <Link href="/facilities" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800">
          <ArrowLeft className="w-4 h-4" /> Back to Facilities Overview
        </Link>
      </div>
    </div>
  );
}
