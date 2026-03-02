import { NextResponse } from "next/server";
import { APP_URL } from "@/constans/common";

export async function GET() {
  const posts = [
    "kinh-nghiem-du-hoc-han-quoc",
  ];
  const navbars = [
    "bai-viet",
  ];
  const functions = [
    "dua-tre",
  ];
  const offices = [
    "giang-vien-tieng-han",
  ];
  const langs = ["vi", "en", "ko"];

  const blogs = posts.flatMap((slug) =>
    langs.map(
      (lang) => `
      <url>
        <loc>${APP_URL}/${lang}/bai-viet/${slug}/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>`
    )
  );
  const pages = navbars.flatMap((slug) =>
    langs.map(
      (lang) => `
      <url>
        <loc>${APP_URL}/${lang}/${slug}/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>`
    )
  );
  const services = functions.flatMap((slug) =>
    langs.map(
      (lang) => `
      <url>
        <loc>${APP_URL}/${lang}/dich-vu/${slug}/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>`
    )
  );
  const personels = offices.flatMap((slug) =>
    langs.map(
      (lang) => `
      <url>
        <loc>${APP_URL}/${lang}/tuyen-dung/${slug}/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>`
    )
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${APP_URL}/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${APP_URL}/ko</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${APP_URL}/en</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
      ${pages.join("")}
      ${blogs.join("")}
      ${services.join("")}
      ${personels.join("")}
    </urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
