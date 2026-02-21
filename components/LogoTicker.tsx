import React from "react";
import { BlurReveal } from "./ui/blur-reveal";

const LogoTicker: React.FC = () => {
  // Using plain text for logos to avoid external SVG dependencies, styled to look like logos
  const logos = [
    "WHATSAPP",
    "GOOGLE ADS",
    "META ADS",
    "FACEBOOK",
    "INSTAGRAM",
    "YOUTUBE",
  ];

  return (
    <div className="py-20 relative overflow-hidden">
      {/* Container with background and blur */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 py-12 relative overflow-hidden">
          <BlurReveal className="mb-8 text-center">
            <p className="text-sm text-slate-400/60 font-medium tracking-[0.2em] uppercase">
              DRIVING GROWTH WITH CORE TECHNOLOGY
            </p>
          </BlurReveal>

          <div className="relative flex overflow-x-hidden group">
            <div className="animate-marquee whitespace-nowrap flex items-center space-x-16">
              {/* Duplicated list for seamless loop */}
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <span
                  key={index}
                  className="text-2xl font-bold text-slate-300/80 uppercase tracking-tighter hover:text-white transition-colors cursor-default select-none"
                >
                  {logo}
                </span>
              ))}
            </div>

            {/* Gradient Fades for the glass card */}
            <div className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-white/0 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-white/0 to-transparent z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
