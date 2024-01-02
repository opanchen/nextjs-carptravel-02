import { sliceTextBlock } from '@/utils/helpers';

import { ServiceNavProps } from './types';

export const ServiceNav: React.FC<ServiceNavProps> = ({
  onClick,
  services,
  activeSlide,
}) => {
  return (
    <div className="absolute left-0 top-[475px] z-10 w-full md:left-auto md:right-0 md:top-[182px] xl:top-[244px]">
      <div className="mx-auto flex px-5 sm:w-[480px] md:w-[768px] md:px-8 xl:w-[1280px] xl:px-6">
        <ul className="flex flex-col gap-[16px] md:ml-[483px] xl:ml-[627px]">
          {services.map(({ order, shortcut, title: name, tagline }) => {
            const isActive = activeSlide === order - 1;

            return (
              <li key={`${order}-${shortcut}`} className="xl:relative">
                <button
                  className={`transition_prop text-[20px] font-extralight uppercase leading-[0.85] opacity-[0.5] hover:opacity-[1] focus:opacity-[1] md:text-[22px] md:leading-[0.82] xl:text-[28px] xl:leading-[0.857] ${
                    isActive
                      ? 'active-slider-tab relative pl-[16px] font-medium opacity-[1]'
                      : ''
                  }`}
                  type="button"
                  onClick={() => onClick(order - 1)}
                >
                  {order != 3 ? (
                    name
                  ) : (
                    <span className="block text-left">
                      {sliceTextBlock(name, 0, 2)}
                      <br />
                      {sliceTextBlock(name, 2)}
                    </span>
                  )}
                </button>

                {isActive && (
                  <p className="absolute left-[312px] top-[-6px] hidden w-full text-[12px] font-extralight leading-[2.0] tracking-[2.4px] xl:block">
                    {tagline}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
