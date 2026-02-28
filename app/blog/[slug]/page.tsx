import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";

export const revalidate = 60;
export const dynamicParams = false;

async function fetchPostBySlug(slug: string) {
  try {
    const q = query(
      collection(db, "blogs"),
      where("slug", "==", slug),
      limit(1),
    );
    const snapshot = await getDocs(q);
    return snapshot.empty ? null : (snapshot.docs[0].data() as any);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

async function fetchAllSlugs() {
  try {
    const q = query(collection(db, "blogs"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ slug: doc.data().slug }));
  } catch (error) {
    console.error("Error fetching all slugs:", error);
    return [];
  }
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await fetchPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | TrendingMotion Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `https://trendingmotion.com/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export async function generateStaticParams() {
  const slugs = await fetchAllSlugs();
  // Next.js static export requires at least one parameter object,
  // or dynamicParams must be false. However, sometimes it still throws
  // "missing generateStaticParams()" if the array is completely empty during export.
  if (!slugs || slugs.length === 0) {
    return [{ slug: "fallback-empty" }];
  }
  return slugs;
}

export default async function BlogPost({ params }: Props) {
  const resolvedParams = await params;
  const post = await fetchPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-indigo-500/30">
      <Navbar />

      <article className="pt-32 pb-24 px-6 sm:px-12 md:px-24 mx-auto max-w-4xl relative z-10">
        <div className="absolute top-0 right-0 w-full h-[500px] bg-purple-500/10 blur-[150px] pointer-events-none rounded-full" />

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-medium mb-12 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to all articles
        </Link>

        <header className="mb-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
            {post.excerpt}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 text-left mt-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-lg font-bold border border-white/10 text-white overflow-hidden shadow-lg">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&background=random&color=fff`}
                  alt={post.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 font-medium mb-0.5">
                  Written by
                </span>
                <span className="font-semibold text-white tracking-wide text-sm">
                  {post.author}
                </span>
              </div>
            </div>

            <div className="flex items-center flex-wrap justify-center sm:justify-end gap-2">
              <span className="px-5 py-2 text-sm font-medium bg-transparent border border-white/10 hover:border-white/20 transition-colors rounded-full text-slate-300">
                {post.category}
              </span>
              <span className="px-5 py-2 text-sm font-medium bg-transparent border border-white/10 hover:border-white/20 transition-colors rounded-full text-slate-300">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="px-5 py-2 text-sm font-medium bg-transparent border border-white/10 hover:border-white/20 transition-colors rounded-full text-slate-300">
                {post.readTime}
              </span>
            </div>
          </div>
        </header>

        <div className="w-full aspect-video md:h-[500px] rounded-3xl overflow-hidden mb-16 shadow-2xl relative max-w-5xl mx-auto border border-white/5">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#030303]/40 via-transparent to-transparent pointer-events-none rounded-3xl"></div>
        </div>

        <div className="max-w-3xl mx-auto text-lg text-slate-300 leading-relaxed font-normal">
          {(post.content as string)
            .split("\n\n")
            .map((paragraph: string, index: number) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={index}
                    className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-white tracking-tight"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.trim() === "") return null;
              return (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              );
            })}
        </div>
      </article>
    </main>
  );
}
