import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: company.url, changeFrequency: "monthly", priority: 1 },
  ];
  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${company.url}/projekt/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.8,
  }));
  return [...staticRoutes, ...projectRoutes];
}