"use client";

import Link from "next/link";
import { 
  Pill, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Phone, 
  Building2, 
  Award, 
  Activity, 
  FileText 
} from "lucide-react";

const PHARMACY_FEATURES = [
  "24/7 Round-the-Clock Emergency & Casualty Pharmacy Counter",
  "Dedicated Outpatient (OPD) & Inpatient (IPD) Medication Outlets",
  "Cold-Chain Vaccine & Biological Storage (2°C to 8°C Controlled)",
  "Full Stock of Critical ICU, Cardiac, Emergency & Surgical Drugs",
  "Computerized Inventory & Barcode Scanned Prescription Dispensing",
  "NMC Statutory Pharmacovigilance & Drug Safety Protocols",
  "Qualified M.Pharm & B.Pharm Registered Pharmacists on Duty",
  "Subsidized & Cashless Medicine Supply under Aarogyasri Scheme"
];

export default function PharmacyPage() {
  return (
    <div className="w-full bg-transparent min-h-screen text-slate-800 font-technical">
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
            <Clock className="w-4 h-4 text-gold-brand" />
            24/7 Hospital Medicine Services
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4">
            Central Hospital Pharmacy <span className="text-blue-400 italic font-normal">(24x7)</span>
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed">
            The Central Pharmacy Services at PMRIMS Hospital operate 24 hours a day to provide un-interrupted supply of authentic, essential, and life-saving medications for outpatient, inpatient, emergency casualty, and ICU patients.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Infrastructure & Services */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
                  <Pill className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-slate-900">Comprehensive Medicine Dispensary</h2>
                  <p className="text-xs text-slate-500">Quality-Assured Pharmaceutical Distribution</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                PMRIMS Central Pharmacy maintains an extensive inventory of WHO-essential medicines, intravenous fluids, surgical consumables, antibiotics, and specialty drugs. All medicines undergo strict temperature-controlled storage and batch verification before patient dispensing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-800 border-t border-slate-100 pt-6">
                {PHARMACY_FEATURES.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-transparent border border-slate-200/70">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Pharmacy Helpline & Outlets */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 font-technical">
              <h3 className="text-xl font-serif font-bold text-slate-900">Pharmacy Counter Locations</h3>
              <p className="text-xs text-slate-500">Accessible Medicine Counters across Campus</p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-transparent border border-slate-200/80">
                  <div className="font-bold text-slate-900">Emergency & Casualty Outlet</div>
                  <div className="text-[11px] text-slate-500">Ground Floor, Emergency Block (Open 24/7)</div>
                </div>

                <div className="p-3 rounded-xl bg-transparent border border-slate-200/80">
                  <div className="font-bold text-slate-900">OPD Central Outlet</div>
                  <div className="text-[11px] text-slate-500">Main OPD Building, Ground Floor (8:00 AM – 8:00 PM)</div>
                </div>

                <div className="p-3 rounded-xl bg-transparent border border-slate-200/80">
                  <div className="font-bold text-slate-900">IPD Surgical Pharmacy</div>
                  <div className="text-[11px] text-slate-500">Inpatient Block, 1st Floor (Open 24/7)</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
