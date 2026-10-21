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
  Award,
  ArrowLeft,
  Wind,
  BedDouble,
  Sparkles
} from "lucide-react";

const DIALYSIS_HIGHLIGHTS = [
  {
    title: "5 Advanced Hemodialysis Machines",
    description: "Ensuring precision, safety, and uninterrupted care for acute and chronic renal patients."
  },
  {
    title: "Fully Air-Conditioned Dialysis Unit",
    description: "Designed for utmost patient comfort, clinical hygiene, and optimal sterility standards."
  },
  {
    title: "Dedicated Isolation Rooms",
    description: "Specialized isolated bays for HIV / HBsAg / HCV patients with stringent infection control measures."
  },
  {
    title: "Centralized Oxygen Supply",
    description: "Uninterrupted medical oxygen and suction support available at every individual dialysis station."
  },
  {
    title: "Supervised by Experienced Nephrologist",
    description: "Every procedure is monitored by qualified nephrologists and executed by certified technicians and nursing staff."
  },
  {
    title: "In-Patient (IP) & Day Care Services",
    description: "Tailored dialysis scheduling and clinical management customized to emergency and routine patient needs."
  },
  {
    title: "Cashless / Free Dialysis (Aarogyasri)",
    description: "100% cashless dialysis available under the Dr. YSR Aarogyasri Health Care Trust scheme for eligible beneficiaries."
  }
];

export default function DialysisPage() {
  return (
    <div className="w-full bg-transparent min-h-screen text-slate-800 font-technical">
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link> / <Link href="/hospital" className="hover:text-blue-400 transition-colors">Hospital</Link> / <span className="text-blue-400">Dialysis Centre</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
            <HeartPulse className="w-4 h-4 text-gold-brand" />
            24×7 Emergency Dialysis Centre
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4">
            24×7 Emergency <span className="text-blue-400 italic font-normal">Dialysis Centre</span>
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Our 24×7 Emergency Dialysis Centre provides comprehensive renal replacement therapy with uninterrupted access to advanced hemodialysis technology and modern infrastructure.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Dialysis Infrastructure & Highlights */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-institutional space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
                  <Activity className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-slate-900">Comprehensive Renal Replacement Therapy</h2>
                  <p className="text-xs text-slate-500">Uninterrupted Care & Stringent Infection Control</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-technical">
                Our 24×7 Emergency Dialysis Centre provides comprehensive renal replacement therapy with uninterrupted access to advanced hemodialysis technology and modern infrastructure. The unit operates under stringent infection control protocols, ensuring the highest standards of patient safety and clinical hygiene. Every procedure is closely supervised by an experienced nephrologist and supported by a team of highly trained dialysis technicians and nursing professionals. We are committed to delivering timely, precise, and compassionate renal care for both emergency and planned dialysis needs.
              </p>

              {/* Key Features List */}
              <div className="space-y-3.5 border-t border-slate-100 pt-6">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Key Unit Capabilities:</h3>
                {DIALYSIS_HIGHLIGHTS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 font-technical mt-0.5">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Shift Timings & Aarogyasri Helpline */}
          <div className="lg:col-span-5 space-y-8">
            {/* Shift Timings */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-institutional space-y-4 font-technical">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-serif font-bold text-slate-900">Dialysis Shift Timings</h3>
              </div>
              <p className="text-xs text-slate-500">Scheduled Sessions (Monday – Saturday)</p>

              <div className="space-y-3 pt-2 text-xs font-semibold text-slate-800">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-600">Morning Shift:</span>
                  <span className="font-bold text-slate-900">7:00 AM – 11:00 AM</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-600">Afternoon Shift:</span>
                  <span className="font-bold text-slate-900">11:30 AM – 3:30 PM</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-600">Evening Shift:</span>
                  <span className="font-bold text-slate-900">4:00 PM – 8:00 PM</span>
                </div>
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-900 text-xs">
                  <span className="font-bold">24×7 Emergency Dialysis:</span> Rapid-response dialysis active 24 hours for acute renal emergencies, ICU, and sepsis patients.
                </div>
              </div>
            </div>

            {/* Dr. YSR Aarogyasri Free Dialysis Helpline */}
            <div className="bg-blue-600 text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-gold-brand text-xs font-bold uppercase">
                <ShieldCheck className="w-4 h-4 text-gold-brand" /> Dr. YSR Aarogyasri Health Care Trust
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">Cashless / Free Dialysis</h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-technical">
                Cashless / Free Dialysis is available under the Dr. YSR Aarogyasri Health Care Trust scheme for eligible beneficiaries. Includes dialysis sessions, pre/post clinical monitoring, and supportive medication.
              </p>

              <div className="space-y-3 pt-2 text-xs font-semibold font-technical border-t border-white/20">
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">Dialysis Desk / Hospital:</span>
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

        {/* Dialysis Facility Photo Gallery */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mt-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider">
                Photo Gallery
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
                Dialysis Centre Infrastructure & Equipment
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
                State-of-the-art hemodialysis machines, sterile treatment stations, and specialized isolated bays
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-2xl bg-slate-100 text-slate-800 text-xs font-bold font-mono shrink-0">
              5 Facility Photos
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { src: "/images/hospital/dialysis/vlcsnap-2026-02-17-12h58m45s225.jpg", title: "Advanced Hemodialysis Suite & Stations" },
              { src: "/images/hospital/dialysis/vlcsnap-2026-02-17-12h58m47s194.jpg", title: "Dialysis Unit Multi-Station Overview" },
              { src: "/images/hospital/dialysis/vlcsnap-2026-02-17-12h58m49s563.jpg", title: "Patient Hemodialysis Machine & Central O₂ Unit" },
              { src: "/images/hospital/dialysis/vlcsnap-2026-02-17-12h58m52s709.jpg", title: "Dedicated Sterile Dialysis Bay" },
              { src: "/images/hospital/dialysis/vlcsnap-2026-02-17-12h58m55s897.jpg", title: "Isolation Dialysis Station & Monitoring Console" }
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
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <Link href="/hospital" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800">
            <ArrowLeft className="w-4 h-4" /> Back to Hospital Facilities
          </Link>
        </div>
      </section>
    </div>
  );
}
