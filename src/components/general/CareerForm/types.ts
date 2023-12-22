import { FormText } from '@/types';

export type CareerFormProps = {
  text: FormText;
};

export type CareerFormData = {
  fullName: string;
  email: string;
  position: string;
  phone: string;
  message: string;
  isConfirmed: boolean;
};
