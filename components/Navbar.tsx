"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#features" },
    { name: "Process", href: "#process" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0, filter: "blur(5px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-black/20 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center gap-2 cursor-pointer group">
            <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <img
                src="https://i.postimg.cc/GhWnSTSq/favicon.png"
                alt="TrendingMotion Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-xl md:text-2xl tracking-tight text-white">
              TrendingMotion
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="bg-[#0A0A0F]/60 backdrop-blur-md rounded-full px-1.5 py-1.5 border border-white/5 shadow-2xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-5 py-2 text-sm font-medium text-slate-300 hover:text-white transition-all rounded-full hover:bg-white/5 inline-block"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-8 py-3 text-sm font-bold text-white bg-linear-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9] rounded-full transition-all duration-300 shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)] border border-white/10 active:scale-95">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/40 backdrop-blur-xl border-b border-white/10 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <button className="w-full px-6 py-4 text-base font-bold text-white bg-linear-to-r from-[#4F46E5] to-[#7C3AED] rounded-xl transition-all shadow-lg active:scale-95">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
