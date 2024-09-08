import React, { FC } from 'react';

interface YouTubeVideoSectionProps {
  videoUrl: string;
  textBefore?: string;
  title: string;
  textAfter?: string;
  color?: string;
  backgroundColor?: string;
}

const YouTubeVideoSection: FC<YouTubeVideoSectionProps> = ({
  videoUrl,
  title,
  textAfter,
  textBefore,
  color,
  backgroundColor,
}) => {
  return (
    <div style={{ color, backgroundColor }} className="rounded-lg transition duration-300 ease-in-out">
      {textBefore && <p className="p-5 text-sm">{textBefore}</p>}
      <iframe
        src={videoUrl}
        width="100%"
        height="200"
        title={title}
        style={{ border: '0' }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      {textAfter && <p className="p-5 text-sm">{textAfter}</p>}
    </div>
  );
};

export default YouTubeVideoSection;
