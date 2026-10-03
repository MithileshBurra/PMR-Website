"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, ShieldCheck, AlertCircle } from "lucide-react";

interface DocumentProformaModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "UG" | "PG";
}

const UG_DOCUMENTS = [
  "10th Standard Original Marks Memo / Date of Birth Certificate",
  "12th Standard / Intermediate Original Pass Certificate & Marks Sheet",
  "NEET-UG Hall Ticket 2026 & Official Score Card / Rank Card",
  "Original Transfer Certificate (TC) & Migration Certificate",
  "Conduct & Character Certificate issued by the Head of Institution",
  "8 Passport Size Photographs & 4 Stamp Size Photographs",
  "Aadhaar Card copy of Student and Father/Mother",
  "Study & Conduct Certificates (6th to 12th Class)",
  "Caste / Community Certificate (if applicable for Reservation categories)",
  "Income Certificate of Parents (for scholarship/fee exemption if applicable)",
  "Equivalence Certificate (for non-Telangana / NRI / Foreign candidates)",
  "Bond for Mandatory Clinical Service / Anti-Ragging Undertaking"
];

const PG_DOCUMENTS = [
  "MBBS Degree Certificate / Provisional Degree Certificate",
  "MBBS All Professional Consolidated Marks Memos (1st to Final MBBS)",
  "Compulsory Rotatory Internship Completion Certificate (CRRI)",
  "NEET-PG 2026 Rank Card & Official Allotment Letter",
  "State Medical Council (KMC / NMC) Permanent Medical Registration Certificate",
  "10th / Secondary School Leaving Certificate (Proof of Age)",
  "Transfer Certificate (TC) & Migration Certificate from MBBS University",
  "Work Experience Certificate & Conduct Certificate",
  "Passport Copy & Visa / Citizenship documents (for NRI Quota)",
  "8 Passport Size Photographs of the Candidate",
  "Aadhaar Card & PAN Card copies",
  "Notarized Service Bond Agreement & Anti-Ragging Affidavit"
];

export default function DocumentProformaModal({ isOpen, onClose, type }: DocumentProformaModalProps) {
  const isUG = type === "UG";
  const title = isUG ? "MBBS (UG) Admission Documents & Proforma" : "MD/MS (PG) Admission Documents & Proforma";
  const documents = isUG ? UG_DOCUMENTS : PG_DOCUMENTS;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 z-10 my-8"
          >
            {/* Header */}
            <div className="bg-blue-600 text-white p-6 sm:p-8 relative">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/20">
                  <FileText className="w-6 h-6 text-gold-brand" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-100">Statutory Verification Checklist</span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">{title}</h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-100 mt-1">
                Please bring 3 sets of self-attested photocopies along with original certificates during physical verification at PMRIMS Chevella campus.
              </p>
            </div>

            {/* Body List */}
            <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto font-technical">
              <div className="bg-blue-50 border border-blue-200/80 rounded-2xl p-4 mb-6 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs text-blue-900 leading-relaxed">
                  <span className="font-bold">NMC / KNRUHS Compliance Notice:</span> All original certificates will be verified against the state counseling portal allotment database prior to final seat confirmation.
                </div>
              </div>

              <div className="space-y-3">
                {documents.map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-500/50 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-xs sm:text-sm text-slate-800 font-semibold leading-normal">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <AlertCircle className="w-4 h-4 text-blue-600" />
                <span>Admissions Helpline: +91 9133343701 / 9133343726</span>
              </div>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow"
              >
                Close Checklist
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
