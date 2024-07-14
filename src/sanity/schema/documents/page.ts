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
    },
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
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
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'heroSection' },
        { type: 'faqSection' },
        { type: 'headerSection' },
        { type: 'featureSection' },
        { type: 'featureSectionLeftImage' },
        { type: 'featureSectionThreeCol' },
        { type: 'logoCloudsSection' },
        { type: 'testimonialSection' },
        { type: 'ctaSection' },
        { type: 'imageSection' },
        { type: 'subheaderSection' },
        // Other section types can be added here as needed for the MVP.
      ],
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
