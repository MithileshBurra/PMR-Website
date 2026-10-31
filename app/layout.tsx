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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Dr. Patnam Mahender Reddy Institute of Medical Sciences (PMRIMS)",
    description: "Official Portal of Dr. Patnam Mahender Reddy Institute of Medical Sciences (PMRIMS) & Hospital, Chevella. Premier NMC Recognised Medical College & 1200+ Bed Teaching Hospital.",
    url: "https://pmrims.com",
    siteName: "PMRIMS",
    images: [
      {
        url: "/images/pmrims_logo.png",
        width: 582,
        height: 525,
        alt: "PMRIMS Official College Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
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
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="bg-medical-pattern-overlay text-charcoal antialiased selection:bg-emerald-brand selection:text-gold-brand relative overflow-x-hidden min-h-screen flex flex-col">
        {/* Sticky Quick Action Widget */}
        <QuickActionPanel />

        {/* Global Navigation Header */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1 w-full bg-medical-pattern-overlay">
          {children}
        </main>

        {/* Institutional Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
