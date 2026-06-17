"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import AIChatbot from "@/components/AIChatbot";
import { clinicConfig } from "@/config/clinicConfig";
import { Video, Search, ChevronRight, Play, BookOpen, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type CategoryFilter = "all" | "physiotherapy" | "nutrition" | "fitness";

export default function Education() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All Content" },
    { id: "physiotherapy", label: "Physiotherapy Awareness" },
    { id: "nutrition", label: "Nutrition Guidance" },
    { id: "fitness", label: "Fitness Tips" }
  ] as const;

  const filteredReels = clinicConfig.educationReels.filter((reel) => {
    const matchesCategory = activeCategory === "all" || reel.category === activeCategory;
    const matchesSearch = 
      reel.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reel.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <title>Physiotherapy & Fitness Education Center | Jaipur | Muscle Algorithm Clinic</title>
      <meta name="description" content="Learn scientific movement corrections, dry needling, posture alignment drills, and clinical rehabilitation guidelines from top physiotherapists in Mansarovar, Jaipur." />
      <link rel="canonical" href="https://musclealgorithm.in/education" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="Physiotherapy & Fitness Education Center | Jaipur | Muscle Algorithm Clinic" />
      <meta property="og:description" content="Learn scientific movement corrections, dry needling, posture alignment drills, and clinical rehabilitation guidelines from top physiotherapists in Mansarovar, Jaipur." />
      <meta property="og:url" content="https://musclealgorithm.in/education" />
      <meta property="og:image" content="https://musclealgorithm.in/logo.png" />
      <meta property="og:type" content="website" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Physiotherapy & Fitness Education Center | Jaipur | Muscle Algorithm Clinic" />
      <meta name="twitter:description" content="Learn scientific movement corrections, dry needling, posture alignment drills, and clinical rehabilitation guidelines from top physiotherapists in Mansarovar, Jaipur." />
      <meta name="twitter:image" content="https://musclealgorithm.in/logo.png" />

      {/* Structured FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What causes muscle imbalances and joint dysfunction?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Muscle imbalances typically result from prolonged static postures, improper load distribution during gym training, or previous unhealed minor injuries. This throws off joint alignment and biomechanics."
                }
              },
              {
                "@type": "Question",
                "name": "How often should I practice corrective stretches?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For postural alignment (like hunchback or anterior pelvic tilt), consistency is key. We recommend executing corrective mobilization drills at least once daily or during work breaks."
                }
              },
              {
                "@type": "Question",
                "name": "What is dry needling, and how does it help recovery?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Dry needling is a clinical technique where thin needles are inserted into muscular trigger points. This releases tight myofascial bands, resets neural feedback loop parameters, and increases blood circulation."
                }
              },
              {
                "@type": "Question",
                "name": "Should I apply ice or heat to my back pain?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For acute injuries (less than 48 hours old) with swelling, ice is recommended. For chronic stiff joints or tight muscles (like general low back ache), moist heat is preferred to increase tissue elasticity."
                }
              }
            ]
          })
        }}
      />
      <Navbar />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12 max-w-xl mx-auto">
          <span className="text-xs font-mono font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-widest block font-bold">Health Literacy</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education Center
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Learn correct exercise postures, metabolic dietary facts, and joint injury prevention guides designed by our clinicians.
          </p>
        </div>

        {/* Filter bar & Search */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                  activeCategory === cat.id
                    ? "bg-slate-900 text-white dark:bg-emerald-500 dark:text-slate-950 border-slate-900 dark:border-emerald-400 shadow-md"
                    : "bg-white dark:bg-slate-900 hover:bg-slate-100 text-slate-600 dark:text-slate-350 border-slate-250 dark:border-slate-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="h-4.5 w-4.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search reels or guides..."
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white"
            />
          </div>
        </div>

        {/* Video Reels Grid */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredReels.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {filteredReels.map((reel) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    key={reel.id}
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Simulated Reel Thumbnail */}
                    <div className="aspect-[9/16] w-full bg-slate-950 flex flex-col justify-between p-4 relative group overflow-hidden">
                      {/* Gradient Backdrop */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 opacity-30 group-hover:scale-105 transition-transform duration-500" />
                      
                      {/* Duration Tag */}
                      <span className="self-end text-[10px] font-mono font-bold px-2 py-1 bg-slate-950/80 text-slate-400 rounded-lg border border-slate-800 z-10">
                        {reel.duration}
                      </span>

                      {/* Play Button Mock */}
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <button className="h-14 w-14 rounded-full bg-emerald-500/80 text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-emerald-500 transition-all">
                          <Play className="h-6 w-6 fill-white text-emerald-500 translate-x-0.5" />
                        </button>
                      </div>

                      {/* Header overlay */}
                      <div className="z-10 space-y-1.5 pt-36">
                        <span className="inline-block text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-widest px-1.5 py-0.5 bg-emerald-950/85 rounded border border-emerald-500/20">
                          {reel.category}
                        </span>
                        <h4 className="font-extrabold text-sm text-white leading-tight drop-shadow-md">
                          {reel.title}
                        </h4>
                        <p className="text-[11px] text-slate-300 leading-normal drop-shadow-sm line-clamp-2">
                          {reel.description}
                        </p>
                      </div>
                    </div>

                    {/* Footer Redirect */}
                    <div className="p-4 border-t border-slate-100 dark:border-slate-850 bg-slate-50 dark:bg-slate-950/50">
                      <a 
                        href={reel.youtubeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center space-x-1 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold rounded-xl text-xs transition-colors"
                      >
                        <span>Watch on YouTube</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-20 text-slate-450 dark:text-slate-500 bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-200 dark:border-slate-850">
                <BookOpen className="h-10 w-10 mx-auto text-slate-350 dark:text-slate-700 mb-3" />
                <p className="text-sm font-semibold">No educational matches found for "{searchQuery}".</p>
                <p className="text-xs text-slate-400 mt-1">Try searching broader keywords like "neck" or "workout".</p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* FAQ SECTION */}
        <section className="py-24 bg-slate-50 border-t border-slate-200 mt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-16">
              <span className="text-xs font-mono font-bold text-emerald-500 uppercase tracking-widest">Get Informed</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Clinical Physiotherapy & Rehab FAQs
              </h2>
              <p className="text-slate-500 font-medium text-sm sm:text-base">
                Learn about physical wellness, alignment recovery, and tissue rehab science in Jaipur.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "What causes muscle imbalances and joint dysfunction?",
                  a: "Muscle imbalances typically result from prolonged static postures, improper load distribution during gym training, or previous unhealed minor injuries. This throws off joint alignment and biomechanics."
                },
                {
                  q: "How often should I practice corrective stretches?",
                  a: "For postural alignment (like hunchback or anterior pelvic tilt), consistency is key. We recommend executing corrective mobilization drills at least once daily or during work breaks."
                },
                {
                  q: "What is dry needling, and how does it help recovery?",
                  a: "Dry needling is a clinical technique where thin needles are inserted into muscular trigger points. This releases tight myofascial bands, resets neural feedback loop parameters, and increases blood circulation."
                },
                {
                  q: "Should I apply ice or heat to my back pain?",
                  a: "For acute injuries (less than 48 hours old) with swelling, ice is recommended. For chronic stiff joints or tight muscles (like general low back ache), moist heat is preferred to increase tissue elasticity."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 text-left font-bold text-slate-900 flex justify-between items-center hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-emerald-500 text-xl font-mono shrink-0 ml-4">
                      {openFaq === idx ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <AIChatbot />
      <FloatingActions />
      <Footer />
    </>
  );
}
