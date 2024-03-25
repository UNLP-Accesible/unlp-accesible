import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
  // The main page type with common fields
  {
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
          maxLength: 200, // You can adjust the maximum slug length
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {type: 'block'}, // For rich text
          {type: 'image'}, // For images with optional hotspot for better cropping
          {
            // For embedded videos
            title: 'Video',
            name: 'video',
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
          },
          {
            // For external links
            title: 'External Link',
            name: 'externalLink',
            type: 'object',
            fields: [
              {
                name: 'url',
                title: 'URL',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel'],
                  }),
              },
              {
                name: 'text',
                title: 'Link Text',
                type: 'string',
              },
            ],
          },
          // Add other content types like downloads, quotes, etc.
        ],
      },
      {
        name: 'subPages',
        title: 'Subpages',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'page'}]}],
      },
      // Other fields like SEO metadata, authors, publish date, etc.
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'slug.current',
      },
    },
  },
  // Schema type for site-wide settings, like navigation, footer, etc.
  {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    // Singletons in Sanity usually have only one instance and are used for site-wide settings
    __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
    fields: [
      {
        name: 'mainNavigation',
        title: 'Main Navigation',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'page'}]}],
      },
      {
        name: 'footerNavigation',
        title: 'Footer Navigation',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'page'}]}],
      },
      // Add other site-wide settings like contact information, social media links, etc.
    ],
  },
  // Other specific object types can go here...
],
}
