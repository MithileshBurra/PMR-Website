"use client";

import Link from "next/link";
import { 
  HeartPulse, 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar, 
  Activity, 
  Users, 
  Droplet,
  Phone
} from "lucide-react";

export default function BloodBankPage() {
  return (
    <div className="py-16 bg-slate-50 min-h-screen text-slate-800 font-technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link> / <Link href="/hospital" className="hover:text-blue-600 transition-colors">Hospital</Link> / <span className="text-red-600">Blood Bank</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            24/7 Licensed <span className="text-red-600 italic font-normal">Blood Transfusion Center</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl leading-relaxed">
            Patnam Mahender Reddy General Hospital Blood Bank provides 24-hour blood transfusion and component separation services under the Department of Pathology.
          </p>
        </div>

        {/* Highlight Stats Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-red-600 text-white rounded-3xl p-6 shadow-md flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-2xl shrink-0">
              <Droplet className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold font-mono">42 Units / Day</div>
              <div className="text-xs text-red-100 font-technical">Average Daily Blood Units Issued</div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Pathology Dept Purview</div>
              <div className="text-xs text-slate-500 font-technical">Licensed up to 26th April 2027</div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl shrink-0">
              <Activity className="w-8 h-8" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Centrally Air-Conditioned</div>
              <div className="text-xs text-slate-500 font-technical">Round the Clock 24/7 Service</div>
            </div>
          </div>
        </div>

        {/* Detailed Information & Blood Components */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          {/* Left Side: Licensing & Operations */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="p-3 rounded-2xl bg-red-50 text-red-600">
                  <Droplet className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-slate-900">Blood Bank Operations & Licensing</h2>
                  <p className="text-xs text-slate-500">Drugs Control Administration Approved Unit</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-technical">
                <p className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <strong>The Blood Bank is under the purview of the Pathology department.</strong> It has a valid license up to <strong>26th April 2027</strong>. The Drugs Control Administration has granted a license for Blood components. On average, <strong>42 blood units are issued daily</strong>.
                </p>

                <p className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  The Blood Bank at Patnam Mahender Reddy General Hospital is centrally air-conditioned, working <strong>24 hours round the clock</strong> and is one of the finest blood transfusion centers which collects blood, conducts camps, and promotes blood donation. We have been catering our services for over a decade to meet the needs of patients, hospitals, clinicians, and related services.
                </p>

                <p className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  Our hospital also motivates voluntary donors about the importance of blood transfusions and educates them about the mandatory screening for infections transmitted by transfusing blood components.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Available Blood Components */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-serif font-bold text-slate-900 border-b border-slate-100 pb-3">
                Blood Components Available:
              </h3>

              <div className="space-y-4 font-technical">
                <div className="p-4 rounded-2xl bg-red-50 border border-red-200">
                  <div className="flex items-center gap-2 font-bold text-red-950 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                    Packed Red Blood Cells (PRBC)
                  </div>
                  <p className="text-xs text-red-800 mt-1">Screened and prepared for severe anemia, trauma resuscitation, and surgical care.</p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                  <div className="flex items-center gap-2 font-bold text-amber-950 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    Fresh Frozen Plasma (FFP)
                  </div>
                  <p className="text-xs text-amber-800 mt-1">Deep frozen for clotting factor deficiency, liver disease, and massive transfusions.</p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <div className="flex items-center gap-2 font-bold text-emerald-950 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Platelet Concentrate
                  </div>
                  <p className="text-xs text-emerald-800 mt-1">Essential component therapy for thrombocytopenia, dengue fever, and oncological care.</p>
                </div>
              </div>
            </div>

            {/* Helpline Callout */}
            <div className="bg-red-600 text-white rounded-3xl p-6 shadow-lg space-y-4">
              <div className="text-xs uppercase tracking-wider text-red-100 font-bold">24/7 Blood Bank Helpline</div>
              <div className="text-2xl font-bold font-mono">08417-299918</div>
              <p className="text-xs text-red-100">Contact Medical Hospital Blood Bank Desk for donor camp coordination or emergency blood requirement.</p>
            </div>
          </div>
        </div>

        <Link href="/hospital" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800">
          <ArrowLeft className="w-4 h-4" /> Back to Hospital Facilities
        </Link>
      </div>
    </div>
  );
}
