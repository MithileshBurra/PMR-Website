import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Phone, Mail, MapPin, HeartPulse, Award, ExternalLink, GraduationCap, Stethoscope, Building2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-sriher-navy text-slate-300 border-t border-gold-brand/20 font-technical text-sm">
      {/* Top Hotline Bar */}
      <div className="bg-sriher-navy-dark border-b border-sriher-blue/40 py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sriher-crimson text-white">
              <HeartPulse className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">24/7 PMR Hospital Casualty & Emergency Desk</div>
              <div className="text-xs text-slate-400">Level-1 Trauma Center, Ambulance Dispatch & ICU</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:08417299918"
              className="px-6 py-2.5 rounded-xl bg-sriher-crimson hover:bg-sriher-crimson-dark text-white font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> Emergency Hospital: 08417-299918
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand & Accreditation (Cols 1-2) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
              <Image
                src="/images/pmrims_logo.png"
                alt="PMRIMS Official Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div>
              <div className="text-white font-serif font-bold text-lg leading-tight">PMRIMS</div>
              <div className="text-[10px] text-gold-brand uppercase font-semibold">Dr. Patnam Mahender Reddy Institute of Medical Sciences</div>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed max-w-md">
            PMRIMS is a premier medical college and 1200+ bed teaching hospital committed to nurturing world-class physicians and providing accessible healthcare in Chevella, Telangana.
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-gold-brand">
            <span className="px-2.5 py-1 rounded bg-sriher-blue/40 border border-gold-brand/20">NAAC Grade A++</span>
            <span className="px-2.5 py-1 rounded bg-sriher-blue/40 border border-gold-brand/20">NMC Recognised</span>
            <span className="px-2.5 py-1 rounded bg-sriher-blue/40 border border-gold-brand/20">KNRUHS Affiliated</span>
          </div>
        </div>

        {/* Admissions Links */}
        <div>
          <h4 className="text-white font-serif font-bold text-sm uppercase tracking-wider mb-4 border-b border-sriher-blue/50 pb-2 text-gold-brand">
            Admissions
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li><Link href="/admissions/ug/seat-matrix" className="hover:text-gold-brand">MBBS Seat Matrix (250 Seats)</Link></li>
            <li><Link href="/admissions/ug/required-documents" className="hover:text-gold-brand">UG Required Documents</Link></li>
            <li><Link href="/admissions/pg/specializations" className="hover:text-gold-brand">MD / MS Specializations</Link></li>
            <li><Link href="/admissions/pg/required-documents" className="hover:text-gold-brand">PG Required Documents</Link></li>
          </ul>
        </div>

        {/* Hospital Wings */}
        <div>
          <h4 className="text-white font-serif font-bold text-sm uppercase tracking-wider mb-4 border-b border-sriher-blue/50 pb-2 text-gold-brand">
            PMR Hospital
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li><Link href="/hospital/labs" className="hover:text-gold-brand">Central Diagnostic Labs</Link></li>
            <li><Link href="/hospital/radiology-facilities" className="hover:text-gold-brand">Radiology (MRI / CT)</Link></li>
            <li><Link href="/hospital/bloodbank" className="hover:text-gold-brand">24/7 Licensed Blood Bank</Link></li>
            <li><Link href="/hospital/private-care-rooms" className="hover:text-gold-brand">Private AC Suites</Link></li>
            <li><Link href="/hospital/dental-services" className="hover:text-gold-brand">Dental OPD</Link></li>
            <li><Link href="/gallery" className="hover:text-gold-brand font-semibold text-gold-brand/90">Institutional Gallery</Link></li>
          </ul>
        </div>

        {/* Contact Directory */}
        <div>
          <h4 className="text-white font-serif font-bold text-sm uppercase tracking-wider mb-4 border-b border-sriher-blue/50 pb-2 text-gold-brand">
            Campus Contact Directory
          </h4>
          <div className="space-y-3 text-xs text-slate-400">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-gold-brand shrink-0 mt-0.5" />
              <span>Chevella Village & Mandal, Rangareddy District, Telangana - 501503, India.</span>
            </div>

            <div className="space-y-1.5 pt-1 border-t border-sriher-blue/30 text-[11px]">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-brand shrink-0" />
                <span><strong className="text-slate-200">Medical College:</strong> <a href="tel:08417299979" className="hover:text-gold-brand font-mono">08417-299979</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-brand shrink-0" />
                <span><strong className="text-slate-200">Allied Sciences:</strong> <a href="tel:08417299909" className="hover:text-gold-brand font-mono">08417-299909</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-brand shrink-0" />
                <span><strong className="text-slate-200">Medical Hospital:</strong> <a href="tel:08417299918" className="hover:text-gold-brand font-mono">08417-299918</a></span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              <Mail className="w-4 h-4 text-gold-brand shrink-0" />
              <a href="mailto:pmrims@gmail.com" className="hover:text-gold-brand font-medium">pmrims@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-slate-950 border-t border-slate-800 py-6 px-4 sm:px-8 text-xs text-slate-500 text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} Dr. Patnam Mahender Reddy Institute of Medical Sciences (PMRIMS). All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/nmc" className="hover:text-gold-brand">NMC Disclosures</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-gold-brand">Contact Directory</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
