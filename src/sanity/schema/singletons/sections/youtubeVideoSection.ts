import { type SchemaTypeDefinition } from 'sanity';

export const youtubeVideoSection: SchemaTypeDefinition = {
  name: 'youtubeVideoSection',
  title: 'YouTube Video Section',
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
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'textBefore',
      title: 'Text Before',
      type: 'text',
      deprecated: {
        reason: 'Use the "contentBefore" field instead',
      },
    },
    {
      name: 'contentBefore',
      title: 'Conten Before',
      type: 'customRichTextBlock',
    },
    {
      name: 'textAfter',
      title: 'Text After',
      type: 'text',
      deprecated: {
        reason: 'Use the "contentAfter" field instead',
      },
    },
    {
      name: 'contentAfter',
      title: 'Content After',
      type: 'customRichTextBlock',
    },
  ],
};
