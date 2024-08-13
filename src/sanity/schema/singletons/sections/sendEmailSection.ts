import { SchemaTypeDefinition } from 'sanity';

export const sendEmailSection: SchemaTypeDefinition = {
  name: 'sendEmailSection',
  title: 'Send Email Section',
  type: 'object',
  fields: [
    {
      name: 'emailTo',
      title: 'Email To',
      type: 'string',
    },
  ],
};
