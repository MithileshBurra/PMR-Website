"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const studentLifeSlides = [
  {
    id: 1,
    image: "/images/students_life_slider_1.jpg",
    title: "Interactive Clinical Seminars & Group Learning",
    category: "Academic Excellence",
    caption: "PMRIMS MBBS students participating in interactive clinical discussions and faculty-mentored group seminars."
  },
  {
    id: 2,
    image: "/images/students_life_slider_2.jpg",
    title: "Advanced Medical Laboratories & Research Work",
    category: "Laboratory Training",
    caption: "Hands-on diagnostic training and practical experimentation in state-of-the-art PMRIMS pre & para-clinical laboratories."
  },
  {
    id: 3,
    image: "/images/students_life_slider_3.jpg",
    title: "Bedside Clinical OPD & Patient Care Training",
    category: "Clinical Residency",
    caption: "Direct clinical immersion and patient interaction under experienced medical professors at PMR General Hospital."
  },
  {
    id: 4,
    image: "/images/students_life_slider_4.jpg",
    title: "Vibrant Campus Life & Medical Student Community",
    category: "Campus Life",
    caption: "Fostering lifelong friendships, professional ethics, and holistic development across our 35+ acre green campus."
  }
];

export default function StudentLifeHeroSlider() {
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
    <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-950 group my-8">
      {/* Slider Frame with Full Original High-Resolution Image Rendering */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[420px] sm:min-h-[540px]">
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
              alt={`PMRIMS Student Life Slide ${currentSlide.id}`}
              fill
              quality={100}
              unoptimized={true}
              className="object-cover object-center"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-950/60 hover:bg-slate-950/90 text-white flex items-center justify-center backdrop-blur-md border border-white/25 transition-all opacity-0 group-hover:opacity-100 z-20 shadow-xl hover:scale-105"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-950/60 hover:bg-slate-950/90 text-white flex items-center justify-center backdrop-blur-md border border-white/25 transition-all opacity-0 group-hover:opacity-100 z-20 shadow-xl hover:scale-105"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Bottom Pagination Bar - Sri Ramachandra Style Active Red Dot */}
        <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5 bg-slate-950/75 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
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

          <div className="text-white/80 text-xs font-technical font-semibold bg-slate-950/70 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/15">
            {currentIndex + 1} / {studentLifeSlides.length}
          </div>
        </div>
      </div>
    </div>
  );
}
