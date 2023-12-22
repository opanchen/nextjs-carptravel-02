import { CareerFormData } from '@/components/general/CareerForm/types';

export const getInputConfig = (
  name: keyof CareerFormData,
  textRequired = 'Required field',
  textInvalid = 'Incorrect value',
) => {
  switch (name) {
    case 'fullName':
      return {
        required: textRequired,
        pattern: {
          value: /^[a-zA-Z]+(([' -][a-zA-Z])?[a-zA-Z]*)*$/,
          message: textInvalid,
        },
        minLength: {
          value: 3,
          message: textInvalid,
        },
        maxLength: {
          value: 80,
          message: textInvalid,
        },
      };

    case 'email':
      return {
        required: textRequired,
        pattern: {
          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          message: textInvalid,
        },
      };

    case 'position':
      return {
        required: textRequired,
      };

    case 'phone':
      return {
        required: textRequired,
        minLength: {
          value: 15,
          message: textInvalid,
        },
        maxLength: {
          value: 15,
          message: textInvalid,
        },
      };
    default:
      return {};
  }
};
