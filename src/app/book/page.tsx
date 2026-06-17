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
  const [mobile, setMobile] = useState("+91 ");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [healthConcern, setHealthConcern] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showReviewBooster, setShowReviewBooster] = useState(false);
  const [rating, setRating] = useState<number | null>(null);

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    const prefix = "+91 ";
    
    // Lock value to prefix if user attempts to backspace/delete the prefix "+91 "
    if (value.length < prefix.length) {
      setMobile(prefix);
      return;
    }
    
    // Extract only the digits that come after "+91 "
    const rawInput = value.slice(prefix.length);
    const digitsOnly = rawInput.replace(/\D/g, "").slice(0, 10); // Keep max 10 digits
    
    // Format: add a space after the first 5 digits
    let formatted = prefix;
    if (digitsOnly.length > 5) {
      formatted += digitsOnly.slice(0, 5) + " " + digitsOnly.slice(5);
    } else {
      formatted += digitsOnly;
    }
    
    setMobile(formatted);
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      alert("Please enter the Patient Full Name.");
      return;
    }

    const digitsOnly = mobile.replace("+91", "").replace(/\D/g, "");
    if (digitsOnly.length !== 10) {
      alert("Mobile number must have exactly 10 digits after +91.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Build the URL with query parameters (highly reliable for Google Apps Script Web Apps)
      const url = new URL("https://script.google.com/macros/s/AKfycbx-_8kmnPeGQkHd25jL_AHOkvd8oL-gq54xf8ZwpvJmXj_Fc2y16Ql5FZuvfLwQvm8oVw/exec");
      url.searchParams.append("name", name);
      url.searchParams.append("mobile", mobile);
      url.searchParams.append("email", email || "");
      url.searchParams.append("age", age || "N/A");
      url.searchParams.append("gender", gender);
      url.searchParams.append("healthConcern", healthConcern || "N/A");

      await fetch(url.toString(), {
        method: "POST",
        mode: "no-cors",
      });

      // Data is sent; show the submission success screen
      setIsSubmitted(true);
      setTimeout(() => {
        setShowReviewBooster(true);
      }, 1500);
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Something went wrong. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
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
      <title>Book Online Physiotherapy Consultation & Appointment | Jaipur</title>
      <meta name="description" content="Secure your initial clinical physiotherapy consultation in Mansarovar, Jaipur, or book a home visit session. Easy online slot booking." />
      <link rel="canonical" href="https://musclealgorithm.in/book" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="Book Online Physiotherapy Consultation & Appointment | Jaipur" />
      <meta property="og:description" content="Secure your initial clinical physiotherapy consultation in Mansarovar, Jaipur, or book a home visit session. Easy online slot booking." />
      <meta property="og:url" content="https://musclealgorithm.in/book" />
      <meta property="og:image" content="https://musclealgorithm.in/logo.png" />
      <meta property="og:type" content="website" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Book Online Physiotherapy Consultation & Appointment | Jaipur" />
      <meta name="twitter:description" content="Secure your initial clinical physiotherapy consultation in Mansarovar, Jaipur, or book a home visit session. Easy online slot booking." />
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
                "name": "Book Consultation",
                "item": "https://musclealgorithm.in/book"
              }
            ]
          })
        }}
      />
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
                          onChange={handleMobileChange}
                          placeholder=""
                          className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white font-mono"
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
                  <div className="pt-4 border-t border-slate-150 dark:border-slate-800 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-450 disabled:cursor-not-allowed text-white font-extrabold text-sm rounded-xl shadow-lg shadow-emerald-500/10 flex items-center space-x-2 transition-all"
                    >
                      <span>{isSubmitting ? "Saving slot..." : "Secure Consultation"}</span>
                      {!isSubmitting && <ArrowRight className="h-4 w-4" />}
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
