import { type SchemaTypeDefinition } from 'sanity';

export const customRichTextBlock: SchemaTypeDefinition = {
  name: 'customRichTextBlock',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                name: 'url',
                title: 'http://example.com',
                type: 'url',
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean',
              },
            ],
          },
        ],
      },
    },
  ],
};
