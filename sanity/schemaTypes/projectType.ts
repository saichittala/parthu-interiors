import { defineField, defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Interior Design Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      description: 'e.g., Gated Villa Interior in Kokapet, Contemporary 3BHK in Financial District',
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
      name: 'projectType',
      title: 'Project / Property Type',
      type: 'string',
      options: {
        list: [
          { title: 'Luxury Villa', value: 'Luxury Villa' },
          { title: '3BHK Apartment', value: '3BHK Apartment' },
          { title: '2BHK Apartment', value: '2BHK Apartment' },
          { title: 'Penthouse Suite', value: 'Penthouse Suite' },
          { title: 'Independent House / Duplex', value: 'Independent House / Duplex' },
          { title: 'Full Home Renovation', value: 'Home Renovation' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'locationName',
      title: 'Display Location (Area, City)',
      type: 'string',
      description: 'e.g., Kokapet, Hyderabad / Financial District, Hyderabad',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Related Location Hub',
      type: 'reference',
      to: [{ type: 'location' }],
      description: 'Links this project to a dedicated Hyderabad Location Page for local SEO cross-pollination.',
    }),
    defineField({
      name: 'scope',
      title: 'Execution Scope',
      type: 'string',
      description: 'e.g., Full Turnkey Interior Design & Execution, Modular Woodwork & Lighting',
      initialValue: 'Full Turnkey Interior Design & Execution',
    }),
    defineField({
      name: 'designStyle',
      title: 'Design Style',
      type: 'string',
      description: 'e.g., Warm Contemporary Minimalist, Modern European Luxury, Neo-Classical Elegance',
    }),
    defineField({
      name: 'squareFootage',
      title: 'Area / Size (Sq. Ft.)',
      type: 'string',
      description: 'e.g., 5,400 sq. ft. / 2,150 sq. ft.',
    }),
    defineField({
      name: 'completionYear',
      title: 'Handover / Completion Year',
      type: 'string',
      initialValue: '2026',
    }),
    defineField({
      name: 'featured',
      title: 'Feature on Homepage Gallery',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'mainImage',
      title: 'Hero Cover Image',
      type: 'image',
      options: {
        hotspot: true,
        storeOriginalFilename: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text (SEO & Accessibility)',
          type: 'string',
          description: 'Descriptive text describing the room, style, and location.',
          initialValue: 'Luxury residential interior in Hyderabad by Parthu Interiors',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Project Image Gallery (Upload & Drag to Reorder)',
      type: 'array',
      options: {
        layout: 'grid',
      },
      description: 'Drag & drop multiple high-resolution photographs. Reorder easily in the visual grid.',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
            storeOriginalFilename: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text (Optional)',
              type: 'string',
              initialValue: 'Custom interior execution by Parthu Interiors',
            }),
            defineField({
              name: 'caption',
              title: 'Caption / Feature Note (Optional)',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'roomGalleries',
      title: 'Room-by-Room Breakdown Galleries',
      type: 'array',
      description: 'Segment photographs into Living Room, Modular Kitchen, Master Bedroom, Wardrobes, etc.',
      of: [{ type: 'roomGallery' }],
    }),
    defineField({
      name: 'beforeAfter',
      title: 'Before & After Site Comparisons',
      type: 'array',
      description: 'Showcase bare shell vs. completed factory execution.',
      of: [{ type: 'beforeAfter' }],
    }),
    defineField({
      name: 'concept',
      title: 'Architectural Concept & Design Story',
      type: 'text',
      rows: 5,
      description: 'The narrative of the homeowner requirements, layout strategy, and design vision.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'materials',
      title: 'Key Materials & Finishes',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'e.g. 100% BWP Marine Plywood, Italian Botticino Marble, Anti-Fingerprint Acrylic, Teak Veneer',
    }),
    defineField({
      name: 'keyFeatures',
      title: 'Key Architectural Highlights',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'challenge',
      title: 'Site Challenge / Spatial Hurdle',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'solution',
      title: 'Engineered Solution by Parthu Interiors',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'relatedService',
      title: 'Primary Service Category',
      type: 'reference',
      to: [{ type: 'service' }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO & Social Metadata',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'locationName',
      media: 'mainImage',
    },
  },
});

