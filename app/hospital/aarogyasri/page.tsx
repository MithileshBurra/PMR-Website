"use client";

import Link from "next/link";
import { 
  ShieldCheck, 
  HeartPulse, 
  FileText, 
  CheckCircle2, 
  Phone, 
  Building2, 
  Award, 
  Users, 
  Stethoscope, 
  Clock, 
  HelpCircle 
} from "lucide-react";

const COVERED_SPECIALTIES = [
  "General Surgery & Laparoscopic Procedures",
  "Obstetrics & High-Risk Gynaecology Surgeries",
  "Orthopaedic Trauma & Joint Surgeries",
  "Paediatric Surgeries & Intensive Care",
  "General Medicine & Inpatient Acute Care",
  "ENT Surgeries (Tonsillectomy, Septoplasty, Mastoidectomy)",
  "Ophthalmology (Cataract, Glaucoma & Ocular Surgeries)",
  "Respiratory & ICU Critical Care Management",
  "Emergency Casualty & Polytrauma Care",
  "Dialysis & Nephrology Procedures"
];

const REQUIRED_DOCUMENTS = [
  "Aarogyasri Health Card / BPL White Ration Card",
  "Aadhaar Card of the Patient (Original & Copy)",
  "Patient Referral Letter / OPD Diagnosis Memo from PMRIMS Doctors",
  "2 Passport Size Photographs of the Patient",
  "Active Mobile Number linked with Aadhaar"
];

export default function AarogyasriPage() {
  return (
    <div className="w-full bg-transparent min-h-screen text-slate-800 font-technical">
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
            <ShieldCheck className="w-4 h-4 text-gold-brand" />
            Telangana Govt Health Insurance Scheme
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4">
            Aarogyasri Health Scheme <br className="hidden sm:block" />
            <span className="text-blue-400 italic font-normal">Cashless Treatment Portal</span>
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed">
            PMRIMS Teaching Hospital provides 100% cashless medical care, major surgeries, and diagnostic services under the Dr. YSR Aarogyasri & Ayushman Bharat Health Insurance schemes.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Scheme Details & Covered Surgeries */}
          <div className="lg:col-span-7 space-y-8">
            {/* Overview Box */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
                  <HeartPulse className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-slate-900">100% Free & Cashless Hospitalization</h2>
                  <p className="text-xs text-slate-500">Government Empowered Healthcare for Eligible Families</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Under the Aarogyasri scheme, eligible BPL cardholders and health card beneficiaries receive end-to-end free diagnostic evaluations, surgical treatments, ICU stays, medications, and follow-up consultation at PMRIMS Hospital, Chevella.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-6">
                <div className="p-4 rounded-2xl bg-transparent border border-slate-200/80">
                  <div className="text-xs font-bold text-blue-600 uppercase mb-1">Coverage Limit</div>
                  <div className="text-lg font-serif font-bold text-slate-900">Up to ₹5,00,000 / Year</div>
                  <div className="text-[11px] text-slate-500 mt-1">Per family for covered surgical procedures</div>
                </div>

                <div className="p-4 rounded-2xl bg-transparent border border-slate-200/80">
                  <div className="text-xs font-bold text-blue-600 uppercase mb-1">Helpdesk Operating Hours</div>
                  <div className="text-lg font-serif font-bold text-slate-900">24/7 Active Counter</div>
                  <div className="text-[11px] text-slate-500 mt-1">Dedicated Aarogyasri Mitras on campus</div>
                </div>
              </div>
            </div>

            {/* Covered Specialties List */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Clinical Scope</span>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mt-1">Major Specialties Covered</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-800">
                {COVERED_SPECIALTIES.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-transparent border border-slate-200/70">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Required Documents & Helpdesk Contact */}
          <div className="lg:col-span-5 space-y-8">
            {/* Required Documents Box */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-slate-900">Required Checklist</h3>
                  <p className="text-xs text-slate-500">Documents for Instant Approval</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-700">
                {REQUIRED_DOCUMENTS.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-transparent border border-slate-200/80">
                    <div className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="font-semibold text-slate-800">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Aarogyasri Helpdesk Callout Card */}
            <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-lg space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-gold-brand text-xs font-bold uppercase">
                <ShieldCheck className="w-3.5 h-3.5" /> Aarogyasri Mitras Helpdesk
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">Need Assistance with Approval?</h3>
              <p className="text-xs text-slate-100 leading-relaxed">
                Visit the Aarogyasri Counter located at the Main Hospital Reception ground floor, or contact our scheme coordinators:
              </p>

              <div className="space-y-3 pt-2 text-xs font-semibold border-t border-white/20">
                <div className="flex items-center justify-between">
                  <span className="text-slate-200">Medical Hospital:</span>
                  <a href="tel:08417299918" className="font-bold text-white text-base hover:underline">08417-299918</a>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white text-blue-700 font-bold text-xs uppercase tracking-wider shadow hover:bg-slate-100 transition-colors mt-2"
              >
                Contact PMR Hospital
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
