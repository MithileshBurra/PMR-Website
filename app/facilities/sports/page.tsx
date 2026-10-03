"use client";

import Link from "next/link";
import { 
  Trophy, 
  ArrowLeft, 
  CheckCircle2, 
  Utensils, 
  Activity, 
  Target 
} from "lucide-react";

export default function SportsPage() {

  return (
    <div className="py-16 bg-slate-50 min-h-screen text-slate-800 font-technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link> / <Link href="/facilities" className="hover:text-blue-600 transition-colors">Facilities</Link> / <span className="text-blue-600">Sports & Canteen</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Sports Complex & <span className="text-blue-600 italic font-normal">Campus Canteen</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl leading-relaxed">
            PMRIMS provides expansive outdoor sports grounds, indoor recreation facilities, and a modern hygienic campus canteen catering to students, faculty, and visiting patients.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl w-max">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">Outdoor Athletics Ground</h3>
            <p className="text-xs text-slate-600 font-technical leading-relaxed">
              Full-size cricket ground, football turf pitch, basketball courts, and floodlit volleyball courts hosting annual inter-college sports fests and athletic meets.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl w-max">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">Indoor Games Arena</h3>
            <p className="text-xs text-slate-600 font-technical leading-relaxed">
              Indoor badminton courts, professional table tennis arenas, chess, and carrom stations for student recreation and stress relief.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl w-max">
              <Utensils className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">Multicuisine Campus Canteen</h3>
            <p className="text-xs text-slate-600 font-technical leading-relaxed">
              Serving fresh, hygienic breakfast, lunches, snacks, juices, and hot beverages prepared under strict food safety and cleanliness guidelines.
            </p>
          </div>
        </div>

        {/* Portal Link Card */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900">Campus Canteen & Cafeteria Information</h2>
              <p className="text-xs text-slate-500">Multicuisine student dining, breakfast & refreshers on campus</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-700 font-technical">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Dedicated Seating for Students, Faculty & Hospital Visitors</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Affordable & Nutrition-Verified South & North Indian Food Options</span>
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
