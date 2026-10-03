"use client";

import { useState } from "react";
import { 
  Stethoscope, 
  CheckCircle2, 
  Building2, 
  Send, 
  Upload, 
  FileText, 
  Phone, 
  Mail, 
  AlertCircle,
  MessageSquare,
  ExternalLink
} from "lucide-react";

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
  "Ophthalmology",
  "Emergency Medicine",
  "Hospital Administration"
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

export default function CareersPage() {
  const [formData, setFormData] = useState({
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

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string; whatsappUrl?: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // 1. Construct instant WhatsApp URL for +91 8074485411
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
      `${resumeFile?.name ? `📄 *CV:* ${resumeFile.name}\n` : ""}\n` +
      `Submitted via PMRIMS Recruitment Portal.`;

    const waUrl = `https://wa.me/918074485411?text=${encodeURIComponent(waText)}`;

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

      if (response.ok && resData.success) {
        setSubmitStatus({
          success: true,
          message: resData.message || "Your application has been submitted & saved successfully!",
          whatsappUrl: resData.whatsappUrl || waUrl
        });

        // Trigger WhatsApp location navigation to bypass popup blocker
        setTimeout(() => {
          window.location.href = resData.whatsappUrl || waUrl;
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
        message: "Network error occurred. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen text-slate-800 font-technical">
      {/* Hero Banner - Matching PMRIMS Dark Navy Theme */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
            <Stethoscope className="w-4 h-4 text-gold-brand" />
            Medical & Clinical Faculty Recruitment 2026
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4">
            Join Our Distinguished <br className="hidden sm:block" />
            <span className="text-blue-400 italic font-normal">Medical & Teaching Faculty</span>
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed">
            Dr. Patnam Mahender Reddy Institute of Medical Sciences invites applications from dynamic, dedicated doctors, professors, and senior clinical specialists across all 20+ clinical & pre-clinical departments.
          </p>
        </div>
      </section>

      {/* Main Content & Application Form Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Department List & Institutional Benefits */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-slate-900">Inviting Applications</h3>
                  <p className="text-xs text-slate-500">Across Pre-Clinical, Para-Clinical & Clinical Specialties</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Departments Open:</h4>
                <div className="flex flex-wrap gap-2">
                  {DEPARTMENTS.map((dept) => (
                    <span key={dept} className="px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold hover:bg-blue-100 transition-colors">
                      {dept}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6 space-y-3 text-xs text-slate-600">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>NMC Prescribed Pay Scales & Academic Allowances</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>State-of-the-Art 1200+ Bed Teaching Hospital Exposure</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>On-Campus Faculty Quarters & Transit Accommodation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>Research & Publication Encouragement Grants</span>
                </div>
              </div>
            </div>

            {/* Direct HR Contact Card - PMRIMS Royal Blue */}
            <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-lg space-y-4">
              <h3 className="text-xl font-serif font-bold">HR & Recruitment Contact</h3>
              <p className="text-xs text-slate-100">For direct enquiries regarding pay scales, interview schedules, or faculty vacancies:</p>
              
              <div className="space-y-3 pt-2 text-xs font-semibold">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold-brand shrink-0" />
                  <span>+91 9133343726 / +91 9133343725</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gold-brand shrink-0" />
                  <span>mithileshburra@ekluvya.guru</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-gold-brand shrink-0" />
                  <span>WhatsApp: +91 8074485411</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Application Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
              <div className="mb-8 border-b border-slate-100 pb-6">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Doctor Faculty Application</span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">Submit Your Professional Details</h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill out the form below. Submitted details are saved to database and sent directly to WhatsApp (+91 8074485411) & Email.
                </p>
              </div>

              {submitStatus && (
                <div
                  className={`p-6 rounded-2xl mb-6 flex flex-col gap-4 border text-sm shadow-md ${
                    submitStatus.success
                      ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                      : "bg-red-50 border-red-200 text-red-800"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {submitStatus.success ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <div className="font-bold text-base">{submitStatus.success ? "Application Saved & Submitted!" : "Submission Issue"}</div>
                      <div className="text-xs mt-1 leading-relaxed">{submitStatus.message}</div>
                    </div>
                  </div>

                  {submitStatus.whatsappUrl && (
                    <div className="pt-2 border-t border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <span className="text-xs font-bold text-emerald-800">
                        Opening WhatsApp (+91 8074485411)...
                      </span>
                      <a
                        href={submitStatus.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4" />
                        Click Here to Open WhatsApp (+91 8074485411)
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name (with Dr. prefix) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. A. Rajesh Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rajesh.kumar@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Phone & Reg Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
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
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Medical Reg Number (KMC / NMC)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. TSMC / 84920"
                      value={formData.regNumber}
                      onChange={(e) => setFormData({ ...formData, regNumber: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Department & Designation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
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
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Highest Qualification *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. MD (General Medicine) / MS (Surgery)"
                      value={formData.qualification}
                      onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Total Experience (Years)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 5 Years"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Attach Resume / CV File (PDF/DOCX)
                  </label>
                  <div className="relative border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center hover:border-blue-600 transition-colors bg-slate-50/50">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Upload className="w-8 h-8 text-blue-600" />
                      <span className="text-xs font-semibold text-slate-700">
                        {resumeFile ? (
                          <span className="text-blue-700 font-bold flex items-center gap-1">
                            <FileText className="w-4 h-4 inline" /> {resumeFile.name} (
                            {Math.round(resumeFile.size / 1024)} KB)
                          </span>
                        ) : (
                          "Click or Drag & Drop your Resume/CV here"
                        )}
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase">PDF, DOC, DOCX up to 10MB</span>
                    </div>
                  </div>
                </div>

                {/* Cover Note */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Cover Note / Remarks
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly state your current institution, research publications, or preferred joining timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 bg-slate-50/50"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending Application...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-gold-brand" />
                      Submit Application
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
