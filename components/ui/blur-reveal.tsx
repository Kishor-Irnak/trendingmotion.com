"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BlurRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  blur?: string;
  yOffset?: number;
}

export function BlurReveal({
  children,
  className = "",
  delay = 0,
  duration = 1,
  once = true,
  blur = "10px",
  yOffset = 20,
}: BlurRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        filter: `blur(${blur})`,
        y: yOffset,
        scale: 0.98,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              scale: 1,
            }
          : {}
      }
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // easeOutQuart
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
