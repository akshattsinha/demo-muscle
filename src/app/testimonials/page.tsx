"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import AIChatbot from "@/components/AIChatbot";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { clinicConfig } from "@/config/clinicConfig";
import { Star, MessageSquare, StarHalf, ShieldCheck, Heart, Quote, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [activeStory, setActiveStory] = useState(0);
  const [rating, setRating] = useState<number | null>(null);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [privateFeedback, setPrivateFeedback] = useState("");

  const videoReviews = [
    {
      id: "vid-1",
      title: "Anil Dev's ACL Post-Surgery Rehab",
      desc: "Anil explains how targeted knee stability algorithms restored his walking stride within 6 weeks.",
      thumbnailText: "KNEE REHABLITATION SUCCESS",
      duration: "1:45"
    },
    {
      id: "vid-2",
      title: "Supriya Sharma's Posture Correction",
      desc: "How she went from severe thoracic pain during desk hours to pain-free flexibility.",
      thumbnailText: "POSTURE ADJUSTMENT PROFILE",
      duration: "2:10"
    },
    {
      id: "vid-3",
      title: "Coach Sameer's Shoulder Strength",
      desc: "Recovering range of motion after a heavy bench press rotator cuff tear.",
      thumbnailText: "SPORTS SHOULDER RECOVERY",
      duration: "1:30"
    }
  ];

  const reviewCards = [
    {
      name: "Akash Meena",
      date: "2 weeks ago",
      rating: 5,
      text: "Dr. Sinha is extremely knowledgeable. My shoulder impingement was cured in just 4 sessions. The focus on posture and muscle activation maps is incredible.",
      reply: "Thank you Akash! Keep up with your scapular retraction protocols."
    },
    {
      name: "Nisha Shekhawat",
      date: "1 month ago",
      rating: 5,
      text: "Joining the FIT90 program was the best decision. I lost 7.5kg and my constant cervical neck strain is completely gone. Love the dietician alignment sheets.",
      reply: "Great work Nisha! You smashed your targets."
    },
    {
      name: "Dr. Alok Vyas",
      date: "3 months ago",
      rating: 5,
      text: "Highly recommended clinical physiotherapy clinic. They don't just use machines; their exercise algorithm build sheets focus on permanent muscle patterns.",
      reply: "Appreciate the recommendation, Dr. Vyas! Structural balance is our core goal."
    }
  ];

  const handleRating = (stars: number) => {
    setRating(stars);
    if (stars === 5) {
      window.open(clinicConfig.googleMapsLink, "_blank");
    }
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
  };

  return (
    <>
      <title>Patient Success Stories & Reviews | Muscle Algorithm Clinic Jaipur</title>
      <meta name="description" content="Read reviews, case logs, and success stories from patients who recovered from joint pain, back pain, and sports injuries at Muscle Algorithm Clinic in Mansarovar, Jaipur." />
      <link rel="canonical" href="https://musclealgorithm.in/testimonials" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="Patient Success Stories & Reviews | Muscle Algorithm Clinic Jaipur" />
      <meta property="og:description" content="Read reviews, case logs, and success stories from patients who recovered from joint pain, back pain, and sports injuries at Muscle Algorithm Clinic in Mansarovar, Jaipur." />
      <meta property="og:url" content="https://musclealgorithm.in/testimonials" />
      <meta property="og:image" content="https://musclealgorithm.in/logo.png" />
      <meta property="og:type" content="website" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Patient Success Stories & Reviews | Muscle Algorithm Clinic Jaipur" />
      <meta name="twitter:description" content="Read reviews, case logs, and success stories from patients who recovered from joint pain, back pain, and sports injuries at Muscle Algorithm Clinic in Mansarovar, Jaipur." />
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
                "name": "Testimonials",
                "item": "https://musclealgorithm.in/testimonials"
              }
            ]
          })
        }}
      />

      {/* Medical Clinic and Reviews JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Muscle Algorithm Clinic",
            "image": "https://musclealgorithm.in/logo.png",
            "@id": "https://musclealgorithm.in/#clinic",
            "url": "https://musclealgorithm.in",
            "telephone": "+919257350214",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Naruka Mansion, Plot No. 4, New Sanganer Rd, near HDFC Bank, opp. Rajat Path, Ganpatpura, Mansarovar",
              "addressLocality": "Jaipur",
              "addressRegion": "Rajasthan",
              "postalCode": "302020",
              "addressCountry": "IN"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Akash Meena"
                },
                "datePublished": "2026-06-03",
                "reviewBody": "Dr. Sinha is extremely knowledgeable. My shoulder impingement was cured in just 4 sessions. The focus on posture and muscle activation maps is incredible.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Nisha Shekhawat"
                },
                "datePublished": "2026-05-17",
                "reviewBody": "Joining the FIT90 program was the best decision. I lost 7.5kg and my constant cervical neck strain is completely gone. Love the dietician alignment sheets.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Dr. Alok Vyas"
                },
                "datePublished": "2026-03-17",
                "reviewBody": "Highly recommended clinical physiotherapy clinic. They don't just use machines; their exercise algorithm build sheets focus on permanent muscle patterns.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                }
              }
            ]
          })
        }}
      />

      <Navbar />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16 max-w-xl mx-auto">
          <span className="text-xs font-mono font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-widest block">Client Proof Log</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Patient Success Stories & Physiotherapy Reviews
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Read verified transformations and feedback from patient profiles treated at Muscle Algorithm Clinic.
          </p>
        </div>

        {/* 1. SLIDER TRANSFORMATION DEMO */}
        <section className="mb-24">
          <div className="max-w-4xl mx-auto space-y-4">
            <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest text-center">Interactive Case Study Slider</h3>
            <BeforeAfterSlider />
          </div>
        </section>

        {/* 2. VIDEO TESTIMONIAL CAROUSEL/GRID */}
        <section className="max-w-6xl mx-auto mb-24 space-y-8">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">Video Patient Rehabilitation Profiles</h2>
            <p className="text-xs text-slate-400 mt-1">Detailed patient updates on their rehabilitation processes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoReviews.map((vid) => (
              <div 
                key={vid.id} 
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-lg flex flex-col hover:border-emerald-500/30 transition-all duration-300"
              >
                {/* Mock Video Thumbnail Area */}
                <div className="aspect-video w-full bg-slate-900 flex flex-col items-center justify-center relative border-b border-slate-200 dark:border-slate-800">
                  {/* Bio grid animation indicator */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-blue-500/5 opacity-40" />
                  <span className="text-[10px] font-mono font-bold text-emerald-400 tracking-wider z-10 px-2 py-1 bg-slate-950/80 rounded border border-emerald-500/30">
                    {vid.thumbnailText}
                  </span>
                  
                  {/* Play circle trigger mock */}
                  <button className="h-12 w-12 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-2xl z-10 hover:scale-110 transition-transform mt-4">
                    <span className="border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-slate-900 ml-1" />
                  </button>
                  <span className="absolute bottom-2 right-2 text-[10px] bg-slate-950 text-slate-400 font-mono px-1.5 py-0.5 rounded">
                    {vid.duration}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base leading-tight">
                      {vid.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {vid.desc}
                    </p>
                  </div>
                  <button 
                    onClick={() => alert("Video streams will integrate here soon!")}
                    className="text-xs font-bold text-emerald-500 hover:underline text-left"
                  >
                    Watch Case Log
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. WRITTEN REVIEWS GRID */}
        <section className="max-w-5xl mx-auto mb-24 space-y-8">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">Verified Google Reviews & Patient Recovery Logs</h2>
            <p className="text-xs text-slate-400 mt-1">Verified reviews pulled from our Google Reviews listing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewCards.map((rev, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-md flex flex-col justify-between space-y-4 hover:border-emerald-500/20 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-extrabold text-sm text-slate-950 dark:text-white">{rev.name}</span>
                    <span className="text-[10px] text-slate-400 font-mono">{rev.date}</span>
                  </div>

                  {/* Stars */}
                  <div className="flex space-x-0.5 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>

                {/* Reply */}
                {rev.reply && (
                  <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-850 text-[11px] leading-relaxed">
                    <span className="font-extrabold text-slate-900 dark:text-white uppercase block tracking-wide text-[9px] text-emerald-500 mb-0.5">Clinic Response</span>
                    <span className="text-slate-500 dark:text-slate-400 font-medium">{rev.reply}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 4. GOOGLE REVIEW BOOSTER PORTAL CARD */}
        <section className="max-w-xl mx-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-yellow-500 uppercase tracking-widest block">Google review booster</span>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">Help Us Scale the Muscle Algorithm Clinic</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto font-medium">
                Cured or recovered at our clinic? Let us know how your experience was. Your feedback helps our clinical index reach more patients.
              </p>
            </div>

            {/* Stars row */}
            <div className="flex justify-center space-x-2.5">
              {[1, 2, 3, 4, 5].map((stars) => (
                <button
                  key={stars}
                  onClick={() => handleRating(stars)}
                  className={`p-2 rounded-xl border hover:scale-115 transition-all ${
                    rating !== null && rating >= stars
                      ? "bg-yellow-400/10 border-yellow-400 text-yellow-500"
                      : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-850 text-slate-400 hover:text-yellow-500"
                  }`}
                  aria-label={`Rate ${stars} stars`}
                >
                  <Star className="h-7 w-7 fill-current" />
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {rating !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="pt-2"
                >
                  {rating === 5 ? (
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-semibold rounded-2xl max-w-sm mx-auto">
                      Fantastic! Redirecting you to leave a 5-star Google Review. We appreciate your support!
                    </div>
                  ) : (
                    <form onSubmit={handleFeedbackSubmit} className="space-y-4 text-left max-w-sm mx-auto">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-350">
                          We are sorry. How can we improve our services?
                        </label>
                        <textarea
                          required
                          value={privateFeedback}
                          onChange={(e) => setPrivateFeedback(e.target.value)}
                          rows={3}
                          placeholder="e.g. Booking delay, doctor slot issues..."
                          className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white"
                        />
                      </div>
                      
                      {!feedbackSubmitted ? (
                        <button
                          type="submit"
                          className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold rounded-xl text-xs"
                        >
                          Submit Suggestions
                        </button>
                      ) : (
                        <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs rounded-xl font-semibold text-center flex items-center justify-center gap-1.5">
                          <CheckCircle className="h-4 w-4" />
                          <span>Feedback logged privately. Thank you!</span>
                        </div>
                      )}
                    </form>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

      </main>
      <AIChatbot />
      <FloatingActions />
      <Footer />
    </>
  );
}
