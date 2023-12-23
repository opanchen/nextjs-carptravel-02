'use client';

import { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { GalleryPicture } from '@/components/ui';

import { GallerySliderProps } from './types';

export const GallerySlider: React.FC<GallerySliderProps> = ({
  items,
  navText: { prevBtnLabel, nextBtnLabel },
  className,
}) => {
  const sliderRef = useRef<any>(null);

  const slides = [...items, ...items, items[2]];

  return (
    <div className={className}>
      <Swiper
        className="gallery-carousel"
        ref={sliderRef}
        slidesPerView={3}
        spaceBetween={24}
        loop={true}
        speed={1000}
        centeredSlides
        modules={[Navigation, Autoplay]}
        lazyPreloadPrevNext={1}
        onInit={(core: SwiperCore) => {
          sliderRef.current = core.el;
        }}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
      >
        {slides.map(({ name, order, desc }, index) => {
          return (
            <div key={`item-${index + 1}-${name}`}>
              <SwiperSlide key={`slide-${index + 1}-${name}`}>
                {({ isActive }) => (
                  <div>
                    <GalleryPicture order={order} name={name} desc={desc} />
                    <div
                      className={
                        !isActive
                          ? 'bg-overlay-strong absolute left-0 top-0 h-full w-full'
                          : 'hidden'
                      }
                    ></div>
                  </div>
                )}
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>

      <button
        className="prev desktop:left-[228px] desktop:leading-none transition_prop absolute bottom-0 left-[70px] z-10 text-[33px]  font-thin uppercase hover:text-white/75 focus:text-white/75"
        type="button"
      >
        {prevBtnLabel}
      </button>

      <button
        className="next desktop:right-[228px] desktop:leading-none transition_prop absolute bottom-0 right-[70px] z-10 text-[33px] font-thin  uppercase hover:text-white/75 focus:text-white/75"
        type="button"
      >
        {nextBtnLabel}
      </button>
    </div>
  );
};
