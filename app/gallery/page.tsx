"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import { 
  Images, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Maximize2, 
  ArrowLeft,
  Sparkles,
  Layers
} from "lucide-react";
import { GALLERY_IMAGES, GalleryImageItem } from "@/config/gallery-images";

const FILTER_GROUPS = [
  "All Photos",
  "Drone & Aerial",
  "Campus & Architecture",
  "Hospital & Clinical",
  "Radiology & Diagnostics",
  "Academic Labs & Museum",
  "Lecture Halls & Library",
  "Nursing & Allied Health",
  "Hostel & Dining",
  "Sports & Fitness",
  "Transport & Facilities"
];

const INITIAL_BATCH_SIZE = 50;
const BATCH_INCREMENT = 50;

export default function GalleryPage() {
  const [selectedGroup, setSelectedGroup] = useState<string>("All Photos");
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_BATCH_SIZE);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter images based on selected group
  const filteredImages = useMemo(() => {
    if (selectedGroup === "All Photos") {
      return GALLERY_IMAGES;
    }
    return GALLERY_IMAGES.filter((img) => img.group === selectedGroup);
  }, [selectedGroup]);

  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(INITIAL_BATCH_SIZE);
    setLightboxIndex(null);
  }, [selectedGroup]);

  // Current visible slice
  const displayedImages = useMemo(() => {
    return filteredImages.slice(0, visibleCount);
  }, [filteredImages, visibleCount]);

  const hasMore = visibleCount < filteredImages.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + BATCH_INCREMENT);
  };

  const handleShowAll = () => {
    setVisibleCount(filteredImages.length);
  };

  // Lightbox keyboard navigation
  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredImages.length - 1));
  }, [lightboxIndex, filteredImages.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! < filteredImages.length - 1 ? prev! + 1 : 0));
  }, [lightboxIndex, filteredImages.length]);

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handleClose, handlePrev, handleNext]);

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightboxIndex]);

  return (
    <div className="py-16 bg-transparent min-h-screen text-slate-800 font-technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Breadcrumb & Main Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link> / <span className="text-blue-600">Gallery</span>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Images className="w-3.5 h-3.5 text-blue-600" />
              Institutional Photo Gallery
            </span>
            <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider font-mono">
              {GALLERY_IMAGES.length} Photographs
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            PMRIMS <span className="text-blue-600 italic font-normal">Campus Gallery</span>
          </h1>
          <p className="text-slate-600 font-technical mt-3 text-sm sm:text-base max-w-4xl leading-relaxed">
            Explore high-resolution visual glimpses of our 35+ acre campus, teaching hospital, modular operation theatres, modern laboratories, smart lecture halls, and student life at Dr. Patnam Mahender Reddy Institute of Medical Sciences.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-institutional mb-10">
          <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-500">
            <Layers className="w-4 h-4 text-blue-600" />
            <span>Filter By Category</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTER_GROUPS.map((group) => {
              const count = group === "All Photos" 
                ? GALLERY_IMAGES.length 
                : GALLERY_IMAGES.filter((img) => img.group === group).length;

              const isSelected = selectedGroup === group;

              return (
                <button
                  key={group}
                  onClick={() => setSelectedGroup(group)}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-[1.02]"
                      : "bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/70"
                  }`}
                >
                  <span>{group}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-slate-200/80 text-slate-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Photos Grid - Pure Picture Tiles, No Titles/Labels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {displayedImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setLightboxIndex(idx)}
              className="group rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer bg-slate-100 aspect-[16/10] relative"
            >
              <img
                src={img.src}
                alt="PMRIMS College Photograph"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Subtle hover overlay with expand icon */}
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="p-3 rounded-full bg-white/90 text-slate-900 backdrop-blur-md shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Controls */}
        {hasMore && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16 pt-4">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Load More Photos ({filteredImages.length - visibleCount} Remaining)
            </button>
            <button
              onClick={handleShowAll}
              className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-bold uppercase tracking-wider transition-all"
            >
              Show All ({filteredImages.length})
            </button>
          </div>
        )}

        {/* Back Link */}
        <div className="pt-6 border-t border-slate-200/70">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>

      {/* Full-Screen Interactive Lightbox Modal */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
          onClick={handleClose}
        >
          {/* Top Bar with Counter and Close Button */}
          <div 
            className="flex items-center justify-between text-white z-10 py-2 px-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xs sm:text-sm font-mono text-slate-300 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
              {lightboxIndex + 1} / {filteredImages.length}
            </div>

            <button
              onClick={handleClose}
              aria-label="Close Lightbox"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Centered Image with Navigation Controls */}
          <div 
            className="relative flex-1 flex items-center justify-center max-w-7xl mx-auto w-full my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous Photo"
              className="absolute left-2 sm:left-4 z-20 p-3 sm:p-4 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-105"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Photo */}
            <div className="max-h-[82vh] max-w-[92vw] overflow-hidden rounded-2xl shadow-2xl flex items-center justify-center">
              <img
                src={filteredImages[lightboxIndex].src}
                alt="PMRIMS Fullscreen Photo"
                className="max-h-[82vh] max-w-[92vw] object-contain select-none"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Next Photo"
              className="absolute right-2 sm:right-4 z-20 p-3 sm:p-4 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-105"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>

          {/* Bottom Hint */}
          <div className="text-center text-[11px] text-slate-400 py-2">
            Use Left / Right arrow keys to navigate, Esc to close
          </div>
        </div>
      )}
    </div>
  );
}
