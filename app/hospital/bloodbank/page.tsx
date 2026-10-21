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
    <div className="py-16 bg-transparent min-h-screen text-slate-800 font-technical">
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
                <p className="p-4 rounded-2xl bg-transparent border border-slate-200/80">
                  <strong>The Blood Bank is under the purview of the Pathology department.</strong> It has a valid license up to <strong>26th April 2027</strong>. The Drugs Control Administration has granted a license for Blood components. On average, <strong>42 blood units are issued daily</strong>.
                </p>

                <p className="p-4 rounded-2xl bg-transparent border border-slate-200/80">
                  The Blood Bank at Patnam Mahender Reddy General Hospital is centrally air-conditioned, working <strong>24 hours round the clock</strong> and is one of the finest blood transfusion centers which collects blood, conducts camps, and promotes blood donation. We have been catering our services for over a decade to meet the needs of patients, hospitals, clinicians, and related services.
                </p>

                <p className="p-4 rounded-2xl bg-transparent border border-slate-200/80">
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

        {/* Blood Bank Photo Gallery */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <span className="px-3 py-1 rounded-full bg-red-50 text-red-900 border border-red-200 text-xs font-bold uppercase tracking-wider">
                Photo Gallery
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
                Blood Bank Infrastructure & Facilities
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
                Glimpses of our certified component separation units, cold storage bays, and testing laboratory
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-2xl bg-slate-100 text-slate-800 text-xs font-bold font-mono shrink-0">
              7 Facility Photos
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { src: "/images/hospital/bloodbank/vlcsnap-2026-02-17-12h57m32s904.jpg", title: "Blood Bank Reception & Donor Registration" },
              { src: "/images/hospital/bloodbank/vlcsnap-2026-02-17-12h57m34s391.jpg", title: "Blood Storage Refrigerators (2°C - 6°C)" },
              { src: "/images/hospital/bloodbank/vlcsnap-2026-02-17-12h57m37s127.jpg", title: "Platelet Incubator & Agitator Station" },
              { src: "/images/hospital/bloodbank/vlcsnap-2026-02-17-12h57m38s587.jpg", title: "Deep Freezers & Plasma Storage (-80°C / -40°C)" },
              { src: "/images/hospital/bloodbank/vlcsnap-2026-02-17-12h57m42s288.jpg", title: "Component Separation Centrifuge Suite" },
              { src: "/images/hospital/bloodbank/vlcsnap-2026-02-17-12h57m46s783.jpg", title: "Transfusion Transmissible Infection (TTI) Testing" },
              { src: "/images/hospital/bloodbank/vlcsnap-2026-02-17-12h57m48s651.jpg", title: "Laminar Air Flow & Blood Processing Counter" }
            ].map((img, idx) => (
              <div key={idx} className="group rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="overflow-hidden aspect-[16/10]">
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="p-4 sm:p-5 text-sm sm:text-base text-slate-800 bg-white font-semibold border-t border-slate-100 flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                  <span>{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Major Equipment Table */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <span className="px-3 py-1 rounded-full bg-red-50 text-red-900 border border-red-200 text-xs font-bold uppercase tracking-wider">
                Cold Chain & Processing Infrastructure
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
                Blood Bank Equipment Inventory
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
                Precision temperature-controlled storage, component separation, and TTI testing equipment
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="px-3.5 py-1.5 rounded-2xl bg-slate-100 text-slate-800 text-xs font-bold font-mono">
                13 Major Installations
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-technical border-collapse">
              <thead>
                <tr className="bg-slate-50 border-y border-slate-200 text-slate-700 uppercase tracking-wider font-bold">
                  <th className="py-3.5 px-4 w-20 text-center">S.No</th>
                  <th className="py-3.5 px-6">Equipment</th>
                  <th className="py-3.5 px-6 text-center w-36">Quantity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { sNo: 1, name: "-80°C Deep Freezer", quantity: 1 },
                  { sNo: 2, name: "-40°C Deep Freezer", quantity: 1 },
                  { sNo: 3, name: "22°C Platelet Incubator with Agitator", quantity: 1 },
                  { sNo: 4, name: "Refrigerated Centrifuge", quantity: 1 },
                  { sNo: 5, name: "Laminar Air Flow", quantity: 1 },
                  { sNo: 6, name: "2°C - 6°C Blood Storage Refrigerator", quantity: 1 },
                  { sNo: 7, name: "2°C - 6°C Blood Storage Refrigerator", quantity: 1 },
                  { sNo: 8, name: "2°C - 6°C Kits Storage Refrigerator", quantity: 1 },
                  { sNo: 9, name: "2°C - 6°C Samples Storage Refrigerator", quantity: 1 },
                  { sNo: 10, name: "ELISA Washer", quantity: 1 },
                  { sNo: 11, name: "ELISA Reader", quantity: 1 },
                  { sNo: 12, name: "Donor Coach", quantity: 1 },
                  { sNo: 13, name: "4°C - 37°C Cryo Thawing Bath", quantity: 1 }
                ].map((item) => (
                  <tr key={item.sNo} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 text-center font-bold text-slate-500">{item.sNo}</td>
                    <td className="py-3.5 px-6 font-semibold text-slate-900 text-sm">{item.name}</td>
                    <td className="py-3.5 px-6 text-center">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-red-50 text-red-700 font-bold font-mono text-xs border border-red-100">
                        {item.quantity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Link href="/hospital" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800">
          <ArrowLeft className="w-4 h-4" /> Back to Hospital Facilities
        </Link>
      </div>
    </div>
  );
}
