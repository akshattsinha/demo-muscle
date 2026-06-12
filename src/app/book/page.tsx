"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import AIChatbot from "@/components/AIChatbot";
import { clinicConfig } from "@/config/clinicConfig";
import { Calendar, Phone, Activity, ArrowRight, ShieldCheck, Heart, Star, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Book() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [healthConcern, setHealthConcern] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showReviewBooster, setShowReviewBooster] = useState(false);
  const [rating, setRating] = useState<number | null>(null);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !mobile) {
      alert("Please fill in Name and Mobile Number.");
      return;
    }
    // Form is ready for future integration: can POST to API or redirect to external calendar
    setIsSubmitted(true);
    // After a short delay, show the Google Review Booster
    setTimeout(() => {
      setShowReviewBooster(true);
    }, 1500);
  };

  const handleRatingSubmit = (stars: number) => {
    setRating(stars);
    if (stars === 5) {
      // Direct redirect to Google Reviews
      window.open(clinicConfig.googleMapsLink, "_blank");
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
        
        <div className="max-w-3xl mx-auto">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8"
              >
                {/* Header */}
                <div className="text-center space-y-2">
                  <div className="mx-auto p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 w-fit rounded-2xl">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Book Your Clinical Consultation
                  </h1>
                  <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto">
                    Fill out the intake profile below. Our scheduling algorithm will block your custom slot immediately.
                  </p>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  {/* Step 1: Patient Details */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800 pb-2">
                      1. Patient Personal Profile
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Patient Full Name *</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Mobile Number (WhatsApp) *</label>
                        <input
                          type="tel"
                          required
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Email Address</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@domain.com"
                          className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Age (Years)</label>
                        <input
                          type="number"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          placeholder="e.g. 29"
                          className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Gender</label>
                        <select
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                          className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white font-semibold"
                        >
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Primary Health Concerns / Pain Spots</label>
                      <textarea
                        rows={3}
                        value={healthConcern}
                        onChange={(e) => setHealthConcern(e.target.value)}
                        placeholder="e.g. Low back stiffness radiating down right hamstring, knee clicking during squat exercises..."
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>



                  {/* Submission */}
                  <div className="pt-4 border-t border-slate-150 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400">
                      *Supports calendar redirects & custom webhooks.
                    </span>
                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-emerald-500/10 flex items-center space-x-2"
                    >
                      <span>Secure Consultation</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl text-center space-y-6"
              >
                <div className="mx-auto h-16 w-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 animate-bounce" />
                </div>
                
                <div className="space-y-2">
                  <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Profile Submitted!</h2>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                    Hi <span className="text-slate-900 dark:text-white font-extrabold">{name}</span>, your clinical intake profile has been successfully received.
                  </p>
                </div>

                <p className="text-xs text-slate-400 dark:text-slate-500 max-w-sm mx-auto font-medium">
                  Our clinical desk will ring or message you on WhatsApp at {mobile} to finalize your consultation scheduling.
                </p>

                {/* Google Review Booster Modal */}
                {showReviewBooster && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-850/80 shadow-md max-w-md mx-auto space-y-4"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold text-yellow-500 uppercase tracking-widest">Share Your Experience</span>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">How has your booking experience been?</h4>
                    </div>

                    <div className="flex justify-center space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => handleRatingSubmit(star)}
                          className={`p-1.5 rounded-lg border hover:scale-115 transition-all ${
                            rating !== null && rating >= star
                              ? "bg-yellow-400/10 border-yellow-400 text-yellow-500"
                              : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 hover:text-yellow-500"
                          }`}
                        >
                          <Star className="h-6 w-6 fill-current" />
                        </button>
                      ))}
                    </div>

                    <AnimatePresence>
                      {rating !== null && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-xs font-semibold text-slate-500"
                        >
                          {rating === 5 ? (
                            <p className="text-emerald-500">
                              Redirecting to leave a 5-star Google Review. Thank you for boosting our algorithm!
                            </p>
                          ) : (
                            <p className="text-slate-400">
                              Thank you for your feedback! We will use it to optimize our scheduling algorithms.
                            </p>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}

                <div className="pt-4">
                  <Link href="/">
                    <button className="px-6 py-3 border border-slate-250 dark:border-slate-800 text-slate-700 dark:text-slate-350 font-bold rounded-xl text-xs hover:bg-slate-50 dark:hover:bg-slate-850">
                      Return to Homepage
                    </button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </main>
      <AIChatbot />
      <FloatingActions />
      <Footer />
    </>
  );
}
