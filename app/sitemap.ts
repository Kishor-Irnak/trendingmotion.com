import { MetadataRoute } from "next";
import { blogPosts } from "./blog/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = blogPosts.map((post) => ({
    url: `https://trendingmotion.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: "https://trendingmotion.com",
      lastModified: new Date(),
      changeFrequency: "weekly" as "weekly",
      priority: 1,
    },
    {
      url: "https://trendingmotion.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly" as "weekly",
      priority: 0.9,
    },
    ...blogs,
  ];
}
