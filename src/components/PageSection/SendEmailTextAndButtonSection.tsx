import { type PortableTextBlock } from '@portabletext/react';
import { FC } from 'react';
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
    <div className="flex flex-col items-center w-full py-2">
      {contentBefore && <CustomPortableText value={contentBefore} />}
      <p className="font-semibold min-h-4 [&>span]:inline">{name}</p>
      <p className="text-md">{email}</p>
      <a
        href={`mailto:${email}`}
        style={{ color, backgroundColor }}
        className="flex justify-center items-center w-full mt-4 px-6 py-3 rounded-lg transition duration-300 ease-in-out min-h-[97px]"
      >
        <p className="text-lg text-center font-semibold">Enviar mail</p>
      </a>
    </div>
  );
};

export default SendEmailTextAndButtonSection;
