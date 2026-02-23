"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Search,
  Target,
  BarChart3,
  Code2,
  Palette,
  Megaphone,
  Share2,
  Mail,
  Zap,
  MessageCircle,
  Lightbulb,
  Workflow,
  Globe,
  Activity,
} from "lucide-react";
import { BlurReveal } from "./ui/blur-reveal";

export default function IntegrationsCTA() {
  const rings = [
    { size: 250, border: "border-white/30" },
    { size: 450, border: "border-white/20" },
    { size: 650, border: "border-white/10" },
    { size: 850, border: "border-white/10" },
  ];

  const orbits = [
    {
      size: 250,
      duration: 30,
      direction: 1,
      icons: [
        {
          angle: 90,
          icon: TrendingUp,
          color: "text-indigo-400",
          shadow: "shadow-indigo-500/30",
        },
        {
          angle: 270,
          icon: Lightbulb,
          color: "text-amber-400",
          shadow: "shadow-amber-500/30",
        },
      ],
    },
    {
      size: 450,
      duration: 45,
      direction: -1,
      icons: [
        {
          angle: 140,
          icon: Search,
          color: "text-cyan-400",
          shadow: "shadow-cyan-500/30",
        },
        {
          angle: 40,
          icon: Target,
          color: "text-teal-400",
          shadow: "shadow-teal-500/30",
        },
        {
          angle: 220,
          icon: Workflow,
          color: "text-emerald-400",
          shadow: "shadow-emerald-500/30",
        },
        {
          angle: 320,
          icon: MessageCircle,
          color: "text-pink-400",
          shadow: "shadow-pink-500/30",
        },
      ],
    },
    {
      size: 650,
      duration: 60,
      direction: 1,
      icons: [
        {
          angle: 130,
          icon: BarChart3,
          color: "text-orange-400",
          shadow: "shadow-orange-500/30",
        },
        {
          angle: 50,
          icon: Code2,
          color: "text-blue-400",
          shadow: "shadow-blue-500/30",
        },
        {
          angle: 230,
          icon: Globe,
          color: "text-violet-400",
          shadow: "shadow-violet-500/30",
        },
        {
          angle: 310,
          icon: Activity,
          color: "text-red-400",
          shadow: "shadow-red-500/30",
        },
      ],
    },
    {
      size: 850,
      duration: 75,
      direction: -1,
      icons: [
        {
          angle: 165,
          icon: Palette,
          color: "text-pink-400",
          shadow: "shadow-pink-500/30",
        },
        {
          angle: 90,
          icon: Megaphone,
          color: "text-purple-400",
          shadow: "shadow-purple-500/30",
        },
        {
          angle: 15,
          icon: Share2,
          color: "text-amber-400",
          shadow: "shadow-amber-400/30",
        },
        {
          angle: 240,
          icon: Mail,
          color: "text-blue-400",
          shadow: "shadow-blue-500/30",
        },
        {
          angle: 300,
          icon: Zap,
          color: "text-yellow-400",
          shadow: "shadow-yellow-500/30",
        },
      ],
    },
  ];

  const getPosition = (angleDeg: number) => {
    const angleRad = (angleDeg * Math.PI) / 180;
    const left = 50 + 50 * Math.cos(angleRad);
    const top = 50 - 50 * Math.sin(angleRad);
    return { left: `${left}%`, top: `${top}%` };
  };

  // Flat icon list for mobile grid
  const mobileIcons = [
    {
      icon: TrendingUp,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
      label: "Growth",
    },
    {
      icon: Search,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      label: "SEO",
    },
    {
      icon: Target,
      color: "text-teal-400",
      bg: "bg-teal-500/10",
      border: "border-teal-500/20",
      label: "Targeting",
    },
    {
      icon: BarChart3,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
      label: "Analytics",
    },
    {
      icon: Code2,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      label: "Web Dev",
    },
    {
      icon: Megaphone,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      label: "Ads",
    },
    {
      icon: Share2,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      label: "Social",
    },
    {
      icon: Mail,
      color: "text-sky-400",
      bg: "bg-sky-500/10",
      border: "border-sky-500/20",
      label: "Email",
    },
    {
      icon: Zap,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20",
      label: "Speed",
    },
    {
      icon: Globe,
      color: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
      label: "Reach",
    },
    {
      icon: Palette,
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20",
      label: "Branding",
    },
    {
      icon: Lightbulb,
      color: "text-amber-300",
      bg: "bg-amber-400/10",
      border: "border-amber-400/20",
      label: "Strategy",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative">
        <div className="bg-white/3 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] sm:rounded-[3.5rem] py-10 sm:py-16 md:py-20 px-5 sm:px-8 relative overflow-hidden flex flex-col items-center shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          {/* Intense Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

          {/* ── MOBILE: Icon Grid (shown only on sm and below) ── */}
          <div className="md:hidden relative z-10 w-full mb-8">
            {/* Center glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-indigo-600/20 blur-[60px] rounded-full pointer-events-none" />
            <div className="grid grid-cols-4 gap-3 relative z-10">
              {mobileIcons.map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: i * 0.05,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <div
                      className={`flex items-center justify-center w-14 h-14 ${item.bg} border ${item.border} rounded-2xl shadow-lg backdrop-blur-sm`}
                    >
                      <IconComponent className={item.color} size={22} />
                    </div>
                    <span className="text-[9px] font-medium text-slate-500 tracking-wide">
                      {item.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ── DESKTOP: Orbit Animation (hidden on mobile) ── */}
          <div className="hidden md:flex relative z-10 w-full max-w-[1000px] h-[450px] items-end justify-center overflow-hidden mask-image-gradient mt-8">
            {rings.map((ring, index) => (
              <div
                key={`ring-${index}`}
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full border border-dashed ${ring.border} translate-y-1/2`}
                style={{ width: ring.size, height: ring.size }}
              />
            ))}

            {orbits.map((orbit, orbitIndex) => (
              <div
                key={`orbit-${orbitIndex}`}
                className={`absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 pointer-events-none`}
                style={{ width: orbit.size, height: orbit.size }}
              >
                <motion.div
                  animate={{ rotate: 360 * orbit.direction }}
                  transition={{
                    duration: orbit.duration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-full h-full absolute inset-0"
                >
                  {orbit.icons.map((item, iconIndex) => {
                    const pos = getPosition(item.angle);
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={`icon-${iconIndex}`}
                        className="absolute"
                        style={{
                          left: pos.left,
                          top: pos.top,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <motion.div
                          animate={{ rotate: -360 * orbit.direction }}
                          transition={{
                            duration: orbit.duration,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <div
                            className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-slate-900 border border-white/10 rounded-xl md:rounded-2xl shadow-2xl ${item.shadow} pointer-events-auto hover:scale-110 hover:border-white/30 transition-all cursor-pointer group/icon`}
                          >
                            <IconComponent
                              className={`${item.color} group-hover/icon:brightness-125 transition-all`}
                              size={24}
                            />
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            ))}

            {/* Fade to transparent bottom */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black/20 to-transparent z-10 pointer-events-none" />
          </div>

          {/* Main Copy */}
          <div className="relative z-20 text-center md:mt-[-40px] w-full max-w-2xl mx-auto">
            <BlurReveal delay={0.2}>
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 sm:mb-6 leading-tight">
                Ready to scale your brand with data-driven marketing?
              </h2>
            </BlurReveal>
            <BlurReveal delay={0.3}>
              <p className="text-sm sm:text-base md:text-xl text-slate-300 mb-8 sm:mb-10 leading-relaxed px-2">
                Work smarter with TrendingMotion. All your SEO, marketing, and
                development needs seamlessly connected in one place.
              </p>
            </BlurReveal>
            <BlurReveal delay={0.4}>
              <button className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-[0_15px_30px_-10px_rgba(255,255,255,0.2)] active:scale-95 text-sm sm:text-base">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started for Free
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </button>
            </BlurReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
