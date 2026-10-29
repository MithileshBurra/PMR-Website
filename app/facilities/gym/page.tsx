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
  Heart,
  Camera
} from "lucide-react";

const GYM_PHOTOS = [
  { src: "/images/facilities/gym/DSC06594.JPG", title: "Strength Training & Weight Machine Stations" },
  { src: "/images/facilities/gym/DSC06603.JPG", title: "Multi-Station Resistance & Free Weights Zone" },
  { src: "/images/facilities/gym/DSC06606.JPG", title: "Cardiovascular Fitness & Digital Treadmills" },
  { src: "/images/facilities/gym/DSC06609.JPG", title: "Cross-Training & Functional Conditioning Area" },
  { src: "/images/facilities/gym/DSC06620.JPG", title: "Air-Conditioned Indoor Campus Gymnasium" }
];

export default function GymPage() {
  return (
    <div className="py-16 bg-transparent min-h-screen text-slate-800 font-technical">
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
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-12 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-2xl font-serif font-bold text-slate-900">Gymnasium Infrastructure & Operating Schedule</h2>
            <p className="text-xs text-slate-500">Air-Conditioned Indoor Fitness Facility</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-700 font-technical">
            <div className="p-4 rounded-2xl bg-transparent border border-slate-200/80 flex items-center gap-3">
              <Clock className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Morning Session: 6:00 AM – 9:00 AM | Evening Session: 5:00 PM – 9:00 PM</span>
            </div>
            <div className="p-4 rounded-2xl bg-transparent border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Separate Timing Slots & Designated Facilities for Men and Women</span>
            </div>
            <div className="p-4 rounded-2xl bg-transparent border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Full Air-Conditioning, Surround Sound Audio & Changing Rooms</span>
            </div>
            <div className="p-4 rounded-2xl bg-transparent border border-slate-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Qualified Fitness Trainer on Duty for Guidance & Workout Safety</span>
            </div>
          </div>
        </div>

        {/* Gymnasium Photo Gallery */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 w-max">
                <Camera className="w-3.5 h-3.5 text-blue-600" />
                Photo Gallery
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
                PMRIMS Fitness & Gymnasium Facility
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
                Visual glimpses of our indoor fitness centre, cardiovascular stations, strength training equipment, and free weight zones
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-2xl bg-slate-100 text-slate-800 text-xs font-bold font-mono shrink-0">
              {GYM_PHOTOS.length} Facility Photos
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {GYM_PHOTOS.map((img, idx) => (
              <div key={idx} className="group rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="overflow-hidden aspect-[16/10]">
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="p-4 sm:p-5 text-sm text-slate-800 bg-white font-semibold border-t border-slate-100 flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link href="/facilities" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800">
          <ArrowLeft className="w-4 h-4" /> Back to Facilities Overview
        </Link>
      </div>
    </div>
  );
}
