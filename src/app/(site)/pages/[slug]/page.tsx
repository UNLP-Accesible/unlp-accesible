import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import PageContent from '@/components/PageContent';
import PageContentPreview from '@/components/PageContentPreview';
import { Page, SiteSettings, pageBySlugQuery, siteSettingsQuery } from '@/sanity/lib/queries';
import { loadQuery } from '@/sanity/lib/store';

interface SlugPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params: { slug } }: SlugPageProps): Promise<Metadata> {
  const { data } = await loadQuery<SiteSettings>(pageBySlugQuery, { slug }, { stega: false });
  const title = data?.siteTitle ?? '';
  const description = data?.description ?? '';

  const metadata = {
    title,
    description,
  };
  return metadata;
}

export default async function SlugPage({ params: { slug } }: SlugPageProps) {
  const siteSettings = await loadQuery<SiteSettings>(siteSettingsQuery);
  const initialPageValue = await loadQuery<Page>(
    pageBySlugQuery,
    {
      slug,
    },
    {
      perspective: draftMode().isEnabled ? 'previewDrafts' : 'published',
    },
  );

  return draftMode().isEnabled ? (
    <PageContentPreview initial={initialPageValue} siteSettings={siteSettings} />
  ) : (
    <PageContent page={initialPageValue.data} siteSettings={siteSettings.data} />
  );
}
