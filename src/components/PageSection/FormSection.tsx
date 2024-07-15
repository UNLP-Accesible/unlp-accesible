import React, { FC } from 'react';

interface Input {
  label: string;
  type: string;
  name: string;
}

interface FormSectionProps {
  formId: string;
  submitButtonText: string;
  url: string;
  method: string;
  inputs: Input[];
  color?: string;
  backgroundColor?: string;
}

const FormSection: FC<FormSectionProps> = ({
  formId,
  submitButtonText,
  url,
  method,
  inputs,
  color,
  backgroundColor,
}) => {
  return (
    <form id={formId} action={url} method={method} style={{ color, backgroundColor }} className="p-6 rounded-lg">
      {inputs.map((input) => (
        <div key={input.name} className="mb-4">
          <label className="block text-sm font-medium mb-1">{input.label}</label>
          <input type={input.type} name={input.name} className="w-full p-2 border rounded" />
        </div>
      ))}
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        {submitButtonText}
      </button>
    </form>
  );
};

export default FormSection;
