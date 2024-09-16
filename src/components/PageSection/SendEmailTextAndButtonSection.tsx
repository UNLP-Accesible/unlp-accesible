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
    <div className="flex flex-col items-center">
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-md">{email}</p>
      <a
        href={`mailto:${email}`}
        style={{ color, backgroundColor }}
        className="flex flex-row items-center mt-4 p-5 rounded-lg transition duration-300 ease-in-out"
      >
        <div className="flex-1">
          <p className="text-lg text-center font-semibold">Enviar mail</p>
        </div>
      </a>
    </div>
  );
};

export default SendEmailTextAndButtonSection;
