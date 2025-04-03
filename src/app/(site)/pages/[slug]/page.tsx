import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import PageContent from '@/components/PageContent';
import PageContentPreview from '@/components/PageContentPreview';
import { Page, pageBySlugQuery, SiteSettings, siteSettingsQuery } from '@/sanity/lib/queries';
import { loadQuery } from '@/sanity/lib/store';

interface SlugPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: SlugPageProps): Promise<Metadata> {
  const slug = (await params).slug;

  const { data } = await loadQuery<SiteSettings>(pageBySlugQuery, { slug }, { stega: false });
  const title = data?.siteTitle ?? '';
  const description = data?.description ?? '';

  const metadata = {
    title,
    description,
  };
  return metadata;
}

export default async function SlugPage({ params }: SlugPageProps) {
  const slug = (await params).slug;

  const siteSettings = await loadQuery<SiteSettings>(siteSettingsQuery);
  const isDraftMode = await draftMode();
  const initialPageValue = await loadQuery<Page>(
    pageBySlugQuery,
    { slug },
    {
      perspective: isDraftMode.isEnabled ? 'previewDrafts' : 'published',
    },
  );

  return isDraftMode.isEnabled ? (
    <PageContentPreview initial={initialPageValue} siteSettings={siteSettings} />
  ) : (
    <PageContent page={initialPageValue.data} siteSettings={siteSettings.data} />
  );
}
