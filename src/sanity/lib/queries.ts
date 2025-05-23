import { type PortableTextBlock } from '@portabletext/react';
import { type PortableTextListItemBlock } from '@portabletext/types';
import { groq } from 'next-sanity';
import { type Image as ImageType } from 'sanity';
import { Footer } from '@/types/Footer';

// Page fields definition to match our schema
const pageFields = groq`
  _id,
  title,
  siteTitle,
  description,
  titleColor,
  titleBackgroundColor,
  contentColor,
  contentBackgroundColor,
  logo{
    ...,
    asset->{
      ...
    }
  },
  "slug": slug.current,
  content[]{
    ...,
    _type == 'imageSection' => {
      contentColor,
      contentBackgroundColor,
      image{
        ...,
        asset->{
          ...
        }
      },
      contentWidth,
    },
    _type == 'textSection' => {
      contentColor,
      contentBackgroundColor,
      header,
      text,
      content[]{
        ...,
      },
    },
    _type == 'navigationItemSection' => {
      contentColor,
      contentBackgroundColor,
      text,
      "page": page->{
        title,
        "slug": slug.current,
        titleColor,
        titleBackgroundColor,
        "logo": logo{
          ...,
          asset->{
            ...
          }
        }
      },
    },
    _type == 'formSection' => {
      contentColor,
      contentBackgroundColor,
      formId,
      submitButtonText,
      url,
      method,
      inputs[]{
        label,
        type,
        name,
      },
    },
    _type == 'iconsWithUrlAndTextSection' => {
      contentColor,
      contentBackgroundColor,
      maxItemsPerRow,
      icons[]{
        icon{
          ...,
          asset->{
            ...
          }
        },
        url,
        text,
      },
    },
    _type == 'youtubeVideoSection' => {
      contentColor,
      contentBackgroundColor,
      videoUrl,
      title,
      textBefore,
      contentBefore[]{
        ...,
      },
      textAfter,
      contentAfter[]{
        ...,
      },
    },
    _type == 'sendEmailSection' => {
      contentColor,
      contentBackgroundColor,
      emailTo,
    },
    _type == 'sendEmailTextAndButtonSection' => {
      contentColor,
      contentBackgroundColor,
      name,
      email,
      contentBefore[]{
        ...,
      },
    },
    _type == 'externalLinkSection' => {
      contentColor,
      contentBackgroundColor,
      url,
      text,
    },
    // Include queries for additional section types as needed
  },
  "navigationMenu": navigationMenu->{
    title,
    "items": items[]{
      text,
      "page": page->{
        title,
        "slug": slug.current
      },
      "children": children[]{
        ...,
        "page": page->{
          title,
          "slug": slug.current
        },
      }
    }
  },
  "footer": footer{
    mission,
    socialMedia[]{
      text,
      url,
      icon
    },
    columns[]{
      title,
      links[]{
        text,
        url
      }
    },
    copyright
  },
  _updatedAt
`;

// Query to get site settings
export const siteSettingsQuery = groq`
*[_type == "siteSettings"][0] {
  title,
  siteTitle,
  description,
  mission,
  backgroundColor,
  logo{
    ...,
    asset->{
      ...
    }
  },
  colors{
    white,
    dark,
    brand
  },
}
`;

// Query to get all pages
export const indexQuery = groq`
*[_type == "page"] | order(_updatedAt desc) {
  ${pageFields}
}`;

// Query to get all page slugs
export const pageSlugsQuery = groq`
*[_type == "page" && defined(slug.current)][].slug.current
`;

// Query to get a page by its slug
export const pageBySlugQuery = groq`
*[_type == "page" && slug.current == $slug][0] {
  ${pageFields}
}
`;

// TypeScript interfaces based on our schema
export interface CommonSectionProperties extends PortableTextListItemBlock {
  _key: string;
  _type: string;
  contentColor?: Color;
  contentBackgroundColor?: Color;
}

export interface ImageSection extends CommonSectionProperties {
  _type: 'imageSection';
  image: ImageType;
  contentWidth: boolean;
}

export interface TextSection extends CommonSectionProperties {
  _type: 'textSection';
  header?: string;
  text: string;
  content?: PortableTextBlock;
}

export interface NavigationItemSection extends CommonSectionProperties {
  _type: 'navigationItemSection';
  text: string;
  page: {
    title: string;
    slug: string;
    titleColor?: Color;
    titleBackgroundColor?: Color;
    logo?: ImageType;
  };
}

export interface FormSection extends CommonSectionProperties {
  _type: 'formSection';
  formId: string;
  submitButtonText: string;
  url: string;
  method: string;
  inputs: FormInput[];
}

export interface FormInput {
  label: string;
  type: string;
  name: string;
}

export interface IconsWithUrlAndTextSection extends CommonSectionProperties {
  _type: 'iconsWithUrlAndTextSection';
  maxItemsPerRow?: number;
  icons: Array<{
    icon: ImageType;
    url: string;
    text?: string;
  }>;
}

export interface YouTubeVideoSection extends CommonSectionProperties {
  _type: 'youtubeVideoSection';
  videoUrl: string;
  title: string;
  textBefore?: string;
  contentBefore?: PortableTextBlock;
  textAfter?: string;
  contentAfter?: PortableTextBlock;
}

export interface SendEmailSection extends CommonSectionProperties {
  _type: 'sendEmailSection';
  emailTo: string;
}

export interface SendEmailTextAndButtonSection extends CommonSectionProperties {
  _type: 'sendEmailTextAndButtonSection';
  name: string;
  email: string;
  contentBefore?: PortableTextBlock;
}

export interface ExternalLinkSection extends CommonSectionProperties {
  _type: 'externalLinkSection';
  url: string;
  text: string;
}

export type Section =
  | ImageSection
  | TextSection
  | NavigationItemSection
  | FormSection
  | IconsWithUrlAndTextSection
  | YouTubeVideoSection
  | SendEmailSection
  | SendEmailTextAndButtonSection
  | ExternalLinkSection;

export interface Page {
  _id: string;
  title: string;
  siteTitle: string;
  titleColor?: Color;
  titleBackgroundColor?: Color;
  contentColor?: Color;
  contentBackgroundColor?: Color;
  logo?: ImageType;
  slug: string;
  content: Section[];
  navigationMenu: NavigationMenu;
  footer: Footer;
  _updatedAt: string;
}

export interface NavigationMenu {
  title: string;
  items: NavigationItem[];
}

export interface NavigationItem {
  text: string;
  page: {
    title: string;
    slug: string;
  };
  children?: NavigationItem[];
}

export interface ColorRGB {
  r: string;
  g: string;
  b: string;
  a: string;
}

// Color type based on the schema
export interface Color {
  _type: 'color';
  hex: string;
  rgb: ColorRGB;
}

// ColorsSchema type based on the schema
export interface ColorsSchema {
  white: Color;
  dark: Color;
  brand: Color;
}

// SiteSettings type based on the schema
export interface SiteSettings {
  _id: string;
  _type: 'siteSettings';
  title: string;
  siteTitle: string;
  mission: string;
  logo: ImageType;
  colors: ColorsSchema;
  description: string;
  backgroundColor?: Color;
}
