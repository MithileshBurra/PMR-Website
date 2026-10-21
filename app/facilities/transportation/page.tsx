"use client";

import Link from "next/link";
import { 
  Bus, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Wind, 
  Leaf, 
  HeartHandshake, 
  Wrench, 
  AlertTriangle, 
  PhoneCall,
  Sparkles,
  Award
} from "lucide-react";

export default function TransportationPage() {
  const BUS_FEATURES = [
    {
      icon: MapPin,
      title: "1. Extensive Route Coverage",
      points: [
        "PMRIMS buses operate across a wide network of routes covering major residential areas, urban localities, and key transit points surrounding the college campus, ensuring maximum accessibility for students and staff from diverse locations.",
        "Multiple strategically planned pickup and drop-off points along each route minimize travel distances and waiting times, making the commute as convenient as possible for all users.",
        "Routes are periodically reviewed and updated based on student residential patterns and institutional needs, ensuring coverage remains relevant and comprehensive throughout the academic year."
      ]
    },
    {
      icon: ShieldCheck,
      title: "2. Safety Measures",
      points: [
        "All PMRIMS buses are equipped with GPS-enabled real-time tracking systems, allowing the transport office and parents to monitor vehicle locations at all times and ensuring complete transparency in transit operations.",
        "Every bus is operated by experienced, licensed, and background-verified drivers who are trained in safe driving practices, passenger management, and emergency response protocols.",
        "CCTV cameras installed inside each bus provide continuous monitoring of passenger safety, while onboard first-aid kits ensure immediate medical assistance is available in the event of an emergency."
      ]
    },
    {
      icon: Wind,
      title: "3. Comfortable Travel",
      points: [
        "Each bus in the PMRIMS fleet is furnished with spacious, cushioned seating arrangements and adequate ventilation, ensuring a comfortable and fatigue-free commute for students and staff after long academic and clinical hours.",
        "Air-conditioned buses are available to ensure a pleasant travel experience throughout all seasons, regardless of external weather conditions.",
        "Regular fleet maintenance and periodic vehicle inspections guarantee a consistently smooth, reliable, and hassle-free ride on every route, every day."
      ]
    },
    {
      icon: Clock,
      title: "4. Punctual and Well-Organized Operations",
      points: [
        "All PMRIMS bus services operate on clearly defined, pre-determined schedules that are aligned with the college academic timetable, ensuring timely arrivals and departures without disrupting academic routines.",
        "Route maps, bus timings, and stop details are communicated clearly to all students and staff at the beginning of each academic year, with real-time updates provided as and when schedule changes occur."
      ]
    },
    {
      icon: Award,
      title: "5. Affordable and Subsidized Fares",
      points: [
        "The PMRIMS Bus Facility operates on a subsidized fee structure, making quality institutional transportation accessible and affordable for students from all economic backgrounds.",
        "Transparent and clearly communicated fare structures with semester-based billing ensure financial clarity and convenience for students and their families throughout the academic year."
      ]
    }
  ];

  const BUS_BENEFITS = [
    {
      title: "Convenience & Time Savings",
      description: "Eliminates the daily stress of arranging private transport, saving students and staff significant time and expense. Strategic doorstep pickup points minimize early morning travel strain.",
      icon: Clock
    },
    {
      title: "Safety Assurance",
      description: "GPS tracking, continuous interior CCTV monitoring, licensed drivers, and onboard first-aid kits create a secure and controlled transit environment.",
      icon: ShieldCheck
    },
    {
      title: "Punctuality & Discipline",
      description: "Dependable, scheduled departures directly foster regular class and clinical ward attendance, supporting consistent academic excellence.",
      icon: Sparkles
    },
    {
      title: "Environmental Responsibility",
      description: "Consolidating commuter travel into high-occupancy buses significantly reduces individual vehicle traffic, carbon emissions, and institutional carbon footprint.",
      icon: Leaf
    },
    {
      title: "Parental Peace of Mind",
      description: "Parents can rest assured knowing their children travel each day under a professionally managed, monitored, and thoroughly supervised campus transport system.",
      icon: HeartHandshake
    }
  ];

  const OPERATIONAL_HIGHLIGHTS = [
    {
      title: "Dedicated Transport Support",
      description: "A centralized transport office and helpline resolve route queries, schedule updates, and student transit concerns promptly with real-time SMS notifications.",
      icon: PhoneCall
    },
    {
      title: "Customized Transport Services",
      description: "Special bus fleets are arranged for clinical excursions, rural health camps, university exam centers, and campus cultural/sports events.",
      icon: Bus
    },
    {
      title: "Fleet Maintenance & Cleanliness",
      description: "Periodic mechanical servicing, RTA fitness compliance, and daily deep interior sanitization keep every vehicle safe, clean, and roadworthy.",
      icon: Wrench
    },
    {
      title: "Emergency Preparedness",
      description: "Drivers are trained in basic first-aid and emergency road protocols, backed by direct communication hotlines with the hospital casualty and transport desk.",
      icon: AlertTriangle
    }
  ];

  return (
    <div className="py-16 bg-transparent min-h-screen text-charcoal font-technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Breadcrumb & Main Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-emerald-brand transition-colors">Home</Link> / <Link href="/facilities" className="hover:text-emerald-brand transition-colors">Facilities</Link> / <span className="text-emerald-brand">Transportation</span>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
              Comprehensive Bus Fleet
            </span>
            <span className="px-3.5 py-1 rounded-full bg-gold-brand/20 text-emerald-950 border border-gold-brand/40 text-xs font-bold uppercase tracking-wider">
              GPS Enabled & CCTV Monitored
            </span>
            <span className="px-3.5 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider">
              Subsidized Student Fares
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-emerald-brand tracking-tight">
            PMRIMS <span className="gold-gradient-text italic font-normal">Bus Facility</span>
          </h1>
          <p className="text-slate-600 font-technical mt-3 text-sm sm:text-base max-w-4xl leading-relaxed">
            At Dr. Patnam Mahender Reddy Institute of Medical Sciences (PMRIMS), we are committed to ensuring that every student and staff member has access to safe, reliable, and comfortable transportation throughout their time at our institution. The PMRIMS Bus Facility is a well-organized, campus-wide transport service that connects our college to major residential areas, localities, and key points across the region — making daily commuting stress-free, affordable, and secure for our entire campus community.
          </p>
        </div>

        {/* Features of PMRIMS Bus Facility */}
        <div className="mb-14">
          <div className="mb-6">
            <span className="px-3 py-0.5 rounded-full bg-gold-brand/20 text-emerald-950 text-[11px] font-bold uppercase tracking-wider">
              Reliable Transit Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-brand mt-2">
              Features of the PMRIMS Bus Facility
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
              Extensive connectivity, rigorous safety protocols, and passenger-first convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BUS_FEATURES.map((feature, idx) => {
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

        {/* Benefits of PMRIMS Bus Facility */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mb-14">
          <div className="mb-8 pb-6 border-b border-slate-100">
            <span className="px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-900 text-[11px] font-bold uppercase tracking-wider">
              Student & Staff Welfare
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-brand mt-2">
              Benefits of the PMRIMS Bus Facility
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
              Streamlining daily academic routines, promoting safety, and ensuring peace of mind for families
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUS_BENEFITS.map((item, idx) => {
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

        {/* Operational Highlights */}
        <div className="mb-14">
          <div className="mb-6">
            <span className="px-3 py-0.5 rounded-full bg-blue-50 text-blue-900 text-[11px] font-bold uppercase tracking-wider">
              Professional Fleet Management
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-brand mt-2">
              Operational Highlights
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
              Centralized transport administration, route flexibility, and continuous vehicle inspection
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OPERATIONAL_HIGHLIGHTS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                  <div className="p-2.5 bg-emerald-50 text-emerald-800 rounded-xl w-max">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-emerald-950">{item.title}</h4>
                  <p className="text-xs text-slate-600 font-technical leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Transportation Fleet Photo Gallery */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                Photo Gallery
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-brand mt-2">
                PMRIMS Bus Fleet & Transit Terminals
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
                Glimpses of our institutional bus fleet, scheduled boarding areas, and well-maintained campus transport network
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-2xl bg-slate-100 text-slate-800 text-xs font-bold font-mono shrink-0">
              7 Fleet Photos
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { src: "/images/facilities/transportation/vlcsnap-2026-02-25-12h36m24s072.jpg", title: "Campus Bus Fleet & Parking Bay" },
              { src: "/images/facilities/transportation/vlcsnap-2026-02-25-12h37m03s972.jpg", title: "College Buses Ready for Transit" },
              { src: "/images/facilities/transportation/vlcsnap-2026-02-25-12h37m13s076.jpg", title: "Dedicated PMRIMS Transport Fleet" },
              { src: "/images/facilities/transportation/vlcsnap-2026-02-25-12h37m18s870.jpg", title: "Student & Staff Boarding Station" },
              { src: "/images/facilities/transportation/vlcsnap-2026-02-25-12h37m23s052.jpg", title: "Main Campus Transport Terminal" },
              { src: "/images/facilities/transportation/vlcsnap-2026-02-25-12h38m16s782.jpg", title: "Air-Conditioned & Standard Route Buses" },
              { src: "/images/facilities/transportation/vlcsnap-2026-02-25-12h38m24s821.jpg", title: "Regular Fleet Maintenance & Staging Area" }
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

        {/* Transport Helpdesk & Support Callout */}
        <div className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-gold-brand uppercase tracking-wider">
              <PhoneCall className="w-4 h-4 text-gold-brand" /> Transport Office & Helpdesk
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">Route Inquiries, Bus Passes & Timings</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-technical leading-relaxed">
              For route maps, semester bus pass registration, pickup point allocations, and emergency transport queries, contact our campus transport coordinator.
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
