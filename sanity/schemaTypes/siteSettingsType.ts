import { defineField, defineType } from 'sanity';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Global Brand & Business Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'brandName',
      title: 'Brand Name',
      type: 'string',
      initialValue: 'Parthu Interiors',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'legalName',
      title: 'Company Legal Entity Name',
      type: 'string',
      initialValue: 'Parthu Interiors Design & Execution LLP',
    }),
    defineField({
      name: 'tagline',
      title: 'Core Tagline',
      type: 'string',
      initialValue: 'Designing Spaces. Creating Homes.',
    }),
    defineField({
      name: 'phone',
      title: 'Primary Phone Number (Display)',
      type: 'string',
      initialValue: '+91 87909 05746',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'whatsappPhone',
      title: 'WhatsApp Contact Number (International E.164)',
      type: 'string',
      initialValue: '+918790905746',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Official Email Address',
      type: 'string',
      initialValue: 'parthuinteriors.hyderabad@gmail.com',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'factoryAddress',
      title: 'Manufacturing & Woodwork Unit Address',
      type: 'text',
      rows: 3,
      initialValue: 'Parthu Interiors Modern Woodwork Manufacturing Facility, Kokapet, Hyderabad, Telangana 500075',
    }),
    defineField({
      name: 'studioAddress',
      title: 'Design Studio & Client Experience Centre',
      type: 'text',
      rows: 3,
      initialValue: 'Parthu Interiors Experience Centre, Near Pillar 143, Attapur Main Road, Hyderabad, Telangana 500048',
    }),
    defineField({
      name: 'workingHours',
      title: 'Operating Hours',
      type: 'string',
      initialValue: 'Monday – Sunday: 9:30 AM – 8:30 PM',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Official Social Media Profiles',
      type: 'object',
      fields: [
        defineField({
          name: 'instagram',
          title: 'Instagram Profile URL',
          type: 'url',
          initialValue: 'https://www.instagram.com/parthu_interiors',
        }),
        defineField({
          name: 'facebook',
          title: 'Facebook Page URL',
          type: 'url',
          initialValue: 'https://www.facebook.com/parthuinteriors',
        }),
        defineField({
          name: 'youtube',
          title: 'YouTube Channel URL',
          type: 'url',
        }),
        defineField({
          name: 'linkedin',
          title: 'LinkedIn Company Page',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'globalSeo',
      title: 'Global Default SEO Settings',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'brandName',
      subtitle: 'tagline',
    },
  },
});

