import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormDataType, FormText } from '@/types';

export type FormTextAreaProps = {
  name: keyof Pick<FormDataType, 'message'>;
  register: UseFormRegister<FormDataType>;
  formText: FormText;
  sizeClassNames: string;
  isRequired: boolean;

  errors?: FieldErrors;
};
