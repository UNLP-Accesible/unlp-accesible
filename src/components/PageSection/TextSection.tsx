import { type PortableTextBlock } from '@portabletext/react';
import React, { FC } from 'react';
import CustomRichTextBlock from '@/components/CustomPortableText';

interface TextSectionProps {
  header?: string;
  text: string;
  color?: string;
  backgroundColor?: string;
  content?: PortableTextBlock;
}

const TextSection: FC<TextSectionProps> = ({ header, text, content, color, backgroundColor }) => {
  return (
    <div style={{ color, backgroundColor }} className="p-6 rounded-lg transition duration-300 ease-in-out">
      {header && <p className="text-xl font-semibold mb-6">{header}</p>}
      <p className="text-lg font-semibold">{text}</p>
      {content && <CustomRichTextBlock value={content} />}
    </div>
  );
};

export default TextSection;
