import { defineType } from 'sanity';
import ColorDropdown from '@/components/ColorDropdown';

export const customRichTextBlock = defineType({
  name: 'customRichTextBlock',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [
          {
            name: 'gradient',
            title: 'gradient text',
            type: 'object',
            fields: [
              { name: 'gradient', title: 'gradient color', type: 'string', components: { input: ColorDropdown } },
            ],
          },
          {
            name: 'textColor',
            title: 'text color',
            type: 'object',
            fields: [
              {
                name: 'textColor',
                title: 'Text color',
                type: 'colorPicker',
              },
            ],
          },
        ],
      },
    },
  ],
});
