"use client";

import Link from "next/link";
import { 
  Stethoscope, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  Building2, 
  Phone, 
  Users, 
  Award 
} from "lucide-react";

const OPD_DEPARTMENTS = [
  "General Medicine",
  "General Surgery",
  "Obstetrics & Gynaecology",
  "Paediatrics & Child Health",
  "Orthopaedics & Joint Replacement",
  "Dermatology Venereology & Leprosy",
  "Otorhinolaryngology (ENT)",
  "Ophthalmology (Eye)",
  "Psychiatry & Behavioral Sciences",
  "Respiratory & Chest Medicine",
  "Dental Surgery & Oral Medicine",
  "Physiotherapy & Rehabilitation"
];

export default function OutpatientPage() {
  return (
    <div className="w-full bg-transparent min-h-screen text-slate-800 font-technical">
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
            <Stethoscope className="w-4 h-4 text-gold-brand" />
            1000+ Daily Patients Served
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4">
            Outpatient Services <span className="text-blue-400 italic font-normal">(OPD)</span>
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed">
            PMRIMS Outpatient Department offers comprehensive clinical consultation across 15+ medical and surgical specialties with modern diagnostic integration and affordable care.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: OPD Schedule & Departments */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-slate-900">OPD Timings & Consultation Schedule</h2>
                  <p className="text-xs text-slate-500">Daily Consultation Hours (Monday to Saturday)</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-800">
                <div className="p-4 rounded-2xl bg-transparent border border-slate-200/80">
                  <div className="text-xs font-bold text-blue-600 uppercase mb-1">Morning Session</div>
                  <div className="text-base font-bold text-slate-900">9:00 AM – 1:00 PM</div>
                  <div className="text-[11px] text-slate-500 mt-1">General OPD & Specialist Clinics</div>
                </div>

                <div className="p-4 rounded-2xl bg-transparent border border-slate-200/80">
                  <div className="text-xs font-bold text-blue-600 uppercase mb-1">Afternoon Session</div>
                  <div className="text-base font-bold text-slate-900">2:00 PM – 4:00 PM</div>
                  <div className="text-[11px] text-slate-500 mt-1">Follow-up & Super-Specialty Clinics</div>
                </div>
              </div>

              {/* Super-Specialty Consultation Days */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-slate-900">
                <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-600" /> Super-Specialty Consultation Schedule
                </div>
                <div className="space-y-1 text-xs font-semibold text-slate-700">
                  <p>• <strong className="text-slate-900">Cardiology Consultation:</strong> Every Wednesday</p>
                  <p>• <strong className="text-slate-900">Urologist Consultation:</strong> Every Thursday</p>
                </div>
              </div>
            </div>

            {/* Active OPD Specialty Departments */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Clinical Specialties</span>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mt-1">OPD Specialty Departments</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-800">
                {OPD_DEPARTMENTS.map((dept, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-transparent border border-slate-200/70">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{dept}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Helpline */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-blue-600 text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
                <Calendar className="w-4 h-4 text-gold-brand" /> Appointment Desk
              </div>
              <h3 className="text-3xl font-serif font-bold text-white">Book OPD Appointment</h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                Contact our OPD registration desk to book specialist consultations, health checkup packages, or diagnostic appointments:
              </p>

              <div className="space-y-4 pt-4 border-t border-white/20 font-technical">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-blue-100 font-semibold">Medical Hospital:</span>
                  <a href="tel:08417299918" className="text-xl font-bold text-white hover:underline">08417-299918</a>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-white text-blue-700 font-extrabold text-xs uppercase tracking-wider shadow hover:bg-slate-100 transition-colors"
                >
                  Contact OPD Registration Desk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
