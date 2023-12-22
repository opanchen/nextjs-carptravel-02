import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormDataType, FormText } from '@/types';

export type InputFieldType = 'text' | 'email' | 'tel';

export type FormFieldProps = {
  name: keyof FormDataType;
  type: InputFieldType;
  register: UseFormRegister<FormDataType>;
  formText: FormText;

  errors?: FieldErrors;
  className?: string;
};
