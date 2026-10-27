import { MetadataRoute } from 'next';
import { SITE_URL } from './lib/siteConfig';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_URL;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/api/'],
      },
      {
        userAgent: ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User'],
        allow: '/',
        disallow: ['/private/', '/api/'],
      },
      {
        userAgent: ['PerplexityBot', 'ClaudeBot', 'anthropic-ai', 'Googlebot', 'Google-Extended', 'Bingbot', 'Applebot'],
        allow: '/',
        disallow: ['/private/', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
