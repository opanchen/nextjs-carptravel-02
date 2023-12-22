import { ErrorIcon } from '@/components/ui';

import { FormErrorMessageProps } from './types';

export const FormErrorMessage: React.FC<FormErrorMessageProps> = ({
  message,
}) => {
  return (
    <div className="text-red absolute right-0 top-[100%] flex items-center gap-[4px]">
      <ErrorIcon />

      <p
        role="alert"
        className="text-[12px] font-extralight leading-[2.0] tracking-[2.4px]"
      >
        {message}
      </p>
    </div>
  );
};
