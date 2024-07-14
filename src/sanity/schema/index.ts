import { SchemaTypeDefinition } from 'sanity';
import { navigationMenu } from './documents/navigationMenu';
import { imageSection } from './singletons/sections';
import { footer } from './singletons/footer';
import { page } from './documents/page';
import { siteSettings } from './documents/siteSettings';
import { navigationItem } from './singletons/navigationItem';
import { colors } from './singletons/colors';
import { customRichTextBlock, colorPicker } from './types';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    colors,
    navigationItem,
    navigationMenu,
    imageSection,
    footer,
    page,
    siteSettings,
    customRichTextBlock,
    colorPicker,
    // Add additional schemas as needed.
  ],
};
