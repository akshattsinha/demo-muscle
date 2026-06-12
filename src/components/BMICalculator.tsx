"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, Activity, Smile } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BMICalculator() {
  const [height, setHeight] = useState<number>(170); // cm
  const [weight, setWeight] = useState<number>(70); // kg
  const [age, setAge] = useState<number>(28);
  const [activity, setActivity] = useState<string>("1.375"); // Moderately active multiplier
  const [result, setResult] = useState<{
    bmi: number;
    category: string;
    categoryColor: string;
    calories: number;
    recommendation: string;
  } | null>(null);

  const calculateHealth = (e: React.FormEvent) => {
    e.preventDefault();
    const heightInMeters = height / 100;
    const bmiVal = weight / (heightInMeters * heightInMeters);
    const bmi = parseFloat(bmiVal.toFixed(1));

    // Category check
    let category = "";
    let categoryColor = "";
    let recommendation = "";

    if (bmi < 18.5) {
      category = "Underweight";
      categoryColor = "text-blue-500 bg-blue-500/10 border-blue-500/20";
      recommendation = "Your weight falls below the optimal range. We suggest a structured caloric surplus nutrition plan paired with progressive hypertrophy resistance training to safely build muscle mass.";
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Normal Weight";
      categoryColor = "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
      recommendation = "Excellent! You are in a highly functional weight zone. We recommend core stability, functional range of motion mobility, and high-performance cardiovascular routines to sustain this baseline.";
    } else if (bmi >= 25 && bmi < 30) {
      category = "Overweight";
      categoryColor = "text-orange-500 bg-orange-500/10 border-orange-500/20";
      recommendation = "You have moderate excess weight. A sustainable caloric deficit diet, low-impact joints training, and weekly tracking is recommended to decompress spinal columns and drop fat.";
    } else {
      category = "Obese";
      categoryColor = "text-red-500 bg-red-500/10 border-red-500/20";
      recommendation = "Your profile points to high metabolic load. We strongly recommend clinical nutrition supervision paired with joint-safe corrective exercise and physiotherapy to prevent orthopedic wear.";
    }

    // TDEE Estimation (Harris-Benedict equation base approximation)
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5; // unisex base approx
    const calories = Math.round(bmr * parseFloat(activity));

    setResult({
      bmi,
      category,
      categoryColor,
      calories,
      recommendation
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">
      <div className="flex items-center space-x-2.5 mb-8">
        <div className="p-2.5 bg-emerald-500 text-white rounded-xl shadow-lg">
          <Calculator className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Health Score & BMI Calculator</h3>
          <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold font-mono">Algorithm version 4.2</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Inputs (Left) */}
        <form onSubmit={calculateHealth} className="lg:col-span-5 space-y-5">
          {/* Height Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-bold text-slate-700 dark:text-slate-300">
              <span>Height</span>
              <span className="text-emerald-500">{height} cm</span>
            </div>
            <input
              type="range"
              min="100"
              max="220"
              value={height}
              onChange={(e) => setHeight(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          {/* Weight Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-bold text-slate-700 dark:text-slate-300">
              <span>Weight</span>
              <span className="text-emerald-500">{weight} kg</span>
            </div>
            <input
              type="range"
              min="30"
              max="150"
              value={weight}
              onChange={(e) => setWeight(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          {/* Age and Activity Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Age</label>
              <input
                type="number"
                min="10"
                max="100"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value) || 28)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Activity</label>
              <select
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-2.5 py-2.5 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                <option value="1.2">Sedentary</option>
                <option value="1.375">Lightly Active</option>
                <option value="1.55">Moderately Active</option>
                <option value="1.725">Very Active</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white dark:text-slate-950 font-extrabold text-sm rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <span>Analyze Health Profile</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        {/* Results Visualizer (Right) */}
        <div className="lg:col-span-7 h-full">
          {result ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-800/60 p-6 rounded-2xl h-full flex flex-col justify-between space-y-6"
            >
              {/* Score Display */}
              <div className="grid grid-cols-2 gap-4 items-center">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase">Computed BMI</span>
                  <div className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-baseline">
                    {result.bmi}
                    <span className="text-xs font-medium text-slate-400 ml-1">kg/m²</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase block mb-1">Status</span>
                  <span className={`inline-block px-3 py-1.5 rounded-lg border text-sm font-extrabold ${result.categoryColor}`}>
                    {result.category}
                  </span>
                </div>
              </div>

              {/* Slider scale gauge indicator */}
              <div className="space-y-1">
                <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-850 rounded-full relative overflow-hidden flex">
                  <div className="h-full w-[18.5%] bg-blue-500/70 border-r border-slate-50 dark:border-slate-900" />
                  <div className="h-full w-[6.5%] bg-emerald-500 border-r border-slate-50 dark:border-slate-900" />
                  <div className="h-full w-[5%] bg-orange-500 border-r border-slate-50 dark:border-slate-900" />
                  <div className="h-full w-[70%] bg-red-500" />
                  
                  {/* Pin locator indicator */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-slate-900 dark:bg-white shadow-[0_0_4px_rgba(255,255,255,1)] transition-all duration-500"
                    style={{
                      left: `${Math.min(98, Math.max(2, ((result.bmi - 10) / 30) * 100))}%`
                    }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono font-semibold text-slate-400 dark:text-slate-500 px-1 pt-1">
                  <span>10 (Min)</span>
                  <span>18.5 (Normal)</span>
                  <span>25 (Over)</span>
                  <span>30 (Obese)</span>
                  <span>40 (Max)</span>
                </div>
              </div>

              {/* Caloric Intake Estimate */}
              <div className="flex items-center space-x-3.5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 p-4 rounded-xl shadow-sm">
                <Activity className="h-5 w-5 text-emerald-500" />
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide">Daily Calorie Target (TDEE)</h4>
                  <p className="text-base font-extrabold text-slate-900 dark:text-white font-mono">
                    {result.calories} <span className="text-xs font-semibold text-slate-400 font-sans">kcal / day to maintain weight</span>
                  </p>
                </div>
              </div>

              {/* Recommendation text */}
              <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-medium">
                {result.recommendation}
              </p>

              {/* CTA Booking Link */}
              <div className="border-t border-slate-200 dark:border-slate-800/80 pt-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <span className="text-xs font-bold text-slate-500 leading-snug">
                  Book a consultation with our experts to get your customized fitness roadmap.
                </span>
                <Link href="/book" className="shrink-0">
                  <button className="w-full md:w-auto px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl text-xs shadow-md shadow-emerald-500/10 flex items-center justify-center space-x-1.5">
                    <span>Claim Free Roadmap</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ) : (
            <div className="h-full min-h-[300px] border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col items-center justify-center text-slate-400 p-8 text-center bg-slate-50/50 dark:bg-slate-950/20">
              <Smile className="h-10 w-10 text-slate-300 dark:text-slate-700 mb-3" />
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                Enter your dimensions and tap "Analyze Health Profile" to view your biometric calculation score.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
