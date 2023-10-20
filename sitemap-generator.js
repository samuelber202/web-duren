import fs from 'fs';

const hostname = 'https://duren-klari.my.id';
const outputPath = 'public/sitemap.xml'; // Output path for the sitemap.xml
const ignoredPaths = ['/login'];

const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  // Add more URLs here as needed
];

// Excluding the '/login' path
ignoredPaths.forEach((path) => {
  urls.push({ url: path, changefreq: 'monthly', priority: 0.3 });
});

const sitemapXML = generateSitemapXML(urls, hostname);

// Write the sitemap to a file
fs.writeFileSync(outputPath, sitemapXML);

console.log('Sitemap generated and saved to sitemap.xml');

function generateSitemapXML(urls, hostname) {
  const currentDate = new Date().toISOString();
  const xmlItems = urls.map((url) => {
    return `
      <url>
        <loc>${hostname}${url.url}</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>${url.changefreq}</changefreq>
        <priority>${url.priority}</priority>
      </url>
    `;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${xmlItems.join('')}
    </urlset>`;
}
