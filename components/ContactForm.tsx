"use client";

import React, { useState } from "react";
import {
  Clock,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Loader2,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_LINK =
  "https://wa.me/917889254092?text=Hi%20TrendingMotion%2C%20I'm%20interested%20in%20your%20services.%20Can%20we%20discuss%20a%20project%3F";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate generic form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thanks! Your message has been sent successfully.");
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        details: "",
      });
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-5xl bg-[#09090D] border border-white/5 rounded-3xl shadow-2xl relative overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-5 relative z-10">
        {/* Left Side Content */}
        <div className="hidden lg:flex lg:col-span-2 p-8 lg:p-12 flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5 relative bg-[#0A0A0E]/50">
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                <img
                  src="https://i.postimg.cc/GhWnSTSq/favicon.png"
                  alt="TrendingMotion Logo"
                  className="w-6 h-6 object-contain"
                />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6 text-xs font-semibold text-indigo-400 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
              GET STARTED
            </div>

            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-6">
              Let's build <br className="hidden lg:block" />
              <span className="text-slate-400">your brand.</span>
            </h2>

            <p className="text-slate-400 mb-12 text-[15px] leading-relaxed pr-4">
              Ready to scale? Partner with TrendingMotion for expert Digital
              Marketing, SEO, and Web Development.
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-4 text-slate-300">
              <Clock className="w-5 h-5 text-slate-500 shrink-0" />
              <span className="text-sm font-medium">
                Fast & Reliable Delivery
              </span>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <ShieldCheck className="w-5 h-5 text-slate-500 shrink-0" />
              <span className="text-sm font-medium">Data-Driven Results</span>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <TrendingUp className="w-5 h-5 text-slate-500 shrink-0" />
              <span className="text-sm font-medium">
                Scalable Growth Strategies
              </span>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="lg:col-span-3 p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-500 tracking-wider uppercase">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-[#0F0F13] border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-500 tracking-wider uppercase">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full bg-[#0F0F13] border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-[11px] font-bold text-slate-500 tracking-wider uppercase">
                  Company Name
                </label>
                <span className="text-[11px] text-slate-600 font-medium">
                  (optional)
                </span>
              </div>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Brand"
                className="w-full bg-[#0F0F13] border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all font-medium"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-500 tracking-wider uppercase">
                  Service Needed
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-[#0F0F13] border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all font-medium appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: `right 0.5rem center`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: `1.5em 1.5em`,
                    paddingRight: `2.5rem`,
                  }}
                >
                  <option value="" disabled hidden>
                    Select Service
                  </option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="brand-identity">Brand Identity</option>
                  <option value="seo-analytics">SEO & Analytics</option>
                  <option value="web-development">Web Development</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-500 tracking-wider uppercase">
                  Project Budget
                </label>
                <select
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-[#0F0F13] border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all font-medium appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: `right 0.5rem center`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: `1.5em 1.5em`,
                    paddingRight: `2.5rem`,
                  }}
                >
                  <option value="" disabled hidden>
                    Select Budget
                  </option>
                  <option value="under-10k">Under ₹10,000</option>
                  <option value="10k-50k">₹10,000 - ₹50,000</option>
                  <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                  <option value="100k-plus">₹1,00,000+</option>
                </select>
              </div>
            </div>

            <div className="space-y-2 pb-2">
              <div className="flex justify-between">
                <label className="text-[11px] font-bold text-slate-500 tracking-wider uppercase">
                  Project Details
                </label>
                <span className="text-[11px] text-slate-600 font-medium">
                  (optional)
                </span>
              </div>
              <div className="relative">
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={3}
                  className="w-full bg-[#0F0F13] border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all font-medium resize-none max-h-40"
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-6 pt-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-[#25D366] hover:bg-[#20bc59] text-white py-3.5 px-4 sm:px-6 rounded-xl font-semibold transition-all shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:-translate-y-0.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.478 2.027 7.788L0 32l8.418-2.003A15.925 15.925 0 0016 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.267 13.267 0 01-6.763-1.847l-.486-.29-5.003 1.191 1.265-4.874-.317-.502A13.253 13.253 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.875c-.398-.2-2.355-1.163-2.72-1.295-.366-.133-.632-.2-.898.2-.266.398-1.031 1.295-1.264 1.561-.233.266-.466.3-.864.1-.398-.2-1.681-.619-3.2-1.977-1.183-1.056-1.981-2.36-2.214-2.758-.233-.398-.025-.613.175-.812.18-.178.398-.466.598-.699.2-.233.266-.398.399-.664.133-.266.066-.499-.033-.699-.1-.2-.9-2.166-1.232-2.966-.324-.778-.654-.673-.898-.685l-.765-.013c-.266 0-.699.1-1.065.498s-1.398 1.365-1.398 3.33 1.432 3.863 1.631 4.13c.2.265 2.82 4.305 6.832 6.034.955.413 1.7.66 2.282.845.959.306 1.832.263 2.52.16.769-.115 2.355-.963 2.688-1.893.333-.93.333-1.727.233-1.893-.1-.167-.366-.267-.765-.466z" />
                </svg>
                <span className="text-[13px] sm:text-base leading-tight">
                  Chat on WhatsApp — Get Started
                </span>
              </a>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/5"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-[#09090D] px-4 text-slate-500 font-medium">
                    or fill the form below
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-[#0F0F13] hover:bg-[#16161A] border border-white/5 text-slate-300 hover:text-white py-3.5 px-6 rounded-xl font-semibold transition-all"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send via Form
                    <ArrowRight className="w-4 h-4 ml-1 opacity-70" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
