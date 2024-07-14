import { PortableText, PortableTextBlock, PortableTextReactComponents } from '@portabletext/react';

const gradientColorBaseClass = 'bg-gradient-to-r inline-block text-transparent bg-clip-text';

const CustomPortableText: React.FC<{ value?: PortableTextBlock }> = ({ value }) => {
  const customBlockComponents: Partial<PortableTextReactComponents> = {
    block: {
      normal: ({ children }) => <p className="min-h-4">{children}</p>,
    },
    marks: {
      gradient: ({ value: { gradient }, children }) => (
        <span className={`${gradientColorBaseClass} ${gradient}`}>{children}</span>
      ),
      textColor: ({
        value: {
          textColor: { hex },
        },
        children,
      }) => <span style={{ color: hex ?? '' }}>{children}</span>,
    },
    list: {
      bullet: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal list-inside">{children}</ol>,
    },
  };
  return value && <PortableText value={value} components={customBlockComponents} />;
};

export default CustomPortableText;
