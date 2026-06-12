"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, MoveHorizontal } from "lucide-react";

type Category = "posture" | "weight" | "rehab" | "sports";

export default function BeforeAfterSlider() {
  const [activeCategory, setActiveCategory] = useState<Category>("posture");
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: "posture", label: "Posture Correction" },
    { id: "weight", label: "Weight Loss" },
    { id: "rehab", label: "Rehab Recovery" },
    { id: "sports", label: "Sports Rehab" },
  ] as const;

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const onTouchMove = (e: TouchEvent) => handleTouchMove(e);
    const onMouseMove = (e: MouseEvent) => handleMouseMove(e);
    const onMouseUp = () => handleMouseUp();

    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Track container width for responsive slider sizing
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    if ("touches" in e) {
      handleMove(e.touches[0].clientX);
    } else {
      handleMove(e.clientX);
    }
  };

  // Content rendering based on category
  const renderVisual = (stage: "before" | "after") => {
    const isBefore = stage === "before";
    const colorTheme = isBefore ? "stroke-red-500 fill-red-500/10" : "stroke-emerald-500 fill-emerald-500/10";
    const accentText = isBefore ? "text-red-500" : "text-emerald-500";
    
    switch (activeCategory) {
      case "posture":
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900 px-4">
            <svg viewBox="0 0 200 400" className="w-full h-72">
              {/* Reference Grid */}
              <line x1="100" y1="20" x2="100" y2="380" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4,4" className="dark:stroke-slate-800" />
              
              {/* Posture Figure */}
              {isBefore ? (
                // Hunchback
                <g className="animate-pulse">
                  {/* Head */}
                  <circle cx="120" cy="80" r="22" className={`${colorTheme} stroke-[3]`} />
                  {/* Curved spine */}
                  <path d="M 120 102 Q 80 180 110 260 T 115 360" fill="none" className="stroke-red-500 stroke-[5]" />
                  {/* Stress joints */}
                  <circle cx="95" cy="140" r="6" className="fill-red-500 stroke-none" />
                  <circle cx="100" cy="230" r="6" className="fill-red-500 stroke-none" />
                  <text x="148" y="145" className="text-[10px] fill-red-500 font-bold font-mono">Cervical Load +40%</text>
                </g>
              ) : (
                // Straight spine
                <g>
                  {/* Head */}
                  <circle cx="100" cy="70" r="22" className={`${colorTheme} stroke-[3]`} />
                  {/* Perfectly straight spine */}
                  <path d="M 100 92 Q 100 180 100 260 T 100 360" fill="none" className="stroke-emerald-500 stroke-[5]" />
                  {/* Aligned joints */}
                  <circle cx="100" cy="140" r="6" className="fill-emerald-500 stroke-none" />
                  <circle cx="100" cy="230" r="6" className="fill-emerald-500 stroke-none" />
                  <text x="120" y="145" className="text-[10px] fill-emerald-500 font-bold font-mono">Optimal Alignment</text>
                </g>
              )}
            </svg>
            <div className={`absolute top-4 ${isBefore ? "left-4 text-left" : "right-4 text-right"} font-mono text-[10px] sm:text-xs font-bold ${accentText}`}>
              {isBefore ? "DEVIATED COG (CENTER OF GRAVITY)" : "CENTERED POSTURE ALGORITHM"}
            </div>
          </div>
        );

      case "weight":
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900 px-4">
            <svg viewBox="0 0 200 400" className="w-full h-72">
              {isBefore ? (
                // Heavier Silhouette
                <g className="animate-pulse">
                  <path d="M 100 60 C 120 60, 130 90, 100 90 C 70 90, 80 60, 100 60 Z" className={`${colorTheme} stroke-[2]`} />
                  {/* Thorax and belly expanded */}
                  <path d="M 100 95 C 135 110, 145 160, 145 220 C 145 280, 125 320, 100 320 C 75 320, 55 280, 55 220 C 55 160, 65 110, 100 95 Z" className={`${colorTheme} stroke-[3]`} />
                  <line x1="60" y1="220" x2="140" y2="220" stroke="#ef4444" strokeWidth="2" strokeDasharray="3,3" />
                  <text x="100" y="240" textAnchor="middle" className="text-[10px] fill-red-500 font-extrabold font-mono">Fat Mass: 32%</text>
                </g>
              ) : (
                // Lean Silhouette
                <g>
                  <path d="M 100 60 C 115 60, 122 85, 100 85 C 78 85, 85 60, 100 60 Z" className={`${colorTheme} stroke-[2]`} />
                  {/* Athletic fit silhouette */}
                  <path d="M 100 90 C 120 100, 125 150, 120 220 C 115 285, 115 320, 100 320 C 85 320, 85 285, 80 220 C 75 150, 80 100, 100 90 Z" className={`${colorTheme} stroke-[3]`} />
                  <line x1="78" y1="200" x2="122" y2="200" stroke="#10b981" strokeWidth="2" />
                  <text x="100" y="220" textAnchor="middle" className="text-[10px] fill-emerald-500 font-extrabold font-mono">Fat Mass: 14%</text>
                </g>
              )}
            </svg>
            <div className={`absolute top-4 ${isBefore ? "left-4 text-left" : "right-4 text-right"} font-mono text-[10px] sm:text-xs font-bold ${accentText}`}>
              {isBefore ? "BODY COMPOSITION: BULK STATE" : "SHREDDED & ACTIVE COMPOSITION"}
            </div>
          </div>
        );

      case "rehab":
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900 px-4">
            <svg viewBox="0 0 200 400" className="w-full h-72">
              {/* Knee joint skeleton mockup */}
              <rect x="90" y="50" width="20" height="120" rx="5" className="fill-slate-300 dark:fill-slate-700" />
              <rect x="90" y="210" width="20" height="140" rx="5" className="fill-slate-300 dark:fill-slate-700" />
              {isBefore ? (
                <g className="animate-pulse">
                  {/* Inflamed tissue at joint */}
                  <circle cx="100" cy="190" r="30" className="fill-red-500/20 stroke-red-500 stroke-[2] stroke-dasharray-[4,4]" />
                  <path d="M 85 180 L 115 200 M 115 180 L 85 200" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
                  <text x="100" y="150" textAnchor="middle" className="text-[10px] fill-red-500 font-bold font-mono">Patellar Tear & Inflammation</text>
                </g>
              ) : (
                <g>
                  {/* Healthy stable joint alignment */}
                  <circle cx="100" cy="190" r="22" className="fill-emerald-500/10 stroke-emerald-500 stroke-[3]" />
                  <path d="M 85 190 H 115" stroke="#10b981" strokeWidth="4" strokeLinecap="round" />
                  <text x="100" y="150" textAnchor="middle" className="text-[10px] fill-emerald-500 font-bold font-mono">Collagen Rebuilding: 100%</text>
                </g>
              )}
            </svg>
            <div className={`absolute top-4 ${isBefore ? "left-4 text-left" : "right-4 text-right"} font-mono text-[10px] sm:text-xs font-bold ${accentText}`}>
              {isBefore ? "FUNCTIONAL RANGES RESTRICTED" : "FULLY STABILIZED JOINT MATRIX"}
            </div>
          </div>
        );

      case "sports":
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900 px-4">
            <svg viewBox="0 0 200 400" className="w-full h-72">
              {isBefore ? (
                // Restricted ankle flexibility
                <g className="animate-pulse">
                  <path d="M 50 300 L 150 300 M 70 300 L 110 160" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" />
                  {/* Red flex limit arc */}
                  <path d="M 120 300 A 40 40 0 0 0 100 260" fill="none" stroke="#ef4444" strokeWidth="3" />
                  <text x="100" y="140" textAnchor="middle" className="text-[10px] fill-red-500 font-bold font-mono">Dorsiflexion: 12° (Limited)</text>
                </g>
              ) : (
                // Flexible ankle
                <g>
                  <path d="M 50 300 L 150 300 M 70 300 L 135 150" stroke="#10b981" strokeWidth="6" strokeLinecap="round" />
                  {/* Green healthy flex limit arc */}
                  <path d="M 120 300 A 40 40 0 0 0 130 260" fill="none" stroke="#10b981" strokeWidth="3" />
                  <text x="100" y="140" textAnchor="middle" className="text-[10px] fill-emerald-500 font-bold font-mono">Dorsiflexion: 35° (Elite)</text>
                </g>
              )}
            </svg>
            <div className={`absolute top-4 ${isBefore ? "left-4 text-left" : "right-4 text-right"} font-mono text-[10px] sm:text-xs font-bold ${accentText}`}>
              {isBefore ? "LIMITED MOTION & AGILITY SCORE" : "ATHLETIC POWER AND REBOUND FLEX"}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-4 px-2 sm:px-6">
      {/* Category selector */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id);
              setSliderPosition(50); // reset to middle
            }}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-tight border transition-all duration-350 ${
              activeCategory === cat.id
                ? "bg-slate-900 text-white dark:bg-emerald-500 dark:text-slate-950 border-slate-900 dark:border-emerald-400 shadow-lg"
                : "bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-350 border-slate-200 dark:border-slate-800"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Slider Window */}
      <div
        ref={containerRef}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        className="relative aspect-[4/3] md:aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 cursor-ew-resize select-none"
      >
        {/* RIGHT LAYER: After state (Vibrant emerald layout) */}
        <div className="absolute inset-0">
          {renderVisual("after")}
          <span className="absolute bottom-4 right-4 text-[10px] font-extrabold font-mono uppercase bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-3 py-1.5 rounded-lg border border-emerald-500/30 flex items-center gap-1.5">
            <Sparkles className="h-3 w-3" />
            <span>Clinic Algorithm (After)</span>
          </span>
        </div>

        {/* LEFT LAYER: Before state (Overlapped width) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          {/* Inner box must match the full width of parent to avoid squishing */}
          <div
            className="absolute inset-0"
            style={{ width: containerWidth || "100%" }}
          >
            {renderVisual("before")}
            <span className="absolute bottom-4 left-4 text-[10px] font-extrabold font-mono uppercase bg-red-500/20 text-red-500 px-3 py-1.5 rounded-lg border border-red-500/30">
              Chronic Pain / Weak (Before)
            </span>
          </div>
        </div>

        {/* Vertical divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Drag Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-slate-900 text-white dark:bg-emerald-500 dark:text-slate-950 border border-slate-700 dark:border-emerald-400 flex items-center justify-center shadow-2xl">
            <MoveHorizontal className="h-5 w-5 animate-pulse" />
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-slate-400 dark:text-slate-500 font-medium mt-4">
        *Drag or touch the handle to slide and inspect alignment structures.
      </p>
    </div>
  );
}
