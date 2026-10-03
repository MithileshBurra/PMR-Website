"use client";

import Link from "next/link";
import { 
  Building2, 
  Bed, 
  CheckCircle2, 
  ShieldCheck, 
  HeartPulse, 
  Users, 
  Phone, 
  Activity 
} from "lucide-react";

const IPD_FACILITIES = [
  "1200+ Teaching Hospital Beds across General & Special Wards",
  "Dedicated Intensive Care Units (ICU, ICCU, NICU, PICU, RICU)",
  "Fully Equipped Post-Operative Recovery Rooms",
  "24/7 Inpatient Pharmacy & Blood Bank Access",
  "Clean Centralized Oxygen & Suction Lines for every Bed",
  "Nutritious Dietary Meals Provided by In-house Hospital Kitchen",
  "Aarogyasri & Cashless Insurance Desk Assistance",
  "24/7 Duty Doctors & Resident Medical Staff"
];

export default function InpatientPage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen text-slate-800 font-technical">
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
            <Building2 className="w-4 h-4 text-gold-brand" />
            1200+ Bedded Inpatient Facility
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4">
            Inpatient Care <span className="text-blue-400 italic font-normal">(IPD & Wards)</span>
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed">
            PMRIMS Inpatient Care provides comprehensive 24/7 nursing attention, specialist rounds, critical care ICUs, and comfortable general & private room ward accommodations.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Wards & Critical Care Overview */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
                  <Activity className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-slate-900">Ward Infrastructure & Clinical Supervision</h2>
                  <p className="text-xs text-slate-500">Multidisciplinary Inpatient Care</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Our 1200+ bedded hospital features spacious male and female general wards, semi-private rooms, and private air-conditioned suites. Each ward unit is supervised by senior consultants, post-graduate residents, and qualified nursing staff to ensure patient safety and rapid recovery.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-800 border-t border-slate-100 pt-6">
                {IPD_FACILITIES.map((facility, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Admission & Visitor Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-serif font-bold text-slate-900">Visiting Hours & Admission Desk</h3>
              <p className="text-xs text-slate-500">Information for Attendants & Visitors</p>

              <div className="space-y-4 text-xs text-slate-700 font-technical border-t border-slate-100 pt-4">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                  <span className="font-medium text-slate-600">Morning Visiting Hours:</span>
                  <span className="font-bold text-slate-900">7:00 AM – 8:00 AM</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                  <span className="font-medium text-slate-600">Evening Visiting Hours:</span>
                  <span className="font-bold text-slate-900">4:30 PM – 6:30 PM</span>
                </div>
              </div>
            </div>

            {/* Inpatient Admission Helpline */}
            <div className="bg-blue-600 text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-6">
              <h3 className="text-2xl font-serif font-bold text-white">Inpatient Admission Desk</h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                For room availability, insurance approval, or IPD admission inquiries, contact our hospital admission cell:
              </p>

              <div className="space-y-3 pt-2 text-xs font-semibold font-technical border-t border-white/20">
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">Medical Hospital:</span>
                  <a href="tel:08417299918" className="text-base font-bold text-white hover:underline">08417-299918</a>
                </div>
              </div>

              <Link
                href="/hospital/private-care-rooms"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-white text-blue-700 font-extrabold text-xs uppercase tracking-wider shadow hover:bg-slate-100 transition-colors"
              >
                View Private Care Rooms & Suites
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
