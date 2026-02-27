import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | TrendingMotion",
  description:
    "Get started in seconds — just ping us on WhatsApp and we'll have your campaign live in 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen text-slate-200 overflow-x-hidden selection:bg-indigo-500/30 bg-[#07070A] relative">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(79,70,229,0.08)_0%,transparent_50%)] pointer-events-none" />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 flex flex-col items-center justify-center py-28 px-4 sm:px-6 relative w-full pt-32">
          {/* subtle blur background behind form */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none" />

          <ContactForm />
        </main>

        <Footer />
      </div>
    </div>
  );
}
