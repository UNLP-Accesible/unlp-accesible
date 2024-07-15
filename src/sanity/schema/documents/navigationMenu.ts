import { SchemaTypeDefinition } from 'sanity';

// Schema for the navigation menu, which now includes nested items
export const navigationMenu: SchemaTypeDefinition = {
  name: 'navigationMenu',
  title: 'Navigation Menu',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Navigation Items',
      type: 'array',
      of: [{ type: 'navigationItem' }],
    },
  ],
};
