"use client";

import Link from "next/link";
import { 
  Tv, 
  ArrowLeft, 
  CheckCircle2, 
  GraduationCap, 
  Video, 
  Users 
} from "lucide-react";

export default function LectureHallsPage() {

  return (
    <div className="py-16 bg-slate-50 min-h-screen text-slate-800 font-technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link> / <Link href="/facilities" className="hover:text-blue-600 transition-colors">Facilities</Link> / <span className="text-blue-600">Lecture Halls</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Air-Conditioned Smart <span className="text-blue-600 italic font-normal">Lecture Halls</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl leading-relaxed">
            PMRIMS Teaching Campus features gallery-style air-conditioned smart lecture halls equipped with state-of-the-art audio-visual systems, interactive smart boards, and live surgical telecast capabilities.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl w-max">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">300 Seating Capacity Each</h3>
            <p className="text-xs text-slate-600 font-technical leading-relaxed">
              Tiered gallery-style seating halls accommodating 300 students each with clear acoustics, individual writing desks, and comfortable seating for MBBS batches.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl w-max">
              <Tv className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">Interactive Smart Technology</h3>
            <p className="text-xs text-slate-600 font-technical leading-relaxed">
              High-definition multimedia projectors, digital interactive whiteboards, surround sound audio systems, and automated presentation podiums.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl w-max">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">Live OT Telecast & Webinars</h3>
            <p className="text-xs text-slate-600 font-technical leading-relaxed">
              Direct fiber-optic audiovisual link to PMR Hospital Operation Theatres enabling real-time observation of live surgeries and clinical procedures.
            </p>
          </div>
        </div>

        {/* Official Portal Card */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900">Academic Lecture Complex Specifications</h2>
              <p className="text-xs text-slate-500">NMC-Compliant Teaching Infrastructure for 250 MBBS Students</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-700 font-technical">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Multiple Lecture Halls with 300 Seating Capacity Each</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Full Central Air-Conditioning & Power Backup Facilities</span>
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
