'use client';
import { useState } from 'react';
import { FORM_SUBMIT_ERROR_MESSAGE, formSubmitUrl } from '@/app/constants/constants';

interface FormResponse {
  status: boolean;
  error?: string;
}

const useFormSubmit = () => {
  const [formResponse, setFormResponse] = useState<FormResponse>({ status: false, error: '' });
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async (formData: FormData) => {
    setIsLoading(true);

    try {
      const response = await fetch(formSubmitUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: [
            {
              objectTypeId: '0-1',
              name: 'email',
              value: formData.get('email'),
            },
            {
              objectTypeId: '0-1',
              name: 'firstname',
              value: formData.get('name'),
            },
            {
              objectTypeId: '0-1',
              name: 'message',
              value: formData.get('message'),
            },
          ],
        }),
      });

      if (response.ok) {
        setFormResponse({ status: true, error: '' });
      } else {
        setFormResponse({ status: false, error: FORM_SUBMIT_ERROR_MESSAGE });
      }
    } catch (error) {
      setFormResponse({ status: false, error: FORM_SUBMIT_ERROR_MESSAGE });
    } finally {
      setIsLoading(false);
    }
  };

  return { formResponse, isLoading, submitForm };
};

export default useFormSubmit;
