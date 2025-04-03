'use client';

import Image from 'next/image';
import Link from 'next/link';
import { type Image as ImageType } from 'sanity';
import { NavigationItem } from '@/sanity/lib/queries';
import { resolveHref, urlForImage } from '@/sanity/lib/utils';

interface NavigationSectionProps {
  title: string;
  items: NavigationItem[];
  logo?: ImageType;
}

const NavigationSection: React.FC<NavigationSectionProps> = ({ title: _, items = [], logo }) => {
  const logoSrc = logo ? urlForImage(logo)?.url() : '';

  return (
    <nav className="flex items-center space-x-4">
      {logoSrc && (
        <Link href="/" className="flex-shrink-0">
          <Image src={logoSrc} alt="Logo" width={75} height={75} />
        </Link>
      )}
      <div className="flex space-x-4">
        {items.map((item, index) => (
          <Link
            key={`nav-item-${index}`}
            href={resolveHref('page', item.page?.slug) ?? ''}
            className="text-lg font-semibold rounded-lg transition duration-300 ease-in-out"
          >
            {item.text}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavigationSection;
