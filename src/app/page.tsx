"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import AIChatbot from "@/components/AIChatbot";
import SuccessCounters from "@/components/SuccessCounters";
import PostureTransformation from "@/components/PostureTransformation";
import InteractiveBodyMap from "@/components/InteractiveBodyMap";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import BMICalculator from "@/components/BMICalculator";
import { clinicConfig } from "@/config/clinicConfig";
import { 
  Phone, 
  MessageCircle, 
  Calendar, 
  Home as HomeIcon, 
  Building, 
  Video, 
  Apple, 
  ChevronRight, 
  ArrowRight, 
  Activity, 
  ShieldCheck, 
  X, 
  Star,
  MapPin
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [selectedService, setSelectedService] = useState<typeof clinicConfig.services[0] | null>(null);

  // Map service icon name to React Lucide Icon component
  const renderServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Home": return <HomeIcon className="h-6 w-6" />;
      case "Building": return <Building className="h-6 w-6" />;
      case "Video": return <Video className="h-6 w-6" />;
      case "Apple": return <Apple className="h-6 w-6" />;
      default: return <Activity className="h-6 w-6" />;
    }
  };

  return (
    <>
      <title>Best Physiotherapy Clinic in Mansarovar, Jaipur | Muscle Algorithm Clinic</title>
      <meta name="description" content="Expert physiotherapy, pain rehabilitation, chiropractic adjustment, posture correction, clinical nutrition, and fitness coaching in Mansarovar, Jaipur." />
      <link rel="canonical" href="https://musclealgorithm.in" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="Best Physiotherapy Clinic in Mansarovar, Jaipur | Muscle Algorithm Clinic" />
      <meta property="og:description" content="Expert physiotherapy, pain rehabilitation, chiropractic adjustment, posture correction, clinical nutrition, and fitness coaching in Mansarovar, Jaipur." />
      <meta property="og:url" content="https://musclealgorithm.in" />
      <meta property="og:image" content="https://musclealgorithm.in/logo.png" />
      <meta property="og:type" content="website" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Best Physiotherapy Clinic in Mansarovar, Jaipur | Muscle Algorithm Clinic" />
      <meta name="twitter:description" content="Expert physiotherapy, pain rehabilitation, chiropractic adjustment, posture correction, clinical nutrition, and fitness coaching in Mansarovar, Jaipur." />
      <meta name="twitter:image" content="https://musclealgorithm.in/logo.png" />

      {/* Structured Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Muscle Algorithm Clinic",
            "alternateName": "Muscle Algorithm Physiotherapy & Rehabilitation Clinic",
            "image": "https://musclealgorithm.in/logo.png",
            "logo": "https://musclealgorithm.in/logo.png",
            "@id": "https://musclealgorithm.in/#clinic",
            "url": "https://musclealgorithm.in",
            "telephone": "+91 92573 50214",
            "priceRange": "$$",
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "Naruka Mansion, Plot No. 4, New Sanganer Rd, near HDFC Bank, opp. Rajat Path, Ganpatpura, Mansarovar",
                "addressLocality": "Jaipur",
                "addressRegion": "Rajasthan",
                "postalCode": "302020",
                "addressCountry": "IN"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "Plot No. 5, Sumer Nagar, Sunder Nagar Scheme, near Iskon Temple Road, Muhana Mandi Road",
                "addressLocality": "Jaipur",
                "addressRegion": "Rajasthan",
                "postalCode": "302020",
                "addressCountry": "IN"
              }
            ],
            "geo": [
              {
                "@type": "GeoCoordinates",
                "latitude": 26.8523,
                "longitude": 75.7516
              }
            ],
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "08:00",
                "closes": "20:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "09:00",
                "closes": "13:00"
              }
            ],
            "sameAs": [
              "https://facebook.com",
              "https://instagram.com",
              "https://www.youtube.com/channel/UCV7Un8kRSXxfcHfhr0QQwjA"
            ],
            "department": [
              {
                "@type": "MedicalSpecialty",
                "name": "Physiotherapy & Physical Rehabilitation"
              },
              {
                "@type": "MedicalSpecialty",
                "name": "Clinical Nutrition & Dietetics"
              }
            ]
          })
        }}
      />
      <Navbar />
      
      <main className="flex-grow">
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 bg-slate-50 dark:bg-slate-950">
          {/* Radial blur backdrops */}
          <div className="absolute top-10 left-10 h-80 w-80 rounded-full glow-blur-1 filter blur-[60px] pointer-events-none opacity-40" />
          <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full glow-blur-2 filter blur-[60px] pointer-events-none opacity-40" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Headline & Action Items */}
              <div className="order-2 lg:order-1 lg:col-span-7 space-y-6 text-center lg:text-left">
                {/* Review Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-bold uppercase tracking-wider"
                >
                  <Star className="h-4 w-4 fill-emerald-500 stroke-none" />
                  <span>5.0 ★ Rated (180+ Google Reviews)</span>
                </motion.div>                {/* Primary Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
                >
                  Transform <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-blue-600 via-emerald-500 to-lime-500 bg-clip-text text-transparent">
                    Pain Into Performance
                  </span>
                  <span className="sr-only"> - Best Physiotherapy Clinic in Mansarovar, Jaipur</span>
                </motion.h1>
 
                {/* Subheadline */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed"
                >
                  Expert Physiotherapy, Rehabilitation, Nutrition Guidance, and Fitness Coaching Under One Roof in Mansarovar, Jaipur. We decode physical health with biomechanical algorithms.
                </motion.p>

                {/* CTA Action Deck */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3"
                >
                  <Link href="/book" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold rounded-2xl shadow-xl shadow-emerald-500/20 transition-all duration-200">
                      <Calendar className="h-5 w-5" />
                      <span>Book Consultation</span>
                    </button>
                  </Link>

                  <a href={`tel:${clinicConfig.phoneRaw}`} className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-extrabold rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md transition-all duration-200">
                      <Phone className="h-5 w-5 text-blue-500" />
                      <span>Call Now</span>
                    </button>
                  </a>

                  <a
                    href={clinicConfig.whatsappLink("consultation")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <button className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-950 font-extrabold rounded-2xl shadow-lg transition-all duration-200">
                      <MessageCircle className="h-5 w-5 text-emerald-500 fill-emerald-500" />
                      <span>WhatsApp Us</span>
                    </button>
                  </a>
                </motion.div>

                {/* Checklist Badges */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 pt-6 border-t border-slate-200 dark:border-slate-850 text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" /> Clinic Setup
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" /> Certified Specialists
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" /> Dynamic Monitoring
                  </span>
                </div>
              </div>

              {/* Right Column: Hero Visual Graphic */}
              <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative h-[320px] w-[320px] md:h-[400px] md:w-[400px] flex items-center justify-center"
                >
                  {/* Orbit rings */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-slate-300 dark:border-slate-800 animate-spin [animation-duration:120s]" />
                  <div className="absolute inset-8 rounded-full border border-emerald-500/10 animate-spin [animation-duration:60s]" />

                  {/* Background Circle */}
                  <div className="absolute inset-6 bg-gradient-to-tr from-blue-600/10 to-emerald-500/10 dark:from-blue-600/20 dark:to-emerald-500/25 border border-slate-200 dark:border-slate-850 rounded-full shadow-2xl" />

                  {/* Core Doctor Image */}
                  <div className="relative w-full h-full flex items-end justify-center z-10 overflow-visible">
                    <img 
                      src="/dr_akshat.png" 
                      alt="Dr. Akshat Sinha" 
                      className="h-[140%] w-auto object-contain drop-shadow-2xl select-none" 
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SUCCESS COUNTERS */}
        <section className="bg-slate-50 dark:bg-slate-950 pb-16">
          <SuccessCounters />
        </section>

        {/* 3. SCROLL-DRIVEN POSTURE TRANSFORMATION */}
        <section className="border-t border-b border-slate-200 dark:border-slate-850">
          <PostureTransformation />
        </section>

        {/* 4. SERVICES SECTION */}
        <section id="services" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-16">
              <span className="text-xs font-mono font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-widest">Scientific Frameworks</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Our Rehabilitation Specialties in Jaipur
              </h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium max-w-xl mx-auto text-sm sm:text-base">
                Explore clinical modules mapped to dynamic recovery paths, tailored to cure joints and scale human performance.
              </p>
            </div>

            {/* Service Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clinicConfig.services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-850 p-6 rounded-2xl flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    {/* Icon Box */}
                    <div className="p-3 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 text-emerald-500 group-hover:text-white group-hover:bg-emerald-500 rounded-xl w-fit shadow-sm group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-300">
                      {renderServiceIcon(service.icon)}
                    </div>
                    {/* Header */}
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                      {service.title}
                    </h3>
                    {/* Description */}
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-slate-200/50 dark:border-slate-850/80 mt-6 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 flex items-center gap-1 transition-colors"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                    <Link href="/book">
                      <button className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-[10px] rounded-lg shadow-sm">
                        Book Now
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. INTERACTIVE HUMAN BODY MAP SECTION */}
        <section className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-b border-slate-200 dark:border-slate-850">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-12">
              <span className="text-xs font-mono font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-widest">Pain Mapper Diagnostics</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Anatomical Pain Index
              </h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium max-w-xl mx-auto text-sm sm:text-base">
                Click highlighted nodes on the model scanner below to explore common joint deficits and targeted treatment roadmaps in Jaipur.
              </p>
            </div>

            <InteractiveBodyMap />
          </div>
        </section>

        {/* 6. BEFORE & AFTER TRANSFORMATION SLIDER */}
        <section className="py-24 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-16">
              <span className="text-xs font-mono font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-widest">Evidence & Verified Results</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Algorithmic Transformations
              </h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium max-w-xl mx-auto text-sm sm:text-base">
                Drag the interactive comparison slider to witness skeletal corrections, spinal realignments, and body recomposition shifts at our Mansarovar clinic.
              </p>
            </div>

            <BeforeAfterSlider />
          </div>
        </section>

        {/* 7. BMI CALCULATOR SECTION */}
        <section className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-b border-slate-200 dark:border-slate-850">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-16">
              <span className="text-xs font-mono font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-widest">Self Diagnostics</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Biometric Intake Analyzer
              </h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium max-w-xl mx-auto text-sm sm:text-base">
                Measure your body mass indices and metabolic caloric baselines to isolate load parameters for weight loss programs in Jaipur.
              </p>
            </div>

            <BMICalculator />
          </div>
        </section>

        {/* 8. OUR BRANCHES SECTION */}
        <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-16">
              <span className="text-xs font-mono font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-widest">Reach Our Facilities</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Our Clinic Branches
              </h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium max-w-xl mx-auto text-sm sm:text-base">
                We now offer scientific biomechanical treatments across two locations in Jaipur. Choose the branch nearest to you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Branch 1: Mansarovar Main Clinic */}
              <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col space-y-6">
                {/* Media Toggle View */}
                <div className="relative aspect-[16/10] w-full border border-slate-250 dark:border-slate-800 rounded-2xl overflow-hidden shadow-md bg-slate-100 dark:bg-slate-900">
                  <iframe
                    src={clinicConfig.branches[0].googleMapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Google Maps Location for Mansarovar Main Clinic"
                  />
                </div>

                {/* Details */}
                <div className="space-y-5 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-widest">Branch 1 • Main Clinic</span>
                      <span className="text-[11px] font-mono font-bold text-yellow-600 bg-yellow-500/10 px-2.5 py-0.5 rounded-full">5.0 ★ Rated</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white leading-tight">
                      {clinicConfig.branches[0].name}
                    </h3>
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 flex items-start gap-2 leading-relaxed">
                      <MapPin className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <a
                        href={clinicConfig.branches[0].googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-500 transition-colors"
                      >
                        {clinicConfig.branches[0].address}
                      </a>
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 space-y-4">
                    {/* Action Hotlines */}
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href={`tel:${clinicConfig.branches[0].phoneRaw}`}
                        className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-center text-xs font-extrabold text-slate-850 dark:text-slate-200 flex items-center justify-center gap-1.5 hover:border-emerald-500 hover:text-emerald-500 transition-all"
                      >
                        <Phone className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span>Call Branch</span>
                      </a>
                      <a
                        href={clinicConfig.whatsappLink("general")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-center text-xs font-extrabold text-slate-850 dark:text-slate-200 flex items-center justify-center gap-1.5 hover:border-emerald-500 hover:text-emerald-500 transition-all"
                      >
                        <MessageCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span>WhatsApp</span>
                      </a>
                    </div>

                    <Link href="/book" className="block w-full">
                      <button className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white dark:text-slate-950 font-extrabold text-xs rounded-xl shadow-md flex items-center justify-center space-x-1.5 transition-all">
                        <Calendar className="h-4 w-4" />
                        <span>Book Mansarovar Slot</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Branch 2: Devenia Multispeciality Clinic */}
              <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col space-y-6">
                {/* Media Toggle View */}
                <div className="relative aspect-[16/10] w-full border border-slate-250 dark:border-slate-800 rounded-2xl overflow-hidden shadow-md bg-slate-100 dark:bg-slate-900">
                  <iframe
                    src={clinicConfig.branches[1].googleMapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Google Maps Location for Devenia Multispeciality Clinic"
                  />
                </div>

                {/* Details */}
                <div className="space-y-5 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-widest">Branch 2 • Expansion</span>
                      <span className="text-[11px] font-mono font-bold text-emerald-600 bg-emerald-500/10 px-2.5 py-0.5 rounded-full font-mono">New Branch</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white leading-tight">
                      {clinicConfig.branches[1].name}
                    </h3>
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 flex items-start gap-2 leading-relaxed">
                      <MapPin className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <a
                        href={clinicConfig.branches[1].googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-500 transition-colors"
                      >
                        {clinicConfig.branches[1].address}
                      </a>
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 space-y-4">
                    {/* Action Hotlines */}
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href={`tel:${clinicConfig.branches[1].phoneRaw}`}
                        className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-center text-xs font-extrabold text-slate-850 dark:text-slate-200 flex items-center justify-center gap-1.5 hover:border-emerald-500 hover:text-emerald-500 transition-all"
                      >
                        <Phone className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span>Call Branch</span>
                      </a>
                      <a
                        href={clinicConfig.whatsappLink("general")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-center text-xs font-extrabold text-slate-850 dark:text-slate-200 flex items-center justify-center gap-1.5 hover:border-emerald-500 hover:text-emerald-500 transition-all"
                      >
                        <MessageCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span>WhatsApp</span>
                      </a>
                    </div>

                    <Link href="/book" className="block w-full">
                      <button className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white dark:text-slate-950 font-extrabold text-xs rounded-xl shadow-md flex items-center justify-center space-x-1.5 transition-all">
                        <Calendar className="h-4 w-4" />
                        <span>Book Sumer Nagar Slot</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* SERVICE DETAIL DIALOG MODAL */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl z-10 space-y-5"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center space-x-3.5">
                <div className="p-3 bg-emerald-500 text-white rounded-xl shadow-lg">
                  {renderServiceIcon(selectedService.icon)}
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-widest block">Clinical Module</span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{selectedService.title}</h3>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-350 leading-relaxed bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-100 dark:border-slate-850">
                  {selectedService.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Diagnostic & Therapy Details</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {selectedService.details}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-150 dark:border-slate-800 flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-3 border border-slate-200 dark:border-slate-850 text-slate-700 dark:text-slate-350 font-bold rounded-xl text-xs hover:bg-slate-50 dark:hover:bg-slate-850/50"
                >
                  Dismiss
                </button>
                <Link href="/book" onClick={() => setSelectedService(null)} className="flex-1">
                  <button className="w-full flex items-center justify-center space-x-1.5 px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold rounded-xl text-xs shadow-md shadow-emerald-500/10">
                    <Calendar className="h-4 w-4" />
                    <span>Book Service Consultation</span>
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AIChatbot />
      <FloatingActions />
      <Footer />
    </>
  );
}
