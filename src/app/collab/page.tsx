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
  const [phone, setPhone] = useState("");
  const [collabType, setCollabType] = useState("Corporate Wellness");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !org) {
      alert("Please enter Name, Organization, and Email.");
      return;
    }
    // Ready for Google Forms action hook: e.g. post to entry.xxxx parameters or redirect to prefilled link.
    setIsSubmitted(true);
  };

  return (
    <>
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
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white"
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

                  <div className="pt-4 border-t border-slate-150 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">
                      *Supports custom Google Forms links.
                    </span>
                    <button
                      type="submit"
                      className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white dark:text-slate-950 font-extrabold text-sm rounded-xl shadow-lg flex items-center space-x-1.5"
                    >
                      <span>Apply for Collaboration</span>
                      <ArrowRight className="h-4 w-4" />
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
