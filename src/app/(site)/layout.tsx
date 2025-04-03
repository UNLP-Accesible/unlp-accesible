import { loadQuery } from '@sanity/react-loader';
import type { Metadata, Viewport } from 'next';
import { Open_Sans } from 'next/font/google';
import { draftMode } from 'next/headers';
import LiveVisualEditing from '@/components/LiveVisualEditing';
import SiteColors from '@/components/SiteColors';
import { SiteSettings, siteSettingsQuery } from '@/sanity/lib/queries';
import '../globals.css';

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await loadQuery<SiteSettings>(siteSettingsQuery, {}, { stega: false });
  const title = data?.siteTitle ?? '';
  const description = data?.description ?? '';

  const metadata: Metadata = {
    applicationName: title,
    title,
    description: description,
    // appleWebApp: {
    //   capable: true,
    //   statusBarStyle: 'default',
    //   title: title,
    //   // startUpImage: [],
    // },
    formatDetection: {
      telephone: false,
    },
    openGraph: {
      type: 'website',
      siteName: title,
      title,
      description,
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };

  return metadata;
}

const openSans = Open_Sans({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSettings = await loadQuery<SiteSettings>(siteSettingsQuery);
  const colors = siteSettings?.data?.colors;
  const isDraftMode = await draftMode();
  return (
    <html lang="en" dir="ltr">
      <head />
      <body className={openSans.className}>
        <SiteColors colors={colors} />
        {children}
        {isDraftMode.isEnabled && <LiveVisualEditing />}
      </body>
    </html>
  );
}
