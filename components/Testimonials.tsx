import React from "react";
import { Star } from "lucide-react";
import { BlurReveal } from "./ui/blur-reveal";

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "James Mitchell",
      role: "Product Manager",
      content:
        "TrendingMotion completely transformed our online presence. The branding is spot on and conversion rates have doubled.",
      stars: 5,
    },
    {
      name: "Sara Lopez",
      role: "UX Designer",
      content:
        "The attention to detail in the web development phase was incredible. Highly recommended for any serious startup.",
      stars: 5,
    },
    {
      name: "Daniel Kim",
      role: "Marketing Director",
      content:
        "A marketing agency that actually delivers on its promises. Their SEO strategy put us on the first page in 3 months.",
      stars: 5,
    },
  ];

  return (
    <section className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6">
        <BlurReveal className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
              <Star size={12} className="text-green-500 fill-green-500" />
            </div>
            <span className="text-green-500 font-medium text-sm">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Teams That Switched to <br /> TrendingMotion Don't Look Back
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Discover how teams stay focused, meet deadlines, and work better
            together.
          </p>
        </BlurReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <BlurReveal key={idx} delay={idx * 0.1}>
              <div className="bg-[#0F101E] border border-white/10 p-8 rounded-2xl hover:bg-white/5 transition-colors h-full">
                {/* User */}
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-600 mb-3 overflow-hidden">
                    <img
                      src={`https://picsum.photos/seed/${idx + 50}/100`}
                      alt={review.name}
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{review.name}</h4>
                    <p className="text-slate-500 text-xs">{review.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="text-orange-400 fill-orange-400"
                    />
                  ))}
                </div>

                <p className="text-slate-300 text-center text-sm leading-relaxed">
                  "{review.content}"
                </p>
              </div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
