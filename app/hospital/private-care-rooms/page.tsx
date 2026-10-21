"use client";

import Link from "next/link";
import { 
  BedDouble, 
  ArrowLeft, 
  CheckCircle2, 
  Bed, 
  Bath, 
  Users, 
  Tv, 
  Wind, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  HeartHandshake, 
  Stethoscope,
  PhoneCall
} from "lucide-react";

export default function PrivateCareRoomsPage() {
  const ROOM_FEATURES = [
    {
      icon: Bed,
      title: "1. Comfortable Patient Accommodation",
      points: [
        "Each private room is equipped with an advanced 5-function electric bed, allowing flexible motorized positioning for maximum patient comfort and ease of nursing procedures.",
        "The 5-function electric bed supports head elevation, leg elevation, height adjustment, and lateral tilt — ensuring optimal positioning for clinical care and restful recovery at all times.",
        "Soft furnishings, adequate patient storage, and a thoughtful layout create a calming, home-like healing environment."
      ]
    },
    {
      icon: BedDouble,
      title: "2. Caretaker Accommodation",
      points: [
        "A dedicated, comfortable caretaker bed is provided in every room, ensuring that a family member or attendant can remain by the patient's side throughout their stay.",
        "Provides constant emotional support, companionship, and peace of mind to both the patient and their loved ones."
      ]
    },
    {
      icon: Tv,
      title: "3. Entertainment & Climate Control",
      points: [
        "Every room is fitted with a flat-screen television to keep patients engaged, informed, and entertained during recovery, positively boosting morale.",
        "Individual high-efficiency air-conditioning maintains a consistently pleasant, temperature-controlled environment for uninterrupted sleep and comfort."
      ]
    },
    {
      icon: Users,
      title: "4. Private Waiting Area",
      points: [
        "Each Private Care Room includes its own dedicated waiting area for family members and visiting relatives.",
        "Allows visitors to wait comfortably without intruding on the patient's rest, clinical procedures, or privacy, reflecting our family-centric care philosophy."
      ]
    },
    {
      icon: Bath,
      title: "5. Attached Private Bathroom",
      points: [
        "Fully equipped private bathroom designed for patient safety, comfort, and convenience.",
        "Includes a western toilet, instant geyser for on-demand hot water, and modern wash basin.",
        "Maintained to stringent infection-control standards with regular housekeeping, sanitation, and disinfection throughout the day."
      ]
    }
  ];

  const WHY_CHOOSE_US = [
    {
      title: "Privacy and Dignity",
      description: "Complete privacy away from general ward settings, allowing patients to focus entirely on recovery in a calm, dignified, and distraction-free environment.",
      icon: ShieldCheck
    },
    {
      title: "Round-the-Clock Nursing Care",
      description: "Dedicated, attentive 24/7 nursing care ensuring that every medical, medication, and comfort requirement is attended to promptly and professionally.",
      icon: Clock
    },
    {
      title: "Family-Centered Care",
      description: "Full caretaker accommodation fostering a supportive atmosphere where loved ones stay close, aiding emotional well-being alongside clinical recovery.",
      icon: HeartHandshake
    },
    {
      title: "Hygiene & Infection Control",
      description: "Daily comprehensive sanitization, linen change, and rigorous housekeeping protocols creating a pristine, hospital-grade safe environment.",
      icon: Sparkles
    },
    {
      title: "Seamless Access to Clinical Services",
      description: "Immediate bedside access to multi-specialty consultations, diagnostic testing, pharmacy deliveries, and emergency surgical backup across PMRIMS.",
      icon: Stethoscope
    }
  ];

  return (
    <div className="py-16 bg-transparent min-h-screen text-slate-800 font-technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Breadcrumb & Main Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link> / <Link href="/hospital" className="hover:text-blue-600 transition-colors">Hospital</Link> / <span className="text-blue-600">Private Care Rooms</span>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider">
              7 Exclusive Inpatient Rooms
            </span>
            <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
              24/7 Dedicated Nursing & Caregiver Bed
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Private Care <span className="text-blue-600 italic font-normal">Rooms</span>
          </h1>
          <p className="text-slate-600 font-technical mt-3 text-sm sm:text-base max-w-4xl leading-relaxed">
            At Dr. Patnam Mahender Reddy Institute of Medical Sciences (PMRIMS), we believe that the healing process extends beyond medical treatment — it encompasses comfort, privacy, and a sense of security. Our Private Care Rooms are thoughtfully designed to provide inpatients with a serene, well-equipped, and home-like environment, ensuring that every patient receives not just exceptional medical care, but also the comfort and dignity they deserve throughout their stay.
          </p>
        </div>

        {/* About the Rooms Overview Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <span className="px-3 py-0.5 rounded-full bg-blue-50 text-blue-900 text-[11px] font-bold uppercase tracking-wider">
                Inpatient Comfort & Dignity
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
                About Our Private Care Rooms
              </h2>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <div className="px-4 py-2 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-xl font-bold font-mono text-blue-600">7 Rooms</div>
                <div className="text-[11px] text-slate-500 uppercase tracking-wider">Furnished Private Bays</div>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-600 font-technical leading-relaxed mt-6 max-w-4xl">
            PMRIMS offers 7 fully furnished Private Care Rooms exclusively for inpatients, each meticulously designed to the highest standards of comfort, hygiene, and patient well-being. Whether recovering from surgery, managing a chronic condition, or undergoing specialized treatment, our Private Care Rooms provide the ideal environment for rest, recovery, and rehabilitation.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100 text-xs font-technical">
            <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 text-center">
              <div className="font-bold text-slate-900 text-sm mb-1">5-Function Bed</div>
              <div className="text-slate-500 text-[11px]">Motorized Position Control</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 text-center">
              <div className="font-bold text-slate-900 text-sm mb-1">Attendant Bed</div>
              <div className="text-slate-500 text-[11px]">Dedicated Caregiver Space</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 text-center">
              <div className="font-bold text-slate-900 text-sm mb-1">Climate Controlled</div>
              <div className="text-slate-500 text-[11px]">Individual AC & Flat Screen TV</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 text-center">
              <div className="font-bold text-slate-900 text-sm mb-1">Attached Bath</div>
              <div className="text-slate-500 text-[11px]">Hot Water Geyser & Western Toilet</div>
            </div>
          </div>
        </div>

        {/* 5 Detailed Room Features */}
        <div className="mb-14">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Comprehensive Room Features
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
              Thoughtfully curated amenities ensuring clinical excellence, comfort, and safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ROOM_FEATURES.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={idx} 
                  className={`bg-white rounded-3xl p-7 border border-slate-200 shadow-sm space-y-4 ${
                    idx === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-slate-900">{feature.title}</h3>
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-technical leading-relaxed">
                    {feature.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Private Care Rooms Photo Gallery */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider">
                Photo Gallery
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
                Private Inpatient Suites & Amenities
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
                Visual tour of our furnished private rooms, 5-function electric beds, and attendant accommodations
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-2xl bg-slate-100 text-slate-800 text-xs font-bold font-mono shrink-0">
              4 Room Photos
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { src: "/images/hospital/private-care-rooms/DSC06751.JPG", title: "5-Function Electric Patient Bed" },
              { src: "/images/hospital/private-care-rooms/DSC06754.JPG", title: "Spacious Inpatient Suite & Caretaker Setup" },
              { src: "/images/hospital/private-care-rooms/DSC06757.JPG", title: "Climate-Controlled Healing Environment" },
              { src: "/images/hospital/private-care-rooms/DSC06761.JPG", title: "Dedicated Visitor & Caregiver Lounge" }
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

        {/* Why Choose a Private Care Room at PMRIMS? */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mb-12">
          <div className="mb-8 pb-6 border-b border-slate-100">
            <span className="px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-900 text-[11px] font-bold uppercase tracking-wider">
              Patient-First Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
              Why Choose a Private Care Room at PMRIMS?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
              Holistic inpatient care combining specialized medical supervision, infection safety, and compassionate family comfort
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50/70 border border-slate-100 space-y-3">
                  <div className="p-2.5 bg-white text-blue-600 rounded-xl w-max shadow-sm border border-slate-100">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-600 font-technical leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

          {/* Admission & Booking Helpline Banner */}
          <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-blue-50/60 p-6 rounded-2xl border border-blue-100">
            <div className="space-y-1">
              <div className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4 text-blue-600" /> Private Room Enquiries & Reservations
              </div>
              <p className="text-xs text-slate-600 font-technical">
                To check real-time availability, schedule an admission, or learn about room packages:
              </p>
              <div className="text-base font-bold text-blue-900 font-mono">
                Medical Hospital Desk: <a href="tel:08417299918" className="hover:underline">08417-299918</a>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0"
            >
              Contact Hospital Admission Desk
            </Link>
          </div>
        </div>

        <Link href="/hospital/inpatient" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800">
          <ArrowLeft className="w-4 h-4" /> Back to Inpatient Care Overview
        </Link>
      </div>
    </div>
  );
}
