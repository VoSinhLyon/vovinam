import { GetServerSideProps } from "next";

const SITE_URL = "https://vovinam-lyon.fr"; // change automatiquement dès que ton domaine officiel sera actif

function generateSiteMap() {
  const staticPages = [
    "",
    "#club",
    "#horaires",
    "#enseignants",
    "#essai",
  ];

  const urls = staticPages
    .map((page) => {
      const path = page.startsWith("#") ? "/" + page : page;
      return `
        <url>
          <loc>${SITE_URL}${path}</loc>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
        </url>
      `;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;
}

function SiteMap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
