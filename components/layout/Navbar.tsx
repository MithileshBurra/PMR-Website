"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  HeartPulse, 
  ChevronDown, 
  Search, 
  Menu, 
  X, 
  ChevronRight,
  Phone,
  Clock,
  ShieldCheck,
  FileCheck,
  FileText
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Contact Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-blue-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" /> NMC & KNRUHS Approved Institute
            </span>
            <span className="hidden md:inline-block text-slate-700">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-blue-400" /> 24/7 Emergency & Casualty Active
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <a href="tel:08417299918" className="flex items-center gap-1.5 text-slate-200 hover:text-blue-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-blue-400" /> 08417-299918
            </a>
          </div>
        </div>
      </div>

      {/* Main White Header Bar */}
      <nav
        className={`w-full bg-white transition-all duration-300 ${
          isScrolled
            ? "shadow-md py-2.5 border-b border-slate-200/80"
            : "py-3.5 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo Badge */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-11 h-11 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src="/images/pmrims_logo.png"
                alt="PMRIMS Official Logo"
                width={44}
                height={44}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-black text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors leading-none">
                PMRIMS
              </span>
              <span className="text-[11px] font-semibold text-slate-500 tracking-tight font-sans mt-0.5">
                Medical Sciences
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Items */}
          <div className="hidden xl:flex items-center gap-1 text-sm font-semibold text-slate-700">
            {/* 1. Home */}
            <Link
              href="/"
              className={`px-3 py-1.5 rounded-full transition-all ${
                pathname === "/"
                  ? "bg-blue-50 text-blue-600 font-bold"
                  : "hover:text-blue-600 hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            {/* 2. About Us ▾ (Only Executive Leadership) */}
            <div
              className="relative py-1.5"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-3 py-1.5 rounded-full flex items-center gap-1 transition-all focus:outline-none ${
                  activeDropdown === "about" ? "bg-blue-50 text-blue-600 font-bold" : "hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                About Us <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "about" ? "rotate-180 text-blue-600" : "text-slate-400"}`} />
              </button>

              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-3xl shadow-2xl p-4 text-slate-700 grid gap-2 animate-in fade-in duration-200">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                    Institutional Governance
                  </div>
                  <Link href="/executive-leadership" className="p-2.5 rounded-xl hover:bg-blue-50 hover:text-blue-600 text-sm font-medium transition-all flex items-center justify-between">
                    <span>Executive Leadership</span> <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                </div>
              )}
            </div>

            {/* 3. Hospital ▾ (With Arogyasree under Diagnostic Services) */}
            <div
              className="relative py-1.5"
              onMouseEnter={() => setActiveDropdown("hospital")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/hospital"
                className={`px-3 py-1.5 rounded-full flex items-center gap-1 transition-all ${
                  activeDropdown === "hospital" || pathname.startsWith("/hospital")
                    ? "bg-blue-50 text-blue-600 font-bold"
                    : "hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                Hospital <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "hospital" ? "rotate-180 text-blue-600" : "text-slate-400"}`} />
              </Link>

              {activeDropdown === "hospital" && (
                <div className="absolute top-full left-0 w-[520px] bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-3xl shadow-2xl p-6 text-slate-700 grid grid-cols-2 gap-6 animate-in fade-in duration-200">
                  <div>
                    <div className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-3">
                      Clinical Facilities
                    </div>
                    <div className="space-y-2">
                      <Link href="/hospital/casualty" className="block text-sm text-slate-600 hover:text-blue-600 font-medium transition-colors">
                        Casualty
                      </Link>
                      <Link href="/hospital/outpatient" className="block text-sm text-slate-600 hover:text-blue-600 font-medium transition-colors">
                        Outpatient (OPD)
                      </Link>
                      <Link href="/hospital/inpatient" className="block text-sm text-slate-600 hover:text-blue-600 font-medium transition-colors">
                        Inpatient (IPD)
                      </Link>
                      <Link href="/hospital/private-care-rooms" className="block text-sm text-slate-600 hover:text-blue-600 font-medium transition-colors">
                        Private Care Rooms
                      </Link>
                      <Link href="/hospital/OperationTheatre" className="block text-sm text-slate-600 hover:text-blue-600 font-medium transition-colors">
                        Operation Theatres
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-3">
                      Diagnostic & Health Schemes
                    </div>
                    <div className="space-y-2">
                      <Link href="/hospital/bloodbank" className="block text-sm text-slate-600 hover:text-blue-600 font-medium transition-colors">
                        Blood Bank
                      </Link>
                      <Link href="/hospital/labs" className="block text-sm text-slate-600 hover:text-blue-600 font-medium transition-colors">
                        Central Lab
                      </Link>
                      <Link href="/hospital/Pharmacy" className="block text-sm text-slate-600 hover:text-blue-600 font-medium transition-colors">
                        Pharmacy
                      </Link>
                      <Link href="/hospital/radiology-facilities" className="block text-sm text-slate-600 hover:text-blue-600 font-medium transition-colors">
                        Radiological Facilities
                      </Link>
                      <Link href="/hospital/Dialysis" className="block text-sm text-slate-600 hover:text-blue-600 font-medium transition-colors">
                        Dialysis
                      </Link>
                      <Link href="/hospital/aarogyasri" className="block text-sm text-blue-700 hover:text-blue-800 font-bold transition-colors flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> Arogyasree
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Facilities ▾ (Recreation Removed) */}
            <div
              className="relative py-1.5"
              onMouseEnter={() => setActiveDropdown("facilities")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/facilities"
                className={`px-3 py-1.5 rounded-full flex items-center gap-1 transition-all ${
                  activeDropdown === "facilities" || pathname.startsWith("/facilities")
                    ? "bg-blue-50 text-blue-600 font-bold"
                    : "hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                Facilities <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "facilities" ? "rotate-180 text-blue-600" : "text-slate-400"}`} />
              </Link>

              {activeDropdown === "facilities" && (
                <div className="absolute top-full left-0 w-[520px] bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-3xl shadow-2xl p-6 text-slate-700 grid grid-cols-2 gap-6 animate-in fade-in duration-200">
                  <div>
                    <div className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-3">
                      Academic
                    </div>
                    <div className="space-y-2">
                      <Link href="/facilities/library" className="block text-sm text-slate-600 hover:text-blue-600 font-medium transition-colors">
                        Library
                      </Link>
                      <Link href="/facilities/lecture-halls" className="block text-sm text-slate-600 hover:text-blue-600 font-medium transition-colors">
                        Lecture Halls
                      </Link>
                      <Link href="/facilities/labs-museums" className="block text-sm text-slate-600 hover:text-blue-600 font-medium transition-colors">
                        Labs & Museums
                      </Link>
                      <Link href="/facilities/skill-lab" className="block text-sm text-slate-600 hover:text-blue-600 font-medium transition-colors">
                        Skill Lab
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-3">
                      Campus Life
                    </div>
                    <div className="space-y-2">
                      <Link href="/facilities/hostels" className="block text-sm text-slate-600 hover:text-blue-600 font-medium transition-colors">
                        Hostels
                      </Link>
                      <Link href="/facilities/sports" className="block text-sm text-slate-600 hover:text-blue-600 font-medium transition-colors">
                        Sports & Games
                      </Link>
                      <Link href="/facilities/transportation" className="block text-sm text-slate-600 hover:text-blue-600 font-medium transition-colors">
                        Transportation
                      </Link>
                      <Link href="/facilities/canteen" className="block text-sm text-slate-600 hover:text-blue-600 font-medium transition-colors">
                        Canteen
                      </Link>
                      <Link href="/facilities/gym" className="block text-sm text-slate-600 hover:text-blue-600 font-medium transition-colors">
                        Gym & Fitness Center
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 5. Departments ▾ */}
            <div
              className="relative py-1.5"
              onMouseEnter={() => setActiveDropdown("departments")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-3 py-1.5 rounded-full flex items-center gap-1 transition-all focus:outline-none ${
                  activeDropdown === "departments" || pathname.includes("clinical-departments")
                    ? "bg-blue-50 text-blue-600 font-bold"
                    : "hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                Departments <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "departments" ? "rotate-180 text-blue-600" : "text-slate-400"}`} />
              </button>

              {activeDropdown === "departments" && (
                <div className="absolute top-full left-0 w-80 bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-3xl shadow-2xl p-5 text-slate-700 grid gap-2 animate-in fade-in duration-200">
                  <div className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-1">
                    Medical Specialties
                  </div>
                  <Link href="/pre-and-para-departments" className="p-2.5 rounded-xl hover:bg-blue-50 hover:text-blue-600 text-sm font-medium transition-all flex items-center justify-between">
                    <span>Pre and Para Clinical Departments</span> <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                  <Link href="/clinical-departments" className="p-2.5 rounded-xl hover:bg-blue-50 hover:text-blue-600 text-sm font-medium transition-all flex items-center justify-between">
                    <span>Clinical Departments</span> <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                </div>
              )}
            </div>

            {/* 6. Allied Sciences ▾ (NEW Dropdown: Nursing & Physiotherapy) */}
            <div
              className="relative py-1.5"
              onMouseEnter={() => setActiveDropdown("allied")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-3 py-1.5 rounded-full flex items-center gap-1 transition-all focus:outline-none ${
                  activeDropdown === "allied" || pathname.startsWith("/allied-sciences")
                    ? "bg-blue-50 text-blue-600 font-bold"
                    : "hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                Allied Sciences <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "allied" ? "rotate-180 text-blue-600" : "text-slate-400"}`} />
              </button>

              {activeDropdown === "allied" && (
                <div className="absolute top-full left-0 w-72 bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-3xl shadow-2xl p-5 text-slate-700 grid gap-2 animate-in fade-in duration-200">
                  <div className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-1">
                    Allied Health Colleges
                  </div>
                  <Link href="/allied-sciences/nursing" className="p-2.5 rounded-xl hover:bg-blue-50 hover:text-blue-600 text-sm font-medium transition-all flex items-center justify-between">
                    <span>College of Nursing</span> <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                  <Link href="/allied-sciences/physiotherapy" className="p-2.5 rounded-xl hover:bg-blue-50 hover:text-blue-600 text-sm font-medium transition-all flex items-center justify-between">
                    <span>College of Physiotherapy</span> <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                </div>
              )}
            </div>

            {/* 7. Staff (NEW Link -> /staff) */}
            <Link
              href="/staff"
              className={`px-3 py-1.5 rounded-full transition-all ${
                pathname === "/staff"
                  ? "bg-blue-50 text-blue-600 font-bold"
                  : "hover:text-blue-600 hover:bg-slate-50"
              }`}
            >
              Staff
            </Link>

            {/* 8. Admissions ▾ */}
            <div
              className="relative py-1.5"
              onMouseEnter={() => setActiveDropdown("admissions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-3 py-1.5 rounded-full flex items-center gap-1 transition-all focus:outline-none ${
                  activeDropdown === "admissions" || pathname.startsWith("/admissions")
                    ? "bg-blue-50 text-blue-600 font-bold"
                    : "hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                Admissions <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "admissions" ? "rotate-180 text-blue-600" : "text-slate-400"}`} />
              </button>

              {activeDropdown === "admissions" && (
                <div className="absolute top-full left-0 w-80 bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-3xl shadow-2xl p-5 text-slate-700 grid gap-3 animate-in fade-in duration-200">
                  <div>
                    <div className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-2">
                      Undergraduate (MBBS)
                    </div>
                    <div className="space-y-1">
                      <Link href="/admissions/ug/seat-matrix" className="p-2 rounded-xl hover:bg-blue-50 hover:text-blue-600 text-sm font-medium flex items-center justify-between">
                        <span>Seat Matrix & Rules</span> <ChevronRight className="w-4 h-4 text-slate-400" />
                      </Link>
                      <Link href="/admissions/ug/required-documents" className="p-2 rounded-xl hover:bg-blue-50 hover:text-blue-600 text-sm font-medium flex items-center justify-between">
                        <span>Required Documents</span> <ChevronRight className="w-4 h-4 text-slate-400" />
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-2">
                      Postgraduate (MD / MS)
                    </div>
                    <div className="space-y-1">
                      <Link href="/admissions/pg/specializations" className="p-2 rounded-xl hover:bg-blue-50 hover:text-blue-600 text-sm font-medium flex items-center justify-between">
                        <span>PG Specializations</span> <ChevronRight className="w-4 h-4 text-slate-400" />
                      </Link>
                      <Link href="/admissions/pg/required-documents" className="p-2 rounded-xl hover:bg-blue-50 hover:text-blue-600 text-sm font-medium flex items-center justify-between">
                        <span>PG Required Documents</span> <ChevronRight className="w-4 h-4 text-slate-400" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 9. NMC ▾ */}
            <div
              className="relative py-1.5"
              onMouseEnter={() => setActiveDropdown("nmc")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-3 py-1.5 rounded-full flex items-center gap-1 transition-all focus:outline-none ${
                  activeDropdown === "nmc" || pathname.startsWith("/nmc")
                    ? "bg-blue-50 text-blue-600 font-bold"
                    : "hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                NMC <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "nmc" ? "rotate-180 text-blue-600" : "text-slate-400"}`} />
              </button>

              {activeDropdown === "nmc" && (
                <div className="absolute top-full left-0 w-72 bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-3xl shadow-2xl p-5 text-slate-700 grid gap-2 animate-in fade-in duration-200">
                  <div className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-1">
                    Statutory LOP & Permissions
                  </div>
                  <Link href="/nmc/ug-permissions" className="p-2.5 rounded-xl hover:bg-blue-50 hover:text-blue-600 text-sm font-medium transition-all flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-blue-600" /> 1. UG Permissions
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                  <Link href="/nmc/pg-permissions" className="p-2.5 rounded-xl hover:bg-blue-50 hover:text-blue-600 text-sm font-medium transition-all flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-blue-600" /> 2. PG Permissions
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                </div>
              )}
            </div>

            {/* 10. Careers */}
            <Link
              href="/careers"
              className={`px-3 py-1.5 rounded-full transition-all ${
                pathname === "/careers"
                  ? "bg-blue-50 text-blue-600 font-bold"
                  : "hover:text-blue-600 hover:bg-slate-50"
              }`}
            >
              Careers
            </Link>

            {/* 11. Gallery */}
            <Link
              href="/gallery"
              className={`px-3 py-1.5 rounded-full transition-all ${
                pathname === "/gallery"
                  ? "bg-blue-50 text-blue-600 font-bold"
                  : "hover:text-blue-600 hover:bg-slate-50"
              }`}
            >
              Gallery
            </Link>

            {/* 12. Contact */}
            <Link
              href="/contact"
              className={`px-3 py-1.5 rounded-full transition-all ${
                pathname === "/contact"
                  ? "bg-blue-50 text-blue-600 font-bold"
                  : "hover:text-blue-600 hover:bg-slate-50"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Search Icon & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 rounded-full hover:bg-slate-100 text-slate-700 hover:text-blue-600 transition-colors focus:outline-none"
              title="Search Site"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-slate-100 text-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar Modal */}
        {searchOpen && (
          <div className="border-t border-slate-100 bg-slate-50 p-4 animate-in slide-in-from-top duration-200">
            <div className="max-w-3xl mx-auto flex items-center gap-3">
              <Search className="w-5 h-5 text-slate-400" />
              <input
                type="text"
                autoFocus
                placeholder="Search UG Permissions, Staff, Arogyasree, Nursing, Physiotherapy..."
                className="w-full bg-white px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-xs font-bold text-slate-500 hover:text-slate-800 uppercase px-2"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-100 px-6 py-6 text-slate-800 flex flex-col gap-3 animate-in slide-in-from-top duration-300">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 font-semibold">Home</Link>
            <Link href="/executive-leadership" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 font-semibold">Executive Leadership</Link>
            <Link href="/hospital" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 font-semibold text-blue-600">Hospital & OPD</Link>
            <Link href="/hospital/aarogyasri" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 font-semibold text-blue-700">Arogyasree Scheme</Link>
            <Link href="/pre-and-para-departments" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 font-semibold">Pre & Para Clinical Departments</Link>
            <Link href="/clinical-departments" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 font-semibold">Clinical Departments</Link>
            <Link href="/allied-sciences/nursing" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 font-semibold">College of Nursing</Link>
            <Link href="/allied-sciences/physiotherapy" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 font-semibold">College of Physiotherapy</Link>
            <Link href="/staff" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 font-semibold">Staff Directory</Link>
            <Link href="/admissions/ug/seat-matrix" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 font-semibold">Admissions 2026</Link>
            <Link href="/nmc/ug-permissions" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 font-semibold">NMC Recognition</Link>
            <Link href="/careers" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 font-semibold">Careers</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 font-semibold">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
