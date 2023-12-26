'use client';

import ReactInputMask from 'react-input-mask';

import { FormErrorMessage } from '@/components/ui';

import { getInputConfig } from '@/utils/helpers';

import { FormFieldProps } from './types';

export const FormField: React.FC<FormFieldProps> = ({
  name,
  type,
  errors,
  register,
  formText,
  className = '',
}) => {
  const inputError = errors && errors[name];

  const text = formText.fields.find(({ input }) => input === name);

  return type === 'tel' ? (
    <>
      <label
        className={`form-label text-form-label ${inputError && 'text-red'}`}
      >
        {text?.label}
        <span className="bg-gray-light flex items-center gap-[6px] pl-[8px]">
          <span className="inline-block shrink-0 text-justify text-[13px] font-extralight leading-[1.846] text-white xl:text-[20px] xl:leading-[1.2]">
            + 38
          </span>

          <ReactInputMask
            mask={'(999) 99 99 999'}
            alwaysShowMask={false}
            maskPlaceholder={''}
            {...register(
              name,
              getInputConfig(
                'phone',
                text?.requiredErrorText,
                text?.validationErrorText,
              ),
            )}
            type={type}
            aria-invalid={inputError ? true : false}
            placeholder={text?.placeholder || ''}
            className={`form-input form-input-phone text-input grow ${
              inputError && 'text-red caret-white'
            }`}
          />
        </span>

        {inputError && inputError.message && (
          <FormErrorMessage message={inputError.message as string} />
        )}
      </label>
    </>
  ) : (
    <label
      className={`form-label text-form-label ${className} ${
        errors && errors[name] ? 'text-red' : ''
      } `}
    >
      {text?.label}
      <input
        {...register(
          name,
          getInputConfig(
            name,
            text?.requiredErrorText,
            text?.validationErrorText,
          ),
        )}
        type={type}
        placeholder={text?.placeholder}
        aria-invalid={inputError ? true : false}
        className={`form-input text-input grow pl-[8px] ${
          inputError ? 'text-red caret-white' : ''
        }`}
      />

      {inputError && inputError.message && (
        <FormErrorMessage message={inputError.message as string} />
      )}
    </label>
  );
};
