import React from "react";
import Link from "next/link";
import { clinicConfig } from "@/config/clinicConfig";
import { Phone, MapPin, Clock, Activity } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-600 border-t border-slate-200 pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="p-2 bg-emerald-500 text-white rounded-lg">
                <Activity className="h-6 w-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">
                Muscle Algorithm <span className="text-emerald-600 font-mono">Clinic</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              We decode pain using scientific biomechanical algorithms. Our clinic integrates expert physiotherapy, precision nutrition, and performance coaching to help you transform your health permanently.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-200 hover:bg-emerald-500 hover:text-white text-slate-700 rounded-xl transition-all"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-200 hover:bg-emerald-500 hover:text-white text-slate-700 rounded-xl transition-all"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-200 hover:bg-emerald-500 hover:text-white text-slate-700 rounded-xl transition-all"
                aria-label="Youtube"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 font-bold text-base mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-emerald-600 transition-colors">Homepage</Link>
              </li>
              <li>
                <Link href="/fit90" className="hover:text-emerald-600 transition-colors">FIT90 Program</Link>
              </li>
              <li>
                <Link href="/education" className="hover:text-emerald-600 transition-colors">Education Center</Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-emerald-600 transition-colors">Testimonials & Reviews</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-emerald-600 transition-colors">Clinic Gallery</Link>
              </li>
              <li>
                <Link href="/collab" className="hover:text-emerald-600 transition-colors">Collab & Partnerships</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-slate-900 font-bold text-base mb-6 tracking-wide">Our Services</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link href="/#services" className="hover:text-emerald-600 transition-colors">Physio Rehabilitation (On Site)</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-emerald-600 transition-colors">Home Visit Physiotherapy</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-emerald-600 transition-colors">Online Consultation</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-emerald-600 transition-colors">Precision Nutritional Guidance</Link>
              </li>
              <li>
                <Link href="/free-assessment" className="hover:text-emerald-600 transition-colors font-semibold text-emerald-600">Free Health Assessment</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="text-slate-900 font-bold text-base mb-6 tracking-wide">Contact Us</h3>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <a
                  href={clinicConfig.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600 transition-colors leading-snug"
                >
                  {clinicConfig.address}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-600 shrink-0" />
                <a href={`tel:${clinicConfig.phoneRaw}`} className="hover:text-emerald-600 transition-colors">
                  {clinicConfig.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="leading-snug space-y-1">
                  {clinicConfig.businessHours.map((bh, idx) => (
                    <div key={idx}>
                      <span className="text-slate-900 font-semibold">{bh.days}:</span> {bh.hours}
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-slate-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Muscle Algorithm Clinic. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-slate-500">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-500">Terms of Service</Link>
            <Link href="/qr" className="hover:text-slate-650 text-emerald-600 font-semibold">QR Check-In Board</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
