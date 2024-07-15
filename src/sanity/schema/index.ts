import { SchemaTypeDefinition } from 'sanity';
import { navigationMenu } from './documents/navigationMenu';
import {
  imageSection,
  textSection,
  navigationItemSection,
  textWithUrlSection,
  formSection,
  iconsWithUrlSection,
  iconsWithUrlAndTextSection,
  youtubeVideoSection,
  sendEmailSection,
} from './singletons/sections';
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
    textSection,
    navigationItemSection,
    textWithUrlSection,
    formSection,
    iconsWithUrlSection,
    iconsWithUrlAndTextSection,
    youtubeVideoSection,
    sendEmailSection,
    footer,
    page,
    siteSettings,
    customRichTextBlock,
    colorPicker,
    // Add additional schemas as needed.
  ],
};
