"use client";

import Link from "next/link";
import { 
  Trophy, 
  ArrowLeft, 
  CheckCircle2, 
  Activity, 
  Target, 
  Award, 
  Sparkles, 
  Calendar, 
  Users, 
  Dumbbell
} from "lucide-react";

export default function SportsPage() {
  const OUTDOOR_FACILITIES = [
    { name: "Basketball Courts", desc: "Regulation standard court for training, intramural tournaments, and evening matches." },
    { name: "Volleyball Courts", desc: "Floodlit court facilitating active student practice and inter-batch championships." },
    { name: "Throwball Courts", desc: "Dedicated court promoting active teamwork, fitness, and intramural participation." },
    { name: "Race Track", desc: "Athletics sprint and running track for endurance training, fitness routines, and track events." }
  ];

  const INDOOR_FACILITIES = [
    { name: "Table Tennis Tables", desc: "High-grade tournament-style tables for swift reflexes, recreation, and competitive play." },
    { name: "Carrom Stations", desc: "Multiple boards available in common recreation arenas for strategy and mental relaxation." },
    { name: "Chess Arenas", desc: "Dedicated quiet spaces encouraging concentration, cognitive agility, and tactical thinking." }
  ];

  const SPORTS_BENEFITS = [
    {
      title: "Physical Endurance",
      description: "Building stamina and physical resilience essential for demanding medical training and clinical rotations.",
      icon: Activity
    },
    {
      title: "Mental Relaxation",
      description: "Offering vital stress relief and healthy recreation to balance intensive academic workloads.",
      icon: Sparkles
    },
    {
      title: "Teamwork & Camaraderie",
      description: "Fostering mutual trust, collaborative spirit, and communication skills vital for clinical teamwork.",
      icon: Users
    },
    {
      title: "Leadership & Discipline",
      description: "Cultivating sportsman spirit, perseverance, decision-making, and leadership on and off the field.",
      icon: Trophy
    }
  ];

  return (
    <div className="py-16 bg-transparent min-h-screen text-charcoal font-technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Breadcrumb & Main Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-emerald-brand transition-colors">Home</Link> / <Link href="/facilities" className="hover:text-emerald-brand transition-colors">Facilities</Link> / <span className="text-emerald-brand">Sports & Fitness</span>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
              Indoor & Outdoor Sports Complex
            </span>
            <span className="px-3.5 py-1 rounded-full bg-gold-brand/20 text-emerald-950 border border-gold-brand/40 text-xs font-bold uppercase tracking-wider">
              Qualified Trainers & Health Club
            </span>
            <span className="px-3.5 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider">
              Annual Combined Sports Day
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-emerald-brand tracking-tight">
            Sports & <span className="gold-gradient-text italic font-normal">Physical Fitness Facilities</span>
          </h1>
          <p className="text-slate-600 font-technical mt-3 text-sm sm:text-base max-w-4xl leading-relaxed">
            Pursuing a career in medicine is academically rigorous and physically demanding. Recognizing the importance of overall well-being, our institution places strong emphasis on maintaining the physical and mental fitness of future healthcare professionals. Comprehensive facilities for both indoor and outdoor sports, along with a well-equipped health club, ensure students remain active, energetic, and balanced.
          </p>
        </div>

        {/* Inter-College Achievements Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mb-14">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <span className="px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-900 text-[11px] font-bold uppercase tracking-wider">
                Excellence Beyond Academics
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-brand mt-2">
                Competitive Athletics & Sportsmanship
              </h2>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <div className="p-3 bg-gold-brand/20 text-emerald-950 rounded-2xl">
                <Trophy className="w-8 h-8" />
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-600 font-technical leading-relaxed mt-6 max-w-4xl">
            Students of Patnam Mahender Reddy Institute of Medical Sciences actively participate in inter-college and university-level sports competitions, consistently bringing laurels to the institution. Engagement in sports not only enhances physical endurance but also promotes mental relaxation, teamwork, and leadership skills.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100">
            {SPORTS_BENEFITS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50/70 border border-slate-100 space-y-2">
                  <div className="p-2 bg-white text-emerald-800 rounded-xl w-max shadow-sm border border-slate-100">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-emerald-950">{item.title}</h4>
                  <p className="text-xs text-slate-600 font-technical leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sporting Facilities Grid: Outdoor & Indoor */}
        <div className="mb-14">
          <div className="mb-6">
            <span className="px-3 py-0.5 rounded-full bg-gold-brand/20 text-emerald-950 text-[11px] font-bold uppercase tracking-wider">
              Vibrant Campus Arena
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-brand mt-2">
              Our Sporting Facilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
              Well-maintained outdoor courts and indoor recreation centers managed by qualified trainers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Outdoor Facilities */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="p-3 bg-emerald-50 text-emerald-800 rounded-2xl">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-emerald-brand">Outdoor Facilities</h3>
                  <p className="text-xs text-slate-500">Expansive grounds and regulation tournament courts</p>
                </div>
              </div>

              <div className="space-y-3.5">
                {OUTDOOR_FACILITIES.map((facility, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-muted shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-emerald-950">{facility.name}</h4>
                      <p className="text-xs text-slate-600 font-technical mt-0.5">{facility.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indoor Facilities */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="p-3 bg-blue-50 text-blue-900 rounded-2xl">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-emerald-brand">Indoor Facilities</h3>
                  <p className="text-xs text-slate-500">Recreation, agility, and cognitive relaxation</p>
                </div>
              </div>

              <div className="space-y-3.5">
                {INDOOR_FACILITIES.map((facility, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-muted shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-emerald-950">{facility.name}</h4>
                      <p className="text-xs text-slate-600 font-technical mt-0.5">{facility.desc}</p>
                    </div>
                  </div>
                ))}

                {/* Additional Note on Health Club */}
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-3 mt-4">
                  <Dumbbell className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-emerald-950">Campus Health Club & Fitness Center</h4>
                    <p className="text-xs text-slate-600 font-technical mt-0.5">
                      Equipped with modern cardiovascular workstations, strength training machines, and professional fitness conditioning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sports & Fitness Photo Gallery */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                Photo Gallery
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-brand mt-2">
                Athletics, Courts & Campus Tournaments
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
                Highlights from intramural sports, basketball and volleyball matches, athletics tracks, and fitness arenas
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-2xl bg-slate-100 text-slate-800 text-xs font-bold font-mono shrink-0">
              6 Sports Photos
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { src: "/images/facilities/sports/sports_1.jpeg", title: "Basketball Court & Student Tournaments" },
              { src: "/images/facilities/sports/sports_2.jpeg", title: "Volleyball Arena & Practice Sessions" },
              { src: "/images/facilities/sports/sports_3.jpeg", title: "Athletics & Track Field Activities" },
              { src: "/images/facilities/sports/sports_4.jpeg", title: "Annual Sports Day Matches" },
              { src: "/images/facilities/sports/sports_5.jpeg", title: "Campus Intramural Games & Team Events" },
              { src: "/images/facilities/sports/sports_6.jpg", title: "Campus Sports Grounds & Recreation Complex" }
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

        {/* Combined Sports Day & Annual Fest Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mb-14">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <span className="px-3 py-0.5 rounded-full bg-gold-brand/20 text-emerald-950 text-[11px] font-bold uppercase tracking-wider">
                Annual Campus Tradition
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-brand mt-2">
                Annual Combined Sports Day
              </h2>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-100 text-slate-800 font-mono text-xs font-bold shrink-0">
              <Calendar className="w-4 h-4 text-emerald-800" /> Celebrated Every December
            </div>
          </div>

          <div className="mt-6 space-y-4 text-sm text-slate-600 font-technical leading-relaxed max-w-4xl">
            <p>
              Qualified trainers provide structured guidance and encourage active participation among students across all years. Every year in <strong>December</strong>, a grand <strong>Combined Sports Day</strong> is organized ahead of the Annual Day celebrations.
            </p>
            <p>
              Winners and runners-up are awarded prizes after month-long competitions conducted across the Patnam Mahender Reddy Institute of Medical Sciences, fostering a spirit of healthy competition, sportsmanship, and camaraderie among students and faculty alike.
            </p>
          </div>
        </div>

        <Link href="/facilities" className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1.5">
          <ArrowLeft className="w-4 h-4" /> Back to Facilities Overview
        </Link>
      </div>
    </div>
  );
}
