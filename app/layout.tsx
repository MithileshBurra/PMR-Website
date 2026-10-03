import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import QuickActionPanel from "@/components/layout/QuickActionPanel";
import Footer from "@/components/layout/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "PMRIMS | Dr. Patnam Mahender Reddy Institute of Medical Sciences",
  description: "Official Portal of Dr. Patnam Mahender Reddy Institute of Medical Sciences (PMRIMS) & Hospital, Chevella. Premier NMC Recognised Medical College & 1200+ Bed Teaching Hospital.",
  keywords: [
    "PMRIMS",
    "Patnam Mahender Reddy Medical College",
    "MBBS Admissions Telangana",
    "Chevella Medical College",
    "Postgraduate Medical Courses",
    "PMR Hospital",
    "NMC Seat Matrix",
    "1200 Bed Hospital Telangana"
  ],
  authors: [{ name: "PMRIMS Academic & Clinical Board" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-surface-light text-charcoal antialiased selection:bg-emerald-brand selection:text-gold-brand relative overflow-x-hidden min-h-screen flex flex-col">
        {/* Sticky Quick Action Widget */}
        <QuickActionPanel />

        {/* Global Navigation Header */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* Institutional Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
