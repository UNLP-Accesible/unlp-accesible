import { isValidUrl } from '@/sanity/lib/validations';
import { SchemaTypeDefinition } from 'sanity';

export const iconsWithUrlAndTextSection: SchemaTypeDefinition = {
  name: 'iconsWithUrlAndTextSection',
  title: 'Icons with URL and Text Section',
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
              validation: isValidUrl(['http', 'https', 'mailto', 'tel']),
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
