"use client";

import Link from "next/link";
import { 
  Building2, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Wifi, 
  Utensils, 
  Users, 
  BedDouble, 
  HeartHandshake, 
  Sparkles, 
  PhoneCall, 
  Home, 
  Award,
  Clock
} from "lucide-react";

export default function HostelsPage() {
  const GIRLS_HOSTEL_FEATURES = [
    {
      title: "1. Accommodation",
      points: [
        "Well-furnished single and shared rooms equipped with beds, wardrobes, study tables, and adequate storage to support both rest and academic preparation.",
        "Room options are available across different occupancy levels, ensuring every student finds an arrangement suited to her comfort and preference."
      ]
    },
    {
      title: "2. Safety and Security",
      points: [
        "Round-the-clock security with CCTV surveillance, biometric entry systems, and a gated campus ensures the complete safety of all residents at all times.",
        "Dedicated female wardens are present on-site to oversee resident welfare, enforce disciplinary guidelines, and provide immediate support when needed.",
        "Structured visitor policies and regulated entry timings are maintained to uphold a safe and disciplined living environment."
      ]
    },
    {
      title: "3. Amenities",
      points: [
        "High-speed Wi-Fi, common lounges, laundry facilities, and well-maintained dining areas are provided for the convenience and comfort of all residents.",
        "Recreational spaces support extracurricular activities, cultural events, yoga, and indoor games — promoting a balanced lifestyle alongside academic commitments."
      ]
    },
    {
      title: "4. Hygiene and Maintenance",
      points: [
        "Regular housekeeping and sanitation services ensure that all living spaces, washrooms, and common areas are kept consistently clean and hygienic.",
        "Well-maintained bathrooms and pantry areas reflect the institution's commitment to high standards of cleanliness and resident well-being."
      ]
    },
    {
      title: "5. Dining",
      points: [
        "A dedicated dining hall serves nutritious, balanced, and freshly prepared meals tailored to the dietary needs and preferences of medical students.",
        "Pantry areas are accessible for students who wish to prepare light meals or snacks at their convenience."
      ]
    },
    {
      title: "6. Community Living",
      points: [
        "The PMRIMS Girls' Hostel fosters a strong sense of sisterhood and belonging, encouraging residents to share experiences, support one another, and build lasting friendships.",
        "Shared common spaces promote healthy interaction, cultural exchange, and collaborative study among students from diverse backgrounds."
      ]
    }
  ];

  const BOYS_HOSTEL_FEATURES = [
    {
      title: "1. Accommodation",
      points: [
        "Spacious single and shared rooms furnished with beds, study tables, wardrobes, and storage facilities to meet the everyday needs of resident students.",
        "Multiple occupancy options are available, offering flexibility to suit individual preferences and requirements."
      ]
    },
    {
      title: "2. Amenities",
      points: [
        "Essential facilities including a dining hall, dedicated study rooms, recreational areas, and laundry services are provided to ensure a comfortable and productive stay.",
        "High-speed Wi-Fi, air-conditioning, and 24-hour electricity supply support uninterrupted academic and personal routines."
      ]
    },
    {
      title: "3. Safety and Security",
      points: [
        "Comprehensive security measures including CCTV surveillance, biometric access control, and on-site wardens ensure a safe and well-monitored residential environment at all times.",
        "Campus entry protocols and structured timings are enforced to maintain discipline, order, and the overall well-being of all residents."
      ]
    },
    {
      title: "4. Community Living",
      points: [
        "Hostel life at PMRIMS cultivates a strong sense of camaraderie among male students, encouraging teamwork, mutual respect, and lasting friendships.",
        "Common lounges, recreation rooms, and shared dining areas provide natural spaces for social interaction, relaxation, and peer support."
      ]
    },
    {
      title: "5. Food and Dining",
      points: [
        "A well-managed dining facility serves healthy, affordable, and freshly prepared meals on a daily basis, catering to the nutritional demands of students engaged in rigorous medical training.",
        "Pantry areas are available for residents who wish to prepare their own meals or snacks outside of regular dining hours."
      ]
    }
  ];

  return (
    <div className="py-16 bg-transparent min-h-screen text-charcoal font-technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Breadcrumb & Main Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-emerald-brand transition-colors">Home</Link> / <Link href="/facilities" className="hover:text-emerald-brand transition-colors">Facilities</Link> / <span className="text-emerald-brand">Student Hostels</span>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
              On-Campus Living
            </span>
            <span className="px-3.5 py-1 rounded-full bg-gold-brand/20 text-emerald-950 border border-gold-brand/40 text-xs font-bold uppercase tracking-wider">
              24/7 Gated Security & Biometrics
            </span>
            <span className="px-3.5 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider">
              Boys, Girls & Premium 1BHK Units
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-emerald-brand tracking-tight">
            Residential <span className="gold-gradient-text italic font-normal">Student Hostels</span>
          </h1>
          <p className="text-slate-600 font-technical mt-3 text-sm sm:text-base max-w-4xl leading-relaxed">
            At Dr. Patnam Mahender Reddy Institute of Medical Sciences (PMRIMS), we understand that a comfortable and secure living environment is essential for academic success. Our on-campus hostel facilities for both male and female students are designed to provide a safe, supportive, and home-like atmosphere — allowing students to focus entirely on their medical education and personal growth.
          </p>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14 text-xs font-technical">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="font-serif font-bold text-emerald-brand text-lg mb-1">Girls’ Hostel</div>
            <div className="text-slate-500 text-[11px]">Female Wardens & Biometric Entry</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="font-serif font-bold text-emerald-brand text-lg mb-1">Boys’ Hostel</div>
            <div className="text-slate-500 text-[11px]">Disciplined & Supportive Living</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="font-serif font-bold text-emerald-brand text-lg mb-1">Premium 1BHK</div>
            <div className="text-slate-500 text-[11px]">Private Independent Suites</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="font-serif font-bold text-emerald-brand text-lg mb-1">Nutritious Dining</div>
            <div className="text-slate-500 text-[11px]">Hygienic Mess & Student Pantries</div>
          </div>
        </div>

        {/* 1. Girls' Hostel Section */}
        <div id="girls-hostel" className="mb-14">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional">
            <div className="pb-6 mb-8 border-b border-slate-100">
              <span className="px-3 py-0.5 rounded-full bg-rose-50 text-rose-800 text-[11px] font-bold uppercase tracking-wider">
                Exclusively for Female Medical Students
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-brand mt-2">
                PMRIMS Girls’ Hostel
              </h2>
              <p className="text-sm text-slate-600 font-technical leading-relaxed mt-2 max-w-4xl">
                The PMRIMS Girls’ Hostel offers a secure, comfortable, and nurturing residential space exclusively for female medical students. Thoughtfully designed to meet the needs of young women pursuing demanding academic programs, the hostel provides all essential amenities within a safe and well-managed campus environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {GIRLS_HOSTEL_FEATURES.map((feature, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50/70 border border-slate-100 space-y-3">
                  <h3 className="text-base font-bold text-emerald-950 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></span>
                    {feature.title}
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-technical leading-relaxed">
                    {feature.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gold-muted shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Boys' Hostel Section */}
        <div id="boys-hostel" className="mb-14">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional">
            <div className="pb-6 mb-8 border-b border-slate-100">
              <span className="px-3 py-0.5 rounded-full bg-blue-50 text-blue-900 text-[11px] font-bold uppercase tracking-wider">
                Secure & Disciplined Residential Living
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-brand mt-2">
                PMRIMS Boys’ Hostel
              </h2>
              <p className="text-sm text-slate-600 font-technical leading-relaxed mt-2 max-w-4xl">
                The PMRIMS Boys’ Hostel provides male medical students with a secure, well-equipped, and disciplined residential facility designed to support focused academic life. Combining comfort with convenience, the hostel ensures that students have everything they need to thrive both inside and outside the classroom.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BOYS_HOSTEL_FEATURES.map((feature, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50/70 border border-slate-100 space-y-3">
                  <h3 className="text-base font-bold text-emerald-950 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></span>
                    {feature.title}
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-technical leading-relaxed">
                    {feature.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gold-muted shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Premium Hostel Accommodation (1BHK) */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mb-14">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
            <div>
              <span className="px-3 py-0.5 rounded-full bg-gold-brand/20 text-emerald-950 text-[11px] font-bold uppercase tracking-wider">
                Enhanced Privacy & Independence
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-brand mt-2">
                Premium Hostel Accommodation
              </h2>
            </div>
            <span className="px-3.5 py-1.5 rounded-2xl bg-slate-100 text-slate-800 text-xs font-bold font-mono">
              1BHK Self-Contained Units
            </span>
          </div>

          <p className="text-sm text-slate-600 font-technical leading-relaxed max-w-4xl mb-6">
            Premium 1BHK units are available for students seeking enhanced privacy and independent living within the campus premises. All hostels are equipped with essential amenities including hygienic dining facilities, uninterrupted water and power supply, security surveillance, and easy access to academic blocks and hospital services.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-semibold text-emerald-950">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
              <Home className="w-5 h-5 text-gold-muted shrink-0" />
              <span>Independent 1BHK Layout</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
              <Wifi className="w-5 h-5 text-gold-muted shrink-0" />
              <span>High-Speed Wi-Fi & Power Backup</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-gold-muted shrink-0" />
              <span>24/7 Security & Access Control</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
              <Building2 className="w-5 h-5 text-gold-muted shrink-0" />
              <span>Easy Walk to Academic Blocks</span>
            </div>
          </div>
        </div>

        {/* Student Hostels Photo Gallery */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                Photo Gallery
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-brand mt-2">
                Hostel Residential Blocks & Campus Grounds
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
                Visual tour of student hostel buildings, secure entry walkways, and on-campus living amenities
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-2xl bg-slate-100 text-slate-800 text-xs font-bold font-mono shrink-0">
              4 Hostel Photos
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { src: "/images/facilities/hostels/DSC00166.jpg", title: "Residential Hostel Complex" },
              { src: "/images/facilities/hostels/DSC06543.JPG", title: "Hostel Block Exterior & Green Grounds" },
              { src: "/images/facilities/hostels/DSC06567.JPG", title: "Student Housing Facilities & Walkway" },
              { src: "/images/facilities/hostels/DSC06579.JPG", title: "Clean & Secure Residential Campus" }
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
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                  <span>{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hostel Office & Helpdesk Callout */}
        <div className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-gold-brand uppercase tracking-wider">
              <PhoneCall className="w-4 h-4 text-gold-brand" /> Hostel Administration & Allotment Desk
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">Inquiries, Room Allotment & Warden Contacts</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-technical leading-relaxed">
              For new student room allotment, fee schedules, visitor guidelines, or emergency warden support, please contact our student housing desk.
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
              Contact Campus Admin
            </Link>
          </div>
        </div>

        <Link href="/facilities" className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1.5">
          <ArrowLeft className="w-4 h-4" /> Back to Facilities Overview
        </Link>
      </div>
    </div>
  );
}
