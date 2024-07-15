import { SchemaTypeDefinition } from 'sanity';

export const textWithUrlSection: SchemaTypeDefinition = {
  name: 'textWithUrlSection',
  title: 'Text with URL Section',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
  ],
};
