import { FormErrorMessage } from '@/components/ui';

import { FormTextAreaProps } from './types';

export const FormTextArea: React.FC<FormTextAreaProps> = ({
  name,
  register,
  formText,
  sizeClassNames,
  errors,
  isRequired,
}) => {
  const inputError = errors && errors[name];

  const text = formText.fields.find(({ input }) => input === name);

  return (
    <label className={`form-label text-form-label ${inputError && 'text-red'}`}>
      {text?.label}
      <textarea
        {...register(name, {
          required: isRequired ? text?.requiredErrorText : false,
        })}
        aria-invalid={inputError ? true : false}
        className={`form-input text-input grow resize-none px-[9px] ${sizeClassNames}`}
      />

      {inputError && inputError.message && (
        <FormErrorMessage message={inputError.message as string} />
      )}
    </label>
  );
};
