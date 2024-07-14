import { SchemaTypeDefinition } from 'sanity';

// Define the navigation item as a separate type for recursive use
export const navigationItem: SchemaTypeDefinition = {
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'page',
      title: 'Page',
      type: 'reference',
      to: [{ type: 'page' }],
    },
    {
      // This is the recursive part: navigation items can contain other navigation items
      name: 'children',
      title: 'Sub Items',
      type: 'array',
      of: [{ type: 'navigationItem' }], // References the navigationItem type itself
    },
  ],
};
