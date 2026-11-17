import { defineField, defineType } from 'sanity';

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Client Reviews & Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'clientName',
      title: 'Client Full Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'propertyLocation',
      title: 'Apartment / Community & Locality',
      type: 'string',
      description: 'e.g. My Home Bhooja, HITEC City / Aparna Sarovar, Nallagandla',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Star Rating (1 to 5)',
      type: 'number',
      initialValue: 5,
      validation: (rule) => rule.required().min(1).max(5),
    }),
    defineField({
      name: 'reviewText',
      title: 'Review Statement',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'verified',
      title: 'Verified Homeowner Badge',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'avatar',
      title: 'Client Photo / Initial Avatar',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'relatedProject',
      title: 'Linked Project Showcase',
      type: 'reference',
      to: [{ type: 'project' }],
    }),
    defineField({
      name: 'relatedLocation',
      title: 'Linked Location',
      type: 'reference',
      to: [{ type: 'location' }],
    }),
  ],
  preview: {
    select: {
      title: 'clientName',
      subtitle: 'propertyLocation',
      media: 'avatar',
    },
  },
});

