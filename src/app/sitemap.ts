import type { MetadataRoute } from "next";
import { getAllCaseStudies } from "@/lib/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: "https://www.trishateh.com/",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...getAllCaseStudies().map((cs) => ({
      url: `https://www.trishateh.com/projects/${cs.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
