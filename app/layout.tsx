import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TrendingMotion | Digital Agency",
  description:
    "We combine data-driven marketing, cutting-edge branding, and robust web development to build experiences that convert.",
};

const WHATSAPP_LINK =
  "https://wa.me/917889254092?text=%20Hi%2C%20I%E2%80%99m%20looking%20for%20a%20serious%20marketing%20partner.%20My%20budget%20is%20ready.%20Can%20we%20schedule%20a%20strategy%20call%3F";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="https://i.postimg.cc/GhWnSTSq/favicon.png"
        />
        <style>{`
          @keyframes wa-pulse {
            0%, 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
            50% { box-shadow: 0 0 0 12px rgba(37,211,102,0); }
          }
          .wa-circle { animation: wa-pulse 2.5s ease-in-out infinite; }
          .wa-btn:hover .wa-label { opacity: 1; transform: translateX(0); pointer-events: auto; }
        `}</style>
      </head>
      <body className={`${inter.variable} antialiased relative min-h-screen`}>
        <AnimatedBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>

        {/* ── Floating WhatsApp CTA ── */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="wa-btn fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
        >
          {/* Tooltip label */}
          <span className="wa-label opacity-0 translate-x-2 transition-all duration-300 pointer-events-none whitespace-nowrap bg-[#111] text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 shadow-lg">
            Chat with us
          </span>

          {/* WhatsApp button */}
          <span className="wa-circle flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/40 hover:bg-[#20bc59] transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="28"
              height="28"
              fill="white"
              aria-hidden="true"
            >
              <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.478 2.027 7.788L0 32l8.418-2.003A15.925 15.925 0 0016 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.267 13.267 0 01-6.763-1.847l-.486-.29-5.003 1.191 1.265-4.874-.317-.502A13.253 13.253 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.875c-.398-.2-2.355-1.163-2.72-1.295-.366-.133-.632-.2-.898.2-.266.398-1.031 1.295-1.264 1.561-.233.266-.466.3-.864.1-.398-.2-1.681-.619-3.2-1.977-1.183-1.056-1.981-2.36-2.214-2.758-.233-.398-.025-.613.175-.812.18-.178.398-.466.598-.699.2-.233.266-.398.399-.664.133-.266.066-.499-.033-.699-.1-.2-.9-2.166-1.232-2.966-.324-.778-.654-.673-.898-.685l-.765-.013c-.266 0-.699.1-1.065.498s-1.398 1.365-1.398 3.33 1.432 3.863 1.631 4.13c.2.265 2.82 4.305 6.832 6.034.955.413 1.7.66 2.282.845.959.306 1.832.263 2.52.16.769-.115 2.355-.963 2.688-1.893.333-.93.333-1.727.233-1.893-.1-.167-.366-.267-.765-.466z" />
            </svg>
          </span>
        </a>
      </body>
    </html>
  );
}
