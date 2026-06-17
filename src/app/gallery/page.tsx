"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import AIChatbot from "@/components/AIChatbot";
import { X, ChevronLeft, ChevronRight, Maximize2, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  type: "image" | "video";
  src: string;
}

interface GalleryCardProps {
  item: GalleryItem;
  onClick: () => void;
}

function GalleryCard({ item, onClick }: GalleryCardProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (item.type === "video" && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (item.type === "video" && videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-lg flex flex-col justify-between cursor-pointer hover:border-emerald-500/35 transition-all duration-300 relative group animate-fade-in"
    >
      {/* Media Graphic Block */}
      <div 
        className="w-full aspect-[3/4.5] relative overflow-hidden bg-slate-100 dark:bg-slate-950 flex items-center justify-center"
      >
        {item.type === "video" ? (
          <video
            ref={videoRef}
            src={item.src}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
        
        {/* Zoom/Play overlay on hover */}
        <div className="absolute inset-0 bg-slate-950/20 dark:bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white z-20">
          <span className="p-3 bg-slate-900/80 rounded-full border border-slate-700 transition-all duration-300 transform group-hover:scale-110">
            {item.type === "video" ? (
              <Play className="h-5 w-5 fill-current text-white ml-0.5" />
            ) : (
              <Maximize2 className="h-5 w-5" />
            )}
          </span>
        </div>

        {/* Video badge */}
        {item.type === "video" && (
          <span className="absolute top-4 right-4 bg-emerald-500/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full z-10 shadow-md flex items-center gap-1">
            <svg className="h-3 w-3 fill-current animate-pulse" viewBox="0 0 24 24">
              <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
            </svg>
            VIDEO
          </span>
        )}
      </div>

      {/* Caption block */}
      <div className="p-5 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex-grow flex flex-col justify-center">
        <span className="text-[10px] font-mono font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-widest block mb-1">
          {item.category}
        </span>
        <h3 className="text-sm font-extrabold text-slate-800 dark:text-slate-100 line-clamp-1 leading-snug">
          {item.title}
        </h3>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 0,
      category: "treatment",
      title: "Clinic Reception & Consultation Lounge",
      type: "image",
      src: "/gallery/treatment_beds.png"
    },
    {
      id: 1,
      category: "interior",
      title: "Spinal Adjustment & Chiropractic Deck",
      type: "image",
      src: "/gallery/clinic_reception.jpg"
    },
    {
      id: 2,
      category: "rehabilitation",
      title: "Active Rehabilitation & Mobility Training",
      type: "video",
      src: "/gallery/uncle_cycle.mp4"
    },
    {
      id: 3,
      category: "pediatrics",
      title: "Newborn Health Assessment & Pediatric Care",
      type: "image",
      src: "/gallery/neonatal_care.png"
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {galleryItems.map((item, idx) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={() => setSelectedIdx(idx)}
            />
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
              {/* Top Controls & Title Overlay */}
              <div className="p-5 flex justify-between items-center absolute top-0 right-0 left-0 z-30 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent">
                <div className="text-left pr-4">
                  <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-0.5">
                    {galleryItems[selectedIdx].category}
                  </span>
                  <h3 className="text-sm font-extrabold text-white leading-tight">
                    {galleryItems[selectedIdx].title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedIdx(null)}
                  className="p-1.5 bg-slate-950/85 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors self-start shadow-md"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Slider Viewport */}
              <div className="min-h-[50vh] max-h-[80vh] w-full bg-gradient-to-tr from-slate-950 to-black flex items-center justify-center relative p-6 pt-24 pb-8">
                {/* Visual rendering */}
                <div className="w-full h-full flex items-center justify-center">
                  {galleryItems[selectedIdx].type === "video" ? (
                    <video
                      src={galleryItems[selectedIdx].src}
                      controls
                      autoPlay
                      playsInline
                      className="max-w-full max-h-[65vh] object-contain rounded-2xl shadow-2xl"
                    />
                  ) : (
                    <img
                      src={galleryItems[selectedIdx].src}
                      alt={galleryItems[selectedIdx].title}
                      className="max-w-full max-h-[65vh] object-contain rounded-2xl shadow-2xl"
                    />
                  )}
                </div>

                {/* Left control */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 p-2.5 bg-slate-950/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-white rounded-full transition-all shadow-lg z-30 transform hover:scale-105 active:scale-95"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Right control */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 p-2.5 bg-slate-950/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-white rounded-full transition-all shadow-lg z-30 transform hover:scale-105 active:scale-95"
                >
                  <ChevronRight className="h-5 w-5" />
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
