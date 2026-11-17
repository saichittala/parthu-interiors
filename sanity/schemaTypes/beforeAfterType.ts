import { defineField, defineType } from 'sanity';

export const beforeAfterType = defineType({
  name: 'beforeAfter',
  title: 'Before & After Comparison',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Comparison Title',
      type: 'string',
      description: 'e.g., Raw Concrete Shell vs. Finished Living Room',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'beforeImage',
      title: 'Before Image (Bare Shell / Site Condition)',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          initialValue: 'Site condition before interior execution',
        }),
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          initialValue: 'Before',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'afterImage',
      title: 'After Image (Completed Factory-Finished Interior)',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          initialValue: 'Completed luxury interior handover by Parthu Interiors',
        }),
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          initialValue: 'After',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'note',
      title: 'Execution Highlight Note',
      type: 'string',
      description: 'e.g. 45-day turnkey transformation using 100% BWP Marine Plywood off-site fabrication.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'note',
      media: 'afterImage',
    },
  },
});

