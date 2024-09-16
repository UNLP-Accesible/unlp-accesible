import React, { FC } from 'react';
import { resolveHref } from '@/sanity/lib/utils';
import Image from 'next/image';

interface NavigationItemSectionProps {
  text: string;
  slug: string;
  logo?: string;
  color?: string;
  backgroundColor?: string;
}

const NavigationItemSection: FC<NavigationItemSectionProps> = ({ text, logo, slug, color, backgroundColor }) => {
  return (
    <a
      href={resolveHref('page', slug)}
      style={{ color, backgroundColor }}
      className="flex flex-row items-center p-5 rounded-lg transition duration-300 ease-in-out min-h-[97px]"
    >
      {logo && (
        <div className="flex justify-center items-center" style={{ height: '55px', width: '55px' }}>
          <Image src={logo} alt="Logo" width={55} height={55} style={{ objectFit: 'contain' }} />
        </div>
      )}
      <div className="flex-1 pl-3">
        <p className="text-lg text-center font-semibold">{text}</p>
      </div>
    </a>
  );
};

export default NavigationItemSection;
