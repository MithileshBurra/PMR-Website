"use client";

import Link from "next/link";
import { 
  Users, 
  Wind, 
  Tv, 
  ArrowLeft, 
  CheckCircle2, 
  GraduationCap, 
  Volume2, 
  Wifi, 
  Eye, 
  Sparkles, 
  ShieldCheck, 
  Wrench, 
  Layers, 
  Calendar,
  PhoneCall
} from "lucide-react";

export default function LectureHallsPage() {
  const HALL_FEATURES = [
    {
      icon: Users,
      title: "1. Spacious Tiered Design (300+ Seating Capacity)",
      points: [
        "Each lecture hall in our dedicated complex is designed to comfortably accommodate 300+ students simultaneously.",
        "Tiered gallery-style seating arrangements ensure unobstructed line-of-sight and clear visibility of screens and demonstration boards for every attendee."
      ]
    },
    {
      icon: GraduationCap,
      title: "2. Ergonomic Seating & Desks",
      points: [
        "Comfortable, ergonomically contoured chairs and wide continuous writing desks designed to support long hours of academic lectures without fatigue.",
        "Ample legroom, personal bag storage, and individual writing space ensure complete convenience during note-taking."
      ]
    },
    {
      icon: Volume2,
      title: "3. Advanced Audio-Visual Systems",
      points: [
        "High-definition multimedia projectors, large-format motorized projection screens, and integrated digital sound systems for impactful presentations.",
        "Acoustically treated halls equipped with collar microphones, cordless mics, and distributed speaker arrays ensuring crisp audibility in every row."
      ]
    },
    {
      icon: Wifi,
      title: "4. Smart Technology Integration",
      points: [
        "Campus-wide high-speed Wi-Fi connectivity for seamless real-time access to digital medical references, e-journals, and online learning modules.",
        "Interactive smartboards, digital display podiums, and multimedia teaching tools enabling contemporary pedagogical methodologies."
      ]
    },
    {
      icon: Wind,
      title: "5. Fully Air-Conditioned & Proper Lighting",
      points: [
        "Centrally air-conditioned halls maintaining an optimal, climate-controlled temperature for focused learning throughout the day.",
        "Balanced combination of natural ventilation and glare-free artificial illumination creating an inviting, eye-friendly academic environment."
      ]
    },
    {
      icon: ShieldCheck,
      title: "6. Universal Accessibility & Strategic Location",
      points: [
        "Barrier-free architecture featuring ramps, elevators, and dedicated seating options designed for differently-abled students.",
        "Housed within a dedicated Lecture Hall Complex strategically situated for effortless connectivity to preclinical labs, library, and hospital blocks."
      ]
    }
  ];

  const HALL_FUNCTIONS = [
    {
      title: "Classroom Learning",
      description: "Primary venue for daily didactic lectures, academic seminars, and clinical workshops supporting both traditional and interactive medical teaching.",
      icon: GraduationCap
    },
    {
      title: "Examinations",
      description: "Spacious 300+ capacity tiered layouts ensure a controlled, proctored, and disciplined environment for internal assessments and university examinations.",
      icon: ShieldCheck
    },
    {
      title: "Guest Lectures & Conferences",
      description: "Prestigious setting for hosting visiting medical luminaries, national health symposia, academic panel discussions, and CNE conferences.",
      icon: Users
    },
    {
      title: "Collaborative Activities",
      description: "Layout and smart technology facilitate group discussions, clinical case presentations, student debates, and multidisciplinary reviews.",
      icon: Sparkles
    }
  ];

  const HALL_BENEFITS = [
    {
      title: "Enhanced Learning Experience",
      description: "State-of-the-art audiovisual tools and climate-controlled comfort foster deeper comprehension, active focus, and long-term retention."
    },
    {
      title: "Improved Interaction",
      description: "Tiered sightlines and crisp acoustic clarity encourage active student-faculty dialogue, question sessions, and vibrant classroom engagement."
    },
    {
      title: "Efficient Multi-Functional Use",
      description: "Flexible, technology-enabled infrastructure seamlessly accommodates large academic batches, professional workshops, and university events."
    },
    {
      title: "Motivation and Focus",
      description: "A modern, aesthetic, and professionally maintained learning environment inspires both students and faculty to excel at their highest potential."
    }
  ];

  const MAINTENANCE_PRACTICES = [
    {
      title: "Regular Equipment Checks",
      description: "Periodic preventive servicing of projectors, audio soundboards, microphones, and central air-conditioning systems with timely tech upgrades."
    },
    {
      title: "Hygiene & Cleanliness",
      description: "Daily routine housekeeping, deep sanitization of tiered desk surfaces, and clean floor maintenance after every lecture session."
    },
    {
      title: "Responsive Feedback Mechanism",
      description: "Active feedback channels from students and professors to rapidly address technical issues and continuously enhance teaching infrastructure."
    }
  ];

  return (
    <div className="py-16 bg-transparent min-h-screen text-charcoal font-technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Breadcrumb & Main Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-emerald-brand transition-colors">Home</Link> / <Link href="/facilities" className="hover:text-emerald-brand transition-colors">Facilities</Link> / <span className="text-emerald-brand">Lecture Halls</span>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
              Dedicated Lecture Hall Complex
            </span>
            <span className="px-3.5 py-1 rounded-full bg-gold-brand/20 text-emerald-950 border border-gold-brand/40 text-xs font-bold uppercase tracking-wider">
              300+ Seating Capacity Each
            </span>
            <span className="px-3.5 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider">
              Fully Air-Conditioned & Smart AV
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-emerald-brand tracking-tight">
            Dedicated Smart <span className="gold-gradient-text italic font-normal">Lecture Hall Complex</span>
          </h1>
          <p className="text-slate-600 font-technical mt-3 text-sm sm:text-base max-w-4xl leading-relaxed">
            Lecture halls are an integral part of any college campus, serving as the primary space for academic instruction and knowledge dissemination. A well-designed lecture hall not only facilitates effective teaching and learning but also fosters engagement and collaboration among students and faculty.
          </p>
        </div>

        {/* Quick Highlights Summary Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14 text-xs font-technical">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="font-serif font-bold text-emerald-brand text-2xl mb-1">300+</div>
            <div className="text-slate-500 text-[11px] uppercase tracking-wider font-bold">Seats Per Hall</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="font-serif font-bold text-emerald-brand text-lg mb-1">Central AC</div>
            <div className="text-slate-500 text-[11px] uppercase tracking-wider font-bold">Climate Controlled</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="font-serif font-bold text-emerald-brand text-lg mb-1">Smart AV</div>
            <div className="text-slate-500 text-[11px] uppercase tracking-wider font-bold">Interactive Displays</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="font-serif font-bold text-emerald-brand text-lg mb-1">Accessible</div>
            <div className="text-slate-500 text-[11px] uppercase tracking-wider font-bold">Elevator & Ramp Access</div>
          </div>
        </div>

        {/* 1. Features of PMRIMS Lecture Halls */}
        <div className="mb-14">
          <div className="mb-6">
            <span className="px-3 py-0.5 rounded-full bg-gold-brand/20 text-emerald-950 text-[11px] font-bold uppercase tracking-wider">
              NMC Compliant Academic Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-brand mt-2">
              Features of the PMRIMS Lecture Halls
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
              Spacious tiered design, advanced acoustics, smart technology integration, and climate-controlled comfort
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HALL_FEATURES.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm space-y-4">
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

        {/* Lecture Halls Photo Gallery */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                Photo Gallery
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-brand mt-2">
                Smart Lecture Halls & Amphitheatres
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
                Inside views of our 300+ capacity tiered smart halls, multimedia podiums, and ergonomic seating
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-2xl bg-slate-100 text-slate-800 text-xs font-bold font-mono shrink-0">
              5 Hall Photos
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { src: "/images/facilities/lecture-halls/DSC00139.jpg", title: "Tiered Smart Lecture Hall (300+ Capacity)" },
              { src: "/images/facilities/lecture-halls/DSC00144.jpg", title: "Ergonomic Student Seating & Wide Desks" },
              { src: "/images/facilities/lecture-halls/DSC00155.jpg", title: "Instructor Digital Podium & Audio-Visual Screen" },
              { src: "/images/facilities/lecture-halls/DSC00157.jpg", title: "Centrally Air-Conditioned Academic Theatre" },
              { src: "/images/facilities/lecture-halls/DSC00162.jpg", title: "Acoustically Treated Gallery Seating" }
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

        {/* 2. Functions of Lecture Halls */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mb-14">
          <div className="mb-8 pb-6 border-b border-slate-100">
            <span className="px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-900 text-[11px] font-bold uppercase tracking-wider">
              Versatile Academic Hub
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-brand mt-2">
              Functions of the Lecture Halls
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
              Multi-purpose venues supporting classroom pedagogy, secure examinations, and clinical symposia
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HALL_FUNCTIONS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50/70 border border-slate-100 space-y-3">
                  <div className="p-2.5 bg-white text-emerald-800 rounded-xl w-max shadow-sm border border-slate-100">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-emerald-950">{item.title}</h4>
                  <p className="text-xs text-slate-600 font-technical leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Benefits of Well-Equipped Lecture Halls */}
        <div className="mb-14">
          <div className="mb-6">
            <span className="px-3 py-0.5 rounded-full bg-blue-50 text-blue-900 text-[11px] font-bold uppercase tracking-wider">
              Scholarly Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-brand mt-2">
              Benefits of Well-Equipped Lecture Halls
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
              Elevating academic retention, student participation, and institutional collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HALL_BENEFITS.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-xl bg-gold-brand/20 text-emerald-950 flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h4 className="font-bold text-sm text-emerald-950">{benefit.title}</h4>
                <p className="text-xs text-slate-600 font-technical leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Essential Maintenance Practices */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mb-14">
          <div className="mb-8 pb-6 border-b border-slate-100">
            <span className="px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-900 text-[11px] font-bold uppercase tracking-wider">
              Operational Reliability
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-brand mt-2">
              Essential Maintenance Practices
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
              Rigorous technology upkeep, spotless hygiene, and responsive faculty-student feedback
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MAINTENANCE_PRACTICES.map((practice, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50/70 border border-slate-100 space-y-2">
                <div className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-gold-muted" />
                  <h4 className="font-bold text-sm text-emerald-950">{practice.title}</h4>
                </div>
                <p className="text-xs text-slate-600 font-technical leading-relaxed">{practice.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Administration Helpdesk Callout */}
        <div className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-gold-brand uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-gold-brand" /> Academic Complex Coordination
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">Lecture Complex Booking & AV Inquiries</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-technical leading-relaxed">
              For academic scheduling, guest seminar hall allotments, AV tech support, and conference bookings, please contact the academic dean&apos;s office.
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
              Academic Office
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
