"use client";

import React, { useEffect } from "react";
import Script from "next/script";

export function AnimatedBackground() {
  return (
    <>
      {/* Unicorn Studio Background Container */}
      <div
        data-us-project="p7Ff6pfTrb5Gs59C7nLC"
        className="fixed inset-0 -z-50 h-full w-full pointer-events-none"
      />

      {/* Unicorn Studio Script Integration */}
      <Script
        src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-ignore
          if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
            // @ts-ignore
            window.UnicornStudio.init();
            // @ts-ignore
            window.UnicornStudio.isInitialized = true;
          }
        }}
      />

      {/* Re-adding the dark overlay and noise to maintain the previous premium feel if needed, 
          but usually Unicorn Studio provides its own styling. 
          I'll keep it clean as per the prompt first. */}
      <div className="fixed inset-0 -z-40 bg-black/20 pointer-events-none" />
    </>
  );
}
