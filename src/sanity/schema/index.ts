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
    // Add additional schemas as needed.
  ],
};
