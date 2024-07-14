import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { draftMode } from 'next/headers';
import { loadQuery } from '@sanity/react-loader';
import LiveVisualEditing from '@/components/LiveVisualEditing';
import { SiteSettings, siteSettingsQuery } from '@/sanity/lib/queries';
import SiteColors from '@/components/SiteColors';
import '../globals.css';

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await loadQuery<SiteSettings>(siteSettingsQuery, {}, { stega: false });
  const title = data?.siteTitle ?? '';
  const description = data?.description ?? '';

  const metadata = {
    title,
    description,
  };

  return metadata;
}

const openSans = Open_Sans({ subsets: ['latin'] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSettings = await loadQuery<SiteSettings>(siteSettingsQuery);
  const colors = siteSettings?.data?.colors;
  return (
    <html lang="en">
      <body className={openSans.className}>
        <SiteColors colors={colors} />
        {children}
        {draftMode().isEnabled && <LiveVisualEditing />}
      </body>
    </html>
  );
}
