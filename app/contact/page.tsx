"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ShieldAlert, Navigation, ExternalLink, Compass, GraduationCap, Building2, Stethoscope } from "lucide-react";

export default function ContactPage() {
  const googleMapsUrl = "https://maps.app.goo.gl/yDneKph2qA7KVVgf9";

  return (
    <div className="py-16 bg-surface-light min-h-screen text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header Breadcrumb & Title */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link> / <span className="text-emerald-brand">Contact Us</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-emerald-brand tracking-tight">
            Chevella Campus & <span className="gold-gradient-text italic font-normal">Contact Directory</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl">
            Reach out to Dr. Patnam Mahender Reddy Institute of Medical Sciences & PMR Hospital for admissions, clinical appointments, academic inquiries, and 24/7 emergency care.
          </p>
        </div>

        {/* Contact Info & Inquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          {/* Left Column: Campus Info & Department Helplines */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="bg-emerald-950 text-white rounded-3xl p-8 border border-gold-brand/40 shadow-2xl">
              <h2 className="text-2xl font-serif font-bold text-gold-brand mb-4">Chevella Main Campus</h2>
              
              <div className="space-y-5 text-xs font-technical text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-brand shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Dr. Patnam Mahender Reddy Institute of Medical Sciences</strong><br />
                    Chevella Village & Mandal, Rangareddy District, Telangana - 501503, India.
                  </span>
                </div>

                {/* Official Department Helplines */}
                <div className="space-y-2.5 pt-3 border-t border-emerald-900">
                  <div className="text-xs font-bold text-gold-brand uppercase tracking-wider mb-2">
                    Official Department Helplines
                  </div>
                  
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-900/60 border border-emerald-800/80">
                    <span className="flex items-center gap-2 font-semibold text-slate-200">
                      <GraduationCap className="w-4 h-4 text-gold-brand shrink-0" />
                      Medical College:
                    </span>
                    <a href="tel:08417299979" className="font-bold text-white font-mono text-sm hover:text-gold-brand">
                      08417-299979
                    </a>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-900/60 border border-emerald-800/80">
                    <span className="flex items-center gap-2 font-semibold text-slate-200">
                      <Building2 className="w-4 h-4 text-gold-brand shrink-0" />
                      Allied Sciences:
                    </span>
                    <a href="tel:08417299909" className="font-bold text-white font-mono text-sm hover:text-gold-brand">
                      08417-299909
                    </a>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-900/60 border border-emerald-800/80">
                    <span className="flex items-center gap-2 font-semibold text-slate-200">
                      <Stethoscope className="w-4 h-4 text-gold-brand shrink-0" />
                      Medical Hospital:
                    </span>
                    <a href="tel:08417299918" className="font-bold text-white font-mono text-sm hover:text-gold-brand">
                      08417-299918
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Mail className="w-5 h-5 text-gold-brand shrink-0" />
                  <a href="mailto:pmrims@gmail.com" className="hover:text-gold-brand font-medium">pmrims@gmail.com</a>
                </div>
              </div>

              {/* 24/7 Emergency Hotline */}
              <div className="mt-8 pt-6 border-t border-emerald-900">
                <div className="text-xs font-bold text-red-400 uppercase flex items-center gap-2 mb-1">
                  <ShieldAlert className="w-4 h-4" /> 24/7 Emergency Casualty Hotline
                </div>
                <div className="text-2xl font-bold font-mono text-white">08417-299918</div>
              </div>

              {/* Direct Directions Button inside Card */}
              <div className="mt-6 pt-4 border-t border-emerald-900">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gold-brand hover:bg-yellow-500 text-emerald-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  Get Live Directions on Google Maps
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200 shadow-institutional">
            <h2 className="text-2xl font-serif font-bold text-emerald-brand mb-6">Send an Official Inquiry</h2>
            
            <form onSubmit={(e) => { e.preventDefault(); alert("Inquiry sent successfully!"); }} className="space-y-4 text-xs font-technical">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Full Name *</label>
                  <input type="text" required placeholder="Enter your full name" className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-800" />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Mobile Number *</label>
                  <input type="tel" required placeholder="+91 98765 43210" className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-800" />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Email Address *</label>
                <input type="email" required placeholder="name@example.com" className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-800" />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Inquiry Department *</label>
                <select className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-800 bg-white">
                  <option>MBBS Admissions (UG) - 08417-299979</option>
                  <option>MD/MS Admissions (PG) - 08417-299979</option>
                  <option>PMR Hospital Appointments - 08417-299918</option>
                  <option>Physiotherapy & Nursing College - 08417-299909</option>
                  <option>General Administration</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Message / Requirements</label>
                <textarea rows={4} placeholder="Type your inquiry details..." className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-800" />
              </div>

              <button type="submit" className="w-full py-3.5 rounded-xl bg-emerald-brand hover:bg-emerald-900 text-gold-brand font-bold text-xs uppercase tracking-wider shadow-lg">
                Submit Inquiry →
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps Location Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-institutional">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
                <Compass className="w-3.5 h-3.5 text-emerald-700" />
                College Campus Location
              </div>
              <h2 className="text-2xl font-serif font-bold text-slate-900">
                Google Maps Directions to PMRIMS College & Hospital
              </h2>
              <p className="text-xs text-slate-500 font-technical mt-1">
                Located on the Hyderabad - Chevella - Vikarabad State Highway, Rangareddy District, Telangana.
              </p>
            </div>
            
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-brand hover:bg-emerald-900 text-gold-brand font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0"
            >
              <Navigation className="w-4 h-4" />
              Open in Google Maps App
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="w-full h-[450px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner relative bg-slate-100">
            <iframe
              title="Dr. Patnam Mahender Reddy Institute of Medical Sciences Google Map Location"
              src="https://maps.google.com/maps?q=Dr.%20Patnam%20Mahender%20Reddy%20Institute%20of%20Medical%20Sciences,%20Chevella&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
