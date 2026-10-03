import Link from "next/link";
import { Building2, BookOpen, Utensils, Dumbbell, Trophy, Tv, Home, ShieldCheck } from "lucide-react";

export default function FacilitiesPage() {
  const facilities = [
    {
      title: "Central Library & Digital E-Resource Wing",
      icon: BookOpen,
      category: "Academic",
      description: "Spacious multi-tiered central library holding 12,000+ medical textbooks, international journals, PubMed access, and 24/7 quiet study reading rooms.",
    },
    {
      title: "AC Smart Lecture Halls",
      icon: Tv,
      category: "Academic",
      description: "Gallery-style air-conditioned lecture theaters with HD audio-visual projection, interactive smart boards, and live surgery streaming capabilities.",
    },
    {
      title: "Institutional Canteen & Food Court",
      icon: Utensils,
      category: "Campus Life",
      description: "Hygienic multi-cuisine cafeteria providing nutritious South & North Indian meals, snacks, fresh juices, and specialized diet counters for students & faculty.",
    },
    {
      title: "Modern Student Fitness Gym",
      icon: Dumbbell,
      category: "Recreation",
      description: "Fully equipped gymnasium with cardio treadmills, weight training racks, ellipticals, and certified fitness trainers for resident students.",
    },
    {
      title: "Sports Grounds & Athletics Complex",
      icon: Trophy,
      category: "Recreation",
      description: "Outdoor cricket oval, football field, basketball court, volleyball courts, and indoor badminton & table tennis arenas for annual college sports fests.",
    },
    {
      title: "Resident Student Hostels",
      icon: Home,
      category: "Accommodation",
      description: "Separate secure hostels for male & female medical students with solar hot water, 24/7 Wi-Fi, biometric security, study lounges, and resident wardens.",
    },
  ];

  return (
    <div className="py-16 bg-surface-light min-h-screen text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-emerald-brand">Home</Link>
            <span>/</span>
            <span className="text-emerald-brand">Campus Facilities</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-emerald-brand tracking-tight">
            World-Class Campus <span className="gold-gradient-text italic font-normal">Infrastructure</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl">
            Designed to foster academic focus, physical fitness, and holistic student life across the 35+ acre Chevella campus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {facilities.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-gold-brand shadow-sm hover:shadow-institutional transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-900 text-gold-brand flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-emerald-brand mb-3">{item.title}</h3>
                  <p className="text-xs text-slate-500 font-technical leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-technical">
                  <span>PMRIMS Campus</span>
                  <span className="text-emerald-900 font-semibold">Active Facility</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
