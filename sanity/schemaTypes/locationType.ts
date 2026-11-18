import { defineField, defineType } from 'sanity';

export const locationType = defineType({
  name: 'location',
  title: 'Local SEO Locations (Hyderabad Hubs)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Location / Locality Name',
      type: 'string',
      description: 'e.g., Kukatpally, KPHB, Madhapur, Kokapet, Jubilee Hills',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'zone',
      title: 'Hyderabad Geographical Zone',
      type: 'string',
      options: {
        list: [
          { title: 'West Hyderabad', value: 'West Hyderabad' },
          { title: 'Central Hyderabad', value: 'Central Hyderabad' },
          { title: 'North Hyderabad', value: 'North Hyderabad' },
          { title: 'East Hyderabad', value: 'East Hyderabad' },
          { title: 'South Hyderabad', value: 'South Hyderabad' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'priorityTier',
      title: 'Priority SEO Tier',
      type: 'string',
      description: 'Prioritize Kukatpally & KPHB (Primary Focus Hubs) before broader expansion.',
      options: {
        list: [
          { title: 'Tier 1 — Core Focus (Kukatpally, KPHB)', value: 'tier-1' },
          { title: 'Tier 2 — Tech & Luxury Hubs (Madhapur, Gachibowli, Kokapet, Jubilee Hills)', value: 'tier-2' },
          { title: 'Tier 3 — Expanding Suburbs (Tellapur, Bachupally, Miyapur, etc.)', value: 'tier-3' },
        ],
      },
      initialValue: 'tier-2',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Section Headline',
      type: 'string',
      description: 'e.g., Interiors, Thoughtfully Designed.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Section Subheadline',
      type: 'string',
      description: 'e.g., Turnkey residential interior design & factory-finished execution for Kukatpally homes.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Unique Local Introduction',
      type: 'text',
      rows: 5,
      description: 'Must provide genuine local context regarding apartments, communities, and living trends in this specific area. Avoid generic keyword stuffing.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featuredImage',
      title: 'Location Cover Image',
      type: 'image',
      options: { hotspot: true, storeOriginalFilename: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          initialValue: 'Parthu Interiors residential design in Hyderabad',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'propertyTypes',
      title: 'Prevalent Local Property Types',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. 2BHK & 3BHK Gated Apartments, Standalone Luxury Builder Floors, Independent Villas',
    }),
    defineField({
      name: 'keyHighlights',
      title: 'Execution & Value Highlights for this Locality',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. Factory-controlled precision from nearby Kokapet facility, 45-day execution, zero dust on site',
    }),
    defineField({
      name: 'localDesignConsiderations',
      title: 'Neighborhood Design & Engineering Considerations',
      type: 'array',
      of: [{ type: 'text', rows: 2 }],
      description: 'Detailed, practical design guidance relevant to high-rise wind loads, acoustic damping, natural ventilation or layout styles common in this locality.',
    }),
    defineField({
      name: 'nearbyAreas',
      title: 'Surrounding / Contiguous Areas',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'Used for contextual internal linking without creating thin doorway pages.',
    }),
    defineField({
      name: 'relatedProjects',
      title: 'Completed Local Projects in this Neighborhood',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
    }),
    defineField({
      name: 'faqs',
      title: 'Locality Specific FAQs',
      type: 'array',
      of: [{ type: 'faqItem' }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO & Metadata',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'zone',
      media: 'featuredImage',
    },
  },
});

