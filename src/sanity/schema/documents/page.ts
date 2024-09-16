import { SchemaTypeDefinition } from 'sanity';

// Schema for the page document
export const page: SchemaTypeDefinition = {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Internal title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Description (SEO)',
      type: 'text',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'textSection' },
        { type: 'imageSection' },
        { type: 'navigationItemSection' },
        { type: 'formSection' },
        { type: 'iconsWithUrlAndTextSection' },
        { type: 'youtubeVideoSection' },
        { type: 'sendEmailSection' },
        // Other section types can be added here as needed for the MVP.
      ],
    },
    {
      name: 'titleColor',
      title: 'Title Color',
      type: 'color',
    },
    {
      name: 'titleBackgroundColor',
      title: 'Title Background Color',
      type: 'color',
    },
    {
      name: 'contentColor',
      title: 'Content Color',
      type: 'color',
    },
    {
      name: 'contentBackgroundColor',
      title: 'Content Background Color',
      type: 'color',
    },
    {
      name: 'navigationMenu',
      title: 'Navigation Menu',
      type: 'reference',
      to: [{ type: 'navigationMenu' }],
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'footer',
    },
    // Additional fields can be added for SEO, metadata, etc.
  ],
};
