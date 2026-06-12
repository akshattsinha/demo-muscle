"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import AIChatbot from "@/components/AIChatbot";
import { X, ChevronLeft, ChevronRight, Maximize2, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: number;
  category: "interior" | "treatment" | "equipment";
  title: string;
  description: string;
  gradient: string;
  heightClass: string; // for masonry layout
}

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 0,
      category: "interior",
      title: "Clinic Reception & Consultation Lounge",
      description: "A premium, relaxing, glassmorphic client reception zone with climate control.",
      gradient: "from-blue-600/20 to-indigo-600/10",
      heightClass: "h-64"
    },
    {
      id: 1,
      category: "treatment",
      title: "Spinal Adjustment & Chiropractic Deck",
      description: "Equipped with specialized drop tables and posture grid lines for clinical diagnostics.",
      gradient: "from-emerald-600/20 to-teal-600/10",
      heightClass: "h-80"
    },
    {
      id: 2,
      category: "equipment",
      title: "Biomechanical Motion Scanner Room",
      description: "Dynamic force plate sensors and multi-angle camera tracking to analyze running gate.",
      gradient: "from-lime-600/20 to-emerald-600/10",
      heightClass: "h-72"
    },
    {
      id: 3,
      category: "treatment",
      title: "Electrotherapy & Recovery Bay",
      description: "Low-level laser units, ultrasound probes, and muscle stimulation gear.",
      gradient: "from-slate-700/20 to-slate-900/10",
      heightClass: "h-64"
    },
    {
      id: 4,
      category: "equipment",
      title: "Targeted Strength & Hypertrophy Grid",
      description: "Rehabilitation racks, isolation pulley systems, and stability balls.",
      gradient: "from-blue-500/15 to-emerald-500/15",
      heightClass: "h-80"
    },
    {
      id: 5,
      category: "interior",
      title: "Consultation Cabin & Health Scopes",
      description: "Private clinic chambers where specialists evaluate skeletal indices.",
      gradient: "from-teal-600/15 to-indigo-600/10",
      heightClass: "h-72"
    }
  ];

  const handleNext = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev! + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev! - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16 max-w-xl mx-auto">
          <span className="text-xs font-mono font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-widest block font-bold">Facility Showcase</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Clinic Gallery
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Inspect our state-of-the-art physiotherapy rehabilitation, chiropractic labs, and metabolic monitoring zones.
          </p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedIdx(idx)}
              className={`break-inside-avoid bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-lg flex flex-col justify-between cursor-pointer hover:border-emerald-500/35 transition-all duration-300 relative group`}
            >
              {/* Image Graphic Block */}
              <div className={`w-full ${item.heightClass} bg-gradient-to-tr ${item.gradient} flex items-center justify-center p-6 relative`}>
                {/* SVG Mockup */}
                <div className="p-4 bg-white/70 dark:bg-slate-950/70 border border-white/40 dark:border-slate-800 rounded-2xl shadow-md z-10 flex flex-col items-center space-y-2">
                  <Activity className="h-8 w-8 text-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase">
                    {item.category}
                  </span>
                </div>
                
                {/* Zoom overlay on hover */}
                <div className="absolute inset-0 bg-slate-950/20 dark:bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white z-20">
                  <span className="p-3 bg-slate-900/80 rounded-full border border-slate-700">
                    <Maximize2 className="h-5 w-5" />
                  </span>
                </div>
              </div>

              {/* Title Cards */}
              <div className="p-5 space-y-1 z-10 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-850">
                <h4 className="font-extrabold text-sm sm:text-base text-slate-950 dark:text-white leading-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </main>

      {/* LIGHTBOX DIALOG PREVIEW */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIdx(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
            />

            {/* Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col text-white"
            >
              {/* Top Controls */}
              <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950/60">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                  Checking Space: {galleryItems[selectedIdx].category}
                </span>
                <button
                  onClick={() => setSelectedIdx(null)}
                  className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Slider Viewport */}
              <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-gradient-to-tr from-slate-900 to-slate-950 flex items-center justify-center relative">
                {/* Visual rendering */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${galleryItems[selectedIdx].gradient} flex items-center justify-center`}>
                  <div className="p-8 bg-slate-950/80 border border-slate-800 rounded-2xl flex flex-col items-center space-y-3 shadow-2xl">
                    <Activity className="h-12 w-12 text-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
                      {galleryItems[selectedIdx].category}
                    </span>
                  </div>
                </div>

                {/* Left control */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 p-2 bg-slate-950/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-white rounded-full transition-all shadow-lg"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                {/* Right control */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 p-2 bg-slate-950/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-white rounded-full transition-all shadow-lg"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Caption Footer */}
              <div className="p-6 bg-slate-950/80 border-t border-slate-850 space-y-1">
                <h3 className="text-lg font-bold text-emerald-400">{galleryItems[selectedIdx].title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-semibold">{galleryItems[selectedIdx].description}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AIChatbot />
      <FloatingActions />
      <Footer />
    </>
  );
}
