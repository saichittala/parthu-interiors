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
      options: {
        layout: 'grid',
      },
      description: 'Upload photographs for this room. Drag thumbnails to reorder.',
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
              title: 'Alternative Text',
              type: 'string',
              initialValue: 'Interior craftsmanship by Parthu Interiors',
            }),
            defineField({
              name: 'caption',
              title: 'Caption / Material Highlight',
              type: 'string',
            }),
          ],
        },
      ],
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

