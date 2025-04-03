import { type SchemaTypeDefinition } from 'sanity';

// Define the navigation item as a separate type for recursive use
export const navigationItemSection: SchemaTypeDefinition = {
  name: 'navigationItemSection',
  title: 'Navigation Item',
  type: 'object',
  fields: [
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
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'page',
      title: 'Page',
      type: 'reference',
      to: [{ type: 'page' }],
    },
  ],
};
