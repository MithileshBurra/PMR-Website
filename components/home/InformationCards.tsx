"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  GraduationCap, 
  FileText, 
  Stethoscope, 
  Headphones, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight
} from "lucide-react";
import DoctorApplicationModal from "@/components/careers/DoctorApplicationModal";

export default function InformationCards() {
  const [isDoctorModalOpen, setIsDoctorModalOpen] = useState(false);

  return (
    <section className="py-20 bg-transparent border-t border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
            <span className="w-8 h-[2px] bg-orange-500 rounded-full" />
            INSTITUTIONAL DIRECTORY & ADMISSIONS
            <span className="w-8 h-[2px] bg-orange-500 rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Quick Access & <span className="text-orange-600 italic font-normal">Key Portals</span>
          </h2>
          <p className="text-slate-600 font-technical text-sm mt-2">
            Explore admission details, document checklists, faculty recruitment, and institutional contact numbers.
          </p>
        </div>

        {/* 5 Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Admissions Open - Orange Theme */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Card Banner Header */}
              <div className="bg-orange-500 text-white p-5 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/10 shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-white leading-tight">Admissions Open</h3>
                  <span className="text-[10px] text-orange-100 uppercase tracking-wider font-technical font-semibold">Academic Year 2026-27</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 font-technical space-y-5">
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Courses Offered:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold">MBBS (UG)</span>
                    <span className="px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold">MD/MS (PG)</span>
                    <span className="px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold">DM/MCh Super Specialties</span>
                  </div>
                </div>

                <div className="space-y-2 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                    <a href="tel:8688315735" className="font-bold text-slate-900 hover:text-orange-600 transition-colors">+91 8688315735</a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                    <span className="text-slate-500">Medical College:</span>
                    <a href="tel:08417299979" className="font-bold text-slate-900 hover:text-orange-600 transition-colors">08417-299979</a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                    <a href="mailto:pmrims@gmail.com" className="text-slate-600 hover:text-orange-600 transition-colors">pmrims@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="p-6 pt-0">
              <Link
                href="/admissions/ug/seat-matrix"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow group-hover:shadow-md"
              >
                View Admissions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Required Documents - MBBS (UG) - Orange Theme */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Card Banner Header */}
              <div className="bg-orange-500 text-white p-5 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/10 shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-white leading-tight">Required Documents - MBBS (UG)</h3>
                  <span className="text-[10px] text-orange-100 uppercase tracking-wider font-technical font-semibold">Verification Checklist</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 font-technical">
                <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-700 font-medium mb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>10th & 12th Marksheets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>NEET Score Card</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>Transfer Certificate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>Migration Certificate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>Character Certificate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>Passport Photos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="p-6 pt-0">
              <Link
                href="/admissions/ug/required-documents"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow group-hover:shadow-md"
              >
                View UG Required Documents
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 3: Required Documents - MD/MS (PG) - Orange Theme */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Card Banner Header */}
              <div className="bg-orange-500 text-white p-5 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/10 shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-white leading-tight">Required Documents - MD/MS (PG)</h3>
                  <span className="text-[10px] text-orange-100 uppercase tracking-wider font-technical font-semibold">Verification Checklist</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 font-technical">
                <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-700 font-medium mb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>MBBS Degree Cert</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>Internship Completion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>NEET PG Score Card</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>Medical Registration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>Passport & Visa (NRI)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="p-6 pt-0">
              <Link
                href="/admissions/pg/required-documents"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow group-hover:shadow-md"
              >
                View PG Required Documents
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 4: Careers - Orange Theme */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Card Banner Header */}
              <div className="bg-orange-500 text-white p-5 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/10 shrink-0">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-white leading-tight">Careers</h3>
                  <span className="text-[10px] text-orange-100 uppercase tracking-wider font-technical font-semibold">Doctor & Faculty Openings</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 font-technical space-y-4">
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Departments inviting applications:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Anatomy", "Physiology", "Biochemistry", "Pathology", "Pharmacology", "Microbiology", "Community Med", "Forensic Med"].map((dept) => (
                      <span key={dept} className="px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-[11px] font-semibold">
                        {dept}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-3 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Call/WhatsApp:</span>
                  <a href="tel:8688315739" className="font-bold text-slate-900 hover:text-orange-600 transition-colors">+91 8688315739</a>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="p-6 pt-0">
              <button
                onClick={() => setIsDoctorModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow group-hover:shadow-md"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 5: Quick Helpdesk - Orange Theme */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Card Banner Header */}
              <div className="bg-orange-500 text-white p-5 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/10 shrink-0">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-white leading-tight">Quick Helpdesk</h3>
                  <span className="text-[10px] text-orange-100 uppercase tracking-wider font-technical font-semibold">24x7 Helpline & Support</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 font-technical space-y-3.5 text-xs text-slate-700">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <span className="font-medium text-slate-500">Medical College:</span>
                  <a href="tel:08417299979" className="font-bold text-slate-900 hover:text-orange-600 transition-colors">08417-299979</a>
                </div>

                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <span className="font-medium text-slate-500">Allied Sciences:</span>
                  <a href="tel:08417299909" className="font-bold text-slate-900 hover:text-orange-600 transition-colors">08417-299909</a>
                </div>

                <div className="flex items-center justify-between pb-1">
                  <span className="font-medium text-slate-500">Medical Hospital:</span>
                  <a href="tel:08417299918" className="font-bold text-slate-900 hover:text-orange-600 transition-colors">08417-299918</a>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="p-6 pt-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow group-hover:shadow-md"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Doctor Application Modal */}
      <DoctorApplicationModal
        isOpen={isDoctorModalOpen}
        onClose={() => setIsDoctorModalOpen(false)}
      />
    </section>
  );
}
