import React from 'react';
import { Page } from '@/sanity/lib/queries';
import BlockContent from '@sanity/block-content-to-react';
import SpanBlock from './SpanBlock';

interface PageContentProps {
  page: Page;
}

// Serializer to instruct BlockContent how to render blocks
const serializers = {
  types: {
    block: (props: any) => {
      // Apply styling for different styles if needed, here's an example for 'normal'
      if (props.node.style === 'normal') {
        return <SpanBlock>{props.children}</SpanBlock>;
      }

      // Handle other styles, like 'h1', 'h2', etc.
      // ...

      // Default fall-back, render nothing for unknown styles
      return null;
    },
  },
  // This will handle inline span elements
  marks: {
    // Define custom mark serializers here if you have any
  },
};

const PageContent: React.FC<PageContentProps> = ({ page }) => {
  return (
    <div
      className="text-sm font-semibold p-4 rounded-lg transition duration-300 ease-in-out"
      style={{ color: page.contentColor, backgroundColor: page.contentBackgroundColor }}
    >
      <BlockContent blocks={page.content} serializers={serializers} />
    </div>
  );
};

export default PageContent;
