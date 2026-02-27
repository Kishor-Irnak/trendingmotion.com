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
import ContactForm from "@/components/ContactForm";

export default function Page() {
  return (
    <main className="min-h-screen text-slate-200 overflow-x-hidden selection:bg-indigo-500/30 bg-transparent relative">
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

        {/* Contact Us Section */}
        <section
          id="contact"
          className="py-8 lg:py-24 px-4 sm:px-6 relative flex justify-center w-full"
        >
          {/* subtle blur background behind form */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none" />
          <ContactForm />
        </section>

        <Footer />
      </div>
    </main>
  );
}
