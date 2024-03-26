import { readToken } from '@/sanity/env';
import { getClient, getSettings } from '@/sanity/lib/client';
import { Settings } from '@/sanity/lib/queries';
import { GetStaticProps } from 'next';
import type { SharedPageProps } from '@/pages/_app';

interface PageProps extends SharedPageProps {
  settings: Settings;
}

interface Query {
  [key: string]: string;
}

export default function Page(props: PageProps) {
  const { settings } = props;

  return <>{JSON.stringify({ settings }, null, 2)}</>;
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx;
  const client = getClient();

  const [settings] = await Promise.all([getSettings(client)]);

  return {
    props: {
      settings,
      draftMode,
      token: readToken,
    },
  };
};
