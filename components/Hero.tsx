import React from "react";
import { ChevronRight, Play } from "lucide-react";
import { BlurReveal } from "./ui/blur-reveal";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] z-0 pointer-events-none opacity-20">
        <div className="w-full h-full bg-indigo-900/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Pill Label */}
        <BlurReveal delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-medium text-indigo-300 tracking-wider">
              Trusted by 10+ Global Brands
            </span>
          </div>
        </BlurReveal>

        {/* Main Heading */}
        <BlurReveal delay={0.2}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
            <span className="animate-shine bg-[linear-gradient(to_right,#818cf8,#c084fc,#ffffff,#c084fc,#818cf8)] bg-size-[200%_auto] bg-clip-text text-transparent">
              Trending Motion
            </span>{" "}
            <br />
            Your Digital Partner
          </h1>
        </BlurReveal>

        {/* Subheading */}
        <BlurReveal delay={0.3}>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            TrendingMotion helps your brand grow with smart SEO, social media,
            and clean web design. We don’t just bring traffic — we turn visitors
            into loyal customers.
          </p>
        </BlurReveal>

        {/* Buttons */}
        <BlurReveal delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 w-full sm:w-auto">
            <button className="w-full sm:w-auto group relative px-10 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.3)] shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started for Free{" "}
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1.5 transition-transform"
                />
              </span>
            </button>

            <button className="w-full sm:w-auto px-10 py-4 bg-white/5 text-white hover:bg-white/10 font-bold rounded-full border border-white/10 backdrop-blur-md transition-all flex items-center justify-center gap-2">
              <Play size={18} className="fill-current" /> View Work
            </button>
          </div>
        </BlurReveal>
      </div>
    </section>
  );
};

export default Hero;
