import { groq } from 'next-sanity';

const pageFields = groq`
  _id,
  title,
  date,
  _updatedAt,
  "slug": slug.current,
`;

export const settingsQuery = groq`*[_type == "settings"][0]`;

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

export interface Settings {}

export interface Page {
  slug: string;
}
