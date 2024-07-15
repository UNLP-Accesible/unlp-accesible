import React, { FC } from 'react';

interface TextWithUrlSectionProps {
  text: string;
  url: string;
  color?: string;
  backgroundColor?: string;
}

const TextWithUrlSection: FC<TextWithUrlSectionProps> = ({ text, url, color, backgroundColor }) => {
  return (
    <a
      href={url}
      style={{ color, backgroundColor }}
      className="block text-lg font-semibold p-6 rounded-lg transition duration-300 ease-in-out"
    >
      {text}
    </a>
  );
};

export default TextWithUrlSection;
