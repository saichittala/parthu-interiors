import { defineField, defineType } from 'sanity';

export const seoType = defineType({
  name: 'seo',
  title: 'SEO & Metadata',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Optimal length: 50-60 characters. Appears as the clickable headline in Google search results.',
      validation: (rule) => rule.max(70).warning('Titles longer than 60-70 characters may be truncated by search engines.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Optimal length: 140-160 characters. Summarizes page content for search engines and social shares.',
      validation: (rule) => rule.max(170).warning('Descriptions longer than 160 characters may be truncated in search snippets.'),
    }),
    defineField({
      name: 'focusKeyword',
      title: 'Focus Keyword / Keyphrase',
      type: 'string',
      description: 'Primary target search query (e.g., "Luxury Interior Designers in Kokapet").',
    }),
    defineField({
      name: 'keywords',
      title: 'Secondary Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'ogImage',
      title: 'Social Share Image (Open Graph / Twitter)',
      type: 'image',
      description: 'Recommended size: 1200x630px. Used for rich previews on WhatsApp, Facebook, LinkedIn, Twitter.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL Override',
      type: 'url',
      description: 'Leave blank to use default calculated URL. Use only if consolidating duplicate content.',
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide from Search Engines (noindex)',
      type: 'boolean',
      description: 'Check this only if this page should NOT be indexed by search engines.',
      initialValue: false,
    }),
  ],
});

