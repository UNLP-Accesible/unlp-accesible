import { SchemaTypeDefinition } from 'sanity';

export const iconsWithUrlSection: SchemaTypeDefinition = {
  name: 'iconsWithUrlSection',
  title: 'Icons with URL Section',
  type: 'object',
  fields: [
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
  ],
};
