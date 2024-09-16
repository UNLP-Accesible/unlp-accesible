import React, { FC } from 'react';

interface SendEmailTextAndButtonSectionProps {
  name: string;
  email: string;
  color?: string;
  backgroundColor?: string;
}

const SendEmailTextAndButtonSection: FC<SendEmailTextAndButtonSectionProps> = ({
  name,
  email,
  color,
  backgroundColor,
}) => {
  return (
    <div className="flex flex-col items-center w-full">
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
