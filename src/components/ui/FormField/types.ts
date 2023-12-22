import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { CareerFormData } from '@/components/general/CareerForm/types';
import { FormText } from '@/types';

export type InputFieldType = 'text' | 'email' | 'tel';

export type FormFieldProps = {
  name: keyof CareerFormData;
  type: InputFieldType;
  register: UseFormRegister<CareerFormData>;
  formText: FormText;

  errors?: FieldErrors;
  className?: string;
};
