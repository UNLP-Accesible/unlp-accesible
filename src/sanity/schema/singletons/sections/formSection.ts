import { SchemaTypeDefinition } from 'sanity';

export const formSection: SchemaTypeDefinition = {
  name: 'formSection',
  title: 'Form Section',
  type: 'object',
  fields: [
    {
      name: 'formId',
      title: 'Form ID',
      type: 'string',
    },
    {
      name: 'submitButtonText',
      title: 'Submit Button Text',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'method',
      title: 'HTTP Method',
      type: 'string',
      options: {
        list: [
          { title: 'GET', value: 'GET' },
          { title: 'POST', value: 'POST' },
          { title: 'PUT', value: 'PUT' },
          { title: 'DELETE', value: 'DELETE' },
        ],
      },
    },
    {
      name: 'inputs',
      title: 'Inputs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Text', value: 'text' },
                  { title: 'Email', value: 'email' },
                  { title: 'Password', value: 'password' },
                  { title: 'Number', value: 'number' },
                  { title: 'Date', value: 'date' },
                ],
              },
            },
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
};
