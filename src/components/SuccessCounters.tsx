"use client";

import React, { useEffect, useState, useRef } from "react";
import { Star, Users, Flame, Heart } from "lucide-react";

interface CounterProps {
  target: number;
  suffix: string;
  duration?: number;
}

function Counter({ target, suffix, duration = 1500 }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = target;
          if (start === end) return;

          const totalFrames = Math.min(60, Math.floor(duration / 16));
          const increment = end / totalFrames;
          let frame = 0;

          const counterInterval = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            // Ease out quad formula for smooth decelerating count
            const easedVal = Math.round(end * (progress * (2 - progress)));
            
            if (frame >= totalFrames) {
              setCount(end);
              clearInterval(counterInterval);
            } else {
              setCount(easedVal);
            }
          }, 16);

          return () => clearInterval(counterInterval);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span ref={elementRef} className="font-mono font-extrabold tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

export default function SuccessCounters() {
  const stats = [
    {
      icon: <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />,
      value: 180,
      suffix: "+",
      label: "Google Reviews",
      subText: "5.0 ★ Rating"
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      value: 1000,
      suffix: "+",
      label: "Patients Treated",
      subText: "Orthopedic & Sports Rehab"
    },
    {
      icon: <Flame className="h-6 w-6 text-orange-500 fill-orange-500/20" />,
      value: 500,
      suffix: "+",
      label: "Transformations",
      subText: "FIT90 & Pain Recovery"
    },
    {
      icon: <Heart className="h-6 w-6 text-emerald-500 fill-emerald-500/20" />,
      value: 95,
      suffix: "%",
      label: "Satisfaction Rate",
      subText: "Verified Outcomes"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 rounded-2xl shadow-xl flex flex-col items-center text-center space-y-3 hover:border-emerald-500/40 transition-colors duration-300"
          >
            <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-850">
              {stat.icon}
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 mt-1 uppercase tracking-tight">
                {stat.label}
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 dark:text-slate-500 font-semibold mt-0.5">
                {stat.subText}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
