"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const studentLifeSlides = [
  {
    id: 1,
    image: "/images/slider_student_life_1.jpg",
    title: "Central Library & Digital Academic Learning",
    category: "Academic Life",
    caption: "PMRIMS medical students accessing clinical journals, digital tablets, and reference literature."
  },
  {
    id: 2,
    image: "/images/slider_student_life_2.jpg",
    title: "Hands-on Hospital Clinical Residency & Patient Care",
    category: "Clinical Residency",
    caption: "Real-world bedside clinical training under senior attending faculty at PMR Teaching Hospital."
  },
  {
    id: 3,
    image: "/images/slider_student_life_3.jpg",
    title: "Vibrant Student Culture & Campus Life",
    category: "Campus Life",
    caption: "MBBS students walking across the lush 35+ acre Chevella PMRIMS campus."
  }
];

export default function StudentLifeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % studentLifeSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + studentLifeSlides.length) % studentLifeSlides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % studentLifeSlides.length);
  };

  const currentSlide = studentLifeSlides[currentIndex];

  return (
    <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-950 group">
      {/* Slider Frame with Full High Resolution Image Rendering */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[400px] sm:min-h-[520px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.01 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={currentSlide.image}
              alt={currentSlide.title}
              fill
              quality={100}
              unoptimized={true}
              className="object-cover object-center"
              priority
            />
            {/* Subtle Gradient Overlay for Text Readability without sacrificing image clarity */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Top-Left Caption Overlay */}
        <div className="absolute top-6 left-6 right-6 sm:top-10 sm:left-10 z-10 max-w-xl">
          <span className="px-3.5 py-1 rounded-md bg-blue-600 text-white font-extrabold text-[11px] uppercase tracking-wider shadow-md">
            {currentSlide.category}
          </span>
          <h3 className="text-xl sm:text-3xl font-serif font-bold text-white mt-3 drop-shadow-md leading-snug">
            {currentSlide.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 mt-1 font-technical max-w-md hidden sm:block drop-shadow">
            {currentSlide.caption}
          </p>
        </div>

        {/* Left / Right Navigation Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-950/60 hover:bg-slate-950/90 text-white flex items-center justify-center backdrop-blur-md border border-white/25 transition-all opacity-0 group-hover:opacity-100 z-20 shadow-xl hover:scale-105"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-950/60 hover:bg-slate-950/90 text-white flex items-center justify-center backdrop-blur-md border border-white/25 transition-all opacity-0 group-hover:opacity-100 z-20 shadow-xl hover:scale-105"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Sri Ramachandra Bottom Bar: Dots on Bottom-Left, View More on Bottom-Right */}
        <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between">
          {/* Pagination Dots (Sri Ramachandra Style - Active Red Dot) */}
          <div className="flex items-center gap-2.5 bg-slate-950/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            {studentLifeSlides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? "w-4 h-4 bg-red-600 shadow-md shadow-red-600/70 scale-110"
                    : "w-3 h-3 bg-white/40 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* View More Button (Sri Ramachandra Style) */}
          <Link
            href="/students-life"
            className="px-6 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs uppercase tracking-wider shadow-xl hover:scale-105 transition-all border border-white/50 flex items-center gap-2"
          >
            View More
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </Link>
        </div>
      </div>
    </div>
  );
}
