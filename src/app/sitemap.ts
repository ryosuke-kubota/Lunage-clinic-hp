import type { MetadataRoute } from "next";

// 静的書き出し（GitHub Pages）でも出力されるようにする
export const dynamic = "force-static";

const SITE_URL = "https://lunage-clinic.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/menu`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/pricing`, lastModified, changeFrequency: "weekly", priority: 0.7 },
  ];
}
