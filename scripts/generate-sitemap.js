import fs from 'fs';



const generateSitemap = async () => {


  const staticRoutes = [
    { loc: '/', changefreq: 'daily', priority: '1.0' },
    { loc: '/about', changefreq: 'monthly', priority: '0.8' },
  ];

  const allRoutes = [...staticRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map(route => `
    <url>
      <loc>${`https://bart.cam${route.loc}`}</loc>
      <lastmod>${route.lastmod || new Date().toISOString()}</lastmod>
      <changefreq>${route.changefreq}</changefreq>
      <priority>${route.priority}</priority>
    </url>`)
    .join('')}
</urlset>`;

  return sitemap;
};

// Generate and save the sitemap
generateSitemap().then(sitemap => {
  fs.writeFileSync('public/sitemap.xml', sitemap);
  console.log('Sitemap successfully generated!');
});
