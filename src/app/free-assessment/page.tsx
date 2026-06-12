"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import AIChatbot from "@/components/AIChatbot";
import { ChevronRight, ArrowLeft, CheckCircle2, ShieldCheck, Heart, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type Step = 1 | 2 | 3 | 4 | 5; // Vitals, Goals, Pain, Contact, Success/Loader

export default function FreeAssessment() {
  const [step, setStep] = useState<Step>(1);
  const [loading, setLoading] = useState(false);

  // Form States
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [goal, setGoal] = useState("Pain Relief");
  const [painAreas, setPainAreas] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const painOptions = [
    { id: "neck", label: "Neck & Cervical Spine" },
    { id: "shoulder", label: "Shoulder Joints" },
    { id: "back", label: "Low Back / Spine" },
    { id: "knee", label: "Knee Joints" },
    { id: "ankle", label: "Ankle / Heel / Foot" },
    { id: "none", label: "No Active Pain (General Fitness)" }
  ];

  const handlePainToggle = (id: string) => {
    if (id === "none") {
      setPainAreas(["none"]);
      return;
    }
    const filtered = painAreas.filter(p => p !== "none");
    if (filtered.includes(id)) {
      setPainAreas(filtered.filter(p => p !== id));
    } else {
      setPainAreas([...filtered, id]);
    }
  };

  const handleNextStep = () => {
    if (step === 1 && (!age || !weight || !height)) {
      alert("Please enter your Age, Weight, and Height.");
      return;
    }
    if (step === 3 && painAreas.length === 0) {
      alert("Please select at least one option.");
      return;
    }
    setStep((prev) => (prev + 1) as Step);
  };

  const handlePrevStep = () => {
    setStep((prev) => (prev - 1) as Step);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !mobile) {
      alert("Please fill in your Name and Mobile Number.");
      return;
    }
    setStep(5);
    setLoading(true);

    // Simulate "Algorithm Analysis" load state
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
        
        <div className="max-w-xl mx-auto">
          
          {/* Progress bar */}
          {step <= 4 && (
            <div className="mb-8 space-y-2.5">
              <div className="flex justify-between items-center text-xs font-mono font-bold text-slate-400">
                <span>Assessment Funnel</span>
                <span>Step {step} of 4</span>
              </div>
              <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-500 transition-all duration-300"
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>
            </div>
          )}

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden min-h-[380px] flex flex-col justify-between">
            
            <AnimatePresence mode="wait">
              {/* STEP 1: VITALS */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-widest block">Intake 1/4</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">Let's start with your vital baselines</h2>
                    <p className="text-xs text-slate-400">These help calculate starting metabolic loads and joint pressure values.</p>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Age (yrs)</label>
                        <input
                          type="number"
                          required
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          placeholder="e.g. 30"
                          className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Weight (kg)</label>
                        <input
                          type="number"
                          required
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                          placeholder="e.g. 78"
                          className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Height (cm)</label>
                        <input
                          type="number"
                          required
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                          placeholder="e.g. 175"
                          className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 flex justify-end">
                    <button
                      onClick={handleNextStep}
                      className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white dark:text-slate-950 font-bold text-sm rounded-xl shadow-lg flex items-center space-x-1.5"
                    >
                      <span>Continue</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: HEALTH GOAL */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-widest block">Intake 2/4</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">What is your primary focus?</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {["Pain Relief", "Posture Correction", "Weight Loss", "Muscle Building", "Athletic Conditioning"].map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setGoal(g)}
                        className={`text-left p-4 rounded-xl border text-sm font-bold transition-all ${
                          goal === g
                            ? "bg-slate-900 border-slate-900 text-white dark:bg-emerald-500/10 dark:border-emerald-400 dark:text-emerald-400"
                            : "bg-slate-50 border-slate-200 text-slate-700 dark:bg-slate-950 dark:border-slate-850 dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-850"
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>

                  <div className="pt-8 flex justify-between">
                    <button
                      onClick={handlePrevStep}
                      className="px-5 py-3.5 border border-slate-200 dark:border-slate-850 text-slate-600 dark:text-slate-350 rounded-xl text-sm font-bold flex items-center space-x-1"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span>Back</span>
                    </button>
                    <button
                      onClick={handleNextStep}
                      className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white dark:text-slate-950 font-bold text-sm rounded-xl shadow-lg flex items-center space-x-1.5"
                    >
                      <span>Continue</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: PAIN MAPPING */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-widest block">Intake 3/4</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">Identify active pain areas</h2>
                    <p className="text-xs text-slate-400">Choose all locations where you experience stiffness or active load discomfort.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {painOptions.map((opt) => {
                      const isSelected = painAreas.includes(opt.id);
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => handlePainToggle(opt.id)}
                          className={`text-left p-3.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                            isSelected
                              ? "bg-slate-900 border-slate-900 text-white dark:bg-emerald-500/10 dark:border-emerald-400 dark:text-emerald-400"
                              : "bg-slate-50 border-slate-200 text-slate-700 dark:bg-slate-950 dark:border-slate-850 dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-850"
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-8 flex justify-between">
                    <button
                      onClick={handlePrevStep}
                      className="px-5 py-3.5 border border-slate-200 dark:border-slate-850 text-slate-600 dark:text-slate-350 rounded-xl text-sm font-bold flex items-center space-x-1"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span>Back</span>
                    </button>
                    <button
                      onClick={handleNextStep}
                      className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white dark:text-slate-950 font-bold text-sm rounded-xl shadow-lg flex items-center space-x-1.5"
                    >
                      <span>Continue</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: CONTACT & SUBMIT */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-widest block">Intake 4/4</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">Secure your calculations</h2>
                    <p className="text-xs text-slate-400">Where should we dispatch your biomechanical dashboard reports and analysis?</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Rahul Sharma"
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Mobile Number (WhatsApp notifications)</label>
                      <input
                        type="tel"
                        required
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Email Address (Optional)</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div className="pt-8 flex justify-between">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="px-5 py-3.5 border border-slate-200 dark:border-slate-850 text-slate-600 dark:text-slate-350 rounded-xl text-sm font-bold flex items-center space-x-1"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        <span>Back</span>
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm rounded-xl shadow-lg flex items-center space-x-1.5"
                      >
                        <span>Request Assessment</span>
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* STEP 5: LOADER / SUCCESS SCREEN */}
              {step === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex-1 flex flex-col items-center justify-center text-center space-y-6 py-8"
                >
                  {loading ? (
                    <div className="space-y-4">
                      <div className="relative h-16 w-16 mx-auto">
                        <span className="absolute inset-0 rounded-full border-4 border-slate-200 dark:border-slate-800 border-t-emerald-500 animate-spin" />
                        <Activity className="h-8 w-8 text-emerald-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-extrabold text-slate-800 dark:text-white text-base">Running Muscle Algorithms...</h3>
                        <p className="text-xs text-slate-400 max-w-[280px] mx-auto font-mono">
                          Mapping postural angles and joint shear vectors for {name}.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="h-16 w-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="h-10 w-10 animate-bounce" />
                      </div>
                      
                      <div className="space-y-2">
                        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Profile Score Logged!</h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto font-medium">
                          Thank you, <span className="font-extrabold text-slate-900 dark:text-white">{name}</span>. Our clinic staff will review your metrics and contact you within <span className="text-emerald-500 font-bold">24 hours</span> to deliver your health score assessment and recovery roadmap.
                        </p>
                      </div>

                      <div className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-2xl flex items-center space-x-2 text-left max-w-xs mx-auto">
                        <ShieldCheck className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                          Safe & encrypted data
                        </span>
                      </div>

                      <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/">
                          <button className="w-full px-5 py-3 border border-slate-200 dark:border-slate-850 text-slate-700 dark:text-slate-350 font-bold rounded-xl text-xs hover:bg-slate-50 dark:hover:bg-slate-850">
                            Back to Homepage
                          </button>
                        </Link>
                        <Link href="/book">
                          <button className="w-full px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold rounded-xl text-xs shadow-md">
                            Book Real-time Consultation
                          </button>
                        </Link>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </main>
      <AIChatbot />
      <FloatingActions />
      <Footer />
    </>
  );
}
