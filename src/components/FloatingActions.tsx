"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { clinicConfig } from "@/config/clinicConfig";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {/* 1. Floating WhatsApp Button (Persistent bottom-right - Desktop only) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end space-y-4">
        {/* Expanded Booking Floating Pill (Shown only when scrolled down on Desktop) */}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              className="flex items-center"
            >
              <Link href="/book">
                <button className="flex items-center space-x-2 px-5 py-3.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-950 font-bold rounded-full shadow-2xl transition-all duration-200 border border-slate-700/50 dark:border-white/20">
                  <Calendar className="h-4 w-4 text-emerald-500" />
                  <span>Book Consultation</span>
                </button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Badge */}
        <motion.a
          href={clinicConfig.whatsappLink("consultation")}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center h-14 w-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl relative group transition-colors duration-200"
          aria-label="Contact us on WhatsApp"
        >
          {/* Ring Pulsing Effect */}
          <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 animate-ping z-[-1]" />
          <MessageCircle className="h-7 w-7 fill-white text-emerald-500" />
          
          {/* Tooltip on hover */}
          <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 bg-slate-900 text-white font-medium text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
            Chat on WhatsApp
          </span>
        </motion.a>
      </div>

      {/* 2. Sticky WhatsApp, Call Now & Book Appointment Button Bar for Mobile Devices */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/85 dark:bg-slate-950/85 backdrop-blur-lg border-t border-slate-200/50 dark:border-slate-800/50 shadow-2xl px-4 py-3 pb-safe-bottom flex items-center gap-2">
        {/* WhatsApp Icon Button */}
        <a
          href={clinicConfig.whatsappLink("consultation")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl border border-emerald-400/20 shadow-lg shadow-emerald-500/20 transition-all duration-200 shrink-0"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-5 w-5 fill-white text-emerald-550 shrink-0" />
        </a>

        {/* Call Now Button */}
        <a
          href={`tel:${clinicConfig.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-3.5 px-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl text-xs sm:text-sm border border-slate-200 dark:border-slate-800 transition-colors duration-200"
        >
          <Phone className="h-4 w-4 text-emerald-500 fill-emerald-500" />
          <span>Call Now</span>
        </a>

        {/* Book Now Button */}
        <Link href="/book" className="flex-[1.5]">
          <button className="w-full flex items-center justify-center gap-1.5 py-3.5 px-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl text-xs sm:text-sm shadow-lg shadow-emerald-500/25 transition-all duration-200">
            <Calendar className="h-4 w-4" />
            <span>Book Appointment</span>
          </button>
        </Link>
      </div>
      
      {/* Spacer to prevent mobile content overlap with bottom sticky actions */}
      <div className="md:hidden h-20" />
    </>
  );
}
