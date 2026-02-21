"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-50 h-full w-full overflow-hidden bg-[var(--color-brand-dark)]">
      {/* Animated Glowing Blobs */}
      <motion.div
        animate={{
          x: [0, 150, -150, 0],
          y: [0, -100, 100, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-1/4 -left-1/4 h-[50vw] w-[50vw] rounded-full bg-[var(--color-brand-glow)] opacity-20 blur-[120px] mix-blend-screen"
      />

      <motion.div
        animate={{
          x: [0, -200, 200, 0],
          y: [0, 150, -150, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 -right-1/4 h-[40vw] w-[40vw] rounded-full bg-[var(--color-brand-accent)] opacity-20 blur-[100px] mix-blend-screen"
      />

      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -200, 200, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-1/4 left-1/4 h-[60vw] w-[60vw] rounded-full bg-purple-600 opacity-10 blur-[150px] mix-blend-screen"
      />

      {/* Heavy Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-[80px]" />

      {/* Subtle Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
