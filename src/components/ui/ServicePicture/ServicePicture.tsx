import Image from 'next/image';

import { addLeadingZero } from '@/utils/helpers';

import { ServicePictureProps } from './types';

export const ServicePicture: React.FC<ServicePictureProps> = ({
  name,
  order,
  shortcut,
}) => {
  const num = addLeadingZero(order);

  return (
    <div className="preSm:w-[280px] block h-[213px] w-full shrink-0 self-end md:h-[370px] md:w-[463px] md:self-auto xl:h-[429px] xl:w-[607px]">
      <Image
        src={`/assets/images/services/service-${num}-${shortcut}.jpg`}
        alt={name}
        width={607}
        height={429}
        placeholder="blur"
        blurDataURL={`/assets/images/services/service-${num}-${shortcut}.jpg`}
        sizes="(min-width: 1200px) 607px, (min-width: 768px) 463px, 100vw"
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
};
