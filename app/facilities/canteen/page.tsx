"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Utensils, 
  UtensilsCrossed, 
  Coffee, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  HeartPulse, 
  Award, 
  Users, 
  ArrowLeft, 
  PhoneCall,
  Apple,
  Camera,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const CANTEEN_PHOTOS = [
  { src: "/images/Canteen/PHOTO-2026-11-07-12-32-51.jpg", title: "Two-Storey Cafe Oasis Building & Campus Trees" },
  { src: "/images/Canteen/PHOTO-2026-11-07-12-32-48.jpg", title: "Cafe Oasis Modern Cafeteria Exterior" },
  { src: "/images/Canteen/PHOTO-2026-11-07-12-32-49%203.jpg", title: "Front Entrance & Cafe Oasis Facade" },
  { src: "/images/Canteen/PHOTO-2026-11-07-12-32-49.jpg", title: "Air-Conditioned Indoor Dining Lounge" },
  { src: "/images/Canteen/PHOTO-2026-11-07-12-32-49%202.jpg", title: "Open-Air Terrace Cafeteria & Mezzanine" },
  { src: "/images/Canteen/PHOTO-2026-11-07-12-32-49%204.jpg", title: "Shaded Outdoor Dining Deck & Fans" },
  { src: "/images/Canteen/PHOTO-2026-11-07-12-32-50%202.jpg", title: "Spacious Student Seating & Dining Benches" },
  { src: "/images/Canteen/PHOTO-2026-11-07-12-32-50.jpg", title: "Terrace Dining with Lush Green Tree Views" },
  { src: "/images/Canteen/PHOTO-2026-11-07-12-32-48%202.jpg", title: "Cafe Oasis Food & Friends Campus Mural" }
];

export default function CanteenPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const MESS_FEATURES = [
    {
      icon: Apple,
      title: "1. Nutritious and Balanced Meal Plans",
      points: [
        "Daily meals are carefully planned by nutrition-conscious catering staff to provide a well-balanced diet that meets the energy and health requirements of medical students engaged in long hours of study and clinical training.",
        "The weekly menu is thoughtfully rotated to include a variety of regional and seasonal dishes, ensuring diversity and preventing monotony in daily dining.",
        "Special dietary requirements and preferences, including vegetarian options, are accommodated with care and consistency."
      ]
    },
    {
      icon: ShieldCheck,
      title: "2. Hygienic Food Preparation",
      points: [
        "All meals are prepared in a fully equipped, professionally managed kitchen that adheres to strict food safety and hygiene standards at every stage — from ingredient storage to cooking and serving.",
        "Fresh, high-quality ingredients are sourced daily to ensure the nutritional value and taste of every meal served to students and staff.",
        "Regular inspections and quality checks are conducted to uphold the highest standards of food safety and cleanliness."
      ]
    },
    {
      icon: Users,
      title: "3. Spacious and Clean Dining Area",
      points: [
        "The mess dining hall is spacious, well-ventilated, and comfortably furnished to accommodate a large number of students simultaneously, minimizing wait times during peak meal hours.",
        "The dining area is maintained to a high standard of cleanliness, with dedicated housekeeping staff ensuring that tables, floors, and serving areas are sanitized regularly throughout the day."
      ]
    },
    {
      icon: Clock,
      title: "4. Timely Meal Services",
      points: [
        "Meals are served at scheduled timings designed to align with the academic timetable, ensuring that students can dine comfortably between lectures, clinical postings, and study sessions without disruption.",
        "Flexible meal timings during examination periods accommodate the varied schedules of students during high-pressure academic phases."
      ]
    },
    {
      icon: Award,
      title: "5. Affordable and Subsidized Pricing",
      points: [
        "The mess operates on a subsidized meal plan model, ensuring that quality nutrition remains accessible and affordable for all resident students throughout their course of study at PMRIMS.",
        "Transparent mess fee structures and monthly billing ensure clarity and convenience for students and their families."
      ]
    }
  ];

  return (
    <div className="py-16 bg-transparent min-h-screen text-charcoal font-technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Breadcrumb & Main Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-emerald-brand transition-colors">Home</Link> / <Link href="/facilities" className="hover:text-emerald-brand transition-colors">Facilities</Link> / <span className="text-emerald-brand">Mess & Canteen</span>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
              Student Mess & Dining Hall
            </span>
            <span className="px-3.5 py-1 rounded-full bg-gold-brand/20 text-emerald-950 border border-gold-brand/40 text-xs font-bold uppercase tracking-wider">
              Multi-Cuisine Public Canteen
            </span>
            <span className="px-3.5 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider">
              100% Hygienic & Nutritious
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-emerald-brand tracking-tight">
            College Mess & <span className="gold-gradient-text italic font-normal">Campus Canteen</span>
          </h1>
          <p className="text-slate-600 font-technical mt-3 text-sm sm:text-base max-w-4xl leading-relaxed">
            At Dr. Patnam Mahender Reddy Institute of Medical Sciences (PMRIMS), we place utmost priority on providing wholesome, hygienic, and nutritious food to support the demanding schedules of medical students, healthcare staff, and visitors. Our campus features a dedicated student mess and a separate multi-cuisine canteen.
          </p>
        </div>

        {/* Quick Highlights Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14 text-xs font-technical">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="font-serif font-bold text-emerald-brand text-lg mb-1">Balanced Nutrition</div>
            <div className="text-slate-500 text-[11px]">Dietitian-Curated Rotating Menu</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="font-serif font-bold text-emerald-brand text-lg mb-1">Strict Hygiene</div>
            <div className="text-slate-500 text-[11px]">Daily Sanitized Kitchen & Tables</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="font-serif font-bold text-emerald-brand text-lg mb-1">Separate Canteen</div>
            <div className="text-slate-500 text-[11px]">For Doctors, Patients & Visitors</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="font-serif font-bold text-emerald-brand text-lg mb-1">Subsidized Pricing</div>
            <div className="text-slate-500 text-[11px]">Affordable Student Meal Plans</div>
          </div>
        </div>

        {/* 1. Features of PMRIMS College Mess */}
        <div className="mb-14">
          <div className="mb-6">
            <span className="px-3 py-0.5 rounded-full bg-gold-brand/20 text-emerald-950 text-[11px] font-bold uppercase tracking-wider">
              Resident Student Dining
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-brand mt-2">
              Features of the PMRIMS College Mess
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
              Nutritious meal plans, stringent food safety standards, and spacious dining designed for medical students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MESS_FEATURES.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={idx} 
                  className={`bg-white rounded-3xl p-7 border border-slate-200 shadow-sm space-y-4 ${
                    idx === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-emerald-50 text-emerald-800 rounded-2xl shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-emerald-brand">{feature.title}</h3>
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-technical leading-relaxed">
                    {feature.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-gold-muted shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Separate Multi-Cuisine Canteen Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mb-14">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
            <div>
              <span className="px-3 py-0.5 rounded-full bg-blue-50 text-blue-900 text-[11px] font-bold uppercase tracking-wider">
                Multi-Cuisine Public Dining
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-brand mt-2">
                Separate Campus Canteen
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
                Open to outsiders, students, patients, attendants, and doctors
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-100 text-slate-800 font-mono text-xs font-bold shrink-0">
              <Coffee className="w-4 h-4 text-emerald-800" /> All-Day Service & Variety
            </div>
          </div>

          <p className="text-sm text-slate-600 font-technical leading-relaxed max-w-4xl mb-6">
            We also have a <strong>separate canteen</strong> on campus dedicated to outsiders, students, patients, attendants, and doctors. The canteen offers thoroughly hygienic food and all types of food varieties — including authentic South Indian tiffins, North Indian thali meals, Chinese specialties, quick bites, fresh fruit juices, bakery items, and hot tea and coffee throughout the day.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-semibold text-emerald-950">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
              <UtensilsCrossed className="w-5 h-5 text-gold-muted shrink-0" />
              <span>Multi-Cuisine Variety</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-gold-muted shrink-0" />
              <span>100% Hygienic Food</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
              <Users className="w-5 h-5 text-gold-muted shrink-0" />
              <span>For Patients, Staff & Visitors</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
              <Coffee className="w-5 h-5 text-gold-muted shrink-0" />
              <span>Fresh Juices & Beverages</span>
            </div>
          </div>
        </div>

        {/* Campus Canteen Photo Gallery */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 w-max">
                <Camera className="w-3.5 h-3.5 text-emerald-700" />
                Photo Gallery
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-brand mt-2">
                Cafe Oasis & Campus Dining Facility
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
                Visual glimpses of our open-air terrace cafeteria, student dining spaces, and campus cafeteria ambiance
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-2xl bg-slate-100 text-slate-800 text-xs font-bold font-mono shrink-0">
              {CANTEEN_PHOTOS.length} Canteen Photos
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {CANTEEN_PHOTOS.map((img, idx) => (
              <div 
                key={idx} 
                onClick={() => setLightboxIndex(idx)}
                className="group rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 hover:shadow-xl transition-all duration-300 cursor-pointer relative"
              >
                <div className="overflow-hidden aspect-[4/3] sm:aspect-[16/10] relative">
                  <Image 
                    src={img.src} 
                    alt={img.title} 
                    fill
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="p-3 rounded-full bg-white/90 text-slate-900 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <Maximize2 className="w-5 h-5 text-emerald-700" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dining Administration & Helpdesk Callout */}
        <div className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-gold-brand uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-gold-brand" /> Campus Catering & Food Services
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">Dietary Inquiries & Mess Registration</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-technical leading-relaxed">
              For student mess registrations, dietary accommodations, catering for institutional events, or canteen inquiries, please contact our catering administrative desk.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
            <a 
              href="tel:08417299918" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gold-brand text-emerald-950 font-extrabold text-xs uppercase tracking-wider transition-all shadow-md hover:bg-gold-muted w-full sm:w-auto"
            >
              <PhoneCall className="w-4 h-4" /> 08417-299918
            </a>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all border border-white/20 w-full sm:w-auto"
            >
              Contact Admin
            </Link>
          </div>
        </div>

        <Link href="/facilities" className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1.5">
          <ArrowLeft className="w-4 h-4" /> Back to Facilities Overview
        </Link>
      </div>

      {/* Lightbox Modal (pure photo viewer, NO text below photo) */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : CANTEEN_PHOTOS.length - 1))}
              className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors z-10"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => setLightboxIndex((prev) => (prev! < CANTEEN_PHOTOS.length - 1 ? prev! + 1 : 0))}
              className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors z-10"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Photo Container */}
            <div className="relative w-full aspect-[16/10] max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl bg-black">
              <Image
                src={CANTEEN_PHOTOS[lightboxIndex].src}
                alt={CANTEEN_PHOTOS[lightboxIndex].title}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
