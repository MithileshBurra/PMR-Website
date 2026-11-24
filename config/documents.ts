/**
 * PMRIMS Document & PDF Central Registry
 * -----------------------------------------------------------------------
 * Master list of all statutory, permission, admission, and regulatory
 * PDF documents across the PMRIMS website.
 * -----------------------------------------------------------------------
 */

export interface DocumentEntry {
  id: string;
  title: string;
  category: "ug-permission" | "pg-permission" | "ug-document" | "pg-document" | "gazette" | "collaboration";
  subCategory?: "clinical" | "pre-para" | "renewal" | "recognition" | "lop" | "international";
  referenceNo?: string;
  issuedBy?: string;
  academicYear?: string;
  seats?: string;
  pdfUrl: string;
  fileSize?: string;
  description?: string;
}

export const SITE_DOCUMENTS: DocumentEntry[] = [
  // =========================================================================
  // 1. UG PERMISSIONS (NMC & GOVT ORDERS) - 10 PDFs
  // Location: public/documents/permissions/ug/
  // =========================================================================
  {
    id: "ug-perm-lop-2026-27",
    title: "NMC Letter of Permission (LoP) - Batch (2026-27)",
    category: "ug-permission",
    subCategory: "lop",
    referenceNo: "No.M-21011/Increase/29/2026-MARB/NMC (8413075)",
    issuedBy: "Medical Assessment & Rating Board (MARB), NMC",
    academicYear: "2026-2027",
    seats: "250 Seats",
    pdfUrl: "/documents/permissions/ug/NMC-LOP-MBBS-Batch-2026-27.pdf",
    fileSize: "1.9 MB",
    description: "Official Letter of Permission (LoP) issued in compliance with 1st Appeal Committee decision for increase in MBBS intake from 200 to 250 seats for Batch (2026-27)."
  },
  {
    id: "ug-perm-lop-2025-26",
    title: "NMC Letter of Permission (LoP) - Batch (2025-26)",
    category: "ug-permission",
    subCategory: "lop",
    referenceNo: "No. N-22011/120/2025-AssessmentCell/MARB(8342556)",
    issuedBy: "Medical Assessment & Rating Board (MARB), NMC",
    academicYear: "2025-2026",
    seats: "200 Seats",
    pdfUrl: "/documents/permissions/ug/NMC-LOP-MBBS-Batch-2025-26.pdf",
    fileSize: "643 KB",
    description: "Official Letter of Permission (LoP) issued in compliance with 1st Appeal Committee decision for increase in MBBS intake from 150 to 200 seats for Batch (2025-26)."
  },
  {
    id: "ug-perm-recognition-2024",
    title: "NMC MBBS Recognition Order (2024-2025)",
    category: "ug-permission",
    subCategory: "recognition",
    referenceNo: "NMC/UG/RECOG/PMRIMS/2024-25",
    issuedBy: "National Medical Commission (Undergraduate Medical Education Board)",
    academicYear: "2024-2025",
    pdfUrl: "/documents/permissions/ug/Recognition-2024-25.pdf",
    fileSize: "108 KB",
    description: "Official NMC Recognition Order for MBBS Degree at PMRIMS."
  },
  {
    id: "ug-perm-ivth-renewal",
    title: "NMC 4th Renewal Permission Order (5th Batch 2023-24)",
    category: "ug-permission",
    subCategory: "renewal",
    referenceNo: "NMC/UG/REN-4/PMRIMS/2023-24",
    issuedBy: "UGMEB, National Medical Commission",
    academicYear: "2023-2024",
    pdfUrl: "/documents/permissions/ug/IVth-renewal5th-Batch-2023-24.pdf",
    fileSize: "394 KB",
    description: "4th Renewal Permission for admission of 5th batch MBBS students."
  },
  {
    id: "ug-perm-iiird-renewal",
    title: "NMC 3rd Renewal Permission Order (4th Batch 2022-23)",
    category: "ug-permission",
    subCategory: "renewal",
    referenceNo: "NMC/UG/REN-3/PMRIMS/2022-23",
    issuedBy: "UGMEB, National Medical Commission",
    academicYear: "2022-2023",
    pdfUrl: "/documents/permissions/ug/IIIrd-Renewal4Th-Batch-2022-23.pdf",
    fileSize: "114 KB",
    description: "3rd Renewal Permission for admission of 4th batch MBBS students."
  },
  {
    id: "ug-perm-iind-renewal",
    title: "NMC 2nd Renewal Permission Order (3rd Batch 2021-22)",
    category: "ug-permission",
    subCategory: "renewal",
    referenceNo: "NMC/UG/REN-2/PMRIMS/2021-22",
    issuedBy: "UGMEB, National Medical Commission",
    academicYear: "2021-2022",
    pdfUrl: "/documents/permissions/ug/IInd-Renewal3rd-Batch-2021-22.pdf",
    fileSize: "384 KB",
    description: "2nd Renewal Permission for admission of 3rd batch MBBS students."
  },
  {
    id: "ug-perm-ist-renewal",
    title: "NMC 1st Renewal Permission Order (2nd Batch 2020-21)",
    category: "ug-permission",
    subCategory: "renewal",
    referenceNo: "NMC/UG/REN-1/PMRIMS/2020-21",
    issuedBy: "Medical Council of India / NMC Board",
    academicYear: "2020-2021",
    pdfUrl: "/documents/permissions/ug/Ist-Renewal2nd-Batch-2020-21.pdf",
    fileSize: "87 KB",
    description: "1st Renewal Permission for admission of 2nd batch MBBS students."
  },
  {
    id: "ug-perm-lop-1st-batch",
    title: "Initial Letter of Permission (LOP) - 1st Batch (2019-20)",
    category: "ug-permission",
    subCategory: "lop",
    referenceNo: "MCI-34(41)(E-5)/2019-Med./11538",
    issuedBy: "Ministry of Health & Family Welfare / MCI",
    academicYear: "2019-2020",
    pdfUrl: "/documents/permissions/ug/LOP1st-Batch-2019-20.pdf",
    fileSize: "67 KB",
    description: "First Letter of Permission (LOP) granting establishment of PMRIMS MBBS college."
  },
  {
    id: "ug-perm-lop-foundation",
    title: "NMC Foundation LOP Order for PMRIMS",
    category: "ug-permission",
    subCategory: "lop",
    referenceNo: "NMC/UG/FOUNDATION/PMRIMS",
    issuedBy: "National Medical Commission",
    academicYear: "Institutional LOP",
    pdfUrl: "/documents/permissions/ug/LOP-Dr.-Patnam-Mahender-Reddy-Institute-of-Medical-Sciences.pdf",
    fileSize: "142 KB",
    description: "Official Statutory Foundation LOP Document for PMRIMS."
  },
  {
    id: "ug-perm-lop-appeal",
    title: "NMC 1st Appeal Permission Order",
    category: "ug-permission",
    subCategory: "lop",
    referenceNo: "NMC/UG/APPEAL-1/PMRIMS",
    issuedBy: "NMC Appellate Committee",
    academicYear: "Appellate Order",
    pdfUrl: "/documents/permissions/ug/LOP-Ist-appeal-Dr.-Patnam-Mahender-Reddy-Institute-of-Medical-Sciences-2.pdf",
    fileSize: "115 KB",
    description: "NMC 1st Appeal Permission Confirmation Order."
  },

  // =========================================================================
  // 2. PG PERMISSIONS (NMC MD/MS SPECIALTIES) - Master Renewal LOP (AY 2026-27)
  // Location: public/documents/permissions/pg/
  // =========================================================================
  {
    id: "nmc-pg-permissions-renewal-2026-27",
    title: "Renewal of Broad Specialty (MD/ MS) Courses for AY 2026–27",
    category: "pg-permission",
    referenceNo: "No.N-P011(20)/5/2026-PGMEB-NMC",
    issuedBy: "Post-Graduate Medical Education Board (PGMEB), National Medical Commission",
    academicYear: "2026–27",
    seats: "94 Seats (15 Specialties)",
    pdfUrl: "/documents/permissions/pg/NMC-PG-Permissions-Renewal-AY-2026-27.pdf",
    fileSize: "564 KB",
    description: "Official Letter of Renewal of Broad Specialty (MD/MS) Courses Permission for 15 Specialties (94 Seats) for AY 2026-27 issued by PGMEB, National Medical Commission."
  },

  // =========================================================================
  // 3. UG ADMISSION INSTRUCTIONS & BONDS - 3 PDFs
  // Location: public/documents/admissions/ug/
  // =========================================================================
  {
    id: "ug-adm-cat-a-instructions",
    title: "MBBS Category-A Admission Instructions (2026-2027)",
    category: "ug-document",
    referenceNo: "PMRIMS/UG-ADM/CAT-A/2026-27",
    issuedBy: "PMRIMS Admissions Cell & KNRUHS",
    academicYear: "2026-2027",
    pdfUrl: "/documents/admissions/ug/MBBS-A-Cat-Instructions-2026-2027.pdf",
    fileSize: "454 KB",
    description: "Detailed step-by-step reporting guidelines & document submission rules for Category-A allotments."
  },
  {
    id: "ug-adm-bc-fee",
    title: "Category B & C (Management & NRI) Fee Structure (2026-2027)",
    category: "ug-document",
    referenceNo: "PMRIMS/FEE/CAT-BC/2026-27",
    issuedBy: "PMRIMS Executive Management & TAFRC",
    academicYear: "2026-2027",
    pdfUrl: "/documents/admissions/ug/B-C-FEE-2026-2027.pdf",
    fileSize: "233 KB",
    description: "Official fee structure schedule for Management (Cat-B) and NRI (Cat-C) MBBS seats."
  },
  {
    id: "ug-adm-bc-bonds",
    title: "Category B & C Admission Bond Formats (2026-2027)",
    category: "ug-document",
    referenceNo: "PMRIMS/BOND/CAT-BC/2026-27",
    issuedBy: "PMRIMS Legal & Admissions Cell",
    academicYear: "2026-2027",
    pdfUrl: "/documents/admissions/ug/B-C-BONDS-2026-27.pdf",
    fileSize: "530 KB",
    description: "Mandatory bond paper formats and bank guarantee declarations for Cat-B & Cat-C candidates."
  },

  // =========================================================================
  // 4. PG ADMISSION INSTRUCTIONS, FEES & BONDS - 3 PDFs
  // Location: public/documents/admissions/pg/
  // =========================================================================
  {
    id: "pg-adm-clinical-cat-a",
    title: "PG (Clinical) Category-A (Convener Quota) Fee Details, Documents & Bonds",
    category: "pg-document",
    referenceNo: "PMRIMS/PG-ADM/CLINICAL-CAT-A/2026-27",
    issuedBy: "PMRIMS Admissions Cell & KNRUHS",
    academicYear: "2026-2027",
    pdfUrl: "/documents/admissions/pg/PG-Clinical-Cat-A-Convener-Quota-Fee-Documents-Bonds-2026-2027.pdf",
    fileSize: "558 KB",
    description: "Official 9-page schedule for PG Clinical Category-A (CQ) admissions: tuition fees (Rs. 7.75 Lakhs), mandatory certificates checklist, service bond, discontinuation bond, anti-ragging affidavits, and Annexure-VI undertaking."
  },
  {
    id: "pg-adm-clinical-cat-bc",
    title: "PG (Clinical) Category B & C (Management & NRI) Fee Details, Documents & Bonds",
    category: "pg-document",
    referenceNo: "PMRIMS/PG-ADM/CLINICAL-CAT-BC/2026-27",
    issuedBy: "PMRIMS Executive Management & TAFRC",
    academicYear: "2026-2027",
    pdfUrl: "/documents/admissions/pg/PG-Clinical-Cat-BC-Management-NRI-Fee-Documents-Bonds-2026-2027.pdf",
    fileSize: "555 KB",
    description: "Official 11-page schedule for PG Clinical Cat-B (Management) & Cat-C (NRI) admissions: fee schedule, certificate checklist, bank guarantee proforma, seat blocking declaration, service bonds, and Annexure-VI undertaking."
  },
  {
    id: "pg-adm-pre-para-clinical",
    title: "PG (Pre & Para-Clinical) Fee Details, Documents & Bonds (Category A, B & C)",
    category: "pg-document",
    referenceNo: "PMRIMS/PG-ADM/PRE-PARA/2026-27",
    issuedBy: "PMRIMS Admissions Cell & KNRUHS",
    academicYear: "2026-2027",
    pdfUrl: "/documents/admissions/pg/PG-Pre-Para-Clinical-Cat-ABC-Fee-Documents-Bonds-2026-2027.pdf",
    fileSize: "551 KB",
    description: "Official 10-page schedule for Pre-Clinical, Para-Clinical & Broad Specialties: fee matrix across Cat-A, Cat-B & Cat-C, certificate checklist, in-service declaration, admission bonds, and Annexure-VI undertaking."
  },

  // =========================================================================
  // 5. GLOBAL & INTERNATIONAL COLLABORATIONS - 1 PDF
  // Location: public/documents/collaborations/
  // =========================================================================
  {
    id: "mou-uab-usa-2026",
    title: "MOU - University of Alabama at Birmingham (UAB), USA & Dr. PMRIMS",
    category: "collaboration",
    subCategory: "international",
    referenceNo: "UAB Contract # 283648",
    issuedBy: "The Board of Trustees of the University of Alabama (UAB) & Dr. PMRIMS",
    academicYear: "2026-2031 (5-Year Renewable Term)",
    pdfUrl: "/documents/collaborations/UAB-PMRIMS-International-MOU-2026.pdf",
    fileSize: "240 KB",
    description: "Official Memorandum of Understanding establishing formal international affiliation for collaborative medical research, student clinical electives, faculty academic exchange, joint conferences, and technology transfer between UAB, USA and Dr. PMRIMS."
  }
];

// Helper Functions
export function getDocumentsByCategory(category: DocumentEntry["category"]): DocumentEntry[] {
  return SITE_DOCUMENTS.filter((doc) => doc.category === category);
}

export function getDocumentsBySubCategory(
  category: DocumentEntry["category"],
  subCategory: DocumentEntry["subCategory"]
): DocumentEntry[] {
  return SITE_DOCUMENTS.filter((doc) => doc.category === category && doc.subCategory === subCategory);
}

export function getDocumentById(id: string): DocumentEntry | undefined {
  return SITE_DOCUMENTS.find((doc) => doc.id === id);
}
