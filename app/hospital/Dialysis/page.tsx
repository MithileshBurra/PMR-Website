"use client";

import Link from "next/link";
import { 
  HeartPulse, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Phone, 
  Building2, 
  Stethoscope,
  Award 
} from "lucide-react";

const DIALYSIS_FEATURES = [
  "Advanced High-Flux Hemodialysis Machines (Fresenius & Gambro Units)",
  "Separate Dedicated Machines for Seropositive (HBsAg / HCV) Patients",
  "Ultra-Pure Reverse Osmosis (RO) Water Treatment Plant",
  "Senior Nephrologists & Trained Dialysis Technicians Monitoring Every Shift",
  "100% Free & Cashless Dialysis Sessions under Telangana Aarogyasri Scheme",
  "Emergency 24/7 Dialysis for Acute Renal Failure & Sepsis Patients",
  "Continuous Cardiac & Vital Signs Monitoring during Procedure",
  "Comfortable Recliner Chairs & Air-Conditioned Patient Bays"
];

export default function DialysisPage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen text-slate-800 font-technical">
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
            <HeartPulse className="w-4 h-4 text-gold-brand" />
            Nephrology & Renal Care Unit
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4">
            Dialysis & <span className="text-blue-400 italic font-normal">Renal Care Center</span>
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed">
            The Hemodialysis Unit at PMRIMS Hospital provides high-quality, sterile, and compassionate renal replacement therapy for patients suffering from Chronic Kidney Disease (CKD) and Acute Kidney Injury.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Dialysis Infrastructure */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
                  <Activity className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-slate-900">Modern Hemodialysis Infrastructure</h2>
                  <p className="text-xs text-slate-500">Sterile, Water-Purified Dialysis Bay</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                PMRIMS Hemodialysis Center features a dedicated double-pass Reverse Osmosis (RO) water purification plant ensuring water purity standards prescribed by AAMI/KDOQI guidelines. Qualified nephrologists and certified dialysis technicians oversee every session to guarantee patient safety.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-800 border-t border-slate-100 pt-6">
                {DIALYSIS_FEATURES.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Shift Timings & Aarogyasri Helpline */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 font-technical">
              <h3 className="text-xl font-serif font-bold text-slate-900">Dialysis Shift Timings</h3>
              <p className="text-xs text-slate-500">Daily Scheduled Sessions (Mon – Sat)</p>

              <div className="space-y-3 pt-2 text-xs font-semibold text-slate-800">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-slate-600">Morning Shift:</span>
                  <span className="font-bold text-slate-900">7:00 AM – 11:00 AM</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-slate-600">Afternoon Shift:</span>
                  <span className="font-bold text-slate-900">11:30 AM – 3:30 PM</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-slate-600">Evening Shift:</span>
                  <span className="font-bold text-slate-900">4:00 PM – 8:00 PM</span>
                </div>
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-[11px]">
                  <span className="font-bold">24/7 Emergency ICU Dialysis:</span> Active on-call for emergency cases.
                </div>
              </div>
            </div>

            {/* Aarogyasri Free Dialysis Helpline */}
            <div className="bg-blue-600 text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-gold-brand text-xs font-bold uppercase">
                <ShieldCheck className="w-4 h-4 text-gold-brand" /> 100% Free Aarogyasri Scheme
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">Free Cashless Dialysis</h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                Eligible Aarogyasri cardholders receive 100% free dialysis sessions, blood investigations, and supportive injections. Contact our dialysis unit for slot booking:
              </p>

              <div className="space-y-3 pt-2 text-xs font-semibold font-technical border-t border-white/20">
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">Medical Hospital:</span>
                  <a href="tel:08417299918" className="text-base font-bold text-white hover:underline">08417-299918</a>
                </div>
              </div>

              <Link
                href="/hospital/aarogyasri"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-white text-blue-700 font-extrabold text-xs uppercase tracking-wider shadow hover:bg-slate-100 transition-colors"
              >
                View Aarogyasri Scheme Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
