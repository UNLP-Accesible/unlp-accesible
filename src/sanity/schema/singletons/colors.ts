import { SchemaTypeDefinition } from 'sanity';

// Schema for the colors singleton
export const colors: SchemaTypeDefinition = {
  name: 'colors',
  title: 'Colors',
  description: 'Define the color variables for the Tailwind CSS theme.',
  type: 'object',
  fields: [
    {
      name: 'white',
      title: 'White',
      type: 'color',
      options: {
        disableAlpha: true, // Optional: disable the alpha channel for colors
      },
    },
    {
      name: 'dark',
      title: 'Dark',
      type: 'color',
      options: {
        disableAlpha: true,
      },
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'color',
      options: {
        disableAlpha: true,
      },
    },
  ],
};
