import { SchemaTypeDefinition } from 'sanity';

export const iconsWithUrlAndTextSection: SchemaTypeDefinition = {
  name: 'iconsWithUrlAndTextSection',
  title: 'Icons with URL and Text Section',
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
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
  ],
};
