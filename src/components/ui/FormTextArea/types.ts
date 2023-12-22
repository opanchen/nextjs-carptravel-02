import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { CareerFormData } from '@/components/general/CareerForm/types';
import { FormText } from '@/types';

export type FormTextAreaProps = {
  name: keyof Pick<CareerFormData, 'message'>;
  register: UseFormRegister<CareerFormData>;
  formText: FormText;
  sizeClassNames: string;
  isRequired: boolean;
  errors?: FieldErrors;
};
