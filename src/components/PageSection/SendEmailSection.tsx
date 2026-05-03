'use client';

import React, { FC, useState } from 'react';

interface SendEmailSectionProps {
  emailTo: string;
  color?: string;
  backgroundColor?: string;
}

const SendEmailSection: FC<SendEmailSectionProps> = ({ emailTo, color, backgroundColor }) => {
  const [name, setName] = useState('');
  const [emailFrom, setEmailFrom] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = () => {
    const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Nombre: ${name}\nEmail: ${emailFrom}\n\n${message}`,
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div style={{ color, backgroundColor }} className="p-6 rounded-lg">
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Nombre y Apellido</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">E-mail</label>
        <input
          type="email"
          value={emailFrom}
          onChange={(e) => setEmailFrom(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">¿Sobre qué tema es tu consulta?</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Mensaje</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border rounded-lg"
          rows={5}
        />
      </div>
      <button
        onClick={handleSendEmail}
        style={{ color, backgroundColor }}
        className="w-full text-lg font-semibold py-2 rounded-lg transition duration-300 ease-in-out"
      >
        {`Enviar >`}
      </button>
    </div>
  );
};

export default SendEmailSection;
