import { SchemaTypeDefinition } from 'sanity';

export const iconsWithUrlAndTextSection: SchemaTypeDefinition = {
  name: 'iconsWithUrlAndTextSection',
  title: 'Icons with URL and Text Section',
  type: 'object',
  fields: [
    {
      name: 'maxItemsPerRow',
      title: 'Max Items Per Row',
      type: 'number',
    },
    {
      name: 'icons',
      title: 'Icons',
      type: 'array',
      of: [
        {
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
        },
      ],
    },
  ],
};
