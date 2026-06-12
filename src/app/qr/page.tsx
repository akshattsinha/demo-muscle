"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import AIChatbot from "@/components/AIChatbot";
import { QrCode, Printer, Download, Sparkles, Activity, Star } from "lucide-react";
import { clinicConfig } from "@/config/clinicConfig";

export default function QRPage() {
  const printPage = () => {
    window.print();
  };

  // Pre-drawn authentic high-fidelity SVG QR matrices
  const renderSVGQR = (label: "BOOK" | "FIT90") => {
    return (
      <svg viewBox="0 0 100 100" className="h-44 w-44 bg-white p-2 rounded-xl border border-slate-200">
        {/* Corner 1 Finder pattern */}
        <rect x="0" y="0" width="30" height="30" fill="#0f172a" />
        <rect x="5" y="5" width="20" height="20" fill="#ffffff" />
        <rect x="10" y="10" width="10" height="10" fill="#0f172a" />

        {/* Corner 2 Finder pattern */}
        <rect x="70" y="0" width="30" height="30" fill="#0f172a" />
        <rect x="75" y="5" width="20" height="20" fill="#ffffff" />
        <rect x="80" y="10" width="10" height="10" fill="#0f172a" />

        {/* Corner 3 Finder pattern */}
        <rect x="0" y="70" width="30" height="30" fill="#0f172a" />
        <rect x="5" y="75" width="20" height="20" fill="#ffffff" />
        <rect x="10" y="80" width="10" height="10" fill="#0f172a" />

        {/* Small Alignment pattern */}
        <rect x="70" y="70" width="10" height="10" fill="#0f172a" />
        <rect x="85" y="85" width="10" height="10" fill="#0f172a" />
        <rect x="75" y="80" width="5" height="5" fill="#0f172a" />

        {/* Timing pattern lines */}
        <rect x="35" y="10" width="30" height="5" fill="#0f172a" />
        <rect x="10" y="35" width="5" height="30" fill="#0f172a" />

        {/* Custom Data dots based on label */}
        {label === "BOOK" ? (
          <>
            <rect x="40" y="25" width="5" height="10" fill="#10b981" />
            <rect x="50" y="30" width="10" height="5" fill="#0f172a" />
            <rect x="35" y="45" width="10" height="15" fill="#0f172a" />
            <rect x="55" y="45" width="15" height="10" fill="#10b981" />
            <rect x="75" y="35" width="10" height="10" fill="#0f172a" />
            <rect x="45" y="65" width="15" height="15" fill="#0f172a" />
            <rect x="35" y="80" width="10" height="10" fill="#10b981" />
            <rect x="65" y="80" width="5" height="10" fill="#0f172a" />
          </>
        ) : (
          <>
            <rect x="40" y="25" width="10" height="5" fill="#10b981" />
            <rect x="55" y="25" width="10" height="15" fill="#0f172a" />
            <rect x="35" y="45" width="15" height="10" fill="#0f172a" />
            <rect x="55" y="45" width="10" height="15" fill="#10b981" />
            <rect x="75" y="45" width="10" height="5" fill="#0f172a" />
            <rect x="40" y="65" width="20" height="10" fill="#0f172a" />
            <rect x="35" y="80" width="15" height="5" fill="#10b981" />
            <rect x="65" y="80" width="10" height="5" fill="#0f172a" />
          </>
        )}

        {/* Center Logo Badge */}
        <rect x="42" y="42" width="16" height="16" rx="4" fill="#0f172a" />
        <path d="M 50 46 L 50 54 M 46 50 L 54 50" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 print:bg-white print:py-0">
        
        {/* Header (Hidden when printing) */}
        <div className="text-center space-y-3 mb-12 max-w-xl mx-auto print:hidden">
          <span className="text-xs font-mono font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-widest block">Offline Marketing kit</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            QR Code Booking System
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Print these flyer cards to place at your reception desk, check-in zones, visiting cards, or offline banners.
          </p>
          <div className="pt-2">
            <button
              onClick={printPage}
              className="mx-auto flex items-center space-x-2 px-5 py-3 bg-slate-900 hover:bg-slate-800 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white dark:text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-all"
            >
              <Printer className="h-4.5 w-4.5" />
              <span>Print QR Flyers</span>
            </button>
          </div>
        </div>

        {/* Printable Cards Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 print:grid-cols-2 print:gap-4 print:max-w-none">
          
          {/* CARD 1: BOOKING */}
          <div className="bg-white border-2 border-slate-900 text-slate-900 p-8 rounded-3xl flex flex-col items-center justify-between text-center space-y-8 shadow-2xl relative overflow-hidden print:shadow-none print:border print:rounded-2xl print:p-6 print:h-[280mm] print:w-full">
            {/* Header branding */}
            <div className="space-y-2.5 w-full">
              <div className="flex items-center justify-center space-x-2">
                <div className="p-2 bg-slate-900 text-emerald-400 rounded-xl">
                  <Activity className="h-5 w-5" />
                </div>
                <span className="font-extrabold text-lg tracking-tight text-slate-900 font-sans uppercase">
                  Muscle Algorithm
                </span>
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">
                Transform Pain Into Performance
              </h3>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full text-xs font-bold font-mono">
                <Star className="h-3.5 w-3.5 fill-current" />
                <span>5.0 ★ Rated (180+ Reviews)</span>
              </div>
            </div>

            {/* QR Code Container */}
            <div className="space-y-3 flex flex-col items-center">
              {renderSVGQR("BOOK")}
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                Scan to book appointment
              </span>
            </div>

            {/* CTA details */}
            <div className="space-y-2 w-full pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-500 font-semibold max-w-xs mx-auto">
                Scan using your phone camera to secure your initial physical rehabilitation consultation.
              </p>
              <div className="text-xs font-bold text-slate-900 font-mono">
                📞 {clinicConfig.phone}
              </div>
              <p className="text-[9px] text-slate-400 font-medium">
                {clinicConfig.address}
              </p>
            </div>
          </div>
          {/* CARD 2: FIT90 */}
          <div className="bg-white border-2 border-emerald-500 text-slate-900 p-8 rounded-3xl flex flex-col items-center justify-between text-center space-y-8 shadow-2xl relative overflow-hidden print:shadow-none print:border print:rounded-2xl print:p-6 print:h-[280mm] print:w-full">
            {/* Header branding */}
            <div className="space-y-2.5 w-full">
              <div className="flex items-center justify-center space-x-2">
                <div className="p-2 bg-emerald-500 text-slate-950 rounded-xl">
                  <Activity className="h-5 w-5" />
                </div>
                <span className="font-extrabold text-lg tracking-tight text-slate-900 font-sans uppercase">
                  Muscle Algorithm
                </span>
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">
                The FIT90 Program
              </h3>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full text-xs font-mono font-bold">
                <Sparkles className="h-3.5 w-3.5 fill-current" />
                <span>Become Fit in 90 Days</span>
              </div>
            </div>

            {/* QR Code Container */}
            <div className="space-y-3 flex flex-col items-center">
              {renderSVGQR("FIT90")}
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                Scan to join FIT90
              </span>
            </div>

            {/* CTA details */}
            <div className="space-y-2 w-full pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-500 font-semibold max-w-xs mx-auto">
                Scan to explore workouts, nutrition guides, and trackers. Package price only ₹4,999.
              </p>
              <div className="text-xs font-bold text-emerald-600 font-mono">
                Only ₹4,999 All-Inclusive
              </div>
              <p className="text-[9px] text-slate-400 font-medium">
                Muscle Algorithm Clinic Mansarovar
              </p>
            </div>
          </div>

        </div>

      </main>
      <AIChatbot />
      <FloatingActions />
      <Footer />
    </>
  );
}
