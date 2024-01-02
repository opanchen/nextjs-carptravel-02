'use client';

import { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';

import { Container, ServicePicture } from '@/components/ui';

import { addLeadingZero, sliceTextBlock } from '@/utils/helpers';

import { ServicesProps } from './types';
import { ServiceNav } from '@/components/general';

export const Services: React.FC<ServicesProps> = ({ text }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<any>(null);

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveSlide(swiper.realIndex);
  };

  const handleSlideButtonClick = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.swiper.slideTo(index);
    }
  };

  const { heading, offerList: services } = text;

  return (
    <section id="services" className="bg-overlay-burger relative min-h-[500px]">
      <Swiper
        ref={sliderRef}
        slidesPerView={1}
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        onSlideChange={handleSlideChange}
        onInit={(core: SwiperCore) => {
          sliderRef.current = core.el;
        }}
      >
        {services.map(service => {
          const {
            title: name,
            shortcut,
            description: desc,
            tagline,
            order,
          } = service;

          const totalSlides = addLeadingZero(services.length);
          const currentSlide = addLeadingZero(activeSlide + 1);

          return (
            <SwiperSlide key={shortcut}>
              <div
                className={`background-overlay service-${shortcut} section bg-red h-full w-full`}
              >
                <Container>
                  <div className="flex flex-col gap-[16px] md:gap-[40px] xl:gap-[24px]">
                    <div className="flex flex-col gap-[24px] md:flex-row md:items-center md:gap-[170px]">
                      <h2 className="text-heading md:leading-none">
                        {sliceTextBlock(heading, 0, 1)}
                        <span className="font-medium">
                          {' '}
                          {sliceTextBlock(heading, 1)}
                        </span>
                      </h2>

                      <p className="xl:leading-1.2 text-right text-[43px] font-thin md:text-[67px] md:leading-[1.164] xl:text-[98px]">
                        {currentSlide}/
                        <span className="text-gray-strong">{totalSlides}</span>
                      </p>
                    </div>

                    <div className="flex flex-col gap-[12px] md:flex-row md:items-center md:gap-[20px] xl:items-stretch">
                      <ServicePicture
                        order={order}
                        shortcut={shortcut}
                        name={name}
                      />

                      <div className="flex h-[370px] flex-col md:pt-[202px] xl:h-auto xl:grow xl:justify-end xl:pt-0">
                        <p className="mb-auto text-right text-[12px] font-extralight leading-[2.0] tracking-[2.4px] md:text-left xl:hidden">
                          {tagline}
                        </p>

                        <p className="text-[14px] font-extralight leading-[1.428] md:text-justify md:text-[13px] md:leading-[1.538] xl:w-[294px] xl:self-end xl:text-[18px] xl:leading-[1.333]">
                          {desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <ServiceNav
        services={services}
        activeSlide={activeSlide}
        onClick={handleSlideButtonClick}
      />
    </section>
  );
};
