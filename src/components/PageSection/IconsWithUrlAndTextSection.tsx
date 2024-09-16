import React, { FC } from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/utils';
import { Image as ImageType } from 'sanity';

interface IconWithUrlAndText {
  icon: ImageType;
  url: string;
  text?: string;
}

interface IconsWithUrlAndTextSectionProps {
  icons: IconWithUrlAndText[];
  maxItemsPerRow?: number;
  color?: string;
  backgroundColor?: string;
}

const IconsWithUrlAndTextSection: FC<IconsWithUrlAndTextSectionProps> = ({
  icons,
  maxItemsPerRow = 2,
  color,
  backgroundColor,
}) => {
  const hasText = icons.some((item) => item.text);

  // Calculate grid template columns style based on maxItemsPerRow
  const gridTemplateColumns = hasText ? 'repeat(1, minmax(0, 1fr))' : `repeat(${maxItemsPerRow}, minmax(0, 1fr))`;

  return (
    <div style={{ color, backgroundColor }} className="p-6 rounded-lg h-full">
      <div className={`grid ${hasText ? 'gap-5' : 'gap-10'}`} style={{ gridTemplateColumns }}>
        {icons.map((item, index) => {
          const iconSrc = urlForImage(item.icon)?.url();
          return (
            <a
              key={index}
              href={item.url}
              style={{ color, backgroundColor }}
              className="flex flex-col items-center justify-center text-lg font-semibold rounded-lg transition duration-300 ease-in-out"
            >
              {iconSrc && (
                <div className="flex justify-center items-center" style={{ height: '65px', width: '65px' }}>
                  <Image src={iconSrc} alt="Icon" width={65} height={65} style={{ objectFit: 'contain' }} />
                </div>
              )}
              {item.text && <p className="mt-2 text-center">{item.text}</p>}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default IconsWithUrlAndTextSection;
