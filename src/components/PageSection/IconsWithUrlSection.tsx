import React, { FC } from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/utils';
import { Image as ImageType } from 'sanity';

interface IconsWithUrlSectionProps {
  icon: ImageType;
  url: string;
  color?: string;
  backgroundColor?: string;
}

const IconsWithUrlSection: FC<IconsWithUrlSectionProps> = ({ icon, url, color, backgroundColor }) => {
  const iconSrc = urlForImage(icon)?.url();
  return (
    <a
      href={url}
      style={{ color, backgroundColor }}
      className="block p-6 rounded-lg transition duration-300 ease-in-out"
    >
      {iconSrc && <Image src={iconSrc} alt="Icon" width={50} height={50} />}
    </a>
  );
};

export default IconsWithUrlSection;
