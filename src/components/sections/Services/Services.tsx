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
    <section id="services" className=" bg-overlay-burger min-h-[500px]">
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
                  <div className="flex flex-col gap-[16px] md:gap-[36px] xl:gap-[24px]">
                    <div className="flex flex-col gap-[24px] md:flex-row md:items-center md:gap-[170px]">
                      <h2 className="text-heading">
                        {sliceTextBlock(heading, 0, 1)}
                        <span className="font-medium">
                          {' '}
                          {sliceTextBlock(heading, 1)}
                        </span>
                      </h2>

                      <p className="text-right text-[43px] font-thin md:text-[67px] md:leading-[1.164] xl:text-[98px] xl:leading-normal">
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

                      <div className="flex h-[370px] flex-col xl:h-auto xl:grow xl:justify-between">
                        <div className="mb-auto flex flex-col-reverse gap-[24px] md:flex-col">
                          <ul className="flex flex-col gap-[16px]">
                            {services.map(
                              ({ order, shortcut, title: name }) => {
                                const isActive = activeSlide === order - 1;
                                return (
                                  <li
                                    key={`${order}-${shortcut}`}
                                    className="xl:relative"
                                  >
                                    <button
                                      className={`transition_prop text-[20px] font-extralight uppercase leading-[0.85] opacity-[0.5] hover:opacity-[1] md:text-[22px] md:leading-[0.82] xl:text-[28px] xl:leading-[0.857] ${
                                        isActive
                                          ? 'active-slider-tab relative pl-[16px] font-medium opacity-[1]'
                                          : ''
                                      }`}
                                      type="button"
                                      onClick={() =>
                                        handleSlideButtonClick(order - 1)
                                      }
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
                                      <p className="absolute left-[312px] top-[-6px] hidden text-[12px] font-extralight leading-[2.0] tracking-[2.4px] xl:block">
                                        {tagline}
                                      </p>
                                    )}
                                  </li>
                                );
                              },
                            )}
                          </ul>

                          <p className="text-right text-[12px] font-extralight leading-[2.0] tracking-[2.4px] md:text-left xl:hidden">
                            {tagline}
                          </p>
                        </div>

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
    </section>
  );
};
