"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import AIChatbot from "@/components/AIChatbot";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  imageUrl: string;
}

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 0,
      category: "treatment",
      title: "Spinal Adjustment & Chiropractic Deck",
      imageUrl: "/gallery/treatment_beds.png"
    },
    {
      id: 1,
      category: "interior",
      title: "Clinic Reception & Consultation Lounge",
      imageUrl: "/gallery/clinic_reception.jpg"
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
      <title>Clinic Gallery & Facility Tour | Muscle Algorithm Clinic Jaipur</title>
      <meta name="description" content="Explore our state-of-the-art physiotherapy rehabilitation setup, chiropractic spine adjust tables, and biomechanical scanner facility in Mansarovar, Jaipur." />
      <link rel="canonical" href="https://musclealgorithm.in/gallery" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="Clinic Gallery & Facility Tour | Muscle Algorithm Clinic Jaipur" />
      <meta property="og:description" content="Explore our state-of-the-art physiotherapy rehabilitation setup, chiropractic spine adjust tables, and biomechanical scanner facility in Mansarovar, Jaipur." />
      <meta property="og:url" content="https://musclealgorithm.in/gallery" />
      <meta property="og:image" content="https://musclealgorithm.in/logo.png" />
      <meta property="og:type" content="website" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Clinic Gallery & Facility Tour | Muscle Algorithm Clinic Jaipur" />
      <meta name="twitter:description" content="Explore our state-of-the-art physiotherapy rehabilitation setup, chiropractic spine adjust tables, and biomechanical scanner facility in Mansarovar, Jaipur." />
      <meta name="twitter:image" content="https://musclealgorithm.in/logo.png" />

      {/* Structured Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://musclealgorithm.in"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Gallery",
                "item": "https://musclealgorithm.in/gallery"
              }
            ]
          })
        }}
      />
      <Navbar />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16 max-w-xl mx-auto">
          <span className="text-xs font-mono font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-widest block">Facility Showcase</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Clinic Gallery
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold">
            Inspect our state-of-the-art physiotherapy rehabilitation, chiropractic labs, and metabolic monitoring zones.
          </p>
        </div>
 
        {/* Responsive Grid Layout */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedIdx(idx)}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-lg flex flex-col justify-between cursor-pointer hover:border-emerald-500/35 transition-all duration-300 relative group"
            >
              {/* Image Graphic Block */}
              <div 
                role="img"
                aria-label={item.title}
                className="w-full aspect-[3/4.5] relative overflow-hidden bg-slate-100 dark:bg-slate-950 flex items-center justify-center"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Zoom overlay on hover */}
                <div className="absolute inset-0 bg-slate-950/20 dark:bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white z-20">
                  <span className="p-3 bg-slate-900/80 rounded-full border border-slate-700">
                    <Maximize2 className="h-5 w-5" />
                  </span>
                </div>
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
              className="relative max-w-lg w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col text-white"
            >
              {/* Top Controls */}
              <div className="p-4 flex justify-end items-center absolute top-0 right-0 left-0 z-30">
                <button
                  onClick={() => setSelectedIdx(null)}
                  className="p-1.5 bg-slate-950/80 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Slider Viewport */}
              <div className="aspect-[3/4.5] w-full bg-gradient-to-tr from-slate-900 to-slate-950 flex items-center justify-center relative">
                {/* Visual rendering */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={galleryItems[selectedIdx].imageUrl}
                    alt={galleryItems[selectedIdx].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Left control */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 p-2 bg-slate-950/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-white rounded-full transition-all shadow-lg z-30"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                {/* Right control */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 p-2 bg-slate-950/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-white rounded-full transition-all shadow-lg z-30"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
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
