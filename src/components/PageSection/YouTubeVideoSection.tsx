import React, { FC } from 'react';

interface YouTubeVideoSectionProps {
  videoUrl: string;
  title: string;
  color?: string;
  backgroundColor?: string;
}

const YouTubeVideoSection: FC<YouTubeVideoSectionProps> = ({ videoUrl, title, color, backgroundColor }) => {
  return (
    <div style={{ color, backgroundColor }} className="p-6 rounded-lg">
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        title={title}
        style={{ border: '0' }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeVideoSection;
