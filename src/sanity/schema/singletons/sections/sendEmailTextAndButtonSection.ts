import { SchemaTypeDefinition } from 'sanity';

// Define the send email text and button section as a separate type for recursive use
export const sendEmailTextAndButtonSection: SchemaTypeDefinition = {
  name: 'sendEmailTextAndButtonSection',
  title: 'Send Email Text and Button Section',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
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
  ],
};
