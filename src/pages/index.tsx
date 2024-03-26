import PageItem from '@/components/PageItem';
import { readToken } from '@/sanity/env';
import { getClient, getSettings } from '@/sanity/lib/client';
import { Settings } from '@/sanity/lib/queries';
import { GetStaticProps } from 'next';

interface HomeProps {
  settings: Settings;
}

interface Query {
  [key: string]: string;
}

export default function Home(props: HomeProps) {
  const {
    settings: { mainNavigationPages, backgroundColor },
  } = props;

  if (!mainNavigationPages) {
    return null;
  }

  return (
    <div className="container h-screen py-20 mx-auto px-4" style={{ backgroundColor }}>
      <div className="flex flex-col space-y-3">
        {mainNavigationPages.map((page) => (
          <PageItem key={page._id} page={page} />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomeProps, Query> = async (ctx) => {
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
