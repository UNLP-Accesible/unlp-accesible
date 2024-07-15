import { SchemaTypeDefinition } from 'sanity';

export const youtubeVideoSection: SchemaTypeDefinition = {
  name: 'youtubeVideoSection',
  title: 'YouTube Video Section',
  type: 'object',
  fields: [
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
  ],
};
