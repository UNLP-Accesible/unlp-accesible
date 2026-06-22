import { type PortableTextBlock } from '@portabletext/react';
import React, { FC } from 'react';
import { sanitizeYouTubeUrl } from '@/lib/sanitize';
import CustomRichTextBlock from '../CustomPortableText';

interface YouTubeVideoSectionProps {
  videoUrl: string;
  contentBefore?: PortableTextBlock;
  textBefore?: string;
  title: string;
  contentAfter?: PortableTextBlock;
  textAfter?: string;
  color?: string;
  backgroundColor?: string;
}

const YouTubeVideoSection: FC<YouTubeVideoSectionProps> = ({
  videoUrl,
  title,
  contentAfter,
  textAfter,
  contentBefore,
  textBefore,
  color,
  backgroundColor,
}) => {
  // Validate that the URL is actually a YouTube embed URL
  const safeVideoUrl = sanitizeYouTubeUrl(videoUrl);

  // Don't render iframe if URL is invalid
  if (!safeVideoUrl) {
    return (
      <div style={{ color, backgroundColor }} className="rounded-lg transition duration-300 ease-in-out">
        {textBefore && <p className="p-5 text-sm">{textBefore}</p>}
        {contentBefore && (
          <div className="p-5">
            <CustomRichTextBlock value={contentBefore} />
          </div>
        )}
        <div className="p-5 text-sm text-red-500">Invalid video URL</div>
        {textAfter && <p className="p-5 text-sm">{textAfter}</p>}
        {contentAfter && (
          <div className="p-5">
            <CustomRichTextBlock value={contentAfter} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={{ color, backgroundColor }} className="rounded-lg transition duration-300 ease-in-out">
      {textBefore && <p className="p-5 text-sm">{textBefore}</p>}
      {contentBefore && (
        <div className="p-5">
          <CustomRichTextBlock value={contentBefore} />
        </div>
      )}
      <iframe
        src={safeVideoUrl}
        width="100%"
        height="200"
        title={title}
        style={{ border: '0' }}
        sandbox="allow-scripts allow-popups"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      {textAfter && <p className="p-5 text-sm">{textAfter}</p>}
      {contentAfter && (
        <div className="p-5">
          <CustomRichTextBlock value={contentAfter} />
        </div>
      )}
    </div>
  );
};

export default YouTubeVideoSection;
