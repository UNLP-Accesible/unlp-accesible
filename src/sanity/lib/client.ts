import { createClient, type SanityClient } from 'next-sanity';

import { settingsQuery, indexQuery, pageSlugsQuery, pageBySlugQuery, Settings, Page } from './queries';
import { apiVersion, dataset, projectId, useCdn } from '../env';

const getClient = () =>
  createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
  });

export async function getSettings(client: SanityClient): Promise<Settings> {
  return (await client.fetch(settingsQuery)) || {};
}

export async function getAllPages(client: SanityClient): Promise<Page[]> {
  return (await client.fetch(indexQuery)) || [];
}

export async function getAllPagesSlugs(): Promise<Pick<Page, 'slug'>[]> {
  const client = getClient();
  const slugs = (await client.fetch<string[]>(pageSlugsQuery)) || [];
  return slugs.map((slug) => ({ slug }));
}

export async function getPageBySlug(client: SanityClient, slug: string): Promise<Page> {
  return (await client.fetch(pageBySlugQuery, { slug })) || ({} as any);
}
