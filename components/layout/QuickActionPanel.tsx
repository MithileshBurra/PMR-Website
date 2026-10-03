"use client";

import { useState } from "react";
import { UserCheck, Ambulance, X, PhoneCall, ExternalLink, ShieldAlert } from "lucide-react";

export default function QuickActionPanel() {
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  return (
    <>
      {/* Floating Vertical Quick Action Panel (Student Login & Emergency Direct) */}
      <aside className="fixed right-0 top-1/3 z-50 hidden md:flex flex-col gap-2.5 p-2 bg-emerald-950/90 backdrop-blur-md border-l border-y border-gold-brand/40 rounded-l-2xl shadow-2xl transition-all">
        {/* Student / Faculty Login Button */}
        <a
          href="https://portal.pmrims.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center p-3 rounded-xl bg-emerald-900/60 hover:bg-gold-brand hover:text-emerald-950 text-slate-200 transition-all duration-300"
          title="Student / Faculty Login"
        >
          <UserCheck className="w-5 h-5 text-gold-brand group-hover:text-emerald-950" />
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-md bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-gold-brand/30">
            Student / Faculty Login
          </span>
        </a>

        {/* 24/7 Emergency Care Hotline Button */}
        <button
          onClick={() => setShowEmergencyModal(true)}
          className="group relative flex items-center justify-center p-3 rounded-xl bg-red-600 hover:bg-red-500 text-white shadow-lg animate-pulse-slow transition-all duration-300"
          title="24/7 Emergency & Casualty Care"
        >
          <Ambulance className="w-5 h-5" />
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-md bg-red-950 text-red-200 text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-red-500/40 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            24/7 Emergency Care Direct
          </span>
        </button>
      </aside>

      {/* Emergency Modal Dialog */}
      {showEmergencyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-emerald-950 border-2 border-red-500/60 rounded-2xl p-6 sm:p-8 text-white shadow-2xl">
            <button
              onClick={() => setShowEmergencyModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-emerald-900 hover:bg-emerald-800 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-red-400 mb-4">
              <div className="p-3 rounded-xl bg-red-900/50 border border-red-500/40">
                <ShieldAlert className="w-8 h-8 text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-serif">PMR Emergency & Casualty Unit</h3>
                <p className="text-xs text-red-300 uppercase tracking-wider font-semibold">24/7 Rapid Response Services</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              Dr. Patnam Mahender Reddy Institute of Medical Sciences operates a fully equipped 24/7 Level-1 Trauma Care Center, ICU, Ambulance Dispatch, and Emergency Surgical Wing at Chevella, Rangareddy District.
            </p>

            <div className="space-y-3 mb-6">
              <div className="p-4 rounded-xl bg-emerald-900/80 border border-gold-brand/30 flex items-center justify-between">
                <div>
                  <div className="text-xs text-gold-brand uppercase font-semibold">Medical Hospital Desk</div>
                  <div className="text-lg font-bold text-white font-mono">08417-299918</div>
                </div>
                <a
                  href="tel:08417299918"
                  className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg"
                >
                  <PhoneCall className="w-4 h-4" /> Call Now
                </a>
              </div>
            </div>

            <div className="text-xs text-slate-400 flex items-center justify-between border-t border-emerald-800 pt-4">
              <span>Location: Chevella Road, Rangareddy Dist, TS.</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
