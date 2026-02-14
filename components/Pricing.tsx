import React from "react";
import { Check } from "lucide-react";
import { BlurReveal } from "./ui/blur-reveal";

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <BlurReveal className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-green-900/30 text-green-400 text-xs font-bold uppercase">
            Pricing
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Plans Made for Teams of All Sizes
          </h2>
          <p className="text-slate-400">
            From startups to enterprises, choose the right plan to keep projects
            on track.
          </p>
        </BlurReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Starter Plan */}
          <BlurReveal delay={0.1}>
            <div className="bg-[#0F101E] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
              <h3 className="text-white font-medium text-lg mb-2">Starter</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold text-white">₹14,999</span>
                <span className="text-slate-500 text-sm">/Month</span>
              </div>
              <p className="text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
                What You Get:
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Meta or Google Ads Setup",
                  "Smart Audience Research",
                  "3 High-Converting Creatives",
                  "WhatsApp Lead Setup",
                  "Landing Page Basic Optimization",
                  "10 Social Media Posts",
                  "Daily Ad Monitoring",
                  "Monthly Performance Report",
                ].map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <Check
                      size={14}
                      className="text-indigo-500 mt-1 flex-shrink-0"
                    />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-2.5 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-colors text-sm font-medium mt-auto">
                Get Started
              </button>
            </div>
          </BlurReveal>

          {/* Growth Plan (Highlighted) */}
          <BlurReveal delay={0.2} yOffset={20}>
            <div className="bg-[#0F101E] border border-indigo-500/50 rounded-2xl p-8 relative shadow-[0_0_40px_-10px_rgba(79,70,229,0.3)] scale-105 z-10 h-full flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-indigo-600 rounded-full text-[10px] font-bold uppercase text-white tracking-wide">
                Most Popular
              </div>
              <h3 className="text-white font-medium text-lg mb-2">Growth</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold text-white">₹24,999</span>
                <span className="text-slate-500 text-sm">/Month</span>
              </div>
              <p className="text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
                What You Get:
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Complete Performance Marketing",
                  "Advanced Retargeting + Funnel Strategy",
                  "10–12 High-End Creatives",
                  "Dedicated Creative Strategy",
                  "Full Social Media Management",
                  "8 Posts + 4 Reels",
                  "Branding Enhancement",
                  "Conversion Focused Landing Page Optimization",
                  "WhatsApp + Lead Tracking System",
                  "Advanced SEO (On-page + Technical)",
                  "A/B Testing & Data Scaling",
                  "Priority Support + Weekly Strategy Meet",
                ].map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <Check
                      size={14}
                      className="text-indigo-500 mt-1 flex-shrink-0"
                    />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-2.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors text-sm font-medium shadow-lg shadow-indigo-500/25 mt-auto">
                Start Free Trial
              </button>
            </div>
          </BlurReveal>

          {/* Custom Plan */}
          <BlurReveal delay={0.3}>
            <div className="bg-[#0F101E] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
              <h3 className="text-white font-medium text-lg mb-2">Custom</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold text-white">
                  Let's Talk
                </span>
              </div>
              <p className="text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
                Everything We Offer – Fully Customized:
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Complete Performance Marketing",
                  "Advanced Retargeting + Scaling Strategy",
                  "Dedicated Creative Strategy Team",
                  "Unlimited Creative Testing",
                  "Professional Video Editing",
                  "Full Social Media Management",
                  "Branding & Positioning Strategy",
                  "Lead Tracking System Setup",
                  "Advanced SEO",
                  "A/B Testing + Data Driven Scaling",
                  "Weekly Strategy Meetings",
                  "Direct Founder-Level Communication",
                  "Priority Support",
                ].map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <Check
                      size={14}
                      className="text-indigo-500 mt-1 flex-shrink-0"
                    />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-2.5 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-colors text-sm font-medium mt-auto">
                Contact Sales
              </button>
            </div>
          </BlurReveal>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
