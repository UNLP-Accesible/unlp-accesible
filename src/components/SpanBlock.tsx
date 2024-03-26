import React from 'react';

interface PageContentProps {
  children: React.ReactNode;
}

const SpanBlock: React.FC<PageContentProps> = ({ children }) => {
  return <span>{children}</span>;
};

export default SpanBlock;
