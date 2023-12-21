import { ContainerProps } from './types';

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto px-5 sm:w-[480px] md:w-[768px] md:px-8 xl:w-[1280px] xl:px-6">
      {children}
    </div>
  );
};
