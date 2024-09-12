import React from 'react';
import {
  PortableText,
  PortableTextReactComponents,
  PortableTextProps,
  PortableTextBlock,
  PortableTextTypeComponent,
} from '@portabletext/react';
import Link from 'next/link';

export type CustomPortableTextProps<T extends PortableTextBlock> = {
  value: PortableTextProps<T>['value'];
  types?: Record<string, PortableTextTypeComponent>;
};

function CustomPortableText<T extends PortableTextBlock>({ value, types = {} }: CustomPortableTextProps<T>) {
  const customBlockComponents: Partial<PortableTextReactComponents> = {
    block: {
      normal: ({ children }) => {
        const childStringValue = React.Children.toArray(children)[0].toString();
        const isWitheSpace = childStringValue.length > 0 && childStringValue.charCodeAt(0) !== 0;

        return <p className={`font-semibold min-h-4 [&>span]:inline ${isWitheSpace ? 'inline' : ''}`}>{children}</p>;
      },
    },
    types: {
      ...types,
    },
    marks: {
      link: ({ value: { url, blank }, children }) => (
        <Link
          href={url ?? ''}
          target={blank ? '_blank' : '_self'}
          rel={blank ? 'noopener noreferrer' : ''}
          className="underline font-semibold"
        >
          {children}
        </Link>
      ),
    },
    list: {
      bullet: ({ children }) => <ul className="list-disc list-inside font-semibold">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal list-inside font-semibold">{children}</ol>,
    },
  };
  return value && <PortableText value={value} components={customBlockComponents} />;
}

export default CustomPortableText;
