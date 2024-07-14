import { SchemaTypeDefinition } from 'sanity';
import { navigationMenu } from './documents/navigationMenu';
import {
  heroSection,
  headerSection,
  faqSection,
  featureSection,
  featureSectionLeftImage,
  featureSectionThreeCol,
  logoCloudsSection,
  testimonialSection,
  ctaSection,
  imageSection,
  subheaderSection,
} from './singletons/sections';
import { footer } from './singletons/footer';
import { page } from './documents/page';
import { siteSettings } from './documents/siteSettings';
import { navigationItem } from './singletons/navigationItem';
import { colors } from './singletons/colors';
import { customRichTextBlock, colorPicker, featureItem } from './types';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    colors,
    navigationItem,
    navigationMenu,
    heroSection,
    headerSection,
    faqSection,
    featureItem,
    featureSection,
    featureSectionLeftImage,
    featureSectionThreeCol,
    logoCloudsSection,
    testimonialSection,
    ctaSection,
    imageSection,
    subheaderSection,
    footer,
    page,
    siteSettings,
    customRichTextBlock,
    colorPicker,
    // Add additional schemas as needed.
  ],
};
