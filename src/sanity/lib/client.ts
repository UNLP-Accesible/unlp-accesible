import { createClient, type SanityClient } from 'next-sanity';

import { settingsQuery, indexQuery, pageSlugsQuery, pageBySlugQuery, Settings, PageEntity } from './queries';
import { apiVersion, dataset, projectId, useCdn } from '../env';

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
  });
  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts');
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    });
  }
  return client;
}

export async function getSettings(client: SanityClient): Promise<Settings> {
  return (await client.fetch(settingsQuery)) || {};
}

export async function getAllPages(client: SanityClient): Promise<PageEntity[]> {
  return (await client.fetch(indexQuery)) || [];
}

export async function getAllPagesSlugs(): Promise<Pick<PageEntity, 'slug'>[]> {
  const client = getClient();
  const slugs = (await client.fetch<string[]>(pageSlugsQuery)) || [];
  return slugs.map((slug) => ({ slug }));
}

export async function getPageBySlug(client: SanityClient, slug: string): Promise<PageEntity> {
  return (await client.fetch(pageBySlugQuery, { slug })) || ({} as any);
}
