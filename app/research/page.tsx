import Link from "next/link";
import { FlaskConical, BookOpen, ShieldCheck, Award } from "lucide-react";

export default function ResearchPage() {
  return (
    <div className="py-16 bg-surface-light min-h-screen text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/">Home</Link> / <span className="text-emerald-brand">Research</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-emerald-brand tracking-tight">
            Medical Research & <span className="gold-gradient-text italic font-normal">Publications</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl">
            Promoting evidence-based clinical investigations, ICMR STS student research projects, and peer-reviewed journal publications.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-institutional mb-10">
          <h2 className="text-2xl font-serif font-bold text-emerald-brand mb-4">Institutional Ethics Committee (IEC)</h2>
          <p className="text-slate-600 font-technical text-sm leading-relaxed mb-6">
            Registered with CDSCO and DHR, the PMRIMS Institutional Ethics Committee ensures all clinical trials and biomedical research adhere strictly to ICMR ethical guidelines and Declaration of Helsinki standards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-100 pt-4 text-xs font-bold text-emerald-950">
            <div className="flex items-center gap-2"><Award className="w-4 h-4 text-gold-muted" /> CDSCO Registered Ethics Committee</div>
            <div className="flex items-center gap-2"><Award className="w-4 h-4 text-gold-muted" /> ICMR STS Student Grants</div>
            <div className="flex items-center gap-2"><Award className="w-4 h-4 text-gold-muted" /> Central Research Laboratory</div>
          </div>
        </div>
      </div>
    </div>
  );
}
