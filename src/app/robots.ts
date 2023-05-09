import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: '*',
      allow: '/',
    },
  ],
  host: 'https://quote.znagy.hu',
  sitemap: 'https://quote.znagy.hu/sitemap.xml',
});

export default robots;
