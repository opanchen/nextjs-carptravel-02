'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FormField, FormSubmitBtn, FormTextArea } from '@/components/ui';

import { CareerFormData, CareerFormProps } from './types';

export const CareerForm: React.FC<CareerFormProps> = ({ text }) => {
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<CareerFormData>();

  useFormPersist('carptravel-career-form', {
    watch,
    setValue,
  });

  const handleFormSubmit: SubmitHandler<CareerFormData> = data => {
    console.log('SUBMIT: ', JSON.stringify(data));
    toast.success('Data sent successfully!');
    reset();
  };

  const checkboxText = text.fields.find(({ input }) => input === 'checkbox');

  return (
    <>
      <form
        className="relative flex flex-col gap-[16px] md:inline-flex"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="flex flex-col gap-[16px] md:flex-row md:gap-[20px]">
          <div className="flex flex-col gap-[16px] md:w-[222px] xl:w-[290px]">
            <FormField
              type="text"
              name="fullName"
              register={register}
              errors={errors}
              formText={text}
            />

            <FormField
              type="email"
              name="email"
              register={register}
              errors={errors}
              formText={text}
            />

            <FormField
              type="text"
              name="position"
              register={register}
              errors={errors}
              formText={text}
            />

            <FormField
              type="tel"
              name="phone"
              register={register}
              errors={errors}
              formText={text}
            />
          </div>

          <FormTextArea
            name="message"
            register={register}
            formText={text}
            isRequired={false}
            sizeClassNames="h-[196px] md:h-[228px] md:w-[221px] xl:h-[268px] xl:w-[292px]"
          />
        </div>

        <label className="flex gap-[8px] text-[12px] font-extralight leading-[1.833] md:w-[222px] xl:w-[290px] xl:leading-[2.0]">
          <input
            {...register('isConfirmed', {
              required: true,
            })}
            type="checkbox"
            className="confirmation-checkbox absolute h-0 w-0 opacity-0"
          />
          <span
            className={`checkmark relative inline-block h-[22px] w-[22px] shrink-0 cursor-pointer border xl:h-[24px] xl:w-[24px]`}
          ></span>
          <span>
            {checkboxText?.label + ' '}
            {errors.isConfirmed && (
              <span className="text-red">
                {checkboxText?.requiredErrorText}
              </span>
            )}
          </span>
        </label>

        <FormSubmitBtn
          label={text.submitBtnLabel}
          className="md:absolute md:bottom-[16px] md:right-0 xl:bottom-[20px]"
        />
      </form>

      <ToastContainer />
    </>
  );
};
