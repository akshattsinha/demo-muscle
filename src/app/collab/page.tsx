"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import AIChatbot from "@/components/AIChatbot";
import { Handshake, ArrowRight, ShieldCheck, Mail, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Collab() {
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+91 ");
  const [collabType, setCollabType] = useState("Corporate Wellness");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    const prefix = "+91 ";
    
    // Lock value to prefix if user attempts to backspace/delete the prefix "+91 "
    if (value.length < prefix.length) {
      setPhone(prefix);
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
    
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !org) {
      alert("Please enter Name, Organization, and Email.");
      return;
    }

    const digitsOnly = phone.replace("+91", "").replace(/\D/g, "");
    if (digitsOnly.length !== 10 && digitsOnly.length !== 0) {
      alert("Phone number must have exactly 10 digits after +91.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Build the URL with query parameters (highly reliable for Google Apps Script Web Apps)
      const url = new URL("https://script.google.com/macros/s/AKfycbyPn8D8fKz89-xO_bEOG0hKQvZvskqPrgKuWFojz0rZwffbNtn2tc8bY3By5fzPezDFgA/exec");
      url.searchParams.append("name", name);
      url.searchParams.append("org", org);
      url.searchParams.append("email", email);
      url.searchParams.append("phone", phone.replace("+91 ", "").length > 0 ? phone : "N/A");
      url.searchParams.append("collabType", collabType);
      url.searchParams.append("message", message || "N/A");

      await fetch(url.toString(), {
        method: "POST",
        mode: "no-cors",
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Something went wrong. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <title>Partner & Collaborate | Muscle Algorithm Clinic Jaipur</title>
      <meta name="description" content="Establish synergistic clinical pathways. Partner with us for corporate wellness, gym affiliations, and medical referral networks in Jaipur." />
      <link rel="canonical" href="https://musclealgorithm.in/collab" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="Partner & Collaborate | Muscle Algorithm Clinic Jaipur" />
      <meta property="og:description" content="Establish synergistic clinical pathways. Partner with us for corporate wellness, gym affiliations, and medical referral networks in Jaipur." />
      <meta property="og:url" content="https://musclealgorithm.in/collab" />
      <meta property="og:image" content="https://musclealgorithm.in/logo.png" />
      <meta property="og:type" content="website" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Partner & Collaborate | Muscle Algorithm Clinic Jaipur" />
      <meta name="twitter:description" content="Establish synergistic clinical pathways. Partner with us for corporate wellness, gym affiliations, and medical referral networks in Jaipur." />
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
                "name": "Collaborate",
                "item": "https://musclealgorithm.in/collab"
              }
            ]
          })
        }}
      />
      <Navbar />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
        
        <div className="max-w-2xl mx-auto">
          
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
            
            {!isSubmitted ? (
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center space-y-2">
                  <div className="mx-auto p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 w-fit rounded-2xl">
                    <Handshake className="h-6 w-6" />
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Partner & Collaborate
                  </h1>
                  <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto">
                    Are you a sports club, gym, corporate entity, or healthcare specialist? Apply below to build synergistic clinical pathways.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Full Name *</label>
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
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Organization Name *</label>
                      <input
                        type="text"
                        required
                        value={org}
                        onChange={(e) => setOrg(e.target.value)}
                        placeholder="e.g. Jaipur Athletics Club"
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="partner@domain.com"
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Phone Number (WhatsApp)</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder=""
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Collaboration Type</label>
                    <select
                      value={collabType}
                      onChange={(e) => setCollabType(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white font-semibold"
                    >
                      <option>Corporate Wellness Program</option>
                      <option>Gym / Fitness Center Affiliation</option>
                      <option>Sports Team / Athlete Sponsorship</option>
                      <option>Influencer / Brand Collaboration</option>
                      <option>Medical Practitioner Referral Network</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Proposal Outline / Message</label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe how we can collaborate..."
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div className="pt-4 border-t border-slate-150 dark:border-slate-800 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 dark:bg-emerald-500 dark:hover:bg-emerald-600 disabled:bg-slate-450 disabled:cursor-not-allowed text-white dark:text-slate-950 font-extrabold text-sm rounded-xl shadow-lg flex items-center space-x-1.5 transition-all"
                    >
                      <span>{isSubmitting ? "Submitting request..." : "Apply for Collaboration"}</span>
                      {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center space-y-6 py-6">
                <div className="mx-auto h-16 w-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 animate-bounce" />
                </div>
                
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Application Logged!</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto font-medium">
                    Thank you <span className="font-extrabold text-slate-900 dark:text-white">{name}</span>. Your partnership request representing <span className="font-extrabold text-slate-900 dark:text-white">{org}</span> has been saved.
                  </p>
                </div>

                <p className="text-xs text-slate-400 dark:text-slate-500 max-w-xs mx-auto leading-relaxed">
                  Our corporate collaboration team will verify your proposal and contact you at {email} within 2 business days.
                </p>

                <div className="pt-4">
                  <a href="/">
                    <button className="px-6 py-3 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-350 font-bold rounded-xl text-xs hover:bg-slate-50 dark:hover:bg-slate-850">
                      Return to Homepage
                    </button>
                  </a>
                </div>
              </div>
            )}

          </div>
        </div>

      </main>
      <AIChatbot />
      <FloatingActions />
      <Footer />
    </>
  );
}
