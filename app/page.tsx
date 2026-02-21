import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import IntegrationsCTA from "@/components/IntegrationsCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen text-slate-200 overflow-x-hidden selection:bg-indigo-500/30 bg-transparent relative">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(79,70,229,0.08)_0%,transparent_50%)] pointer-events-none" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <LogoTicker />
        <Features />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
        <IntegrationsCTA />
        <Footer />
      </div>
    </div>
  );
}
