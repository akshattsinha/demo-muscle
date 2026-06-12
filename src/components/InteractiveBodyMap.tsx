"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Calendar, Activity, ChevronRight } from "lucide-react";
import Link from "next/link";

type BodyPart = "neck" | "shoulder" | "back" | "knee" | "ankle";

interface PartData {
  title: string;
  conditions: string[];
  treatments: string[];
  timeline: string;
}

const bodyPartsData: Record<BodyPart, PartData> = {
  neck: {
    title: "Cervical Spine & Neck",
    conditions: ["Text Neck Syndrome", "Cervical Radiculopathy (Pinched Nerve)", "Cervicogenic Headaches", "Whiplash & Muscle Spasms"],
    treatments: ["Manual Cervical Traction", "Thoracic Spine Mobilization", "Postural Ergonomic Training", "Dry Needling & Release"],
    timeline: "2 - 4 Weeks Recovery"
  },
  shoulder: {
    title: "Shoulder Joint & Rotator Cuff",
    conditions: ["Rotator Cuff Tendonitis", "Shoulder Impingement Syndrome", "Frozen Shoulder (Adhesive Capsulitis)", "AC Joint Sprains"],
    treatments: ["Scapular Stabilization Protocols", "Manual Joint Glides", "Rotator Cuff Elastic Loading", "Ultrasound & Laser Therapy"],
    timeline: "4 - 8 Weeks Recovery"
  },
  back: {
    title: "Thoracic & Lumbar Spine (Back)",
    conditions: ["Sciatica & Nerve Impingements", "Lumbar Herniated Disc", "Quadratus Lumborum (QL) Strain", "Postural Scoliosis Stiffness"],
    treatments: ["Spinal Chiropractic Adjustments", "Deep Core Activation (Transversus Abdominis)", "Flexion-Distraction Therapy", "Myofascial Trigger Release"],
    timeline: "3 - 6 Weeks Recovery"
  },
  knee: {
    title: "Knee Joint & Ligaments",
    conditions: ["Patellofemoral Pain (Runner's Knee)", "Meniscus Tear Rehab", "Patellar Tendonitis (Jumper's Knee)", "ACL / MCL Post-Op Recovery"],
    treatments: ["VMO Muscle Hypertrophy drills", "Patellar Tracking Alignment Taping", "Proprioceptive Balance Loading", "Low-Level Laser (LLLT)"],
    timeline: "6 - 12 Weeks Recovery"
  },
  ankle: {
    title: "Ankle & Foot Complex",
    conditions: ["Plantar Fasciitis", "Ankle Sprain Recovery (ATFL/CFL)", "Achilles Tendonitis", "Chronic Ankle Instability"],
    treatments: ["Calf Eccentric Loading", "Ankle Mortise Mobilization", "Foot Intrinsic Muscle Activation", "Gait & Footwear Correction"],
    timeline: "3 - 5 Weeks Recovery"
  }
};

export default function InteractiveBodyMap() {
  const [selectedPart, setSelectedPart] = useState<BodyPart>("back");

  const nodes = [
    { id: "neck", label: "Neck", cx: 100, cy: 78, r: 8 },
    { id: "shoulder", label: "Shoulder", cx: 72, cy: 105, r: 8 },
    { id: "back", label: "Back & Spine", cx: 100, cy: 165, r: 9 },
    { id: "knee", label: "Knee", cx: 83, cy: 275, r: 9 },
    { id: "ankle", label: "Ankle", cx: 85, cy: 355, r: 8 },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: SVG Body Map */}
        <div className="md:col-span-5 flex flex-col items-center justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden h-[420px] md:h-[500px]">
          <div className="absolute top-4 left-4 flex items-center space-x-2">
            <span className="h-2 w-2 bg-emerald-500 rounded-full animate-ping"></span>
            <span className="text-[10px] font-mono font-extrabold uppercase text-slate-400 dark:text-slate-500">Interactive Body Scanner</span>
          </div>

          <svg viewBox="0 0 200 400" className="w-auto h-full max-h-[380px] md:max-h-[440px] drop-shadow-md select-none">
            {/* Body Outline Silhouette */}
            <path
              d="M 100 40 
                 C 112 40, 116 55, 114 65 
                 C 112 70, 108 72, 108 76 
                 C 114 80, 128 92, 134 98 
                 C 142 106, 145 125, 140 145 
                 C 136 160, 126 195, 124 210
                 C 122 220, 126 240, 124 250
                 C 122 260, 124 275, 122 290
                 C 118 320, 115 350, 115 375
                 C 115 382, 110 384, 100 384
                 C 90 384, 85 382, 85 375
                 C 85 350, 82 320, 78 290
                 C 76 275, 78 260, 76 250
                 C 74 240, 78 220, 76 210
                 C 74 195, 64 160, 60 145
                 C 55 125, 58 106, 66 98
                 C 72 92, 86 80, 92 76
                 C 92 72, 88 70, 86 65
                 C 84 55, 88 40, 100 40 Z"
              className="fill-slate-100 dark:fill-slate-800/60 stroke-slate-300 dark:stroke-slate-700 stroke-[1.5]"
            />

            {/* Spine indicator path */}
            <path d="M 100 76 L 100 240" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3" className="dark:stroke-slate-700" />

            {/* Joint Nodes */}
            {nodes.map((node) => {
              const isSelected = selectedPart === node.id;
              return (
                <g key={node.id} className="cursor-pointer" onClick={() => setSelectedPart(node.id as BodyPart)}>
                  {/* Outer Pulsing Ring */}
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r + 6}
                    style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
                    className={`stroke-2 transition-all duration-300 fill-none ${
                      isSelected
                        ? "stroke-emerald-500 opacity-100 scale-110"
                        : "stroke-blue-500/40 hover:stroke-emerald-500/70 opacity-40 hover:opacity-100"
                    }`}
                  />
                  {/* Inner Node */}
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r}
                    className={`transition-colors duration-300 ${
                      isSelected
                        ? "fill-emerald-500 stroke-white stroke-2"
                        : "fill-blue-500 hover:fill-emerald-500 stroke-none"
                    }`}
                  />
                  {/* Animate indicator for selected */}
                  {isSelected && (
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r={node.r + 14}
                      style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
                      className="stroke-emerald-500/40 fill-none stroke-[1.5] animate-ping"
                    />
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Right Side: Diagnosis Card & CTA */}
        <div className="md:col-span-7 h-full flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPart}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl space-y-6"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Activity className="h-3 w-3" />
                    <span>Bio-Algorithm Match</span>
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {bodyPartsData[selectedPart].title}
                  </h3>
                </div>
                <span className="text-xs font-bold font-mono px-3 py-1.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg border border-blue-500/20">
                  {bodyPartsData[selectedPart].timeline}
                </span>
              </div>

              {/* Conditions & Treatments grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {/* Conditions Column */}
                <div className="space-y-3">
                  <h4 className="text-sm font-extrabold uppercase tracking-wide text-slate-500 dark:text-slate-400">Common Pathology</h4>
                  <ul className="space-y-2.5">
                    {bodyPartsData[selectedPart].conditions.map((cond, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-700 dark:text-slate-350">
                        <ChevronRight className="h-4 w-4 text-red-500 shrink-0 mt-0.5 mr-1.5" />
                        <span>{cond}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Treatments Column */}
                <div className="space-y-3">
                  <h4 className="text-sm font-extrabold uppercase tracking-wide text-slate-500 dark:text-slate-400">Treatment Protocols</h4>
                  <ul className="space-y-2.5">
                    {bodyPartsData[selectedPart].treatments.map((treat, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-700 dark:text-slate-350">
                        <ChevronRight className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5 mr-1.5" />
                        <span>{treat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-slate-150 dark:border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium max-w-sm text-center sm:text-left">
                  *Our clinicians use dynamic screening matrices to identify exact joint deficits and curate customized load patterns.
                </p>
                <Link href="/book" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto flex items-center justify-center space-x-2 px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg transition-all duration-200 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>Schedule Assessment</span>
                  </button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
