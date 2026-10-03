/**
 * PMRIMS Admissions & Regulatory Configuration File
 * -----------------------------------------------------------------------
 * EDIT THIS FILE ANNUALLY TO UPDATE:
 * - Current Academic Session Year (e.g. 2026-2027)
 * - UG (MBBS) Seat Matrix & Quota breakdown
 * - UG Required Document Checklists
 * - PG (MD/MS) Seats & Required Documents
 * - Downloadable PDF links & Gazette notifications
 * -----------------------------------------------------------------------
 */

export interface AdmissionDocument {
  id: string;
  title: string;
  description: string;
  category: "mandatory" | "identity" | "quota" | "medical";
  originalRequired: boolean;
  copiesRequired: number;
  downloadUrl?: string;
}

export interface SeatMatrixItem {
  quotaCategory: string;
  quotaCode: "A" | "B" | "C";
  percentage: string;
  seatCount: number;
  eligibility: string;
  counsellingBody: string;
  feeStructureDescription: string;
  gazetteOrderUrl?: string;
}

export const ADMISSIONS_CONFIG = {
  academicYear: "2026-2027",
  lastUpdated: "September 2026",
  counsellingAuthority: "Kaloji Narayana Rao University of Health Sciences (KNRUHS) & TS MEDADMISSIONS",
  neetExamYear: "NEET UG 2026 / NEET PG 2026",
  
  // Contact Numbers for Admissions Desk
  contactInfo: {
    helpline1: "08417-299979 (Medical College)",
    helpline2: "08417-299909 (Allied Sciences)",
    helpline3: "08417-299918 (Medical Hospital)",
    email: "admissions@pmrims.com",
    counsellingVenue: "Academic Block, PMRIMS Chevella Campus, Rangareddy Dist.",
  },

  // 1. UNDERGRADUATE (MBBS) SEAT MATRIX (250 SEATS TOTAL)
  ugSeatMatrix: [
    {
      quotaCategory: "Category-A",
      quotaCode: "A",
      percentage: "50%",
      seatCount: 125,
      eligibility: "TS Domicile, Qualified NEET UG 2026 & KNRUHS State Merit List",
      counsellingBody: "KNRUHS Web Counselling (tsmedadm.tsche.in)",
      feeStructureDescription: "TS TAFRC Government Regulatory Fee",
    },
    {
      quotaCategory: "Category-B",
      quotaCode: "B",
      percentage: "35%",
      seatCount: 88,
      eligibility: "All India NEET UG 2026 Merit Rankers (Open to all States)",
      counsellingBody: "KNRUHS Management Quota Portal",
      feeStructureDescription: "TS TAFRC Approved Management Slab",
    },
    {
      quotaCategory: "Category-C",
      quotaCode: "C",
      percentage: "15%",
      seatCount: 37,
      eligibility: "NEET UG Qualified + Valid NRI Sponsor Declaration & Embassy Certificate",
      counsellingBody: "Direct PMRIMS Institutional / KNRUHS Verification",
      feeStructureDescription: "TAFRC Approved NRI Quota Fee",
    },
  ] as SeatMatrixItem[],

  // 2. UNDERGRADUATE (MBBS) REQUIRED DOCUMENTS CHECKLIST
  ugRequiredDocuments: [
    {
      id: "doc-1",
      title: "NEET UG 2026 Admit Card & Score Card",
      description: "Original NTA NEET UG Admit Card and official rank score card printout.",
      category: "mandatory",
      originalRequired: true,
      copiesRequired: 4,
    },
    {
      id: "doc-2",
      title: "KNRUHS Allotment Letter",
      description: "Official seat allotment letter issued by KNRUHS Counselling authority.",
      category: "mandatory",
      originalRequired: true,
      copiesRequired: 3,
    },
    {
      id: "doc-3",
      title: "SSC / 10th Class Marks Memo & Certificate",
      description: "Proof of date of birth and secondary school completion.",
      category: "identity",
      originalRequired: true,
      copiesRequired: 4,
    },
    {
      id: "doc-4",
      title: "Intermediate / 10+2 Marks Memo (PCB)",
      description: "Pass certificate with Physics, Chemistry, and Biology percentage details.",
      category: "mandatory",
      originalRequired: true,
      copiesRequired: 4,
    },
    {
      id: "doc-5",
      title: "Transfer Certificate (TC) & Conduct Certificate",
      description: "Issued by the last attended Junior College / Institute.",
      category: "identity",
      originalRequired: true,
      copiesRequired: 3,
    },
    {
      id: "doc-6",
      title: "Study & Conduct Certificates (6th to Inter)",
      description: "Continuous study proof for local Telangana/AP candidate verification.",
      category: "identity",
      originalRequired: true,
      copiesRequired: 3,
    },
    {
      id: "doc-7",
      title: "Aadhaar Card & Passport Size Photographs",
      description: "Student & Parent Aadhaar cards + 10 recent color passport photos.",
      category: "identity",
      originalRequired: false,
      copiesRequired: 5,
    },
    {
      id: "doc-8",
      title: "Caste & Income Certificates (If applicable)",
      description: "Issued by competent MRO/Tahsildar authority (for BC/SC/ST/EWS).",
      category: "quota",
      originalRequired: true,
      copiesRequired: 4,
    },
    {
      id: "doc-9",
      title: "Physical Fitness & Immunization Certificate",
      description: "Hepatitis-B vaccination record & general fitness certificate by Civil Surgeon.",
      category: "medical",
      originalRequired: true,
      copiesRequired: 2,
    },
    {
      id: "doc-10",
      title: "Anti-Ragging Undertaking Affidavits",
      description: "Signed affidavits by both Student & Parent on Rs. 100/- non-judicial stamp paper.",
      category: "mandatory",
      originalRequired: true,
      copiesRequired: 2,
      downloadUrl: "/docs/anti_ragging_affidavit_format.pdf",
    },
  ] as AdmissionDocument[],

  // 3. POSTGRADUATE (MD / MS) SPECIALIZATIONS & SEATS (94 SEATS TOTAL)
  pgSpecializationsMS: [
    { name: "MS – General Surgery", seats: 6, duration: "3 Years", category: "Surgical" },
    { name: "MS – Obstetrics & Gynaecology", seats: 8, duration: "3 Years", category: "Surgical" },
    { name: "MS – Orthopaedics", seats: 7, duration: "3 Years", category: "Surgical" },
    { name: "MS – Ophthalmology", seats: 7, duration: "3 Years", category: "Surgical" },
    { name: "MS – Otorhinolaryngology", seats: 5, duration: "3 Years", category: "Surgical" },
  ],
  pgSpecializationsMD: [
    { name: "MD – General Medicine", seats: 13, duration: "3 Years", category: "Clinical" },
    { name: "MD – Paediatrics", seats: 8, duration: "3 Years", category: "Clinical" },
    { name: "MD – Radio-Diagnosis", seats: 5, duration: "3 Years", category: "Clinical" },
    { name: "MD – Anaesthesiology", seats: 11, duration: "3 Years", category: "Clinical" },
    { name: "MD – Dermatology Venereology & Leprosy", seats: 7, duration: "3 Years", category: "Clinical" },
    { name: "MD – Psychiatry", seats: 4, duration: "3 Years", category: "Clinical" },
    { name: "MD – Respiratory Medicine", seats: 3, duration: "3 Years", category: "Clinical" },
    { name: "MD – Pathology", seats: 4, duration: "3 Years", category: "Para-Clinical" },
    { name: "MD – Microbiology", seats: 4, duration: "3 Years", category: "Para-Clinical" },
    { name: "MD – Biochemistry", seats: 2, duration: "3 Years", category: "Pre-Clinical" },
  ],

  // 4. POSTGRADUATE (MD / MS) REQUIRED DOCUMENTS
  pgRequiredDocuments: [
    {
      id: "pg-doc-1",
      title: "NEET PG 2026 Admit Card & Rank Card",
      description: "Official NBE Score Card and All-India Rank card.",
      category: "mandatory",
      originalRequired: true,
      copiesRequired: 4,
    },
    {
      id: "pg-doc-2",
      title: "MBBS Degree Certificate & All Marks Memos",
      description: "Original MBBS Degree certificate & 1st to 4th year mark sheets.",
      category: "mandatory",
      originalRequired: true,
      copiesRequired: 4,
    },
    {
      id: "pg-doc-3",
      title: "Compulsory Rotatory Internship Completion Certificate",
      description: "Internship completion certificate on or before NMC prescribed deadline.",
      category: "mandatory",
      originalRequired: true,
      copiesRequired: 3,
    },
    {
      id: "pg-doc-4",
      title: "Permanent Medical Council Registration Certificate",
      description: "Registration with TSMC / MCI / NMC state medical council.",
      category: "mandatory",
      originalRequired: true,
      copiesRequired: 4,
    },
  ] as AdmissionDocument[],
};
