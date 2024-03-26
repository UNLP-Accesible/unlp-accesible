import { groq } from 'next-sanity';

const pageFields = groq`
  _id,
  title,
  titleColor,
  titleBackgroundColor,
  contentColor,
  contentBackgroundColor,
  date,
  _updatedAt,
  "slug": slug.current,
  content[]{
    ...,
    asset->{
      ...
    }
  }
`;

export const settingsQuery = groq`
*[_type == "siteSettings"][0] {
  backgroundColor,
  "mainNavigationPages": mainNavigation[]->{
    ${pageFields}
  },
  "footerNavigationPages": footerNavigation[]->{
    ${pageFields}
  },
}
`;

export const indexQuery = groq`
*[_type == "page"] | order(date desc, _updatedAt desc) {
  ${pageFields}
}`;

export const pageSlugsQuery = groq`
*[_type == "page" && defined(slug.current)][].slug.current
`;

export const pageBySlugQuery = groq`
*[_type == "page" && slug.current == $slug][0] {
  ${pageFields}
}
`;

export interface Settings {
  backgroundColor?: string;
  mainNavigationPages?: Page[];
  footerNavigationPages?: Page[];
}

export interface PageContent {
  _type: string;
  _key: string;
  children: { _type: string; _key: string; text: string }[];
}

export interface Page {
  _id: string;
  slug: string;
  title: string;
  titleColor?: string;
  titleBackgroundColor?: string;
  contentColor?: string;
  contentBackgroundColor?: string;
  content: PageContent[];
}
