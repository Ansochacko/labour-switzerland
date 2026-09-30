import { MetadataRoute } from "next";
import { PERMITS } from "@/data/permits";
import { WAGE_BENCHMARKS } from "@/data/wages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://labourswitzerland.com";
  const lastModified = new Date("2025-03-15");

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/permits`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cantons`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wages`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wages/minimum-wage-switzerland`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wages/13th-month-salary-switzerland`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/methodology`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  // Permits programmatic routes
  const permitRoutes: MetadataRoute.Sitemap = Object.keys(PERMITS).map((key) => ({
    url: `${baseUrl}/permits/${key}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Wages programmatic routes
  const wageRoutes: MetadataRoute.Sitemap = WAGE_BENCHMARKS.map((item) => ({
    url: `${baseUrl}/wages/${item.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...permitRoutes, ...wageRoutes];
}
