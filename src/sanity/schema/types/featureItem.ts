import { defineType } from 'sanity';

export const featureItem = defineType({
  name: 'featureItem',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'description',
      type: 'customRichTextBlock',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
    },
    {
      name: 'imageIcon',
      title: 'Image Icon',
      type: 'image',
    },
  ],
});
