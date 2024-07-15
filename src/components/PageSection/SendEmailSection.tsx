import React, { FC } from 'react';

interface SendEmailSectionProps {
  email: string;
  subject: string;
  body: string;
  color?: string;
  backgroundColor?: string;
}

const SendEmailSection: FC<SendEmailSectionProps> = ({ email, subject, body, color, backgroundColor }) => {
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return (
    <a
      href={mailtoLink}
      style={{ color, backgroundColor }}
      className="block text-lg font-semibold p-6 rounded-lg transition duration-300 ease-in-out"
    >
      Send Email
    </a>
  );
};

export default SendEmailSection;
