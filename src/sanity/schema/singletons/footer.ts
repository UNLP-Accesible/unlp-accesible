import { type SchemaTypeDefinition } from 'sanity';

// Schema for the footer component
export const footer: SchemaTypeDefinition = {
  name: 'footer',
  title: 'Footer',
  type: 'object',
  fields: [
    {
      name: 'mission',
      title: 'Company Mission',
      type: 'string',
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  {
                    title: 'Facebook',
                    value: 'facebook',
                  },
                  {
                    title: 'GitHub',
                    value: 'github',
                  },
                  {
                    title: 'Instagram',
                    value: 'instagram',
                  },
                  {
                    title: 'Linkedin',
                    value: 'linkedin',
                  },
                  {
                    title: 'YouTube',
                    value: 'youtube',
                  },
                  {
                    title: 'X',
                    value: 'x',
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                {
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
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'copyright',
      title: 'Copyright',
      type: 'string',
    },
  ],
};
