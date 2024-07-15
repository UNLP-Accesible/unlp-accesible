import { SchemaTypeDefinition } from 'sanity';
// in this schema I want to define different variant colors to be used by tailwind
export const siteSettings: SchemaTypeDefinition = {
  name: 'siteSettings',
  title: 'Site Settings',
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
      title: 'Site Description (SEO)',
      type: 'text',
    },
    {
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
    },
    {
      name: 'mission',
      title: 'Company Mission',
      description: 'A text that will be reused in several places across the site, like the footer.',
      type: 'text',
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'color',
      description: 'The default background color for the site',
    },
    { name: 'colors', title: 'Colors', type: 'colors', description: 'Define the colors that will be used in the site' },
  ],
};
