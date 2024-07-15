import { resolveHref } from '@/sanity/lib/utils';
import React, { FC } from 'react';

interface NavigationItemSectionProps {
  text: string;
  slug: string;
  color?: string;
  backgroundColor?: string;
}

const NavigationItemSection: FC<NavigationItemSectionProps> = ({ text, slug, color, backgroundColor }) => {
  return (
    <a
      href={resolveHref('page', slug)}
      style={{ color, backgroundColor }}
      className="block text-lg font-semibold p-6 rounded-lg text-center transition duration-300 ease-in-out"
    >
      {text}
    </a>
  );
};

export default NavigationItemSection;
