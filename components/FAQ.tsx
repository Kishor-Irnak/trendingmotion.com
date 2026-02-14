"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { BlurReveal } from "./ui/blur-reveal";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What core services does TrendingMotion provide?",
      answer:
        'We are a results-driven digital marketing agency specializing in Search Engine Optimization (SEO), Social Media Management (SMM), Pay-Per-Click (PPC) Advertising, and High-Conversion Content Strategy. Our "Motion-First" approach ensures your brand stays relevant in a fast-paced digital landscape.',
    },
    {
      question: "How does TrendingMotion improve my website’s SEO?",
      answer:
        "We use a multi-layered SEO strategy: On-Page Optimization (keywords and content), Technical SEO (site speed and mobile-friendliness), and High-Authority Backlink Building. Our goal is to rank your business on the first page of Google for search terms that actually drive sales.",
    },
    {
      question: "How long does it take to see a Return on Investment (ROI)?",
      answer:
        "While Paid Media (Ads) can generate leads almost instantly, Organic Growth and SEO typically show significant momentum within 3 to 6 months. We focus on building a sustainable digital ecosystem that provides long-term value, not just temporary spikes.",
    },
    {
      question: "Will I receive regular performance reports?",
      answer:
        "Transparency is our priority. You will receive monthly (or bi-weekly) performance reports that break down key metrics like traffic growth, lead conversion rates, and cost-per-acquisition in plain English—no confusing jargon.",
    },
    {
      question: "Can you manage my brand’s social media presence entirely?",
      answer:
        "Absolutely. From content ideation and graphic design to community management and trend-jacking, we handle everything. We ensure your brand voice remains consistent and engaging across Instagram, LinkedIn, TikTok, and Facebook.",
    },
  ];

  return (
    <section className="py-24 max-w-3xl mx-auto px-6">
      <BlurReveal className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span> Frequently
          Asked Questions
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">
          Everything You Need to Know <br /> About Our Digital Strategy
        </h2>
      </BlurReveal>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <BlurReveal key={index} delay={index * 0.1}>
            <div className="border-b border-white/10 pb-4">
              <button
                className="w-full flex items-center justify-between py-4 text-left focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span
                  className={`text-sm font-medium transition-colors ${openIndex === index ? "text-white" : "text-slate-400 group-hover:text-white"}`}
                >
                  {faq.question}
                </span>
                <span className="text-slate-500 group-hover:text-white transition-colors">
                  {openIndex === index ? (
                    <Minus size={16} />
                  ) : (
                    <Plus size={16} />
                  )}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-slate-400 text-sm pb-4 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </BlurReveal>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
