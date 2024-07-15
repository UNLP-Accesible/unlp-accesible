import React, { FC } from 'react';
import { urlForImage } from '@/sanity/lib/utils';
import { Image as ImageType } from 'sanity';
import Image from 'next/image';
import { getImageDimensions } from '@sanity/asset-utils';

interface ImageSectionProps {
  image: ImageType;
  contentWidth: boolean;
  color?: string;
  backgroundColor?: string;
}

const ImageSection: FC<ImageSectionProps> = ({ image, contentWidth, color, backgroundColor }) => {
  const imageSrc = urlForImage(image)?.url();
  const { width, height } = getImageDimensions(imageSrc ?? '');
  return (
    imageSrc && (
      <div style={{ color, backgroundColor }}>
        <Image
          alt=""
          src={imageSrc || ''}
          width={width}
          height={height}
          className={contentWidth ? 'mx-auto px-6 lg:max-w-7xl lg:px-8' : 'w-full'}
        />
      </div>
    )
  );
};

export default ImageSection;
