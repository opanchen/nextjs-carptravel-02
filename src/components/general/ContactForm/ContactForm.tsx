'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { toast } from 'react-toastify';

import { FormField, FormSubmitBtn, FormTextArea } from '@/components/ui';

import { ContactFormData, ContactFormProps } from './types';

export const ContactForm: React.FC<ContactFormProps> = ({ text }) => {
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  useFormPersist('carptravel-contact-form', {
    watch,
    setValue,
  });

  const handleFormSubmit: SubmitHandler<ContactFormData> = data => {
    console.log('SUBMIT: ', JSON.stringify(data));
    toast.success('Data sent successfully!');
    reset();
  };

  return (
    <form
      className="flex flex-col gap-[24px] md:flex-row md:gap-[20px] xl:inline-flex xl:w-[608px] xl:flex-col xl:gap-[42px]"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="flex flex-col gap-[24px] md:w-[220px] md:gap-[28px] xl:w-auto xl:flex-row xl:gap-[20px]">
        <FormField
          type="text"
          name="fullName"
          register={register}
          errors={errors}
          formText={text}
          className="xl:w-[292px]"
        />

        <FormField
          type="email"
          name="email"
          register={register}
          errors={errors}
          formText={text}
          className="xl:w-[292px]"
        />
      </div>

      <div className="flex flex-col gap-[16px] md:grow xl:gap-[24px]">
        <FormTextArea
          name="message"
          register={register}
          formText={text}
          isRequired={true}
          errors={errors}
          sizeClassNames="h-[280px] md:h-[220px] xl:h-[174px]"
        />

        <FormSubmitBtn label={text.submitBtnLabel} />
      </div>
    </form>
  );
};
