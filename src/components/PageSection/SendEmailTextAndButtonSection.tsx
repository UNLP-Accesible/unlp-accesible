import { FC } from 'react';
import { PortableTextBlock } from '@portabletext/react';
import CustomPortableText from '../CustomPortableText';

interface SendEmailTextAndButtonSectionProps {
  name: string;
  email: string;
  color?: string;
  backgroundColor?: string;
  contentBefore?: PortableTextBlock;
}

const SendEmailTextAndButtonSection: FC<SendEmailTextAndButtonSectionProps> = ({
  name,
  email,
  color,
  backgroundColor,
  contentBefore,
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      {contentBefore && <CustomPortableText value={contentBefore} />}
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-md">{email}</p>
      <a
        href={`mailto:${email}`}
        style={{ color, backgroundColor }}
        className="flex justify-center w-full mt-4 px-6 py-3 rounded-lg transition duration-300 ease-in-out"
      >
        <p className="text-lg text-center font-semibold">Enviar mail</p>
      </a>
    </div>
  );
};

export default SendEmailTextAndButtonSection;
