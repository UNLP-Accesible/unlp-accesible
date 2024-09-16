import { SchemaTypeDefinition } from 'sanity';

export const sendEmailSection: SchemaTypeDefinition = {
  name: 'sendEmailSection',
  title: 'Send Email Section',
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
      name: 'emailTo',
      title: 'Email To',
      type: 'string',
    },
  ],
};
