"use client";

import Link from "next/link";
import { 
  Activity, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Stethoscope, 
  HeartPulse, 
  Award, 
  Cpu 
} from "lucide-react";

export default function SkillLabPage() {
  return (
    <div className="py-16 bg-transparent min-h-screen text-slate-800 font-technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link> / <Link href="/facilities" className="hover:text-blue-600 transition-colors">Facilities</Link> / <span className="text-blue-600">Skill Lab</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Advanced Clinical Simulation & <span className="text-blue-600 italic font-normal">Skill Lab</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl leading-relaxed">
            The Medical Simulation & Skill Development Center at PMRIMS provides high-fidelity manikins, resuscitation trainers, airway models, and procedural task trainers for hands-on clinical competency training before patient care rotations.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl w-max">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">BLS & ACLS Resuscitation Manikins</h3>
            <p className="text-xs text-slate-600 font-technical leading-relaxed">
              Computerized adult and pediatric CPR manikins providing real-time feedback on chest compression depth, rate, ventilation, and automated external defibrillator (AED) operation.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl w-max">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">Airway & Clinical Task Trainers</h3>
            <p className="text-xs text-slate-600 font-technical leading-relaxed">
              Endotracheal intubation heads, difficult airway trainers, IV cannulation arms, catheterization models, intramuscular injection pads, and lumbar puncture simulators.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl w-max">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">Laparoscopic & Obstetric Simulators</h3>
            <p className="text-xs text-slate-600 font-technical leading-relaxed">
              Virtual laparoscopic skill trainers, normal & complicated labor delivery manikins, neonatal resuscitation (NRICU) modules, and surgical knot-tying suture pads.
            </p>
          </div>
        </div>

        {/* Detailed Competency Card */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-10 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-2xl font-serif font-bold text-slate-900">NMC Competency-Based Medical Education (CBME)</h2>
            <p className="text-xs text-slate-500">Mandatory Simulation Training for MBBS Undergraduates & Interns</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-700 font-technical">
            <div className="p-4 rounded-2xl bg-transparent border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Structured Skill Assessment & Debriefing Rooms with Video Audio Capture</span>
            </div>
            <div className="p-4 rounded-2xl bg-transparent border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Dedicated Training Workshops for Basic Life Support (AHA Certified)</span>
            </div>
            <div className="p-4 rounded-2xl bg-transparent border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Sterile Operative Technique & Scrubbing Protocol Stations</span>
            </div>
            <div className="p-4 rounded-2xl bg-transparent border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Trauma Resuscitation (ATLS) Simulation Protocols</span>
            </div>
          </div>
        </div>

        <Link href="/facilities" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800">
          <ArrowLeft className="w-4 h-4" /> Back to Facilities Overview
        </Link>
      </div>
    </div>
  );
}
