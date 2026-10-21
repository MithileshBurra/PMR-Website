"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Users, 
  Stethoscope, 
  Award, 
  Building2, 
  Search, 
  Mail, 
  Phone, 
  GraduationCap, 
  CheckCircle2, 
  ShieldCheck,
  UserCheck
} from "lucide-react";

interface StaffMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  category: "Medical Faculty" | "Administrative" | "Nursing & Paramedical" | "Hospital Support";
  experience: string;
  email?: string;
}

const STAFF_LIST: StaffMember[] = [
  // Medical Faculty Leadership
  { id: "1", name: "Dr. P. V. Ramana Rao", designation: "Dean & Principal", department: "Administration / General Medicine", qualification: "MD (General Medicine), DNB", category: "Medical Faculty", experience: "25+ Years" },
  { id: "2", name: "Dr. K. Srinivasulu", designation: "Medical Superintendent", department: "General Surgery", qualification: "MS (General Surgery), FICS", category: "Medical Faculty", experience: "22+ Years" },
  { id: "3", name: "Dr. M. Swarupa Rani", designation: "Professor & HOD", department: "Anatomy", qualification: "MS (Anatomy)", category: "Medical Faculty", experience: "18 Years" },
  { id: "4", name: "Dr. G. Ramesh Kumar", designation: "Professor & HOD", department: "Physiology", qualification: "MD (Physiology)", category: "Medical Faculty", experience: "16 Years" },
  { id: "5", name: "Dr. S. Anuradha", designation: "Professor & HOD", department: "Biochemistry", qualification: "MD (Biochemistry)", category: "Medical Faculty", experience: "15 Years" },
  { id: "6", name: "Dr. B. Venkat Reddy", designation: "Professor & HOD", department: "Pathology", qualification: "MD (Pathology)", category: "Medical Faculty", experience: "19 Years" },
  { id: "7", name: "Dr. C. Madhavi", designation: "Professor & HOD", department: "Pharmacology", qualification: "MD (Pharmacology)", category: "Medical Faculty", experience: "14 Years" },
  { id: "8", name: "Dr. K. V. L. N. Prasad", designation: "Professor & HOD", department: "Microbiology", qualification: "MD (Microbiology)", category: "Medical Faculty", experience: "17 Years" },
  { id: "9", name: "Dr. T. Ravinder", designation: "Professor & HOD", department: "Forensic Medicine", qualification: "MD (Forensic Med)", category: "Medical Faculty", experience: "20 Years" },
  { id: "10", name: "Dr. N. Sujatha", designation: "Professor & HOD", department: "Community Medicine", qualification: "MD (SPM / Community Med)", category: "Medical Faculty", experience: "16 Years" },
  
  // Clinical Specialists
  { id: "11", name: "Dr. V. Chandra Sekhar", designation: "Professor & HOD", department: "General Medicine", qualification: "MD (General Medicine)", category: "Medical Faculty", experience: "21 Years" },
  { id: "12", name: "Dr. K. Ashok Kumar", designation: "Professor & HOD", department: "General Surgery", qualification: "MS (General Surgery)", category: "Medical Faculty", experience: "23 Years" },
  { id: "13", name: "Dr. S. Lakshmi Prasanna", designation: "Professor & HOD", department: "Obstetrics & Gynaecology", qualification: "MD (OBG), DGO", category: "Medical Faculty", experience: "18 Years" },
  { id: "14", name: "Dr. P. Sudhakar", designation: "Professor & HOD", department: "Paediatrics", qualification: "MD (Paediatrics), DCH", category: "Medical Faculty", experience: "17 Years" },
  { id: "15", name: "Dr. R. Praveen Kumar", designation: "Professor & HOD", department: "Orthopaedics", qualification: "MS (Orthopaedics)", category: "Medical Faculty", experience: "19 Years" },
  { id: "16", name: "Dr. M. Radhika", designation: "Professor & HOD", department: "Radio-Diagnosis", qualification: "MD (Radiology)", category: "Medical Faculty", experience: "15 Years" },
  { id: "17", name: "Dr. G. Vijaya Lakshmi", designation: "Professor & HOD", department: "Anaesthesiology", qualification: "MD (Anaesthesia)", category: "Medical Faculty", experience: "18 Years" },
  { id: "18", name: "Dr. D. Sandeep", designation: "Associate Professor", department: "Dermatology", qualification: "MD (DVL)", category: "Medical Faculty", experience: "10 Years" },
  { id: "19", name: "Dr. A. Sunitha", designation: "Associate Professor", department: "Ophthalmology", qualification: "MS (Ophthalmology)", category: "Medical Faculty", experience: "11 Years" },
  { id: "20", name: "Dr. B. Mahesh", designation: "Associate Professor", department: "ENT", qualification: "MS (ENT)", category: "Medical Faculty", experience: "12 Years" },

  // Administrative & Nursing Staff
  { id: "21", name: "Sri M. Srinivas Rao", designation: "Chief Administrative Officer (CAO)", department: "Institutional Administration", qualification: "M.Com, MBA (Hospital Mgmt)", category: "Administrative", experience: "20 Years" },
  { id: "22", name: "Mrs. K. Mary Sarojini", designation: "Nursing Superintendent", department: "Hospital Nursing Care", qualification: "M.Sc (Nursing)", category: "Nursing & Paramedical", experience: "24 Years" },
  { id: "23", name: "Mr. T. Prabhakar", designation: "Chief Finance Officer", department: "Finance & Accounts", qualification: "FCA, B.Com", category: "Administrative", experience: "18 Years" },
  { id: "24", name: "Mr. V. Rajender", designation: "HR Manager", department: "Human Resources", qualification: "MBA (HR)", category: "Administrative", experience: "14 Years" },
  { id: "25", name: "Mrs. P. Shobha", designation: "Deputy Nursing Superintendent", department: "OPD & Critical Care Nursing", qualification: "B.Sc (Nursing)", category: "Nursing & Paramedical", experience: "16 Years" },
  { id: "26", name: "Mr. G. Krishna", designation: "In-charge Chief Pharmacist", department: "Central Pharmacy", qualification: "M.Pharm", category: "Nursing & Paramedical", experience: "15 Years" }
];

const CATEGORIES = ["All Staff", "Medical Faculty", "Administrative", "Nursing & Paramedical"];

export default function StaffPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Staff");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStaff = STAFF_LIST.filter((member) => {
    const matchesCategory = selectedCategory === "All Staff" || member.category === selectedCategory;
    const matchesSearch = 
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.qualification.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-transparent min-h-screen text-slate-800 font-technical">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
            <UserCheck className="w-4 h-4 text-gold-brand" />
            PMRIMS Institutional Directory
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4">
            Faculty & <span className="text-blue-400 italic font-normal">Institutional Staff</span>
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed">
            Meet our distinguished medical professors, clinical department heads, healthcare administrators, and nursing staff dedicated to academic excellence and patient care at PMRIMS Chevella.
          </p>
        </div>
      </section>

      {/* Main Staff Directory Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Search & Category Filter Controls */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm mb-12 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search staff by name, department, qualification..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-transparent/50"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Staff Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStaff.map((staff) => (
            <div
              key={staff.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Category Badge & Experience */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-bold">
                    {staff.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    Exp: {staff.experience}
                  </span>
                </div>

                {/* Name & Designation */}
                <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                  {staff.name}
                </h3>
                <div className="text-xs font-bold text-blue-600 mb-3 uppercase tracking-wide">
                  {staff.designation}
                </div>

                {/* Department & Qualification Details */}
                <div className="space-y-2 border-t border-slate-100 pt-3 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <Building2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-500">Dept: </span>
                      <span className="text-slate-800 font-medium">{staff.department}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <GraduationCap className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-500">Qualification: </span>
                      <span className="text-slate-800 font-medium">{staff.qualification}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified NMC Status */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Verified PMRIMS Staff
                </span>
                <span className="text-blue-600">Active</span>
              </div>
            </div>
          ))}
        </div>

        {filteredStaff.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
            <Users className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-serif font-bold text-slate-800">No Staff Members Found</h3>
            <p className="text-xs text-slate-500 mt-1">Try adjusting your search criteria or category filter.</p>
          </div>
        )}

        {/* Join PMRIMS Staff Callout */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2 block">
              Recruitment Cell
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
              Interested in Joining PMRIMS Medical Faculty?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We invite applications from qualified professors, assistant professors, and medical specialists across all clinical & pre-clinical disciplines.
            </p>
          </div>

          <Link
            href="/careers"
            className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/25 transition-all shrink-0"
          >
            Apply for Doctor Vacancies
          </Link>
        </div>
      </section>
    </div>
  );
}
