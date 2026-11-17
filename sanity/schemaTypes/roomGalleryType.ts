import { defineField, defineType } from 'sanity';

export const roomGalleryType = defineType({
  name: 'roomGallery',
  title: 'Room Gallery',
  type: 'object',
  fields: [
    defineField({
      name: 'roomName',
      title: 'Room / Space Name',
      type: 'string',
      description: 'e.g. Master Bedroom, Living & Foyer, Modular Kitchen, Dining Lounge',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'roomType',
      title: 'Room Category',
      type: 'string',
      options: {
        list: [
          { title: 'Living Room', value: 'living-room' },
          { title: 'Modular Kitchen', value: 'modular-kitchen' },
          { title: 'Master Bedroom', value: 'master-bedroom' },
          { title: 'Guest / Kids Bedroom', value: 'bedroom' },
          { title: 'Wardrobe & Walk-in Closet', value: 'wardrobe' },
          { title: 'Dining & Bar Lounge', value: 'dining-room' },
          { title: 'Pooja Room', value: 'pooja-room' },
          { title: 'Balcony & Outdoor Deck', value: 'balcony' },
          { title: 'Foyer & Entrance', value: 'foyer' },
          { title: 'False Ceiling & Architectural Lighting', value: 'ceiling' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Room Concept / Details',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'images',
      title: 'Room Photographs',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative Text (Crucial for Image SEO & Accessibility)',
              type: 'string',
              description: 'e.g., "Fluted teak wood TV unit with warm ambient LED strip lighting in Kokapet villa"',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'caption',
              title: 'Caption / Material Highlight',
              type: 'string',
              description: 'e.g., "Book-matched Italian marble with integrated magnetic track light"',
            }),
          ],
        },
      ],
      validation: (rule) => rule.min(1).error('At least one photograph is required for a room gallery.'),
    }),
  ],
  preview: {
    select: {
      title: 'roomName',
      subtitle: 'roomType',
      media: 'images.0',
    },
  },
});

