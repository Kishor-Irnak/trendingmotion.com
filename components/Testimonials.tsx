import React from "react";
import { BlurReveal } from "./ui/blur-reveal";

const reviews = [
  {
    initials: "JM",
    name: "James Mitchell",
    content:
      "TrendingMotion completely transformed our online presence. The branding is spot-on and conversion rates have doubled since we started.",
  },
  {
    initials: "SL",
    name: "Sara Lopez",
    content:
      "The attention to detail was incredible. They communicate clearly, deliver on time, and genuinely care about outcomes.",
  },
  {
    initials: "DK",
    name: "Daniel Kim",
    content:
      "An agency that actually delivers. Their SEO strategy put us on the first page of Google in under 3 months — real, measurable growth.",
  },
  {
    initials: "AK",
    name: "Aarav Kapoor",
    content:
      "We went from zero digital presence to 8,000 monthly visitors in four months. The team is sharp, fast, and incredibly data-driven.",
  },
  {
    initials: "NP",
    name: "Nina Patel",
    content:
      "Our Instagram engagement tripled after TrendingMotion took over. The content strategy they built is exactly what our audience needed.",
  },
  {
    initials: "RS",
    name: "Rohan Shah",
    content:
      "ROAS went from 1.8x to 5.2x in 6 weeks. Honestly couldn't believe the turnaround. These guys know paid ads inside out.",
  },
];

// Duplicate for seamless infinite loop
const allReviews = [...reviews, ...reviews];

const StarRow = () => (
  <div className="flex gap-0.5 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="13" height="13" viewBox="0 0 12 12" fill="none">
        <path
          d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.51L6 8.885L2.91 10.51L3.5 7.07L1 4.635L4.455 4.13L6 1Z"
          fill="#f59e0b"
        />
      </svg>
    ))}
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* ── Header ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <BlurReveal className="mb-10 sm:mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
              Customer Stories
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug max-w-sm">
              Trusted by brands that care about results
            </h2>
          </div>
          {/* Rating pill */}
          <div className="shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/8 bg-white/3 w-fit">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.51L6 8.885L2.91 10.51L3.5 7.07L1 4.635L4.455 4.13L6 1Z"
                    fill="#f59e0b"
                  />
                </svg>
              ))}
            </div>
            <span className="text-xs font-semibold text-white">4.7</span>
            <span className="text-xs text-slate-500">· 78+ reviews</span>
          </div>
        </BlurReveal>
      </div>

      {/* ── Scrolling track ── */}
      <div className="relative w-full">
        {/* Left fade mask */}
        <div className="absolute left-0 top-0 h-full w-16 sm:w-32 bg-linear-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
        {/* Right fade mask */}
        <div className="absolute right-0 top-0 h-full w-16 sm:w-32 bg-linear-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

        {/* Marquee strip */}
        <div className="flex animate-marquee-slow gap-4 w-max">
          {allReviews.map((review, idx) => (
            <div
              key={idx}
              className="shrink-0 w-[280px] sm:w-[340px] border border-white/7 rounded-2xl bg-white/2 hover:bg-white/5 hover:border-white/12 transition-all duration-300 p-6 flex flex-col group"
            >
              {/* Stars */}
              <StarRow />

              {/* Quote */}
              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-5">
                "{review.content}"
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-white/5 mb-4" />

              {/* Identity */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1a1b2e] border border-white/10 flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold text-slate-300 tracking-wide">
                    {review.initials}
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">
                    {review.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom footnote ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <BlurReveal delay={0.2} className="mt-8 sm:mt-10 text-center">
          <p className="text-slate-600 text-xs">
            Join 78+ brands already growing with TrendingMotion.
          </p>
        </BlurReveal>
      </div>
    </section>
  );
};

export default Testimonials;
