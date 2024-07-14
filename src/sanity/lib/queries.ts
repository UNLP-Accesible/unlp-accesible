import { groq } from 'next-sanity';
import { Image } from 'sanity';
import { Footer } from '@/types/Footer';

// Page fields definition to match our schema
const pageFields = groq`
  _id,
  title,
  siteTitle,
  description,
  logo{
     ...,
     asset->{
     ...
     }
  },
  "slug": slug.current,
  content[]{
    ...,
    _type == 'heroSection' => {
      useLogo,
      hideContactForm,
      mainChip,
      secondaryChip,
      chipLink,
      heading,
      subheading,
      primaryCTA,
      secondaryCTA,
      formHeading,
      backgroundImage{
        ...,
        asset->{
          ...
        }
      },
      backgroundColor,
    },
    _type == 'headerSection' => {
      heading,
      subheading
    },
    _type == 'featureSection' => {
      heading,
      features[]{
        name,
        description,
        icon,
        imageIcon{
          ...,
          asset->{
            ...
          }
        }
      }
    },
    _type == 'featureSectionLeftImage' => {
      heading,
      subheading,
      description,
      image{
        ...,
        asset->{
          ...
        }
      },
      responsiveImg{
        image{
          ...,
          asset->{
            ...
          }
        },
        reuseMainImage,
      },
      features[]{
        name,
        description,
        icon,
        imageIcon{
          ...,
          asset->{
            ...
          }
        }
      }
    },
    _type == 'featureSectionThreeCol' => {
      heading,
      subheading,
      features[]{
        feature{
          name,
          description,
          icon,
          imageIcon{
            ...,
            asset->{
              ...
            }
          },
        },
        link,
      }
    },
    _type == 'logoCloudsSection' => {
      heading,
      logos[]{
        name,
        image{
          ...,
          asset->{
            ...
          }
        }
      }
    },
    _type == 'testimonialSection' => {
      companyName,
      companyLogo{
        ...,
        asset->{
          ...
        }
      },
      quote,
      person,
      personRole,
      personImage{
        ...,
        asset->{
          ...
        }
      },
      backgroundColor,
      textColor,
    },
    _type == 'ctaSection' => {
      heading,
      callToAction,
      callToAction2,
      backgroundColor,
    },
    _type == 'imageSection' => {
      image{
        ...,
        asset->{
          ...
        }, 
        contentWidth,
      }
    },
    _type == 'subheaderSection' => {
      title,
      description
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
    companyMission,
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
    newsletter[]{
      title,
      subtitle
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
  companyMission,
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
  // Add additional fields per section type
}

export interface HeroSection extends CommonSectionProperties {
  _type: 'heroSection';
  useLogo: boolean;
  hideContactForm: boolean;
  heading: string;
  subheading: string;
  backgroundImage: Image;
  backgroundColor: string;
  callToAction: string;
}

export interface HeaderSection extends CommonSectionProperties {
  _type: 'headerSection';
  title: string;
}

export interface FaqSection extends CommonSectionProperties {
  _type: 'faqSection';
  title: string;
  faqs: FAQ[];
}

export interface FeatureSection extends CommonSectionProperties {
  _type: 'featureSection';
  heading: string;
  features: Feature[];
}

export interface Feature {
  name: string;
  description: string;
  icon: string;
}

export interface LogoCloudsSection extends CommonSectionProperties {
  _type: 'logoCloudsSection';
  heading: string;
  logos: Logo[];
}

export interface Logo {
  name: string;
  image: Image;
}

export type Section = HeroSection | HeaderSection | FeatureSection;

export interface Page {
  _id: string;
  title: string;
  siteTitle: string;
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
  companyMission: string;
  logo: Image;
  colors: ColorsSchema;
  description: string;
}
