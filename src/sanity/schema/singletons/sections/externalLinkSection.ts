import { isValidUrl } from '@/sanity/lib/validations';
import { SchemaTypeDefinition } from 'sanity';

// Define the external link section as a separate type for recursive use
export const externalLinkSection: SchemaTypeDefinition = {
  name: 'externalLinkSection',
  title: 'External Link',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: isValidUrl(['http', 'https', 'mailto', 'tel']),
    },
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
  ],
};
