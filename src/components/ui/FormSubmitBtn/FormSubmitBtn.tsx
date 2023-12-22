import { FormSubmitBtnProps } from './types';

export const FormSubmitBtn: React.FC<FormSubmitBtnProps> = ({
  label,
  className = '',
}) => {
  return (
    <button
      className={`xl:text-32 transition_prop w-[82px] self-end text-[30px] font-medium uppercase hover:text-white/75 focus:text-white/75 xl:w-[87px]  ${className}`}
      type="submit"
    >
      {label}
    </button>
  );
};
