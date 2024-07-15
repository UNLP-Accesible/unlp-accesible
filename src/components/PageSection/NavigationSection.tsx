'use client';

import { NavigationItem } from '@/sanity/lib/queries';
import { resolveHref, urlForImage } from '@/sanity/lib/utils';
import Image from 'next/image';
import { Image as ImageType } from 'sanity';

interface NavigationSectionProps {
  title: string;
  items: NavigationItem[];
  logo?: ImageType;
}

const NavigationSection: React.FC<NavigationSectionProps> = ({ title, items = [], logo }) => {
  const logoSrc = logo ? urlForImage(logo)?.url() : '';

  return (
    <nav className="flex items-center space-x-4">
      {logoSrc && (
        <a href="/" className="flex-shrink-0">
          <Image src={logoSrc} alt="Logo" width={75} height={75} />
        </a>
      )}
      <div className="flex space-x-4">
        {items.map((item, index) => (
          <a
            key={`nav-item-${index}`}
            href={resolveHref('page', item.page?.slug)}
            className="text-lg font-semibold rounded-lg transition duration-300 ease-in-out"
          >
            {item.text}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavigationSection;
