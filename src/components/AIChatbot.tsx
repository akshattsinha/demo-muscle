"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, Calendar, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Message {
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! I am your Muscle Algorithm AI Assistant. How can I help you transform your pain into performance today?",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestionPrompts = [
    "I have knee pain, what should I do?",
    "Can physiotherapy help with back pain?",
    "How does FIT90 work?"
  ];

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add User Message
    const userMsg: Message = { sender: "user", text, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    // AI Response Algorithm (Mock NLP matching)
    setTimeout(() => {
      let botResponse = "";
      const lowerText = text.toLowerCase();

      if (lowerText.includes("knee") || lowerText.includes("joint") || lowerText.includes("leg")) {
        botResponse = "Knee pain is commonly caused by patella maltracking, tight quadriceps, or meniscus wear. Our therapists use alignment screening to prescribe quad strengthening and soft tissue therapy. \n\nFor a personalized assessment, please book a consultation.";
      } else if (lowerText.includes("back") || lowerText.includes("spine") || lowerText.includes("lumbar") || lowerText.includes("sciatica")) {
        botResponse = "Back pain often stems from poor core activation, prolonged sitting, or disc compressions. We analyze your movement patterns and use chiropractic alignment, core algorithm builders, and posture training to fix it. \n\nFor a personalized assessment, please book a consultation.";
      } else if (lowerText.includes("fit90") || lowerText.includes("90 day") || lowerText.includes("lose") || lowerText.includes("fitness")) {
        botResponse = "FIT90 is our premier 90-day program. For only ₹4,999, you get customized workout schedules, clinical nutrition tracking, weekly progress reports, and postural checkups. \n\nFor a personalized roadmap, join FIT90 or book a consultation.";
      } else if (lowerText.includes("shoulder") || lowerText.includes("neck") || lowerText.includes("cervical") || lowerText.includes("posture")) {
        botResponse = "Neck and shoulder pain are heavily linked to cervical alignment issues and desk-worker posture. Physical rehabilitation helps decompress joints and rebuild stabilization. \n\nFor a personalized assessment, please book a consultation.";
      } else {
        botResponse = "Thanks for asking! That is a unique physical concern. We highly recommend talking directly with our physiotherapists or nutritionists to get an accurate clinical plan. \n\nFor a personalized assessment, please book a consultation.";
      }

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: botResponse, timestamp: new Date() }
      ]);
      setIsTyping(false);
    }, 1000);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden md:block">
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center space-x-2 px-4 py-3.5 bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white font-bold rounded-full shadow-2xl relative"
        aria-label="Open AI Health Assistant"
      >
        <Bot className="h-5 w-5" />
        <span className="text-sm">AI Health Assistant</span>
        <span className="flex h-2.5 w-2.5 absolute top-0 right-0 mt-0.5 mr-0.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
      </motion.button>

      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 50 }}
            className="absolute bottom-16 left-0 w-96 h-[500px] glass-card rounded-2xl flex flex-col overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="p-1.5 bg-emerald-500 rounded-lg">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold flex items-center gap-1.5">
                    <span>Muscle AI</span>
                    <span className="flex items-center text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded-full font-mono font-medium">
                      <Sparkles className="h-2.5 w-2.5 mr-0.5" />
                      AI-POWERED
                    </span>
                  </h4>
                  <div className="flex items-center space-x-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[10px] text-slate-400 font-semibold">Ready to help</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50 dark:bg-slate-950/50">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line shadow-sm ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white rounded-br-none"
                        : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200/50 dark:border-slate-800/50 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex items-center space-x-1">
                    <span className="h-2 w-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce"></span>
                    <span className="h-2 w-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce delay-100"></span>
                    <span className="h-2 w-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestion Prompts */}
            {messages.length === 1 && (
              <div className="p-3 bg-slate-100/50 dark:bg-slate-900/50 border-t border-slate-200/50 dark:border-slate-800/50 space-y-1.5">
                <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider px-1">Suggested Questions</span>
                <div className="flex flex-col space-y-1">
                  {suggestionPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(prompt)}
                      className="text-left text-xs bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-850 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-350 px-3 py-2 rounded-xl transition-all duration-150"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Overlay Redirect */}
            <div className="px-4 py-2 bg-emerald-500/10 border-t border-emerald-500/20 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <span>Need clinical treatment?</span>
              <Link href="/book" onClick={() => setIsOpen(false)} className="flex items-center gap-1 hover:underline">
                <Calendar className="h-3 w-3" />
                <span>Book Free Consult</span>
              </Link>
            </div>

            {/* Input Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputText);
              }}
              className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center space-x-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about pain, exercise, or FIT90..."
                className="flex-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white"
              />
              <button
                type="submit"
                className="p-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition-colors shadow-lg"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
