"use client";

import Image from "next/image";
import Link from "next/link";
import { GraduationCap, HeartPulse, Trophy, Utensils, Home, Users, BookOpen, Music, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

import StudentLifeHeroSlider from "@/components/students-life/StudentLifeHeroSlider";

export default function StudentLifePage() {
  const highlights = [
    {
      title: "Medical Student Association & Clubs",
      icon: Users,
      description: "Active student council organizing annual inter-collegiate medical fests, quiz competitions, medical debate forums, and community health camps.",
    },
    {
      title: "Annual Sports & Athletics Meet",
      icon: Trophy,
      description: "Cricket leagues, football tournaments, basketball cups, and indoor badminton championships hosted on our 35+ acre campus grounds.",
    },
    {
      title: "Resident Hostel Life & Community",
      icon: Home,
      description: "Secure, air-conditioned boys & girls hostels with study lounges, high-speed Wi-Fi, biometric security, and solar hot water.",
    },
    {
      title: "Campus Dining & Coffee Lounges",
      icon: Utensils,
      description: "Hygienic multi-cuisine cafeteria providing nutritious South & North Indian thali meals, fresh juices, and snack bars under FSSAI audit.",
    },
  ];

  return (
    <div className="py-16 bg-surface-light min-h-screen text-charcoal font-technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header Breadcrumb */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <span className="text-blue-600">Student Life</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Vibrant Campus & <span className="text-blue-600 italic font-normal">Student Life</span>
          </h1>
          <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-3xl">
            At PMRIMS, we foster a balance between rigorous clinical training, athletic fitness, cultural expression, and lifelong friendships on our 35+ acre campus.
          </p>
        </div>

        {/* 4-Image High Resolution Hero Slider */}
        <StudentLifeHeroSlider />


        {/* Student Life Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {highlights.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-institutional transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-technical">{item.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span>PMRIMS Campus Life</span>
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
