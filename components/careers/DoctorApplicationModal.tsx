"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Stethoscope, CheckCircle2, AlertCircle, Upload, FileText, MessageSquare, ExternalLink } from "lucide-react";

interface DoctorApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDepartment?: string;
}

const DEPARTMENTS = [
  "Anatomy",
  "Physiology",
  "Biochemistry",
  "Pathology",
  "Pharmacology",
  "Microbiology",
  "Forensic Medicine",
  "Community Medicine",
  "General Medicine",
  "General Surgery",
  "Obstetrics & Gynaecology",
  "Paediatrics",
  "Orthopaedics",
  "Dermatology Venereology & Leprosy",
  "Radio-Diagnosis",
  "Anaesthesiology",
  "Psychiatry",
  "Respiratory Medicine",
  "Otorhinolaryngology (ENT)",
  "Ophthalmology"
];

const DESIGNATIONS = [
  "Professor",
  "Associate Professor",
  "Assistant Professor",
  "Senior Resident (SR)",
  "Junior Resident (JR)",
  "Consultant Specialist",
  "Medical Officer"
];

export default function DoctorApplicationModal({
  isOpen,
  onClose,
  defaultDepartment = ""
}: DoctorApplicationModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: defaultDepartment || "General Medicine",
    designation: "Assistant Professor",
    qualification: "MD / MS",
    regNumber: "",
    experience: "3-5",
    message: ""
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string; whatsappUrl?: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, val]) => {
        data.append(key, val);
      });
      if (resumeFile) {
        data.append("resume", resumeFile);
      }

      const response = await fetch("/api/careers", {
        method: "POST",
        body: data
      });

      const resData = await response.json();

      // Construct WhatsApp text with direct resume link if available
      const resumeLinkText = resData.resumeUrl 
        ? `📄 *Download Resume:* ${resData.resumeUrl}\n`
        : (resumeFile?.name ? `📄 *CV:* ${resumeFile.name}\n` : "");

      const waText = 
        `🏥 *PMRIMS DOCTOR FACULTY APPLICATION*\n\n` +
        `👤 *Candidate:* ${formData.fullName}\n` +
        `📧 *Email:* ${formData.email}\n` +
        `📱 *Phone:* ${formData.phone}\n` +
        `🩺 *Department:* ${formData.department}\n` +
        `🎓 *Designation:* ${formData.designation || "N/A"}\n` +
        `📜 *Qualification:* ${formData.qualification}\n` +
        `🆔 *Reg No:* ${formData.regNumber || "N/A"}\n` +
        `⏳ *Experience:* ${formData.experience || "N/A"} Years\n` +
        `${formData.message ? `📝 *Note:* ${formData.message}\n` : ""}` +
        `${resumeLinkText}\n` +
        `Submitted via PMRIMS Recruitment Portal.`;

      const finalWaUrl = `https://wa.me/918688315739?text=${encodeURIComponent(waText)}`;

      if (response.ok && resData.success) {
        setSubmitStatus({
          success: true,
          message: resData.message || "Your application has been submitted successfully!",
          whatsappUrl: resData.whatsappUrl || finalWaUrl
        });

        // Trigger WhatsApp
        setTimeout(() => {
          window.location.href = resData.whatsappUrl || finalWaUrl;
        }, 300);

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          department: "General Medicine",
          designation: "Assistant Professor",
          qualification: "MD / MS",
          regNumber: "",
          experience: "3-5",
          message: ""
        });
        setResumeFile(null);
      } else {
        setSubmitStatus({
          success: false,
          message: resData.message || "Failed to submit application. Please check your inputs and try again."
        });
      }
    } catch (err) {
      setSubmitStatus({
        success: false,
        message: "Network error occurred. Please check your internet connection and try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 z-10 my-8"
          >
            {/* Modal Header */}
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
                  <Stethoscope className="w-6 h-6 text-gold-brand" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-100">Faculty Recruitment</span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">Doctor & Faculty Application</h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-100 mt-1 max-w-lg">
                Join the esteemed medical faculty & clinical team at Dr. Patnam Mahender Reddy Institute of Medical Sciences.
              </p>
            </div>

            {/* Form Body */}
            <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto font-technical">
              {submitStatus && (
                <div
                  className={`p-5 rounded-2xl mb-6 flex flex-col gap-3 border text-sm shadow-md ${
                    submitStatus.success
                      ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                      : "bg-red-50 border-red-200 text-red-800"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {submitStatus.success ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <div className="font-bold text-base">{submitStatus.success ? "Application Saved & Submitted!" : "Submission Issue"}</div>
                      <div className="text-xs mt-0.5 leading-relaxed">{submitStatus.message}</div>
                    </div>
                  </div>

                  {submitStatus.whatsappUrl && (
                    <div className="pt-2 border-t border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <span className="text-xs font-bold text-emerald-800">
                        Opening WhatsApp (+91 8688315739)...
                      </span>
                      <a
                        href={submitStatus.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4" />
                        Click to Open WhatsApp (+91 8688315739)
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name (with Dr. prefix) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. A. Rajesh Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rajesh.kumar@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Phone & Reg Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Medical Reg Number
                    </label>
                    <input
                      type="text"
                      placeholder="TSMC / 84920"
                      value={formData.regNumber}
                      onChange={(e) => setFormData({ ...formData, regNumber: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Department & Designation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Department / Specialization *
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 bg-slate-50/50"
                    >
                      {DEPARTMENTS.map((dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Designation Applied For *
                    </label>
                    <select
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 bg-slate-50/50"
                    >
                      {DESIGNATIONS.map((desg) => (
                        <option key={desg} value={desg}>
                          {desg}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Qualification & Experience */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Highest Qualification *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="MD (General Medicine) / MS (Surgery)"
                      value={formData.qualification}
                      onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Total Clinical / Teaching Exp (Years)
                    </label>
                    <input
                      type="text"
                      placeholder="5 Years"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Upload Resume */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Attach Resume / CV (PDF or DOCX)
                  </label>
                  <div className="relative border-2 border-dashed border-slate-300 rounded-2xl p-4 text-center hover:border-blue-600 transition-colors bg-slate-50/40">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center justify-center gap-1.5">
                      <Upload className="w-6 h-6 text-blue-600" />
                      <span className="text-xs font-semibold text-slate-700">
                        {resumeFile ? (
                          <span className="text-blue-700 font-bold flex items-center gap-1">
                            <FileText className="w-4 h-4 inline" /> {resumeFile.name} (
                            {Math.round(resumeFile.size / 1024)} KB)
                          </span>
                        ) : (
                          "Click or Drag & Drop CV file here to upload"
                        )}
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase">Max size: 10MB</span>
                    </div>
                  </div>
                </div>

                {/* Additional Note */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Cover Note / Additional Remarks
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention your preferred joining date, current institutional affiliation, or any special clinical interests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 bg-slate-50/50"
                  />
                </div>

                {/* Footer Buttons */}
                <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-gold-brand" />
                        Submit Application
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
