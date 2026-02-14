"use client";

import React from "react";
import {
  Palette,
  Megaphone,
  ArrowUpRight,
  BarChart3,
  TrendingUp,
  Zap,
  Users,
  MousePointer2,
} from "lucide-react";
import { motion } from "framer-motion";
import { BlurReveal } from "./ui/blur-reveal";

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <BlurReveal className="mb-16 md:text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Why Choose TrendingMotion? <br />
            <span className="text-slate-400 text-2xl md:text-3xl">
              The Agency That Moves at the Speed of Trends
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            We combine creative excellence with technical precision to deliver
            results that actually matter to your bottom line.
          </p>
        </BlurReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Digital Marketing (UPGRADED MAIN FEATURE) */}
          <BlurReveal className="md:col-span-1 row-span-2" delay={0.1}>
            <div className="group h-full relative overflow-hidden rounded-3xl bg-[#0F101E] border border-white/10 p-8 transition-all hover:border-green-500/30 flex flex-col">
              {/* Background Glows */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 blur-[80px] rounded-full group-hover:bg-green-500/10 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/5 blur-[60px] rounded-full group-hover:bg-emerald-500/10 transition-all duration-700" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-black transition-all duration-500 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]">
                    <Zap size={28} />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold text-indigo-400 uppercase tracking-widest animate-pulse">
                    Main Edge
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Trend-Centric Content
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  In a world of scrolling, we specialize in{" "}
                  <span className="text-indigo-400 font-medium">
                    Motion Graphics and Short-form Video
                  </span>{" "}
                  that captures attention in the first 3 seconds and keeps your
                  brand relevant.
                </p>

                {/* Advanced Performance Visual */}
                <div className="mt-auto space-y-6">
                  {/* Floating Metric Card */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden group/metric shadow-xl"
                  >
                    <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover/metric:opacity-100 transition-opacity" />
                    <div className="flex justify-between items-center relative z-10">
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">
                          Average ROAS
                        </p>
                        <h4 className="text-2xl font-bold text-white flex items-center gap-2">
                          4.8x{" "}
                          <TrendingUp size={18} className="text-green-500" />
                        </h4>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Zap
                          size={20}
                          className="text-green-400 fill-green-400/20"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Animated Line Graph */}
                  <div className="relative h-32 w-full">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 300 100"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="lineGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop
                            offset="0%"
                            stopColor="rgba(34, 197, 94, 0.3)"
                          />
                          <stop
                            offset="100%"
                            stopColor="rgba(34, 197, 94, 1)"
                          />
                        </linearGradient>
                        <linearGradient
                          id="areaGradient"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="rgba(34, 197, 94, 0.3)"
                          />
                          <stop
                            offset="100%"
                            stopColor="rgba(34, 197, 94, 0)"
                          />
                        </linearGradient>
                      </defs>

                      {/* Grid Lines */}
                      <line
                        x1="0"
                        y1="25"
                        x2="300"
                        y2="25"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="0.5"
                      />
                      <line
                        x1="0"
                        y1="50"
                        x2="300"
                        y2="50"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="0.5"
                      />
                      <line
                        x1="0"
                        y1="75"
                        x2="300"
                        y2="75"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="0.5"
                      />

                      {/* Area under curve */}
                      <motion.path
                        d="M 0 80 Q 40 70, 75 60 T 150 35 T 225 15 T 300 5 L 300 100 L 0 100 Z"
                        fill="url(#areaGradient)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />

                      {/* Main line */}
                      <motion.path
                        d="M 0 80 Q 40 70, 75 60 T 150 35 T 225 15 T 300 5"
                        fill="none"
                        stroke="url(#lineGradient)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                          duration: 2,
                          delay: 0.5,
                          ease: "easeOut",
                        }}
                      />

                      {/* Data points */}
                      {[
                        { x: 0, y: 80 },
                        { x: 75, y: 60 },
                        { x: 150, y: 35 },
                        { x: 225, y: 15 },
                        { x: 300, y: 5 },
                      ].map((point, i) => (
                        <motion.circle
                          key={i}
                          cx={point.x}
                          cy={point.y}
                          r="3"
                          fill="#22c55e"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                        >
                          <animate
                            attributeName="r"
                            values="3;4;3"
                            dur="2s"
                            repeatCount="indefinite"
                            begin={`${i * 0.2}s`}
                          />
                        </motion.circle>
                      ))}

                      {/* Peak indicator */}
                      <motion.g
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                      >
                        <circle
                          cx="300"
                          cy="5"
                          r="6"
                          fill="rgba(34, 197, 94, 0.2)"
                        />
                        <circle cx="300" cy="5" r="3" fill="#22c55e" />
                      </motion.g>
                    </svg>

                    {/* Growth percentage indicator */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.8, duration: 0.4 }}
                      className="absolute top-0 right-0 px-2 py-1 rounded-md bg-green-500/20 border border-green-500/30"
                    >
                      <span className="text-[10px] font-bold text-green-400">
                        +120%
                      </span>
                    </motion.div>
                  </div>

                  <div className="flex justify-between items-center text-[10px] text-slate-500 font-medium px-1">
                    <span>JAN</span>
                    <span>APR</span>
                    <span>JUL</span>
                    <span>OCT</span>
                  </div>
                </div>
              </div>
            </div>
          </BlurReveal>

          {/* Card 2: Brand Identity (Top Center) */}
          <BlurReveal delay={0.2}>
            <div className="group h-full relative overflow-hidden rounded-3xl bg-[#0F101E] border border-white/10 p-8 transition-all hover:border-blue-500/30">
              <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Data-Driven Decision Making
                </h3>
                <p className="text-slate-400 text-sm">
                  We don't guess; we test. Every campaign is backed by
                  competitor analysis and real-time data to ensure your
                  marketing budget is spent effectively.
                </p>
              </div>
            </div>
          </BlurReveal>

          {/* Card 3: SEO & Analytics (Top Right) */}
          <BlurReveal delay={0.3}>
            <div className="group h-full relative overflow-hidden rounded-3xl bg-[#0F101E] border border-white/10 p-8 transition-all hover:border-orange-500/30">
              <div className="absolute inset-0 bg-linear-to-tr from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Expert Team & Tech
                </h3>
                <p className="text-slate-400 text-sm">
                  Access a team of SEO specialists, creative designers, and ad
                  copywriters who stay updated on the latest algorithm changes
                  so you don't have to.
                </p>
              </div>
            </div>
          </BlurReveal>

          {/* Card 4: Web Development (Large bottom horizontal) */}
          <BlurReveal className="md:col-span-2" delay={0.4}>
            <div className="group h-full relative overflow-hidden rounded-3xl bg-[#0F101E] border border-white/10 p-8 transition-all hover:border-green-500/30">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-green-500/10 blur-[80px] rounded-full group-hover:bg-green-500/20 transition-all" />

              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center h-full">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-green-500/20 text-green-400 text-xs font-medium mb-4">
                    <TrendingUp size={12} /> Scalability
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Scalable Growth Plans
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Whether you are a local startup or an international brand,
                    our services scale with your revenue. We offer Flexible
                    Digital Marketing Packages tailored to your specific
                    industry needs.
                  </p>
                  <button className="mt-6 flex items-center gap-2 text-sm font-medium text-green-400 hover:text-green-300 transition-colors">
                    View Package Options <ArrowUpRight size={14} />
                  </button>
                </div>

                {/* Growth Visual */}
                <div className="flex-1 w-full flex items-center justify-center">
                  <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center">
                    <div className="absolute inset-0 bg-green-500/5 rounded-full animate-pulse" />
                    <div className="relative flex flex-col items-center">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="w-24 h-24 rounded-3xl bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 mb-4 shadow-[0_0_30px_-5px_rgba(34,197,94,0.4)]"
                      >
                        <TrendingUp size={40} />
                      </motion.div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-white mb-1">
                          UNLIMITED
                        </p>
                        <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">
                          Growth Potential
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BlurReveal>
        </div>
      </div>
    </section>
  );
};

export default Features;
