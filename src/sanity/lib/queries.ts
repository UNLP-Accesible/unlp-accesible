import { groq } from 'next-sanity';
import { Image } from 'sanity';
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
      image{
        ...,
        asset->{
          ...
        }
      },
      contentWidth,
    },
    _type == 'textSection' => {
      text,
    },
    _type == 'navigationItemSection' => {
      text,
      "page": page->{
        title,
        "slug": slug.current,
        titleColor,
        titleBackgroundColor,
      },
    },
    _type == 'textWithUrlSection' => {
      text,
      url,
    },
    _type == 'formSection' => {
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
    _type == 'iconsWithUrlSection' => {
      icon{
        ...,
        asset->{
          ...
        }
      },
      url,
    },
    _type == 'iconsWithUrlAndTextSection' => {
      icon{
        ...,
        asset->{
          ...
        }
      },
      url,
      text,
    },
    _type == 'youtubeVideoSection' => {
      videoUrl,
      title,
    },
    _type == 'sendEmailSection' => {
      email,
      subject,
      body,
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
export interface CommonSectionProperties {
  _key: string;
  _type: string;
}

export interface ImageSection extends CommonSectionProperties {
  _type: 'imageSection';
  image: Image;
  contentWidth: boolean;
}

export interface TextSection extends CommonSectionProperties {
  _type: 'textSection';
  text: string;
}

export interface NavigationItemSection extends CommonSectionProperties {
  _type: 'navigationItemSection';
  text: string;
  page: {
    title: string;
    slug: string;
    titleColor?: Color;
    titleBackgroundColor?: Color;
  };
}

export interface TextWithUrlSection extends CommonSectionProperties {
  _type: 'textWithUrlSection';
  text: string;
  url: string;
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

export interface IconsWithUrlSection extends CommonSectionProperties {
  _type: 'iconsWithUrlSection';
  icon: Image;
  url: string;
}

export interface IconsWithUrlAndTextSection extends CommonSectionProperties {
  _type: 'iconsWithUrlAndTextSection';
  icon: Image;
  url: string;
  text: string;
}

export interface YouTubeVideoSection extends CommonSectionProperties {
  _type: 'youtubeVideoSection';
  videoUrl: string;
  title: string;
}

export interface SendEmailSection extends CommonSectionProperties {
  _type: 'sendEmailSection';
  email: string;
  subject: string;
  body: string;
}

export type Section =
  | ImageSection
  | TextSection
  | NavigationItemSection
  | TextWithUrlSection
  | FormSection
  | IconsWithUrlSection
  | IconsWithUrlAndTextSection
  | YouTubeVideoSection
  | SendEmailSection;

export interface Page {
  _id: string;
  title: string;
  siteTitle: string;
  titleColor?: Color;
  titleBackgroundColor?: Color;
  contentColor?: Color;
  contentBackgroundColor?: Color;
  logo?: Image;
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
  logo: Image;
  colors: ColorsSchema;
  description: string;
  backgroundColor?: Color;
}
