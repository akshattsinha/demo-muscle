"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Activity, ShieldAlert, Sparkles } from "lucide-react";

export default function PostureTransformation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Track scroll position of the 300vh scroll container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform scroll progress to opacity and translate positions for text states
  const textStage1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]);
  const textStage1Y = useTransform(scrollYProgress, [0, 0.25, 0.35], [0, 0, -50]);

  const textStage2Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
  const textStage2Y = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [50, 0, 0, -50]);

  const textStage3Opacity = useTransform(scrollYProgress, [0.65, 0.75, 1], [0, 1, 1]);
  const textStage3Y = useTransform(scrollYProgress, [0.65, 0.75, 1], [50, 0, 0]);

  // Stage cross-fades
  const stage1Opacity = useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 1, 0]);
  const stage2Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
  const stage3Opacity = useTransform(scrollYProgress, [0.65, 0.75, 1], [0, 1, 1]);

  // Visibility states to prevent overlapping content during other stages
  const stage1Visibility = useTransform(scrollYProgress, (value) => 
    value < 0.35 ? "visible" : "hidden"
  );
  const stage2Visibility = useTransform(scrollYProgress, (value) => 
    (value >= 0.30 && value < 0.70) ? "visible" : "hidden"
  );
  const stage3Visibility = useTransform(scrollYProgress, (value) => 
    value >= 0.65 ? "visible" : "hidden"
  );

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full">
      {/* Sticky viewport content - Light theme */}
      <div className="sticky top-20 h-[calc(100vh-80px)] w-full flex flex-col justify-center overflow-hidden bg-slate-50 text-slate-900 border-t border-b border-slate-200">
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full glow-blur-1 filter blur-[80px] pointer-events-none opacity-25" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full glow-blur-2 filter blur-[80px] pointer-events-none opacity-25" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Visual Wireframes */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative h-[300px] md:h-[450px]">
              
              {/* STAGE 1: Pain & Poor Posture (Red theme) */}
              <motion.div
                style={{ 
                  opacity: stage1Opacity,
                  visibility: mounted ? (stage1Visibility as any) : "visible"
                }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <svg viewBox="0 0 200 400" className="h-full w-auto max-h-[380px]">
                  {/* Grid Lines */}
                  <line x1="100" y1="20" x2="100" y2="380" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="5,5" />
                  {/* Head */}
                  <circle cx="125" cy="80" r="22" className="stroke-red-500 fill-red-500/10 stroke-[2] animate-pulse" />
                  {/* Hunched Spine */}
                  <path d="M 125 102 Q 85 180 115 260 T 115 365" fill="none" className="stroke-red-500 stroke-[5]" />
                  {/* Pain Radar Indicator */}
                  <circle cx="98" cy="145" r="10" style={{ transformOrigin: "98px 145px" }} className="stroke-red-500 stroke-[1.5] fill-none animate-ping" />
                  <circle cx="98" cy="145" r="4" className="fill-red-500" />
                  <circle cx="106" cy="225" r="10" style={{ transformOrigin: "106px 225px" }} className="stroke-red-500 stroke-[1.5] fill-none animate-ping" />
                  <circle cx="106" cy="225" r="4" className="fill-red-500" />
                  
                  {/* Diagnostic labels */}
                  <text x="145" y="145" className="text-[10px] font-mono font-bold fill-red-600">Thoracic Load +40%</text>
                  <text x="145" y="225" className="text-[10px] font-mono font-bold fill-red-600">Lumbar Compression</text>
                </svg>
              </motion.div>

              {/* STAGE 2: Clinical Care (Blue theme) */}
              <motion.div
                style={{ 
                  opacity: stage2Opacity,
                  visibility: mounted ? (stage2Visibility as any) : "hidden"
                }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <svg viewBox="0 0 200 400" className="h-full w-auto max-h-[380px]">
                  {/* Grid Lines */}
                  <line x1="100" y1="20" x2="100" y2="380" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="5,5" />
                  {/* Alignment reference markers */}
                  <line x1="60" y1="140" x2="140" y2="140" stroke="#2563eb" strokeWidth="1" strokeDasharray="2,2" />
                  <line x1="60" y1="230" x2="140" y2="230" stroke="#2563eb" strokeWidth="1" strokeDasharray="2,2" />
                  
                  {/* Head */}
                  <circle cx="108" cy="74" r="22" className="stroke-blue-500 fill-blue-500/10 stroke-[2.5]" />
                  {/* Re-aligning Spine */}
                  <path d="M 108 96 Q 96 180 102 260 T 100 365" fill="none" className="stroke-blue-500 stroke-[5]" />
                  
                  {/* Force vectors */}
                  <path d="M 85 140 H 125 M 105 130 L 105 150" stroke="#2563eb" strokeWidth="2" />
                  <path d="M 85 230 H 125 M 105 220 L 105 240" stroke="#2563eb" strokeWidth="2" />
                  
                  <text x="135" y="90" className="text-[10px] font-mono font-bold fill-blue-600">Re-aligning COG</text>
                </svg>
              </motion.div>

              {/* STAGE 3: Performance Peak (Green theme) */}
              <motion.div
                style={{ 
                  opacity: stage3Opacity,
                  visibility: mounted ? (stage3Visibility as any) : "hidden"
                }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <svg viewBox="0 0 200 400" className="h-full w-auto max-h-[380px]">
                  {/* Grid Lines */}
                  <line x1="100" y1="20" x2="100" y2="380" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="5,5" />
                  
                  {/* Head */}
                  <circle cx="100" cy="70" r="22" className="stroke-emerald-500 fill-emerald-500/10 stroke-[3]" />
                  {/* Perfectly Aligned Straight Spine */}
                  <path d="M 100 92 L 100 365" fill="none" className="stroke-emerald-500 stroke-[5]" />
                  
                  {/* Energy Waves / Power lines */}
                  <circle cx="100" cy="180" r="30" style={{ transformOrigin: "100px 180px" }} className="stroke-emerald-500/30 stroke-[1.5] fill-none animate-ping" />
                  <circle cx="100" cy="280" r="45" style={{ transformOrigin: "100px 280px" }} className="stroke-emerald-500/20 stroke-[1.5] fill-none animate-ping" />

                  <circle cx="100" cy="140" r="4" className="fill-emerald-500" />
                  <circle cx="100" cy="230" r="4" className="fill-emerald-500" />

                  <text x="125" y="70" className="text-[10px] font-mono font-bold fill-emerald-600">Zero Shear</text>
                  <text x="125" y="180" className="text-[10px] font-mono font-bold fill-emerald-600">Peak Power</text>
                </svg>
              </motion.div>

            </div>

            {/* Right Column: Explanatory Content */}
            <div className="lg:col-span-6 h-[250px] relative flex items-center">
              
              {/* CONTENT 1 */}
              <motion.div
                style={{ 
                  opacity: textStage1Opacity, 
                  y: textStage1Y,
                  visibility: mounted ? (stage1Visibility as any) : "visible"
                }}
                className="absolute inset-x-0 space-y-4"
              >
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-red-500/10 text-red-600 border border-red-500/20 text-xs font-mono font-bold uppercase rounded-lg">
                  <ShieldAlert className="h-4.5 w-4.5" />
                  <span>Stage 1: Chronic Deficit</span>
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                  Deconditioned State
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg font-medium">
                  Prolonged posture slumping shifts your head center of gravity forward, placing excessive shear force on the cervical and thoracic vertebrae. This creates micro-tears, joint stiffness, and chronic muscle pain.
                </p>
                <div className="text-xs font-semibold text-slate-400">
                  *Keep scrolling down to initiate recovery...
                </div>
              </motion.div>

              {/* CONTENT 2 */}
              <motion.div
                style={{ 
                  opacity: textStage2Opacity, 
                  y: textStage2Y,
                  visibility: mounted ? (stage2Visibility as any) : "hidden"
                }}
                className="absolute inset-x-0 space-y-4"
              >
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-blue-500/10 text-blue-600 border border-blue-500/20 text-xs font-mono font-bold uppercase rounded-lg">
                  <Activity className="h-4.5 w-4.5" />
                  <span>Stage 2: Active Recovery</span>
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                  Clinical Bio-Alignment
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg font-medium">
                  Through precision physiotherapy, manual joint mobilization, and guided core stability triggers, we restore skeletal mechanics. Proper nutrition guidance supports muscle recovery and cellular structural repair.
                </p>
              </motion.div>

              {/* CONTENT 3 */}
              <motion.div
                style={{ 
                  opacity: textStage3Opacity, 
                  y: textStage3Y,
                  visibility: mounted ? (stage3Visibility as any) : "hidden"
                }}
                className="absolute inset-x-0 space-y-4"
              >
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 text-xs font-mono font-bold uppercase rounded-lg">
                  <Sparkles className="h-4.5 w-4.5" />
                  <span>Stage 3: Peak Performance</span>
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                  Optimized Biomechanics
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg font-medium">
                  Skeletal joints are neutral, shear loads are minimized, and power pathways are fully cleared. With balanced body composition and peak agility, you move freely and perform with confidence.
                </p>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
