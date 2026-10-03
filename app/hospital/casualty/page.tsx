"use client";

import Link from "next/link";
import { 
  ShieldCheck, 
  HeartPulse, 
  Clock, 
  Phone, 
  CheckCircle2, 
  AlertTriangle, 
  Activity, 
  Stethoscope, 
  Truck 
} from "lucide-react";

export default function CasualtyPage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen text-slate-800 font-technical">
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/30 text-red-300 text-xs font-bold uppercase tracking-wider mb-4 border border-red-500/30">
            <Clock className="w-4 h-4 text-red-400" />
            24/7 Emergency & Trauma Care
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4">
            Casualty & <span className="text-red-400 italic font-normal">Emergency Medicine</span>
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed">
            The Emergency Department at PMRIMS Teaching Hospital operates round-the-clock with dedicated trauma surgeons, critical care specialists, ACLS ambulances, and high-dependency triage resuscitation bays.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Facilities & Clinical Scope */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="p-3 rounded-2xl bg-red-50 text-red-600">
                  <Activity className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-slate-900">Immediate Triage & Resuscitation</h2>
                  <p className="text-xs text-slate-500">Rapid Response Polytrauma & Critical Care Unit</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                PMRIMS Emergency Casualty is equipped with 30+ dedicated acute observation beds, minor operating theatre (OT) for immediate wound debridement, crash carts, defibrillators, mobile digital X-Ray, and point-of-care ultrasound (POCUS) to manage acute medical emergencies, cardiac arrests, stroke protocols, and highway accident trauma.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-6 text-xs text-slate-800 font-semibold">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                  <span>24/7 On-Call Trauma & Orthopaedic Surgeons</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                  <span>ACLS & BCLS Advanced Cardiac Ambulances</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                  <span>Immediate Blood Bank & Central Lab Access</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                  <span>Direct Transfer to ICU & Major Surgical OTs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Emergency Helpline Callout */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-red-600 text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-300" /> Emergency Hotline
              </div>
              <h3 className="text-3xl font-serif font-bold text-white">Need Emergency Assistance?</h3>
              <p className="text-xs sm:text-sm text-red-100 leading-relaxed">
                Our emergency casualty desk and ambulance dispatch team can be reached immediately 24 hours a day, 7 days a week:
              </p>

              <div className="space-y-4 pt-4 border-t border-white/20 font-technical">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-red-100 font-semibold">Medical Hospital:</span>
                  <a href="tel:08417299918" className="text-xl font-bold text-white hover:underline">08417-299918</a>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-white text-red-700 font-extrabold text-xs uppercase tracking-wider shadow hover:bg-slate-100 transition-colors"
                >
                  View Hospital Location & Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
