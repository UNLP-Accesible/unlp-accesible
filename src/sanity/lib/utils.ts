import createImageUrlBuilder from '@sanity/image-url';
import { ImageUrlBuilder } from 'sanity';

import { dataset, projectId } from '@/sanity/env';
import { ColorRGB } from './queries';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

export const urlForImage = (source: any, quality?: number): ImageUrlBuilder | undefined => {
  if (!source?.asset) {
    return undefined;
  }

  return imageBuilder
    ?.image(source)
    .auto('format')
    .fit('max')
    .quality(quality ?? 100);
};

export function resolveHref(documentType?: string, slug?: string): string | undefined {
  switch (documentType) {
    case 'page':
      return slug ? `/pages/${slug}` : undefined;
    default:
      console.warn('Invalid document type:', documentType);
      return undefined;
  }
}

export const colorObjectToRgba = ({ r, g, b, a }: ColorRGB): string => {
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};
