"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import AIChatbot from "@/components/AIChatbot";
import Link from "next/link";
import { clinicConfig } from "@/config/clinicConfig";
import { 
  Flame, 
  Dumbbell, 
  Apple, 
  ArrowRight, 
  TrendingDown, 
  Activity, 
  Check, 
  Calendar, 
  Star 
} from "lucide-react";
import { motion } from "framer-motion";

export default function Fit90() {
  // Tracker States
  const [startingWeight, setStartingWeight] = useState<number | "">(85); // kg
  const [targetWeight, setTargetWeight] = useState<number | "">(75); // kg
  const [currentWeek, setCurrentWeek] = useState(6); // current week tracked (1-12)
  const [activeTab, setActiveTab] = useState<"workout" | "nutrition" | "monitoring">("workout");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Calculate simulated current weight based on week slider with fallback defaults when input is empty
  const activeStartingWeight = startingWeight === "" ? 85 : startingWeight;
  const activeTargetWeight = targetWeight === "" ? 75 : targetWeight;
  const weightLossDiff = activeStartingWeight - activeTargetWeight;
  const currentWeight = parseFloat((activeStartingWeight - (weightLossDiff * (currentWeek / 12))).toFixed(1));
  const progressPercent = Math.round((currentWeek / 12) * 100);

  const benefits = [
    { title: "Personal Clinical Assessment", desc: "Initial physical movement checkup by standard physiotherapists to map joint limits." },
    { title: "Biomechanical Workout Matrix", desc: "Customized exercise programming updated weekly to safeguard joints and maximize fat loss." },
    { title: "Precision Nutrition Algorithms", desc: "Non-restrictive diet planning adjusted dynamically according to your target rate." },
    { title: "Weekly Progress Monitoring", desc: "Direct video checks, body composition reviews, and tracking updates." },
  ];



  // Generate SVG coordinates for weight loss line graph
  const getGraphPoints = () => {
    const points: string[] = [];
    const width = 300;
    const height = 150;
    const padding = 10;
    
    const activeStartingWeight = startingWeight === "" ? 85 : startingWeight;
    const activeTargetWeight = targetWeight === "" ? 75 : targetWeight;
    const diff = activeStartingWeight - activeTargetWeight;
    
    for (let i = 0; i <= 12; i++) {
      const x = padding + (i / 12) * (width - 2 * padding);
      // weight loss curve simulated
      const w = activeStartingWeight - (diff * (i / 12));
      const normalizedW = (activeStartingWeight - w) / (diff || 1); // 0 to 1
      const y = height - padding - (normalizedW * (height - 2 * padding));
      points.push(`${x},${y}`);
    }
    return points.join(" ");
  };

  return (
    <>
      <title>FIT90: Best Weight Loss & Fitness Program in Jaipur | Muscle Algorithm Clinic</title>
      <meta name="description" content="Transform your body and joint health in 90 days. Get customized workout matrices, clinical nutrition planning, and weekly posture corrections in Jaipur." />
      <link rel="canonical" href="https://musclealgorithm.in/fit90" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="FIT90: Best Weight Loss & Fitness Program in Jaipur | Muscle Algorithm Clinic" />
      <meta property="og:description" content="Transform your body and joint health in 90 days. Get customized workout matrices, clinical nutrition planning, and weekly posture corrections in Jaipur." />
      <meta property="og:url" content="https://musclealgorithm.in/fit90" />
      <meta property="og:image" content="https://musclealgorithm.in/logo.png" />
      <meta property="og:type" content="website" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="FIT90: Best Weight Loss & Fitness Program in Jaipur | Muscle Algorithm Clinic" />
      <meta name="twitter:description" content="Transform your body and joint health in 90 days. Get customized workout matrices, clinical nutrition planning, and weekly posture corrections in Jaipur." />
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
                "name": "How does the FIT90 program protect my joints during weight loss?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Unlike generic gym programs, FIT95 integrates clinical physiotherapy screening. Before loading any exercise pattern, our therapists check your muscle activation to ensure your spine, knees, and shoulders are safe."
                }
              },
              {
                "@type": "Question",
                "name": "Will I get a customized diet plan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our clinical nutritionists design customized diet charts based on your daily lifestyle, regional preferences, and metabolic markers. We manage clinical conditions like diabetes, thyroid, and PCOS."
                }
              },
              {
                "@type": "Question",
                "name": "What support is included in the ₹4,999 package?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The package includes your initial biomechanical movement screening, weekly diet chart adjustments, target workout schedules, progress check-ins, and direct support on WhatsApp."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need to go to a specific gym?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, the FIT90 workout matrix can be tailored for home training with basic equipment or any local gym in Jaipur."
                }
              }
            ]
          })
        }}
      />
      <Navbar />
      
      <main className="flex-grow bg-slate-50 text-slate-900 transition-colors duration-300">
        
        {/* HERO SECTION */}
        <section className="relative py-24 overflow-hidden border-b border-slate-200">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full glow-blur-1 filter blur-[90px] pointer-events-none opacity-30" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full glow-blur-2 filter blur-[90px] pointer-events-none opacity-30" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Heading & Value Prop */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 rounded-full text-xs font-bold font-mono uppercase">
                  <Flame className="h-4 w-4 text-emerald-500" />
                  <span>Signature 90-Day Challenge</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
                  The <span className="bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent">FIT90 Program</span>
                </h1>
                
                <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                  Become fit, pain-free, and athletic in 90 days. Our medical-grade coaching platform integrates joint therapy with metabolic transformation to build a healthy lifestyle permanently.
                </p>

                {/* Price tag */}
                <div className="py-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <div className="bg-white border border-slate-200 px-6 py-4 rounded-2xl flex flex-col justify-center text-center sm:text-left shadow-lg">
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">Complete Package</span>
                    <span className="text-3xl font-extrabold text-emerald-600 font-mono mt-0.5">₹4,999 <span className="text-xs font-semibold text-slate-400 font-sans">Inc. GST</span></span>
                  </div>
                  <span className="text-sm font-semibold text-emerald-600 text-glow-green animate-pulse">
                    Only ₹4,999 — No Hidden Charges
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a href={clinicConfig.whatsappLink("fit90")} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold rounded-2xl shadow-xl shadow-emerald-500/20">
                      <Flame className="h-5 w-5" />
                      <span>Join FIT90 Program</span>
                    </button>
                  </a>
                  <Link href="/book" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-white hover:bg-slate-100 border border-slate-200 text-slate-900 font-extrabold rounded-2xl">
                      <Calendar className="h-5 w-5 text-blue-500" />
                      <span>Request Free Call</span>
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right Column: 90-Day Tracker Mock Dashboard */}
              <div className="lg:col-span-5 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full max-w-sm bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl relative"
                >
                  {/* Status lights */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-widest">FIT90 MEMBER PORTAL</span>
                    </div>
                    <span className="text-[10px] font-bold font-mono px-2 py-1 bg-slate-50 text-slate-600 rounded border border-slate-200">
                      MOCK VIEW
                    </span>
                  </div>

                  {/* Settings Sliders */}
                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">Starting Weight</label>
                        <input
                          type="number"
                          value={startingWeight}
                          onChange={(e) => {
                            const val = e.target.value;
                            setStartingWeight(val === "" ? "" : parseInt(val));
                          }}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono font-bold text-slate-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">Goal Weight</label>
                        <input
                          type="number"
                          value={targetWeight}
                          onChange={(e) => {
                            const val = e.target.value;
                            setTargetWeight(val === "" ? "" : parseInt(val));
                          }}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono font-bold text-slate-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                      </div>
                    </div>

                    {/* Timeline Slider */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-[10px] font-mono font-bold text-slate-400 uppercase">
                        <span>Current Week Progress</span>
                        <span className="text-emerald-500">Week {currentWeek} / 12</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="12"
                        value={currentWeek}
                        onChange={(e) => setCurrentWeek(parseInt(e.target.value))}
                        className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                      />
                    </div>
                  </div>

                  {/* Dashboard Metrics display */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-center space-x-2">
                      <TrendingDown className="h-5 w-5 text-emerald-500" />
                      <div>
                        <span className="text-[9px] font-mono text-slate-400 uppercase font-bold block">Current Weight</span>
                        <span className="text-sm font-extrabold font-mono text-slate-900">{currentWeight} kg</span>
                      </div>
                    </div>
                    <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-center space-x-2">
                      <Activity className="h-5 w-5 text-blue-500" />
                      <div>
                        <span className="text-[9px] font-mono text-slate-400 uppercase font-bold block">Goal Completion</span>
                        <span className="text-sm font-extrabold font-mono text-slate-900">{progressPercent}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Simulated Line Graph Render */}
                  <div className="bg-slate-50/60 border border-slate-100 p-2.5 rounded-xl">
                    <svg viewBox="0 0 300 150" className="w-full h-24 overflow-visible">
                      {/* Grid markers */}
                      <line x1="10" y1="10" x2="290" y2="10" stroke="#e2e8f0" strokeWidth="1" />
                      <line x1="10" y1="75" x2="290" y2="75" stroke="#e2e8f0" strokeWidth="1" />
                      <line x1="10" y1="140" x2="290" y2="140" stroke="#e2e8f0" strokeWidth="1" />
                      
                      {/* Weight Curve */}
                      <polyline
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points={getGraphPoints()}
                      />

                      {/* Current marker */}
                      {(() => {
                        const width = 300;
                        const height = 150;
                        const padding = 10;
                        const x = padding + (currentWeek / 12) * (width - 2 * padding);
                        const activeStartingWeight = startingWeight === "" ? 85 : startingWeight;
                        const activeTargetWeight = targetWeight === "" ? 75 : targetWeight;
                        const diff = activeStartingWeight - activeTargetWeight;
                        const w = activeStartingWeight - (diff * (currentWeek / 12));
                        const normalizedW = (activeStartingWeight - w) / (diff || 1);
                        const y = height - padding - (normalizedW * (height - 2 * padding));
                        return (
                          <g>
                            <circle cx={x} cy={y} r="6" className="fill-emerald-500 stroke-white stroke-2" />
                            <circle cx={x} cy={y} r="12" className="stroke-emerald-450/40 fill-none animate-ping" />
                          </g>
                        );
                      })()}
                    </svg>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* PROGRAM BENEFITS */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-mono font-bold text-emerald-500 uppercase tracking-widest">Targeted Outcomes</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Program Benefits & Infrastructure
            </h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto text-sm sm:text-base">
              Why our algorithms succeed where simple templates fail: we combine standard physiotherapy rehabilitation diagnostics with athletic coaching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((b, idx) => (
              <div key={idx} className="p-6 bg-white border border-slate-200 rounded-2xl flex items-start space-x-4 shadow-sm">
                <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 rounded-xl">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">{b.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mt-1">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WORKOUT & NUTRITION TABS */}
        <section className="py-24 bg-white border-t border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex justify-center space-x-2 mb-12">
              <button
                onClick={() => setActiveTab("workout")}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-bold border transition-all ${
                  activeTab === "workout"
                    ? "bg-slate-900 text-white border-slate-900 shadow-lg"
                    : "bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200"
                }`}
              >
                <Dumbbell className="h-4.5 w-4.5" />
                <span>Custom Workout Matrix</span>
              </button>
              <button
                onClick={() => setActiveTab("nutrition")}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-bold border transition-all ${
                  activeTab === "nutrition"
                    ? "bg-slate-900 text-white border-slate-900 shadow-lg"
                    : "bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200"
                }`}
              >
                <Apple className="h-4.5 w-4.5" />
                <span>Intake Diet Algorithms</span>
              </button>
            </div>

            {/* Tab Body */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 max-w-4xl mx-auto">
              {activeTab === "workout" ? (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-emerald-600 flex items-center gap-2">
                    <Dumbbell className="h-5 w-5" />
                    <span>Joint-Safe Resistance Matrix</span>
                  </h3>
                  <p className="text-slate-650 text-sm sm:text-base leading-relaxed">
                    Most fitness training programs push structural limits, causing rotator cuff tears, disc bulges, and knee wears. FIT90 exercises are mapped to avoid joint shear force. We load stabilizer muscle groups first to build a solid foundation before loading target power patterns.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                      <h4 className="text-sm font-extrabold text-slate-900">Corrective Phase</h4>
                      <p className="text-xs text-slate-500 mt-1">Gait check, activation exercises, and range restoration protocols.</p>
                    </div>
                    <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                      <h4 className="text-sm font-extrabold text-slate-900">Progression Phase</h4>
                      <p className="text-xs text-slate-500 mt-1">Linear volume adjustments, strength conditioning, posture stability lock.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-emerald-600 flex items-center gap-2">
                    <Apple className="h-5 w-5" />
                    <span>Dynamic Caloric Balancing</span>
                  </h3>
                  <p className="text-slate-655 text-sm sm:text-base leading-relaxed">
                    Our dietician algorithms design calorie plans based on regional food profiles, lifestyle hours, and condition baselines (e.g. Thyroid, diabetes). We avoid severe fasting, prioritizing optimal protein absorption, clean carbohydrate timing, and active tissue building.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                      <h4 className="text-sm font-extrabold text-slate-900">Weekly Macronutrient Optimization</h4>
                      <p className="text-xs text-slate-500 mt-1">Modulating carb-fat ratios dynamically according to weight loss rate checkpoints.</p>
                    </div>
                    <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                      <h4 className="text-sm font-extrabold text-slate-900">Condition Fueling</h4>
                      <p className="text-xs text-slate-500 mt-1">Anti-inflammatory profiles tailored for joint rehabilitation and tissue recovery.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </section>



        {/* SUCCESS STORIES */}
        <section className="py-24 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-16">
              <span className="text-xs font-mono font-bold text-emerald-500 uppercase tracking-widest">Proven Outcomes</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Transformation Success Stories
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Vikram R. (Age 34)", title: "Shed 12kg & Cured Back Spasms", quote: "The core strengthening drills corrected my alignment completely. The diet is very flexible." },
                { name: "Pooja D. (Age 28)", title: "Posture Correction & PCOS Management", quote: "My thoracic curve improved, my energy levels are higher than ever, and my weight dropped 8kg." },
                { name: "Anil S. (Age 42)", title: "Sports Rehabilitation Success", quote: "Healed my patellar inflammation and lost 10kg in the process. Incredible joint monitoring." }
              ].map((s, idx) => (
                <div key={idx} className="p-6 bg-slate-50 border border-slate-250 rounded-2xl space-y-4 shadow-sm">
                  <div className="flex space-x-1 text-yellow-450">
                    {[1, 2, 3, 4, 5].map((st) => (
                      <Star key={st} className="h-4 w-4 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <h4 className="font-extrabold text-base text-slate-900">{s.title}</h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed italic">
                    "{s.quote}"
                  </p>
                  <div className="border-t border-slate-200 pt-3 flex items-center space-x-2.5">
                    <div className="h-8 w-8 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 rounded-full flex items-center justify-center font-bold text-xs">
                      {s.name[0]}
                    </div>
                    <span className="text-xs font-bold text-slate-700">{s.name}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-emerald-500/10 via-blue-500/5 to-slate-50 border border-emerald-500/20 p-8 rounded-3xl text-center space-y-6 max-w-3xl mx-auto shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Ready to Start Your 90-Day Transformation?</h3>
              <p className="text-sm text-slate-500 max-w-lg mx-auto font-medium">
                Secure your spot today. Get initial biomechanical scans, clinical meal plans, and workouts custom built for you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={clinicConfig.whatsappLink("fit90")} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm rounded-xl shadow-lg">
                    Join Challenge Now (₹4,999)
                  </button>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-16">
              <span className="text-xs font-mono font-bold text-emerald-500 uppercase tracking-widest">Got Questions?</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                FIT90 & Nutrition FAQs
              </h2>
              <p className="text-slate-500 font-medium text-sm sm:text-base">
                Common questions about our 90-day transformation program and nutrition guidelines in Jaipur.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "How does the FIT90 program protect my joints during weight loss?",
                  a: "Unlike generic gym programs, FIT90 integrates clinical physiotherapy screening. Before loading any exercise pattern, our therapists check your muscle activation to ensure your spine, knees, and shoulders are safe."
                },
                {
                  q: "Will I get a customized diet plan?",
                  a: "Yes, our clinical nutritionists design customized diet charts based on your daily lifestyle, regional preferences, and metabolic markers. We manage clinical conditions like diabetes, thyroid, and PCOS."
                },
                {
                  q: "What support is included in the ₹4,999 package?",
                  a: "The package includes your initial biomechanical movement screening, weekly diet chart adjustments, target workout schedules, progress check-ins, and direct support on WhatsApp."
                },
                {
                  q: "Do I need to go to a specific gym?",
                  a: "No, the FIT90 workout matrix can be tailored for home training with basic equipment or any local gym in Jaipur."
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
