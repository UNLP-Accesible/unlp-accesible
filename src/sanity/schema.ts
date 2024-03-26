import { type SchemaTypeDefinition } from 'sanity';

const videoReference: SchemaTypeDefinition = {
  name: 'videoReference',
  title: 'Video Reference',
  type: 'object',
  fields: [
    {
      name: 'video',
      title: 'Video',
      type: 'reference',
      to: [{ type: 'video' }],
    },
  ],
};

const externalLinkReference: SchemaTypeDefinition = {
  name: 'externalLinkReference',
  title: 'External Link Reference',
  type: 'object',
  fields: [
    {
      name: 'externalLink',
      title: 'External Link',
      type: 'reference',
      to: [{ type: 'externalLink' }],
    },
  ],
};

const video: SchemaTypeDefinition = {
  name: 'video',
  title: 'Video',
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
};

const externalLink: SchemaTypeDefinition = {
  name: 'externalLink',
  title: 'External Link',
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }).required(),
    },
    {
      name: 'text',
      title: 'Link Text',
      type: 'string',
    },
  ],
};

const page: SchemaTypeDefinition = {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }, { type: 'videoReference' }, { type: 'externalLinkReference' }],
    },
    {
      name: 'subPages',
      title: 'Subpages',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'page' }] }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
  },
};

const siteSettings: SchemaTypeDefinition = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'mainNavigation',
      title: 'Main Navigation',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'page' }] }],
    },
    {
      name: 'footerNavigation',
      title: 'Footer Navigation',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'page' }] }],
    },
    // Additional site-wide settings go here...
  ],
};

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, siteSettings, video, externalLink, videoReference, externalLinkReference],
};
