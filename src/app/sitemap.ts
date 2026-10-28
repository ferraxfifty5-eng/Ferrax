import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ferrax.in";
  const paths = [
    "",
    "/services",
    "/services/digital-marketing",
    "/services/performance-marketing",
    "/services/seo",
    "/services/social-media-marketing",
    "/services/web-development",
    "/services/e-commerce",
    "/services/branding",
    "/services/lead-generation",
    "/services/crm-automation",
    "/services/ai-solutions",
    "/industries",
    "/industries/real-estate",
    "/industries/manufacturing",
    "/industries/healthcare",
    "/industries/education",
    "/industries/retail",
    "/industries/hospitality",
    "/process",
    "/pricing",
    "/about",
    "/work",
    "/resources",
    "/blog",
    ...blogPosts.map((post) => `/blog/${post.slug}`),
    "/contact",
    "/free-growth-audit",
    "/privacy-policy",
    "/terms",
    "/cookie-policy",
    "/intellectual-property",
  ];
  return paths.map((path) => ({ url: `${siteUrl}${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "" ? 1 : 0.7 }));
}
