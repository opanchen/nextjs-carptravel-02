import { Container, GalleryPicture } from '@/components/ui';
import { GallerySlider } from '@/components/general';

import { sliceTextBlock } from '@/utils/helpers';

import { GalleryProps } from './types';

export const Gallery: React.FC<GalleryProps> = ({ text }) => {
  const { heading, sliderButtons, galleryItems } = text;

  return (
    <section
      id="gallery"
      className="background-overlay section-gallery section"
    >
      <Container>
        <h2 className="text-heading mb-[24px] md:mb-[72px] xl:mb-[24px]">
          {sliceTextBlock(heading, 0, 1)}{' '}
          <span className="font-medium">{sliceTextBlock(heading, 1)}</span>
        </h2>

        {/* Static gallery for mobile */}
        <ul className="flex flex-col items-center gap-[24px] md:hidden ">
          {galleryItems.map(({ name, order, desc }) => (
            <li key={`view-${order}-${name}`}>
              <GalleryPicture name={name} order={order} desc={desc} />
            </li>
          ))}
        </ul>
      </Container>

      {/* Slider carousel for tablet & desktop */}
      <GallerySlider
        items={galleryItems}
        navText={sliderButtons}
        className="relative mx-auto hidden md:block md:w-[768px] md:px-[32px] xl:w-[1280px] xl:px-0"
      />
    </section>
  );
};
