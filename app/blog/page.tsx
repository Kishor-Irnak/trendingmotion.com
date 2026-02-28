"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { ArrowRight, Calendar, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function BlogList() {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const q = query(collection(db, "blogs"), orderBy("date", "desc"));
        const snapshot = await getDocs(q);
        const posts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogPosts(posts);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-indigo-500/30">
      <Navbar />

      <div className="pt-32 pb-20 px-6 sm:px-12 md:px-24 mx-auto max-w-7xl relative z-10">
        <div className="absolute inset-0 top-0 w-full h-[500px] bg-indigo-500/10 blur-[120px] pointer-events-none rounded-full" />

        <header className="mb-16 md:mb-24 text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-b from-white to-white/60 pb-2">
            Trending Insights
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
            Discover the latest strategies, trends, and expert knowledge to
            elevate your video production and motion graphics.
          </p>
        </header>

        {loading ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 className="w-8 h-8 text-indigo-400 animate-spin" />
          </div>
        ) : blogPosts.length === 0 ? (
          <div className="text-center py-24 text-slate-500 text-lg">
            No posts yet. Check back soon!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group h-full"
              >
                <article className="h-full flex flex-col bg-[#0A0A0F] border border-white/5 rounded-3xl overflow-hidden hover:border-indigo-500/30 transition-all duration-500 shadow-xl hover:shadow-indigo-500/10">
                  <div className="w-full h-60 overflow-hidden relative">
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 text-xs font-semibold bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-indigo-400 uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 group-hover:rotate-1 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0F] to-transparent opacity-80" />
                  </div>

                  <div className="p-8 grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 text-sm text-slate-400 mb-4 font-medium">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-indigo-400" />
                          <span>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                      </div>

                      <h2 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-indigo-400 transition-colors leading-snug">
                        {post.title}
                      </h2>

                      <p className="text-slate-400 line-clamp-3 mb-8 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-linear-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-bold shadow-lg text-white">
                          {post.author?.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-slate-300">
                          {post.author}
                        </span>
                      </div>

                      <div className="text-indigo-400 flex items-center gap-1 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                        Read more <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
