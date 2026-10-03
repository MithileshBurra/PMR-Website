"use client";

import Link from "next/link";
import { 
  Building2, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Wifi, 
  Utensils, 
  Users 
} from "lucide-react";

export default function HostelsPage() {

  return (
    <div className="py-16 bg-slate-50 min-h-screen text-slate-800 font-technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link> / <Link href="/facilities" className="hover:text-blue-600 transition-colors">Facilities</Link> / <span className="text-blue-600">Student Hostels</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Residential Student <span className="text-blue-600 italic font-normal">Hostel Complexes</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl leading-relaxed">
            PMRIMS provides safe, comfortable, and well-furnished residential hostels for male and female undergraduate MBBS students, postgraduate residents, and intern doctors within the college campus.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl w-max">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">Boys Hostel Complex</h3>
            <p className="text-xs text-slate-600 font-technical leading-relaxed">
              Spacious twin and single occupancy rooms with ergonomic study tables, individual wardrobes, attached bathrooms, and continuous solar hot water supply.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl w-max">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">Girls Hostel Complex</h3>
            <p className="text-xs text-slate-600 font-technical leading-relaxed">
              Dedicated female wardens, biometric access control, 24/7 security personnel, CCTV surveillance, indoor games room, and quiet study lounges.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl w-max">
              <Utensils className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">Hygenic Mess & Dining Hall</h3>
            <p className="text-xs text-slate-600 font-technical leading-relaxed">
              Clean, air-conditioned dining halls serving nutritious four-course meals (North & South Indian menu) prepared under strict food safety standards.
            </p>
          </div>
        </div>

        {/* Portal Link Card */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900">Hostel Rules, Fees & Allotment</h2>
              <p className="text-xs text-slate-500">Official PMRIMS Student Residential Information</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-700 font-technical">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>24/7 Uninterrupted Campus Wi-Fi & Power Backup Generators</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>In-house Laundry Facilities & Dedicated Resident Doctor Quarters</span>
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
