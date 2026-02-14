import React from "react";
import { BlurReveal } from "./ui/blur-reveal";

const CTA: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <BlurReveal>
        <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden bg-indigo-900/20 border border-indigo-500/20 text-center px-6 py-20 shadow-[0_0_50px_-10px_rgba(79,70,229,0.2)]">
          {/* Background Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-indigo-600/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#05050A] to-transparent" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Things Done?
            </h2>
            <p className="text-slate-300 mb-8 max-w-lg mx-auto">
              Work smarter with TrendingMotion. All your marketing and
              development needs in one place.
            </p>
            <button className="bg-white text-[#05050A] px-8 py-3 rounded-full font-bold hover:bg-slate-200 transition-colors shadow-lg shadow-white/10">
              Get Started for free
            </button>
          </div>
        </div>
      </BlurReveal>
    </section>
  );
};

export default CTA;
