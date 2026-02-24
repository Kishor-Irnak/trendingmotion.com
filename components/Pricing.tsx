"use client";

import React, { useState } from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { BlurReveal } from "./ui/blur-reveal";

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "₹14,999",
    period: "/ month",
    description:
      "Everything you need to launch and get your first wave of leads.",
    cta: "Get Started",
    ctaStyle: "secondary",
    features: [
      "Meta or Google Ads Setup",
      "Smart Audience Research",
      "3 High-Converting Creatives",
      "WhatsApp Lead Setup",
      "Landing Page Optimization",
      "10 Social Media Posts",
      "Daily Ad Monitoring",
      "Monthly Performance Report",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "₹24,999",
    period: "/ month",
    description:
      "A full-stack growth engine for brands ready to scale aggressively.",
    badge: "Most Popular",
    cta: "Start Free Trial",
    ctaStyle: "primary",
    features: [
      "Complete Performance Marketing",
      "Advanced Retargeting + Funnel",
      "10–12 High-End Creatives",
      "Dedicated Creative Strategy",
      "Full Social Media Management",
      "8 Posts + 4 Reels / month",
      "Branding Enhancement",
      "Conversion Landing Page",
      "WhatsApp + Lead Tracking",
      "Advanced SEO (On-page + Technical)",
      "A/B Testing & Data Scaling",
      "Priority Support + Weekly Meet",
      "Dedicated Account Manager",
    ],
  },
  {
    id: "custom",
    name: "Custom",
    price: "Let's Talk",
    period: null,
    description:
      "Fully tailored solutions for high-growth companies and enterprises.",
    cta: "Contact Sales",
    ctaStyle: "secondary",
    features: [
      "Everything in Growth",
      "Dedicated Strategy Team",
      "Unlimited Creative Testing",
      "Professional Video Editing",
      "Branding & Positioning",
      "Lead Tracking System",
      "Advanced SEO",
      "A/B Testing at Scale",
      "Weekly Strategy Meetings",
      "Direct Founder-Level Access",
      "SLA-backed Priority Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-20 relative overflow-hidden">
      {/* top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-72 bg-indigo-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* ── Section header ── */}
        <BlurReveal className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[11px] font-bold uppercase tracking-widest mb-5">
            <Sparkles size={11} />
            Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-sm mx-auto leading-relaxed">
            No surprises. Pick a plan and start growing — we handle the rest.
          </p>
        </BlurReveal>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch">
          {plans.map((plan, idx) => {
            const isPopular = plan.id === "growth";
            return (
              <BlurReveal key={plan.id} delay={idx * 0.08}>
                <div
                  className={`relative flex flex-col h-full rounded-2xl sm:rounded-3xl border transition-all duration-300 group
                    ${
                      isPopular
                        ? "border-indigo-500/40 bg-[#0d0e1e] shadow-[0_0_60px_-15px_rgba(99,102,241,0.4)]"
                        : "border-white/8 bg-white/[0.025] hover:border-white/14 hover:bg-white/[0.04]"
                    }
                  `}
                >
                  {/* Popular ribbon */}
                  {isPopular && (
                    <div className="absolute -top-px left-0 right-0 h-px bg-linear-to-r from-transparent via-indigo-500 to-transparent" />
                  )}
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 rounded-full text-[10px] font-bold text-white uppercase tracking-widest whitespace-nowrap shadow-lg shadow-indigo-500/30 flex items-center gap-1.5">
                      <Sparkles size={9} className="fill-white text-white" />
                      {plan.badge}
                    </div>
                  )}

                  <div className="p-6 sm:p-7 flex flex-col flex-1">
                    {/* Plan header */}
                    <div className="mb-6 pb-6 border-b border-white/6">
                      <p
                        className={`text-xs font-bold uppercase tracking-widest mb-3 ${isPopular ? "text-indigo-400" : "text-slate-500"}`}
                      >
                        {plan.name}
                      </p>
                      <div className="flex items-end gap-1.5 mb-3">
                        <span className="text-3xl sm:text-4xl font-bold text-white leading-none tracking-tight">
                          {plan.price}
                        </span>
                        {plan.period && (
                          <span className="text-slate-500 text-sm mb-0.5">
                            {plan.period}
                          </span>
                        )}
                      </div>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {plan.description}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2.5 flex-1 mb-7">
                      {plan.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start gap-2.5 text-sm text-slate-300"
                        >
                          <span
                            className={`mt-0.5 flex-shrink-0 w-[18px] h-[18px] rounded-full flex items-center justify-center
                            ${isPopular ? "bg-indigo-500/15" : "bg-white/5"}`}
                          >
                            <Check
                              size={10}
                              strokeWidth={3}
                              className={
                                isPopular ? "text-indigo-400" : "text-slate-400"
                              }
                            />
                          </span>
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA button */}
                    {plan.ctaStyle === "primary" ? (
                      <button className="w-full flex items-center justify-center gap-2 py-3 sm:py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-sm font-bold transition-all duration-200 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/30">
                        {plan.cta}
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </button>
                    ) : (
                      <button className="w-full flex items-center justify-center gap-2 py-3 sm:py-3.5 rounded-xl border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] active:scale-[0.98] text-white text-sm font-semibold transition-all duration-200">
                        {plan.cta}
                        <ArrowRight
                          size={14}
                          className="text-slate-400 transition-transform group-hover:translate-x-0.5"
                        />
                      </button>
                    )}
                  </div>
                </div>
              </BlurReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
