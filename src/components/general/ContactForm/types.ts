import { FormText } from '@/types';

export type ContactFormProps = {
  text: FormText;
};

export type ContactFormData = {
  fullName: string;
  email: string;
  message: string;
};
