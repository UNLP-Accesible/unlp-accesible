import { draftMode } from 'next/headers';
import PageContent from '@/components/PageContent';
import PageContentPreview from '@/components/PageContentPreview';
import { Page, pageBySlugQuery, SiteSettings, siteSettingsQuery } from '@/sanity/lib/queries';
import { loadQuery } from '@/sanity/lib/store';

export default async function HomePage() {
  const siteSettings = await loadQuery<SiteSettings>(siteSettingsQuery);

  // Use the first item in the array for fetching, since this is not a deeply nested path
  const slugString = 'home-page';

  const isDraftMode = await draftMode();

  const initialPageValue = await loadQuery<Page>(
    pageBySlugQuery,
    {
      slug: slugString,
    },
    {
      perspective: isDraftMode.isEnabled ? 'previewDrafts' : 'published',
    },
  );

  if (!initialPageValue.data) {
    return <div className="bg-red-100">No page found</div>;
  }

  return isDraftMode.isEnabled ? (
    <PageContentPreview initial={initialPageValue} siteSettings={siteSettings} />
  ) : (
    <PageContent page={initialPageValue.data} siteSettings={siteSettings.data} />
  );
}
