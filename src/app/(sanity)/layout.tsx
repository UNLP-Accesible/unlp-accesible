import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import '../globals.css';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UNLP AcceSÍble',
  description: 'Comisión Universitaria sobre Discapacidad de la Universidad Nacional de La Plata',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
