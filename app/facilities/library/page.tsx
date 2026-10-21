"use client";

import Link from "next/link";
import { 
  BookOpen, 
  ArrowLeft, 
  CheckCircle2, 
  Wifi, 
  Clock, 
  GraduationCap, 
  Globe, 
  Users, 
  Printer, 
  Sparkles, 
  ShieldCheck, 
  FileText,
  PhoneCall
} from "lucide-react";

export default function LibraryPage() {
  const LIBRARY_FEATURES = [
    {
      icon: BookOpen,
      title: "1. Extensive Collection of Medical Resources",
      points: [
        "A comprehensive selection of medical textbooks, reference volumes, and periodicals spanning all clinical and para-clinical disciplines.",
        "Access to national and international medical journals, research papers, and e-books curated for MBBS and postgraduate curricula.",
        "Archives of past research work, dissertations, and institutional publications by PMRIMS faculty and students."
      ]
    },
    {
      icon: Globe,
      title: "2. Digital and Online Resources",
      points: [
        "Access to leading medical databases including PubMed, Scopus, JSTOR, and Cochrane Library.",
        "Dedicated computer systems for browsing digital content, e-journals, and conducting clinical research.",
        "Subscription to platforms aligned with NMC guidelines for undergraduate and postgraduate medical education."
      ]
    },
    {
      icon: Users,
      title: "3. Well-Equipped Study Spaces",
      points: [
        "Quiet reading zones designed for focused individual study and exam preparation.",
        "Group discussion rooms for collaborative case studies, seminars, and research reviews.",
        "Spacious, well-lit seating areas that provide a calm and productive academic environment."
      ]
    },
    {
      icon: Wifi,
      title: "4. Technology Integration",
      points: [
        "A fully digital catalog system (OPAC) for quick and easy book search, reservation, and borrowing.",
        "High-speed internet and campus-wide Wi-Fi enabling seamless access to online medical resources.",
        "Printing, scanning, and photocopying services available to support academic and clinical documentation needs."
      ]
    },
    {
      icon: GraduationCap,
      title: "5. Librarian Support and Guidance",
      points: [
        "Qualified medical librarians on hand to assist students in locating resources and navigating research databases.",
        "Orientation sessions covering research methodologies, citation formats (Vancouver, APA), and digital literacy skills.",
        "Inter-library loan services facilitating access to resources from affiliated institutions and university libraries."
      ]
    }
  ];

  return (
    <div className="py-16 bg-transparent min-h-screen text-charcoal font-technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Breadcrumb & Main Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-emerald-brand transition-colors">Home</Link> / <Link href="/facilities" className="hover:text-emerald-brand transition-colors">Facilities</Link> / <span className="text-emerald-brand">Central Library</span>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
              Academic Heart of PMRIMS
            </span>
            <span className="px-3.5 py-1 rounded-full bg-gold-brand/20 text-emerald-950 border border-gold-brand/40 text-xs font-bold uppercase tracking-wider">
              PubMed, Scopus & Cochrane Access
            </span>
            <span className="px-3.5 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider">
              NMC Compliant Infrastructure
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-emerald-brand tracking-tight">
            Central Medical <span className="gold-gradient-text italic font-normal">Library</span>
          </h1>
          <p className="text-slate-600 font-technical mt-3 text-sm sm:text-base max-w-4xl leading-relaxed">
            The library at Dr. Patnam Mahender Reddy Institute of Medical Sciences (PMRIMS) stands as the academic heart of our institution. A dedicated space for learning, clinical research, and intellectual growth. Equipped with an extensive collection of medical literature and modern digital infrastructure, the PMRIMS Library empowers students, faculty, and researchers to achieve excellence in medical education and healthcare practice.
          </p>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 text-xs font-technical">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="font-serif font-bold text-emerald-brand text-lg mb-1">Print & E-Books</div>
            <div className="text-slate-500 text-[11px]">Comprehensive Medical Volumes</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="font-serif font-bold text-emerald-brand text-lg mb-1">Global Databases</div>
            <div className="text-slate-500 text-[11px]">PubMed, Scopus & Cochrane</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="font-serif font-bold text-emerald-brand text-lg mb-1">Quiet Reading Zones</div>
            <div className="text-slate-500 text-[11px]">Group & Individual Study Rooms</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="font-serif font-bold text-emerald-brand text-lg mb-1">Digital OPAC</div>
            <div className="text-slate-500 text-[11px]">Automated Book Search & Wi-Fi</div>
          </div>
        </div>

        {/* 5 Features of PMRIMS Library */}
        <div className="mb-14">
          <div className="mb-6">
            <span className="px-3 py-0.5 rounded-full bg-gold-brand/20 text-emerald-950 text-[11px] font-bold uppercase tracking-wider">
              Comprehensive Academic Resources
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-brand mt-2">
              Features of the PMRIMS Library
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-technical mt-1">
              Curated medical literature, advanced digital platforms, and supportive scholarly environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LIBRARY_FEATURES.map((feature, idx) => {
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

        {/* Library Services & Research Support Callout */}
        <div className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-gold-brand uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-gold-brand" /> Research & Information Services
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">Need Assistance with Medical Research or Literature Search?</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-technical leading-relaxed">
              Our medical librarians provide personalized bibliographic assistance, citation formatting workshops, and inter-library loan requests for students, postgraduates, and faculty.
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
              Library Helpdesk
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
