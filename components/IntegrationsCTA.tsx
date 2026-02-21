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
    { size: 250, border: "border-white/20" },
    { size: 450, border: "border-white/10" },
    { size: 650, border: "border-white/5" },
    { size: 850, border: "border-white/5" },
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
          shadow: "shadow-indigo-500/20",
        },
        {
          angle: 270,
          icon: Lightbulb,
          color: "text-amber-400",
          shadow: "shadow-amber-500/20",
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
          shadow: "shadow-cyan-500/20",
        },
        {
          angle: 40,
          icon: Target,
          color: "text-teal-400",
          shadow: "shadow-teal-500/20",
        },
        {
          angle: 220,
          icon: Workflow,
          color: "text-emerald-400",
          shadow: "shadow-emerald-500/20",
        },
        {
          angle: 320,
          icon: MessageCircle,
          color: "text-pink-400",
          shadow: "shadow-pink-500/20",
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
          shadow: "shadow-orange-500/20",
        },
        {
          angle: 50,
          icon: Code2,
          color: "text-blue-400",
          shadow: "shadow-blue-500/20",
        },
        {
          angle: 230,
          icon: Globe,
          color: "text-violet-400",
          shadow: "shadow-violet-500/20",
        },
        {
          angle: 310,
          icon: Activity,
          color: "text-red-400",
          shadow: "shadow-red-500/20",
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
          shadow: "shadow-pink-500/20",
        },
        {
          angle: 90,
          icon: Megaphone,
          color: "text-purple-400",
          shadow: "shadow-purple-500/20",
        },
        {
          angle: 15,
          icon: Share2,
          color: "text-amber-400",
          shadow: "shadow-amber-400/20",
        },
        {
          angle: 240,
          icon: Mail,
          color: "text-blue-400",
          shadow: "shadow-blue-500/20",
        },
        {
          angle: 300,
          icon: Zap,
          color: "text-yellow-400",
          shadow: "shadow-yellow-500/20",
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

  return (
    <section className="relative py-24 md:py-40 overflow-hidden bg-transparent flex flex-col items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Arches Container */}
      <div className="relative z-10 w-full max-w-[1000px] h-[300px] md:h-[500px] mx-auto flex items-end justify-center overflow-hidden mask-image-gradient mt-8">
        {rings.map((ring, index) => (
          <div
            key={`ring-${index}`}
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full border border-dashed ${ring.border} translate-y-1/2`}
            style={{ width: ring.size, height: ring.size }}
          />
        ))}

        {/* --- Rotating Icons on Rings --- */}
        {orbits.map((orbit, orbitIndex) => (
          <div
            key={`orbit-${orbitIndex}`}
            className={`absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 pointer-events-none ${orbit.size > 450 ? "hidden md:block" : ""}`}
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
                        className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-[#1A1A2E] border border-white/10 rounded-xl md:rounded-2xl shadow-xl ${item.shadow} pointer-events-auto hover:scale-110 hover:border-white/30 transition-all cursor-pointer`}
                      >
                        <IconComponent className={item.color} size={24} />
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        ))}

        {/* Gradient Mask to fade bottom lines solidly */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#05050a] to-transparent z-10 pointer-events-none" />
      </div>

      {/* Main Copy Below Arches */}
      <div className="relative z-20 text-center mt-[-30px] md:mt-[-50px] px-6">
        <BlurReveal delay={0.2}>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 max-w-xl md:max-w-3xl mx-auto leading-tight">
            Ready to scale your brand with data-driven marketing?
          </h2>
        </BlurReveal>
        <BlurReveal delay={0.3}>
          <p className="text-slate-300 md:text-lg mb-8 max-w-xl mx-auto">
            Work smarter with TrendingMotion. All your SEO, marketing, and
            development needs seamlessly connected.
          </p>
        </BlurReveal>
        <BlurReveal delay={0.4}>
          <button className="group inline-flex items-center gap-3 px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-colors shadow-xl shadow-white/5 active:scale-95">
            Get Started for free
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-black/10 text-black group-hover:bg-black/20 transition-colors group-hover:translate-x-1 duration-300">
              <ArrowRight size={16} />
            </span>
          </button>
        </BlurReveal>
      </div>
    </section>
  );
}
