import Link from "next/link";
import Image from "next/image";
import { Hospital, HeartPulse, Activity, Sparkles, Phone, ArrowRight, ShieldCheck, Clock, MapPin, Building, BedDouble, Stethoscope } from "lucide-react";

export default function HospitalPage() {
  return (
    <div className="py-16 bg-surface-light min-h-screen text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-emerald-brand">Home</Link>
            <span>/</span>
            <span className="text-emerald-brand">Hospital & OPD Facilities</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-emerald-brand tracking-tight">
            1200+ Bed Teaching Hospital & <span className="gold-gradient-text italic font-normal">Specialty Care</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl">
            Providing compassionate, 24/7 Level-1 trauma, intensive care, and diagnostic services to over 1,000+ patients daily at Chevella, Rangareddy District.
          </p>
        </div>

        {/* Hero Image Card */}
        <div className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl mb-12 border border-gold-brand/30">
          <Image
            src="/images/hospital_facility.jpg"
            alt="PMR Hospital ICU and Emergency Center"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="px-3 py-1 rounded-md bg-gold-brand text-emerald-950 font-extrabold text-xs uppercase tracking-wider">
                Clinical Infrastructure
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold mt-2">PMRIMS Multispecialty Hospital Complex</h2>
              <p className="text-xs sm:text-sm text-slate-300 font-technical">24/7 Emergency, 1200 Beds, Intensive Care Units & Operation Theaters</p>
            </div>

            <a
              href="tel:08417299918"
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shrink-0 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> Emergency Desk: 08417-299918
            </a>
          </div>
        </div>

        {/* Specialized Hospital Wings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Link href="/hospital/labs" className="group bg-white rounded-3xl p-6 border border-slate-200 hover:border-gold-brand shadow-sm hover:shadow-institutional transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-900 text-gold-brand flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-emerald-brand mb-2 group-hover:text-emerald-900">Central Diagnostic Labs</h3>
              <p className="text-xs text-slate-500 font-technical leading-relaxed">
                Automated Biochemistry, Hematology, Pathology & Microbiology testing with 24/7 turnaround.
              </p>
            </div>
            <div className="mt-6 text-xs font-bold text-gold-muted flex items-center gap-1">
              Explore Lab Facilities <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          <Link href="/hospital/radiology-facilities" className="group bg-white rounded-3xl p-6 border border-slate-200 hover:border-gold-brand shadow-sm hover:shadow-institutional transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-900 text-gold-brand flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-emerald-brand mb-2 group-hover:text-emerald-900">Radiology Facilities</h3>
              <p className="text-xs text-slate-500 font-technical leading-relaxed">
                1.5T MRI Scanner, 128-Slice CT, 4D Ultrasound, Mammography & Digital Radiography.
              </p>
            </div>
            <div className="mt-6 text-xs font-bold text-gold-muted flex items-center gap-1">
              View Radiology Equipment <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          <Link href="/hospital/bloodbank" className="group bg-white rounded-3xl p-6 border border-slate-200 hover:border-gold-brand shadow-sm hover:shadow-institutional transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-900 text-gold-brand flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-emerald-brand mb-2 group-hover:text-emerald-900">24/7 Licensed Blood Bank</h3>
              <p className="text-xs text-slate-500 font-technical leading-relaxed">
                Whole blood & component separation (PRBC, Platelets, FFP) for emergency surgeries.
              </p>
            </div>
            <div className="mt-6 text-xs font-bold text-gold-muted flex items-center gap-1">
              Blood Bank Details <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          <Link href="/hospital/private-care-rooms" className="group bg-white rounded-3xl p-6 border border-slate-200 hover:border-gold-brand shadow-sm hover:shadow-institutional transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-900 text-gold-brand flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BedDouble className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-emerald-brand mb-2 group-hover:text-emerald-900">Private Care Rooms</h3>
              <p className="text-xs text-slate-500 font-technical leading-relaxed">
                Air-conditioned private suites, deluxe patient rooms, and specialized recovery wards.
              </p>
            </div>
            <div className="mt-6 text-xs font-bold text-gold-muted flex items-center gap-1">
              View Room Options <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          <Link href="/hospital/dental-services" className="group bg-white rounded-3xl p-6 border border-slate-200 hover:border-gold-brand shadow-sm hover:shadow-institutional transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-900 text-gold-brand flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-emerald-brand mb-2 group-hover:text-emerald-900">Dental & Maxillofacial OPD</h3>
              <p className="text-xs text-slate-500 font-technical leading-relaxed">
                Oral surgery, orthodontics, root canal therapy, and maxillofacial trauma care.
              </p>
            </div>
            <div className="mt-6 text-xs font-bold text-gold-muted flex items-center gap-1">
              Dental Clinic Details <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
