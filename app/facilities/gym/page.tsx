"use client";

import Link from "next/link";
import { 
  Dumbbell, 
  ArrowLeft, 
  CheckCircle2, 
  Activity, 
  Clock, 
  ShieldCheck, 
  Flame, 
  Heart 
} from "lucide-react";

export default function GymPage() {
  return (
    <div className="py-16 bg-slate-50 min-h-screen text-slate-800 font-technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link> / <Link href="/facilities" className="hover:text-blue-600 transition-colors">Facilities</Link> / <span className="text-blue-600">Gym & Fitness Center</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Student & Faculty <span className="text-blue-600 italic font-normal">Campus Gymnasium</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl leading-relaxed">
            We have a fully equipped gymnasium on campus designed to promote physical fitness, stress relief, and healthy lifestyle habits for medical students, resident doctors, and faculty members.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl w-max">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">Cardiovascular Fitness Zone</h3>
            <p className="text-xs text-slate-600 font-technical leading-relaxed">
              Equipped with motorized digital treadmills, elliptical cross-trainers, stationary exercise bicycles, and rowing machines for endurance and heart health.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl w-max">
              <Dumbbell className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">Strength & Weight Training</h3>
            <p className="text-xs text-slate-600 font-technical leading-relaxed">
              Complete range of rubberized dumbbells, barbell squat racks, multi-station cable machines, bench presses, and weight plates for resistance training.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl w-max">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">Yoga & Floor Exercise Area</h3>
            <p className="text-xs text-slate-600 font-technical leading-relaxed">
              Dedicated cushioned floor area for stretching, core conditioning, yoga sessions, bodyweight calisthenics, and post-workout recovery.
            </p>
          </div>
        </div>

        {/* Specifications & Operating Hours */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-10 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-2xl font-serif font-bold text-slate-900">Gymnasium Infrastructure & Operating Schedule</h2>
            <p className="text-xs text-slate-500">Air-Conditioned Indoor Fitness Facility</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-700 font-technical">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <Clock className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Morning Session: 6:00 AM – 9:00 AM | Evening Session: 5:00 PM – 9:00 PM</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Separate Timing Slots & Designated Facilities for Men and Women</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Full Air-Conditioning, Surround Sound Audio & Changing Rooms</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Qualified Fitness Trainer on Duty for Guidance & Workout Safety</span>
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
