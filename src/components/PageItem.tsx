import React from 'react';
import { Page } from '@/sanity/lib/queries';

interface PageItemProps {
  page: Page;
}

const PageItem: React.FC<PageItemProps> = ({ page }) => {
  return (
    <a
      href={`/${page.slug}`}
      className="text-lg font-semibold p-6 rounded-lg transition duration-300 ease-in-out"
      style={{
        color: page.titleColor,
        backgroundColor: page.titleBackgroundColor,
      }}
    >
      {page.title}
    </a>
  );
};

export default PageItem;
