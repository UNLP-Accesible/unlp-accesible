import { SchemaTypeDefinition } from 'sanity';

export const textSection: SchemaTypeDefinition = {
  name: 'textSection',
  title: 'Text Section',
  type: 'object',
  fields: [
    {
      name: 'header',
      title: 'Header',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
  ],
};
