"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { Palette, Megaphone, Code2, BarChart3, Target } from "lucide-react";
import { useEffect, useState as useReactState } from "react";

const NODE_DATA = [
  {
    id: 0,
    icon: <Palette size={20} />,
    label: "Branding",
    color: "from-pink-500 to-rose-500",
    x: -280,
    y: -120,
  },
  {
    id: 1,
    icon: <Megaphone size={20} />,
    label: "Marketing",
    color: "from-indigo-500 to-violet-500",
    x: 280,
    y: -120,
  },
  {
    id: 2,
    icon: <Code2 size={20} />,
    label: "Development",
    color: "from-cyan-500 to-blue-500",
    x: -320,
    y: 120,
  },
  {
    id: 3,
    icon: <BarChart3 size={20} />,
    label: "SEO",
    color: "from-orange-500 to-amber-500",
    x: 320,
    y: 120,
  },
  {
    id: 4,
    icon: <Target size={20} />,
    label: "Strategy",
    color: "from-emerald-500 to-teal-500",
    x: 0,
    y: -180,
  },
];

export const ConnectionGraphic = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useReactState(false);
  const [windowWidth, setWindowWidth] = useReactState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isSmallMobile = windowWidth < 480;

  // Scale coordinates for mobile
  const scale = isSmallMobile ? 0.42 : isMobile ? 0.55 : 1;

  // Mouse Position Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse movement
  const springConfig = { damping: 30, stiffness: 200 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Normalize to -1 to 1 range
    mouseX.set((e.clientX - centerX) / (rect.width / 2));
    mouseY.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovering(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full max-w-5xl mx-auto ${isMobile ? "py-4" : "py-12"} overflow-visible cursor-default`}
    >
      {/* Background Glow - Static */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isMobile ? "w-[300px] h-[300px]" : "w-[600px] h-[600px]"} bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none`}
      />

      <div
        className={`${isMobile ? "h-[350px]" : "h-[500px]"} relative flex items-center justify-center`}
      >
        {/* Central Hub - Static Position (with its own slow breathing animation) */}
        <motion.div
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-20 group"
        >
          <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-3xl group-hover:bg-indigo-500/30 transition-all duration-500" />
          <div className="relative w-16 h-16 md:w-32 md:h-32 bg-[#0F101E] border border-white/10 rounded-2xl md:rounded-3xl flex items-center justify-center p-3 md:p-6 shadow-2xl backdrop-blur-xl group-hover:border-indigo-500/40 transition-colors">
            <img
              src="https://i.postimg.cc/GhWnSTSq/favicon.png"
              alt="Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
            />
          </div>

          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-10 border border-white/5 rounded-full pointer-events-none"
          />
        </motion.div>

        {/* Connection Lines and Orbiting Nodes */}
        {NODE_DATA.map((node, i) => {
          // Calculate individual motion offsets for parallax
          // Factor determines how much each node moves. Nodes farther out move more.
          const factorX = i % 2 === 0 ? 30 : 50;
          const factorY = i % 2 === 0 ? 30 : 50;

          // Random floating offset (independent of mouse)
          const floatX = 0; // Handled by animate prop below

          // Final dynamic position for Node
          const nodeRotate = i % 2 === 0 ? 5 : -5;

          return (
            <React.Fragment key={node.id}>
              {/* Dynamic Connection Line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10">
                <motion.line
                  x1="50%"
                  y1="50%"
                  // We map the mouse position to the line's endpoint
                  x2={useTransform(
                    smoothMouseX,
                    (val) =>
                      `calc(50% + ${node.x * scale + val * factorX * scale}px)`,
                  )}
                  y2={useTransform(
                    smoothMouseY,
                    (val) =>
                      `calc(50% + ${node.y * scale + val * factorY * scale}px)`,
                  )}
                  stroke="rgba(99, 102, 241, 0.15)"
                  strokeWidth="1.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />
              </svg>

              {/* Orbiting Node with separate Mouse influence */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  // Slow random breathing floating (internal node motion)
                  rotate: [0, nodeRotate, 0],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.8 + i * 0.1 },
                  scale: {
                    type: "spring",
                    stiffness: 100,
                    delay: 0.8 + i * 0.1,
                  },
                  rotate: {
                    duration: 6 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                style={{
                  // The node's position relative to center is x, y + mouse offset
                  x: useTransform(
                    smoothMouseX,
                    (val) => node.x * scale + val * factorX * scale,
                  ),
                  y: useTransform(
                    smoothMouseY,
                    (val) => node.y * scale + val * factorY * scale,
                  ),
                }}
                className="absolute z-30"
              >
                <div className="group relative flex flex-col items-center">
                  <div
                    className={`relative ${isMobile ? "p-2" : "p-4"} bg-[#0F101E]/95 border border-white/10 rounded-xl md:rounded-2xl shadow-xl backdrop-blur-md group-hover:border-indigo-500/50 transition-all duration-300 group-hover:shadow-[0_0_30px_-5px_rgba(79,70,229,0.3)]`}
                  >
                    <div
                      className={`${isMobile ? "w-8 h-8" : "w-10 h-10"} rounded-lg bg-linear-to-br ${node.color} flex items-center justify-center text-white mb-1.5 md:mb-2 shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      {React.cloneElement(node.icon as React.ReactElement, {
                        size: isMobile ? 16 : 20,
                      })}
                    </div>
                    <span
                      className={`${isMobile ? "text-[11px]" : "text-xs"} font-semibold text-slate-300 group-hover:text-white transition-colors`}
                    >
                      {node.label}
                    </span>

                    {/* Shadow decoration */}
                    <div className="absolute -z-10 -bottom-1 -right-1 w-full h-full bg-white/5 border border-white/5 rounded-2xl group-hover:translate-x-1-y-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
