import PageContent from '@/components/PageContent';
import PageItem from '@/components/PageItem';
import { readToken } from '@/sanity/env';
import { getClient, getSettings, getPageBySlug } from '@/sanity/lib/client';
import { Settings, Page } from '@/sanity/lib/queries';
import { GetStaticPaths, GetStaticProps } from 'next';

interface SlugPageProps {
  page: Page | null;
  settings: Settings;
}

export default function SlugPage(props: SlugPageProps) {
  const { page, settings } = props;

  if (!page) {
    return <div>Page not found</div>;
  }

  const { backgroundColor } = settings;

  return (
    <div className="container h-screen py-20 mx-auto px-4" style={{ backgroundColor }}>
      <div className="flex flex-col space-y-3">
        <PageItem page={page} />
        <PageContent page={page} />
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // You would fetch the list of all possible slugs here
  // This is a placeholder implementation and should be replaced with actual slug fetching logic
  const paths = [{ params: { slug: ['example-slug'] } }];
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<SlugPageProps> = async (ctx) => {
  const { params } = ctx;
  const { slug = [] } = params || {};

  // Use the first item in the array for fetching, since this is not a deeply nested path
  const slugString = slug[0] || '';
  const client = getClient();

  // Fetch the settings which include main navigation pages
  const [settings, page] = await Promise.all([getSettings(client), getPageBySlug(client, slugString)]);

  if (!page) {
    return { notFound: true };
  }

  return {
    props: {
      page,
      settings,
      token: readToken,
    },
    revalidate: 60, // Optionally, enable ISR by setting a revalidation time
  };
};
