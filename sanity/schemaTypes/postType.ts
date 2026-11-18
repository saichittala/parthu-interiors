import { defineField, defineType } from 'sanity';

export const postType = defineType({
  name: 'post',
  title: 'Blog & Editorial Articles',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Article Headline',
      type: 'string',
      description: 'e.g. 2BHK Interior Design Cost in Hyderabad (2026 Price Breakdown), Modular Kitchen Ideas',
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
      name: 'description',
      title: 'Excerpt / Summary',
      type: 'text',
      rows: 3,
      description: 'Summary shown on blog listing cards and search engine snippets.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Hero Image',
      type: 'image',
      options: { hotspot: true, storeOriginalFilename: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text (SEO & Accessibility)',
          type: 'string',
          initialValue: 'Parthu Interiors editorial design guide',
        }),
        defineField({
          name: 'caption',
          title: 'Caption',
          type: 'string',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author Name',
      type: 'string',
      initialValue: 'Parthu Interiors Editorial Team',
    }),
    defineField({
      name: 'category',
      title: 'Primary Category',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'tags',
      title: 'Topic Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'publishedDate',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'updatedDate',
      title: 'Last Updated Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'status',
      title: 'Publishing Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'Draft' },
          { title: 'Published', value: 'Published' },
        ],
        layout: 'radio',
      },
      initialValue: 'Draft',
    }),
    defineField({
      name: 'content',
      title: 'Article Content (Rich Text / Markdown)',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2 (H2)', value: 'h2' },
            { title: 'Heading 3 (H3)', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Internal or External Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule) =>
                      Rule.uri({
                        allowRelative: true,
                        scheme: ['https', 'http', 'mailto', 'tel'],
                      }),
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              validation: (rule) => rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'markdownContent',
      title: 'Fallback / Raw Markdown Content',
      type: 'text',
      rows: 10,
      description: 'Used for imported markdown articles and automated content sync.',
    }),
    defineField({
      name: 'faq',
      title: 'Article FAQs (Direct FAQ Schema Generation)',
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
      subtitle: 'publishedDate',
      media: 'featuredImage',
    },
  },
});

