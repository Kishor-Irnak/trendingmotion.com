import React from "react";
import { MessageSquare, PenTool, Rocket } from "lucide-react";
import { BlurReveal } from "./ui/blur-reveal";

const Process: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Consultation",
      description: "We meet to understand your vision, goals, and brand voice.",
      icon: <MessageSquare size={20} />,
    },
    {
      id: 2,
      title: "Strategy & Design",
      description: "Our team crafts a tailored roadmap and visual assets.",
      icon: <PenTool size={20} />,
    },
    {
      id: 3,
      title: "Launch & Scale",
      description: "We execute the plan and optimize for continuous growth.",
      icon: <Rocket size={20} />,
    },
  ];

  return (
    <section id="process" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-1/3 h-full bg-indigo-900/10 blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <BlurReveal className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Set Up in Minutes, <br /> Start Moving Fast
          </h2>
          <p className="text-slate-400">
            Quickly onboard your team and start managing projects with ease.
          </p>
        </BlurReveal>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-indigo-500/10 via-indigo-500/50 to-indigo-500/10 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <BlurReveal key={step.id} delay={index * 0.2}>
                <div className="relative flex flex-col items-center text-center group">
                  {/* Step Number Circle */}
                  <div className="w-16 h-16 rounded-full bg-[#0B0C15] border-2 border-indigo-500/30 flex items-center justify-center relative z-10 group-hover:border-indigo-500 transition-colors duration-300 shadow-[0_0_20px_-5px_rgba(79,70,229,0.3)]">
                    <div className="text-indigo-400 group-hover:text-white transition-colors">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] font-bold text-white border-2 border-[#0B0C15]">
                      {step.id}
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm max-w-xs">
                    {step.description}
                  </p>

                  {/* Decoration for hover */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-indigo-500/20 blur-xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </BlurReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
