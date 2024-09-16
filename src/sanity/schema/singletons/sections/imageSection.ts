import { SchemaTypeDefinition } from 'sanity';

export const imageSection: SchemaTypeDefinition = {
  name: 'imageSection',
  title: 'Image Section',
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
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'contentWidth',
      title: 'Should Have Content Width',
      type: 'boolean',
    },
  ],
};
