'use client';

import { Page, SiteSettings, pageBySlugQuery, siteSettingsQuery } from '@/sanity/lib/queries';
import { QueryResponseInitial, useQuery } from '@sanity/react-loader';
import PageContent from './PageContent';

export default function PagePreview({
  initial,
  siteSettings,
}: {
  initial: QueryResponseInitial<Page>;
  siteSettings: QueryResponseInitial<SiteSettings>;
}) {
  const { data } = useQuery<Page>(pageBySlugQuery, { slug: initial.data.slug }, { initial });
  const { data: siteSettingsData } = useQuery<SiteSettings>(siteSettingsQuery, {}, { initial: siteSettings });

  return data ? (
    <PageContent page={data} siteSettings={siteSettingsData} />
  ) : (
    <div className="bg-red-100">No page found</div>
  );
}
