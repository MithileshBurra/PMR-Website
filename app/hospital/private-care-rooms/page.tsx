"use client";

import Link from "next/link";
import { 
  BedDouble, 
  ArrowLeft, 
  CheckCircle2, 
  Bed, 
  Bath, 
  UserCheck 
} from "lucide-react";

export default function PrivateCareRoomsPage() {
  return (
    <div className="py-16 bg-slate-50 min-h-screen text-slate-800 font-technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link> / <Link href="/hospital" className="hover:text-blue-600 transition-colors">Hospital</Link> / <span className="text-blue-600">Private Care Rooms</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Private Care Rooms & <span className="text-blue-600 italic font-normal">Deluxe Suites</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl leading-relaxed">
            PMRIMS General Hospital provides premium, air-conditioned private rooms designed for patient comfort, safety, and privacy during inpatient recovery.
          </p>
        </div>

        {/* Room Specifications Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-10 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
              <BedDouble className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900">Private Care Room Inventory & Facilities</h2>
              <p className="text-xs text-slate-500">Suite Rooms & Special Inpatient Wards</p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-semibold">
            We have a total of <strong className="text-blue-600">7 Private rooms</strong> with <strong className="text-blue-600">2 Suite rooms</strong> and <strong className="text-blue-600">5 Special rooms</strong>. Every room has a <strong className="text-blue-600">5 functional bed</strong> along with an attached bathroom and a bed for the attender.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <Bed className="w-5 h-5 text-blue-600 shrink-0" />
              <div>
                <div className="text-xs font-bold text-slate-900">5 Functional Beds</div>
                <div className="text-[11px] text-slate-500">Motorized & Ergonomic Position Control</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <Bath className="w-5 h-5 text-blue-600 shrink-0" />
              <div>
                <div className="text-xs font-bold text-slate-900">Attached Bathroom</div>
                <div className="text-[11px] text-slate-500">Clean, Sanitized & Hot Water Facility</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <UserCheck className="w-5 h-5 text-blue-600 shrink-0" />
              <div>
                <div className="text-xs font-bold text-slate-900">Attender Bed</div>
                <div className="text-[11px] text-slate-500">Dedicated Comfortable Bed for Caregiver</div>
              </div>
            </div>
          </div>

          {/* Internal Contact Callout */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-slate-600">
              For room bookings, availability, and admission inquiries, please reach out to our Medical Hospital Desk: <strong>08417-299918</strong>.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0"
            >
              Contact Hospital Admission Desk
            </Link>
          </div>
        </div>

        <Link href="/hospital/inpatient" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800">
          <ArrowLeft className="w-4 h-4" /> Back to Inpatient Care Overview
        </Link>
      </div>
    </div>
  );
}
