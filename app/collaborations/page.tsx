"use client";

import Link from "next/link";
import { 
  Globe2, 
  FileText, 
  Download, 
  ExternalLink, 
  GraduationCap, 
  BookOpen, 
  Microscope, 
  Users, 
  Award, 
  ShieldCheck, 
  Calendar, 
  Building2, 
  Sparkles, 
  CheckCircle2, 
  ArrowLeft,
  Share2
} from "lucide-react";
import { getDocumentById } from "@/config/documents";

export default function CollaborationsPage() {
  const mouDoc = getDocumentById("mou-uab-usa-2026");

  const SCOPE_POINTS = [
    {
      icon: GraduationCap,
      title: "Student Exchange & Global Observerships",
      description: "Facilitating international clinical electives, academic exposure, and educational exchange programs for medical students through UAB Education Abroad and Global Affairs.",
      tag: "Academic Mobility"
    },
    {
      icon: Users,
      title: "Faculty & Researcher Exchange",
      description: "Two-way exchange of distinguished faculty members, clinical specialists, and biomedical researchers for teaching, guest lectures, and clinical skill transfer.",
      tag: "Faculty Development"
    },
    {
      icon: Microscope,
      title: "Collaborative Clinical & Biomedical Research",
      description: "Joint research projects addressing prevalent global health challenges, clinical trials, epidemiology studies, and collaborative biomedical discoveries.",
      tag: "Scientific Research"
    },
    {
      icon: BookOpen,
      title: "Documentation & Publication Exchange",
      description: "Reciprocal exchange of academic documentation, research materials, curriculum best practices, and co-authoring peer-reviewed scientific publications.",
      tag: "Knowledge Sharing"
    },
    {
      icon: Award,
      title: "Joint Symposia, Conferences & CME",
      description: "Developing, organizing, and co-hosting international medical conferences, academic symposia, specialized webinars, and continuing medical education (CME) workshops.",
      tag: "Global Seminars"
    },
    {
      icon: ShieldCheck,
      title: "Grants, Tech Transfer & Institutional Growth",
      description: "Advisory cooperation on international research grants, technology commercialization, curriculum advancement, and strategic medical institution planning.",
      tag: "Strategic Innovation"
    }
  ];

  return (
    <div className="py-16 bg-transparent min-h-screen text-slate-800 font-technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Breadcrumb Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span>Global Affiliations</span>
            <span>/</span>
            <span className="text-blue-700 font-bold">UAB, USA Collaboration</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-extrabold uppercase tracking-wider">
              <Globe2 className="w-3.5 h-3.5 text-blue-600" />
              International Landmark Affiliation • USA &amp; India
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-300 text-xs font-extrabold uppercase tracking-wider">
              Active Term: 2026 – 2031 (5-Year Renewable)
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
            International Academic &amp; Research <span className="text-blue-600 italic font-normal">Collaboration</span>
          </h1>
          <p className="text-slate-600 font-technical mt-3 text-sm sm:text-base lg:text-lg max-w-4xl leading-relaxed">
            Formal Memorandum of Understanding (MOU) between <strong>The Board of Trustees of the University of Alabama for The University of Alabama at Birmingham (UAB), USA</strong> and <strong>Dr. Patnam Mahender Reddy Institute of Medical Sciences (Dr. PMRIMS), Hyderabad, India</strong>.
          </p>
        </div>

        {/* Bilateral Partnership Showcase Card */}
        <div className="bg-gradient-to-br from-sriher-navy via-slate-900 to-sriher-blue rounded-3xl p-8 sm:p-12 text-white shadow-2xl mb-12 relative overflow-hidden border-2 border-gold-brand/40">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-brand/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Partner 1: UAB USA */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-gold-brand/20 text-gold-brand border border-gold-brand/35 text-xs font-bold uppercase tracking-wider">
                    United States Partner
                  </span>
                  <span className="text-xs font-mono text-slate-400">Birmingham, Alabama, USA</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                  The University of Alabama at Birmingham (UAB)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-technical leading-relaxed mb-4">
                  A premier world-class public academic medical and research institution, globally celebrated for biomedical innovation, NIH-funded investigations, and the world-renowned UAB Health System &amp; Heersink School of Medicine.
                </p>
                <div className="space-y-1.5 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-brand shrink-0" />
                    <span>Graduate School and Global Affairs Directorate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-brand shrink-0" />
                    <span>UAB Contract Reference: # 283648</span>
                  </div>
                </div>
              </div>

              {/* Partner 2: Dr. PMRIMS India */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider">
                    Indian Partner Institution
                  </span>
                  <span className="text-xs font-mono text-slate-400">Chevella, Hyderabad, India</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                  Dr. Patnam Mahender Reddy Institute of Medical Sciences
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-technical leading-relaxed mb-4">
                  A leading National Medical Commission (NMC) recognized and KNRUHS affiliated medical institute featuring a 1200+ bed teaching hospital, 250 MBBS seats, 94 MD/MS postgraduate seats, and research laboratories.
                </p>
                <div className="space-y-1.5 text-xs text-blue-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>NMC Recognized Academic Medical Campus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>CDSCO &amp; DHR Registered Institutional Ethics Committee</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Summary Strip */}
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gold-brand" />
                <span>Signed: November 2026 | Effective Term: 5 Years (Renewable)</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="/documents/collaborations/UAB-PMRIMS-International-MOU-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gold-brand hover:bg-gold-muted text-sriher-navy font-extrabold transition-all shadow-lg shadow-gold-brand/20 flex items-center gap-2 active:scale-95"
                >
                  <ExternalLink className="w-4 h-4 text-sriher-navy" /> View Official Signed MOU (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scope of Affiliation & Objectives (Article 1) */}
        <div className="mb-14">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
              Article 1: Purpose &amp; Activities
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mt-2">
              Key Strategic Pillars of the UAB Affiliation
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-technical mt-2">
              The formal affiliation is designed to foster cross-continental academic excellence, faculty empowerment, and global healthcare research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SCOPE_POINTS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-extrabold uppercase tracking-wide">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-technical leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Official Signed Document Download Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-institutional mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 pb-6 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-serif font-bold text-slate-900">
                  Official Institutional Memorandum of Understanding Document
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-technical">
                Original digitized 4-page master agreement executed between The Board of Trustees of the University of Alabama (UAB) and Dr. PMRIMS.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="/documents/collaborations/UAB-PMRIMS-International-MOU-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-300 transition-colors flex items-center gap-2 shadow-sm"
              >
                <ExternalLink className="w-4 h-4 text-blue-600" /> View Document
              </a>
              <a
                href="/documents/collaborations/UAB-PMRIMS-International-MOU-2026.pdf"
                download
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Download PDF (240 KB)
              </a>
            </div>
          </div>

          {/* Verification & Metadata Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-technical">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="text-[10px] font-bold uppercase text-slate-400 mb-1">Agreement Reference</div>
              <div className="font-bold text-slate-900">UAB Contract # 283648</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="text-[10px] font-bold uppercase text-slate-400 mb-1">Effective Validity</div>
              <div className="font-bold text-slate-900">5-Year Renewable Term (2026–2031)</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="text-[10px] font-bold uppercase text-slate-400 mb-1">UAB Signatory</div>
              <div className="font-bold text-slate-900">Amy Ellis, Asst. VP &amp; Controller</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="text-[10px] font-bold uppercase text-slate-400 mb-1">PMRIMS Signatory</div>
              <div className="font-bold text-slate-900">P V Nagesh Babu, General Manager</div>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
          <Link
            href="/"
            className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <Link
            href="/research"
            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1.5"
          >
            View Research &amp; Ethics Committee →
          </Link>
        </div>

      </div>
    </div>
  );
}
