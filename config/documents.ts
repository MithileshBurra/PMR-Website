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
  category: "ug-permission" | "pg-permission" | "ug-document" | "pg-document" | "gazette";
  subCategory?: "clinical" | "pre-para" | "renewal" | "recognition" | "lop";
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
  // 1. UG PERMISSIONS (NMC & GOVT ORDERS) - 9 PDFs
  // Location: public/documents/permissions/ug/
  // =========================================================================
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
  {
    id: "ug-perm-lop-supplementary",
    title: "NMC Supplementary LOP Document",
    category: "ug-permission",
    subCategory: "lop",
    referenceNo: "NMC/UG/LOP-SUPP/PMRIMS",
    issuedBy: "UGMEB, National Medical Commission",
    academicYear: "Supplementary Order",
    pdfUrl: "/documents/permissions/ug/Dr.-Patnam-Mahender-Reddy-Institute-LoP-2.pdf",
    fileSize: "642 KB",
    description: "Supplementary Statutory LOP Order Document."
  },

  // =========================================================================
  // 2. PG PERMISSIONS (NMC MD/MS SPECIALTIES) - 15 PDFs
  // Location: public/documents/permissions/pg/
  // =========================================================================
  {
    id: "pg-perm-gen-med",
    title: "NMC LOP for MD General Medicine",
    category: "pg-permission",
    subCategory: "clinical",
    referenceNo: "NMC/PG/MED/PMRIMS/9SEATS",
    issuedBy: "PGMEB, National Medical Commission",
    academicYear: "PG Session",
    seats: "9 Seats",
    pdfUrl: "/documents/permissions/pg/GENERAL-MEDICINE-LOP9SEATS.pdf",
    fileSize: "590 KB",
    description: "Letter of Permission for 9 seats in MD General Medicine."
  },
  {
    id: "pg-perm-gen-surg",
    title: "NMC LOP for MS General Surgery",
    category: "pg-permission",
    subCategory: "clinical",
    referenceNo: "NMC/PG/SURG/PMRIMS/6SEATS",
    issuedBy: "PGMEB, National Medical Commission",
    academicYear: "PG Session",
    seats: "6 Seats",
    pdfUrl: "/documents/permissions/pg/GENERAL-SURGERY-LOP6SEATS.pdf",
    fileSize: "610 KB",
    description: "Letter of Permission for 6 seats in MS General Surgery."
  },
  {
    id: "pg-perm-anaesthesia",
    title: "NMC LOP for MD Anaesthesiology",
    category: "pg-permission",
    subCategory: "clinical",
    referenceNo: "NMC/PG/ANAESTH/PMRIMS/9SEATS",
    issuedBy: "PGMEB, National Medical Commission",
    academicYear: "PG Session",
    seats: "9 Seats",
    pdfUrl: "/documents/permissions/pg/ANAESTHESIA-LOP9SEATS.pdf",
    fileSize: "611 KB",
    description: "Letter of Permission for 9 seats in MD Anaesthesiology."
  },
  {
    id: "pg-perm-paediatrics",
    title: "NMC LOP for MD Paediatrics",
    category: "pg-permission",
    subCategory: "clinical",
    referenceNo: "NMC/PG/PAED/PMRIMS/5SEATS",
    issuedBy: "PGMEB, National Medical Commission",
    academicYear: "PG Session",
    seats: "5 Seats",
    pdfUrl: "/documents/permissions/pg/PAEDIATRICS-LOP5SEATS.pdf",
    fileSize: "582 KB",
    description: "Letter of Permission for 5 seats in MD Paediatrics."
  },
  {
    id: "pg-perm-orthopaedics",
    title: "NMC LOP for MS Orthopaedics",
    category: "pg-permission",
    subCategory: "clinical",
    referenceNo: "NMC/PG/ORTHO/PMRIMS/5SEATS",
    issuedBy: "PGMEB, National Medical Commission",
    academicYear: "PG Session",
    seats: "5 Seats",
    pdfUrl: "/documents/permissions/pg/ORTHOPAEDICS-LOP5SEATS.pdf",
    fileSize: "586 KB",
    description: "Letter of Permission for 5 seats in MS Orthopaedics."
  },
  {
    id: "pg-perm-obgy",
    title: "NMC LOP for MS Obstetrics & Gynaecology",
    category: "pg-permission",
    subCategory: "clinical",
    referenceNo: "NMC/PG/OBGY/PMRIMS/4SEATS",
    issuedBy: "PGMEB, National Medical Commission",
    academicYear: "PG Session",
    seats: "4 Seats",
    pdfUrl: "/documents/permissions/pg/OBGY-LOP4SEATS.pdf",
    fileSize: "588 KB",
    description: "Letter of Permission for 4 seats in MS Obstetrics & Gynaecology."
  },
  {
    id: "pg-perm-radio",
    title: "NMC LOP for MD Radio-Diagnosis",
    category: "pg-permission",
    subCategory: "clinical",
    referenceNo: "NMC/PG/RADIO/PMRIMS/3SEATS",
    issuedBy: "PGMEB, National Medical Commission",
    academicYear: "PG Session",
    seats: "3 Seats",
    pdfUrl: "/documents/permissions/pg/Radio-Diagnosis(03 Seats).pdf",
    fileSize: "1.6 MB",
    description: "Letter of Permission for 3 seats in MD Radio-Diagnosis."
  },
  {
    id: "pg-perm-dvl",
    title: "NMC LOP for MD Dermatology, Venereology & Leprosy (DVL)",
    category: "pg-permission",
    subCategory: "clinical",
    referenceNo: "NMC/PG/DVL/PMRIMS/3SEATS",
    issuedBy: "PGMEB, National Medical Commission",
    academicYear: "PG Session",
    seats: "3 Seats",
    pdfUrl: "/documents/permissions/pg/DVL-LOP3SEATS.pdf",
    fileSize: "595 KB",
    description: "Letter of Permission for 3 seats in MD DVL."
  },
  {
    id: "pg-perm-psychiatry",
    title: "NMC LOP for MD Psychiatry",
    category: "pg-permission",
    subCategory: "clinical",
    referenceNo: "NMC/PG/PSYCH/PMRIMS/3SEATS",
    issuedBy: "PGMEB, National Medical Commission",
    academicYear: "PG Session",
    seats: "3 Seats",
    pdfUrl: "/documents/permissions/pg/Psychiatry(03 Seats).pdf",
    fileSize: "1.6 MB",
    description: "Letter of Permission for 3 seats in MD Psychiatry."
  },
  {
    id: "pg-perm-resp-med",
    title: "NMC LOP for MD Respiratory Medicine",
    category: "pg-permission",
    subCategory: "clinical",
    referenceNo: "NMC/PG/RESP/PMRIMS/3SEATS",
    issuedBy: "PGMEB, National Medical Commission",
    academicYear: "PG Session",
    seats: "3 Seats",
    pdfUrl: "/documents/permissions/pg/RESPIRATORY-MEDICINE-LOP3SEATS.pdf",
    fileSize: "587 KB",
    description: "Letter of Permission for 3 seats in MD Respiratory Medicine."
  },
  {
    id: "pg-perm-ophthal",
    title: "NMC LOP for MS Ophthalmology",
    category: "pg-permission",
    subCategory: "clinical",
    referenceNo: "NMC/PG/OPHTHAL/PMRIMS/3SEATS",
    issuedBy: "PGMEB, National Medical Commission",
    academicYear: "PG Session",
    seats: "3 Seats",
    pdfUrl: "/documents/permissions/pg/Ophthalmology(03 Seats).pdf",
    fileSize: "1.6 MB",
    description: "Letter of Permission for 3 seats in MS Ophthalmology."
  },
  {
    id: "pg-perm-ent",
    title: "NMC LOP for MS Otorhinolaryngology (ENT)",
    category: "pg-permission",
    subCategory: "clinical",
    referenceNo: "NMC/PG/ENT/PMRIMS/3SEATS",
    issuedBy: "PGMEB, National Medical Commission",
    academicYear: "PG Session",
    seats: "3 Seats",
    pdfUrl: "/documents/permissions/pg/ENT-LOP3-SEATS.pdf",
    fileSize: "564 KB",
    description: "Letter of Permission for 3 seats in MS ENT."
  },
  {
    id: "pg-perm-pathology",
    title: "NMC LOP for MD Pathology",
    category: "pg-permission",
    subCategory: "pre-para",
    referenceNo: "NMC/PG/PATH/PMRIMS/4SEATS",
    issuedBy: "PGMEB, National Medical Commission",
    academicYear: "PG Session",
    seats: "4 Seats",
    pdfUrl: "/documents/permissions/pg/PATHOLOGY-LOP4-SEATS.pdf",
    fileSize: "620 KB",
    description: "Letter of Permission for 4 seats in MD Pathology."
  },
  {
    id: "pg-perm-microbiology",
    title: "NMC LOP for MD Microbiology",
    category: "pg-permission",
    subCategory: "pre-para",
    referenceNo: "NMC/PG/MICRO/PMRIMS/4SEATS",
    issuedBy: "PGMEB, National Medical Commission",
    academicYear: "PG Session",
    seats: "4 Seats",
    pdfUrl: "/documents/permissions/pg/MICROBIOLOGY-LOP4SEATS.pdf",
    fileSize: "114 KB",
    description: "Letter of Permission for 4 seats in MD Microbiology."
  },
  {
    id: "pg-perm-biochem",
    title: "NMC LOP for MD Biochemistry",
    category: "pg-permission",
    subCategory: "pre-para",
    referenceNo: "NMC/PG/BIOCHEM/PMRIMS/2SEATS",
    issuedBy: "PGMEB, National Medical Commission",
    academicYear: "PG Session",
    seats: "2 Seats",
    pdfUrl: "/documents/permissions/pg/BIOCHEMISTRY-LOP2-SEATS.pdf",
    fileSize: "116 KB",
    description: "Letter of Permission for 2 seats in MD Biochemistry."
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
