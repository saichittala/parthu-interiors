import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
      {
        userAgent: ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'PerplexityBot', 'ClaudeBot', 'ChatGPT-User'],
        allow: '/',
      },
    ],
    sitemap: 'https://parthuinteriors.in/sitemap.xml',
    host: 'https://parthuinteriors.in',
  };
}
