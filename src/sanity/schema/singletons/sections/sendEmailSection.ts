import { SchemaTypeDefinition } from 'sanity';

export const sendEmailSection: SchemaTypeDefinition = {
  name: 'sendEmailSection',
  title: 'Send Email Section',
  type: 'object',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'subject',
      title: 'Subject',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text',
    },
  ],
};
