import React, { FC } from 'react';

interface TextSectionProps {
  text: string;
  color?: string;
  backgroundColor?: string;
}

const TextSection: FC<TextSectionProps> = ({ text, color, backgroundColor }) => {
  return (
    <div
      style={{ color, backgroundColor }}
      className="text-lg font-semibold p-6 rounded-lg transition duration-300 ease-in-out"
    >
      <p>{text}</p>
    </div>
  );
};

export default TextSection;
