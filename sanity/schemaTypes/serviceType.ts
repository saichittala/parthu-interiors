import { defineField, defineType } from 'sanity';

export const serviceType = defineType({
  name: 'service',
  title: 'Interior Design Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Name',
      type: 'string',
      description: 'e.g., Complete Home Interior Design, Modular Kitchen Design, Bedroom Interiors',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Service Grouping / Category',
      type: 'string',
      options: {
        list: [
          { title: 'Turnkey Interiors', value: 'Turnkey Interiors' },
          { title: 'Modular Woodwork', value: 'Modular Woodwork' },
          { title: 'Room-by-Room Design', value: 'Room-by-Room Design' },
          { title: 'Custom Craftsmanship', value: 'Custom Craftsmanship' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Value Proposition Tagline',
      type: 'string',
      description: 'e.g., End-to-end residential interior design & execution across Hyderabad',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Full Service Overview',
      type: 'text',
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Primary Service Cover Image',
      type: 'image',
      options: { hotspot: true, storeOriginalFilename: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          initialValue: 'Interior design services in Hyderabad by Parthu Interiors',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Service Showcase Gallery',
      type: 'array',
      options: { layout: 'grid' },
      of: [
        {
          type: 'image',
          options: { hotspot: true, storeOriginalFilename: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              initialValue: 'Parthu Interiors service showcase',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'features',
      title: 'Core Deliverables / Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. Dedicated Lead Designer, 100% BWP Marine Plywood, 45-Day Handover',
    }),
    defineField({
      name: 'specs',
      title: 'Standard Technical Specifications',
      type: 'object',
      fields: [
        defineField({
          name: 'material',
          title: 'Materials & Substrates',
          type: 'string',
          initialValue: '100% BWP Grade Marine Plywood, Acrylic & Natural Veneers',
        }),
        defineField({
          name: 'warranty',
          title: 'Warranty Period',
          type: 'string',
          initialValue: '10 Years Structural Warranty',
        }),
        defineField({
          name: 'hardware',
          title: 'Hardware & Mechanism Brands',
          type: 'string',
          initialValue: 'Blum, Hafele & Hettich German Soft-Close Fittings',
        }),
        defineField({
          name: 'turnaround',
          title: 'Factory-to-Site Timeline',
          type: 'string',
          initialValue: '40 - 45 Days from Design Freeze',
        }),
      ],
    }),
    defineField({
      name: 'relatedProjects',
      title: 'Showcase Projects for this Service',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
      description: 'Dynamically links completed Hyderabad projects matching this service.',
    }),
    defineField({
      name: 'faqs',
      title: 'Service Specific FAQs',
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
      title: 'title',
      subtitle: 'category',
      media: 'mainImage',
    },
  },
});

