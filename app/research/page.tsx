import Link from "next/link";
import { FlaskConical, BookOpen, ShieldCheck, Award, Globe2, ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ResearchPage() {
  return (
    <div className="py-16 bg-transparent min-h-screen text-charcoal font-technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-blue-700 font-bold">Research &amp; Global Affiliations</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-blue-600" />
              Global Research &amp; Clinical Innovation
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Medical Research, Publications &amp; <span className="text-blue-600 italic font-normal">Global Partnerships</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl">
            Promoting evidence-based clinical investigations, ICMR STS student research projects, peer-reviewed journal publications, and international academic collaboration with the University of Alabama at Birmingham (UAB), USA.
          </p>
        </div>

        {/* Highlight Banner: UAB USA Research Collaboration */}
        <div className="bg-gradient-to-br from-sriher-navy via-slate-900 to-sriher-blue rounded-3xl p-8 sm:p-10 border-2 border-gold-brand/40 text-white shadow-xl mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-brand/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-gold-brand border border-gold-brand/40 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 mb-3 backdrop-blur-sm">
                <Globe2 className="w-3.5 h-3.5 text-gold-brand animate-pulse" />
                Featured International Affiliation
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                Research Collaboration with <span className="text-gold-brand italic font-normal">The University of Alabama at Birmingham (UAB), USA</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 font-technical leading-relaxed mb-4">
                Under bilateral UAB Contract # 283648, PMRIMS faculty, researchers, and students collaborate with UAB investigators on collaborative biomedical research, joint scientific conferences, grant applications, and knowledge transfer.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-100">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-gold-brand" /> Joint Publications</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-gold-brand" /> Faculty Researcher Exchange</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-gold-brand" /> Student Observerships</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <Link
                href="/collaborations"
                className="px-5 py-2.5 rounded-xl bg-gold-brand hover:bg-gold-muted text-sriher-navy font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Read Full MOU Details</span>
                <ArrowRight className="w-4 h-4 text-sriher-navy" />
              </Link>
              <a
                href="https://www.uab.edu/home/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 backdrop-blur-md active:scale-95"
              >
                <ExternalLink className="w-4 h-4 text-gold-brand" />
                <span>Visit UAB Portal</span>
              </a>
            </div>
          </div>
        </div>

        {/* Institutional Ethics Committee (IEC) */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-institutional mb-10">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Institutional Ethics Committee (IEC)</h2>
          <p className="text-slate-600 font-technical text-sm leading-relaxed mb-6">
            Registered with CDSCO and DHR, the PMRIMS Institutional Ethics Committee ensures all clinical trials and biomedical research adhere strictly to ICMR ethical guidelines and Declaration of Helsinki standards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-100 pt-4 text-xs font-bold text-slate-800">
            <div className="flex items-center gap-2"><Award className="w-4 h-4 text-blue-600" /> CDSCO Registered Ethics Committee</div>
            <div className="flex items-center gap-2"><Award className="w-4 h-4 text-blue-600" /> ICMR STS Student Grants</div>
            <div className="flex items-center gap-2"><Award className="w-4 h-4 text-blue-600" /> Central Research Laboratory</div>
          </div>
        </div>
      </div>
    </div>
  );
}
