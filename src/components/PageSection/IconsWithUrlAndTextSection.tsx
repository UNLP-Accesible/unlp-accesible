import React, { FC } from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/utils';
import { Image as ImageType } from 'sanity';

interface IconsWithUrlAndTextSectionProps {
  icon: ImageType;
  url: string;
  text: string;
  color?: string;
  backgroundColor?: string;
}

const IconsWithUrlAndTextSection: FC<IconsWithUrlAndTextSectionProps> = ({
  icon,
  url,
  text,
  color,
  backgroundColor,
}) => {
  const iconSrc = urlForImage(icon)?.url();
  return (
    <a
      href={url}
      style={{ color, backgroundColor }}
      className="block text-lg font-semibold p-6 rounded-lg transition duration-300 ease-in-out"
    >
      {iconSrc && <Image src={iconSrc} alt="Icon" width={50} height={50} />}
      <p>{text}</p>
    </a>
  );
};

export default IconsWithUrlAndTextSection;
