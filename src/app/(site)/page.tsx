import PageContent from '@/components/PageContent';
import PageContentPreview from '@/components/PageContentPreview';
import { Page, SiteSettings, pageBySlugQuery, siteSettingsQuery } from '@/sanity/lib/queries';
import { loadQuery } from '@/sanity/lib/store';
import { draftMode } from 'next/headers';

export default async function HomePage() {
  const siteSettings = await loadQuery<SiteSettings>(siteSettingsQuery);

  // Use the first item in the array for fetching, since this is not a deeply nested path
  const slugString = 'home-page';

  const initialPageValue = await loadQuery<Page>(
    pageBySlugQuery,
    {
      slug: slugString,
    },
    {
      perspective: draftMode().isEnabled ? 'previewDrafts' : 'published',
    },
  );

  if (!initialPageValue.data) {
    return <div className="bg-red-100">No page found</div>;
  }

  return draftMode().isEnabled ? (
    <PageContentPreview initial={initialPageValue} siteSettings={siteSettings} />
  ) : (
    <PageContent page={initialPageValue.data} siteSettings={siteSettings.data} />
  );
}
