import Image from 'next/image';

import { addLeadingZero } from '@/utils/helpers';

import { GalleryPictureProps } from './types';

export const GalleryPicture: React.FC<GalleryPictureProps> = ({
  name,
  desc,
  order,
}) => {
  const num = addLeadingZero(order);

  return (
    <div>
      <Image
        src={`/assets/images/gallery/gallery-${num}-${name}.jpg`}
        alt={desc}
        width={606}
        height={429}
        priority
        sizes="(min-width: 1200px) 606px, (min-width: 768px) 415px, 100vw"
        className="block h-[187px] w-full md:h-auto md:w-[415px] xl:w-[606px]"
      />
    </div>
  );
};
