import Link from "next/link";
import Image from "next/image";
import { Image as ImageIcon, Sparkles, Play } from "lucide-react";

export default function GalleryPage() {
  const galleryImages = [
    { title: "PMRIMS Main Campus & Entrance", src: "/images/campus_hero.jpg", category: "Campus Architecture" },
    { title: "1200+ Bed PMR Hospital ICU & Emergency", src: "/images/hospital_facility.jpg", category: "Clinical Infrastructure" },
    { title: "Chairman Address & Academic Convocation", src: "/images/chairman.jpg", category: "Leadership & Events" },
    { title: "Executive Board Room & Medical Director", src: "/images/vice_chairman.jpg", category: "Administration" },
  ];

  return (
    <div className="py-16 bg-surface-light min-h-screen text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/">Home</Link> / <span className="text-emerald-brand">Gallery</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-emerald-brand tracking-tight">
            Institutional Photo & <span className="gold-gradient-text italic font-normal">Media Gallery</span>
          </h1>
          <p className="text-slate-600 font-technical mt-2 text-sm sm:text-base max-w-3xl">
            High-definition visual showcase of PMRIMS Chevella campus, high-tech diagnostic laboratories, clinical rotations, and academic events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="group relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[16/10]">
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-md bg-gold-brand text-emerald-950 font-bold text-[10px] uppercase">
                  {img.category}
                </span>
                <h3 className="text-xl font-serif font-bold mt-2">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
