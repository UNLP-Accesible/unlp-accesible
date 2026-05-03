import { type SchemaTypeDefinition } from 'sanity';
import { navigationMenu } from './documents/navigationMenu';
import { page } from './documents/page';
import { siteSettings } from './documents/siteSettings';
import { colors } from './singletons/colors';
import { footer } from './singletons/footer';
import { navigationItem } from './singletons/navigationItem';
import { customRichTextBlock } from './singletons/richText';
import {
  externalLinkSection,
  formSection,
  iconsWithUrlAndTextSection,
  imageSection,
  navigationItemSection,
  sendEmailSection,
  sendEmailTextAndButtonSection,
  textSection,
  youtubeVideoSection,
} from './singletons/sections';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    colors,
    customRichTextBlock,
    navigationItem,
    externalLinkSection,
    sendEmailTextAndButtonSection,
    navigationMenu,
    imageSection,
    textSection,
    navigationItemSection,
    formSection,
    iconsWithUrlAndTextSection,
    youtubeVideoSection,
    sendEmailSection,
    footer,
    page,
    siteSettings,
    // Add additional schemas as needed.
  ],
};
