import React, { FC } from 'react';

interface TextSectionProps {
  header?: string;
  text: string;
  color?: string;
  backgroundColor?: string;
}

const TextSection: FC<TextSectionProps> = ({ header, text, color, backgroundColor }) => {
  return (
    <div style={{ color, backgroundColor }} className="p-6 rounded-lg transition duration-300 ease-in-out">
      {header && <p className="text-xl font-semibold mb-6">{header}</p>}
      <p className="text-lg font-semibold">{text}</p>
    </div>
  );
};

export default TextSection;
