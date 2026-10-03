import Link from "next/link";
import { Stethoscope, ArrowLeft } from "lucide-react";

export default function DentalServicesPage() {
  return (
    <div className="py-16 bg-surface-light min-h-screen text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/">Home</Link> / <Link href="/hospital">Hospital</Link> / <span className="text-emerald-brand">Dental Services</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-emerald-brand tracking-tight">
            Dental & Maxillofacial <span className="gold-gradient-text italic font-normal">Surgical Wing</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl">
            Complete oral healthcare, root canal treatment, dental implants, prosthodontics, and facial trauma reconstructive surgery.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-institutional mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-surface-light border border-slate-100">
              <h3 className="text-lg font-serif font-bold text-emerald-brand mb-2">Oral & Maxillofacial Surgery</h3>
              <p className="text-xs text-slate-500 font-technical leading-relaxed">Management of jaw fractures, orthognathic correction, impact wisdom tooth extractions, and oral cancer screening.</p>
            </div>
            <div className="p-6 rounded-2xl bg-surface-light border border-slate-100">
              <h3 className="text-lg font-serif font-bold text-emerald-brand mb-2">Restorative Dentistry & Endodontics</h3>
              <p className="text-xs text-slate-500 font-technical leading-relaxed">Microscopic root canal therapy, esthetic tooth fillings, crown & bridge prosthetics, and teeth whitening.</p>
            </div>
          </div>
        </div>

        <Link href="/hospital" className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1.5">
          <ArrowLeft className="w-4 h-4" /> Back to Hospital Facilities
        </Link>
      </div>
    </div>
  );
}
