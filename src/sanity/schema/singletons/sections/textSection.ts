import { SchemaTypeDefinition } from 'sanity';

export const textSection: SchemaTypeDefinition = {
  name: 'textSection',
  title: 'Text Section',
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
      name: 'header',
      title: 'Header',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
      deprecated: {
        reason: 'Use the "content" field instead',
      },
    },
    {
      name: 'content',
      title: 'Text',
      type: 'customRichTextBlock',
    },
  ],
};
