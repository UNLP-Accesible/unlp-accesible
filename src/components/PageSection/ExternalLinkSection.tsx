import React, { FC } from 'react';

interface ExternalLinkSectionProps {
  text: string;
  url: string;
  color?: string;
  backgroundColor?: string;
}

const ExternalLinkSection: FC<ExternalLinkSectionProps> = ({ text, url, color, backgroundColor }) => {
  return (
    <a
      href={url}
      style={{ color, backgroundColor }}
      className="flex flex-row items-center p-5 rounded-lg transition duration-300 ease-in-out"
    >
      <div className="flex-1">
        <p className="text-lg text-center font-semibold">{text}</p>
      </div>
    </a>
  );
};

export default ExternalLinkSection;
