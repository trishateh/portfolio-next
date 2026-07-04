import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: "https://www.trishateh.com/",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://www.trishateh.com/projects/arcaden",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
