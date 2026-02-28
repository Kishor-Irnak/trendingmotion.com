import { MetadataRoute } from "next";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://trendingmotion.com";

  let blogs: MetadataRoute.Sitemap = [];
  try {
    const q = query(collection(db, "blogs"));
    const snapshot = await getDocs(q);
    blogs = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        url: `${baseUrl}/blog/${data.slug}`,
        lastModified: data.date ? new Date(data.date) : new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      };
    });
  } catch (error) {
    console.error("Error generating blog sitemap:", error);
    // Return empty blogs array if fetch fails during build
    blogs = [];
  }

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  return [...staticRoutes, ...blogs];
}
