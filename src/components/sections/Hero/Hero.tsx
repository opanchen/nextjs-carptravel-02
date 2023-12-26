import Link from 'next/link';

import { Container } from '@/components/ui';

import { sliceTextBlock } from '@/utils/helpers';

import { HeroProps } from './types';

export const Hero: React.FC<HeroProps> = ({ text }) => {
  const { heading, subtitle, tagline, excerpt, promotionBtnLabel } = text;

  return (
    <section className="background-overlay hero pb-[56px] pt-[104px] md:pb-[64px] md:pt-[124px] xl:pb-[104px] xl:pt-[130px]">
      <Container>
        <div className="relative flex flex-col gap-[24px] pt-[76px] md:flex-row md:gap-[48px] md:pt-0 xl:gap-[148px]">
          <div className="flex flex-col gap-[24px] md:gap-[68px]">
            <h1 className="text-[40px] font-thin uppercase leading-[1.4] tracking-[-1.6px] md:text-[67px] md:leading-normal md:tracking-[-2.68px] xl:text-[98px] xl:tracking-[-3.92px]">
              <span className="inline-block font-medium ">
                {sliceTextBlock(heading, 0, 1)}
              </span>
              <br />
              {sliceTextBlock(heading, 1, 2)}
              <br />
              {sliceTextBlock(heading, 2)}
            </h1>

            <p className="text-[10px] font-extralight leading-[1.6] md:text-[14px] md:leading-[1.143] md:tracking-[1.26px] xl:text-[16px] xl:leading-[1.5] xl:tracking-[1.44px]">
              {sliceTextBlock(tagline, 0, 6)}
              <br className="xl:hidden" />
              {sliceTextBlock(tagline, 6)}
            </p>
          </div>

          <div className="flex flex-col gap-[24px] md:w-[230px] md:gap-[28px] xl:ml-auto xl:w-[294px]">
            <h2 className="absolute right-0 top-0 md:static md:mb-auto md:leading-normal">
              <span className="flex md:leading-normal">
                <span className="inline-block text-[37px] font-medium leading-none md:text-[67px] md:leading-normal xl:text-[98px]">
                  {sliceTextBlock(subtitle, 0, 1)}
                </span>

                <span className="inline-block text-[37px] font-thin uppercase  leading-none tracking-[1.665px] md:text-[67px] md:leading-normal md:tracking-[8.71px] xl:text-[98px] xl:tracking-normal">
                  {sliceTextBlock(subtitle, 1, 2)}
                </span>
              </span>

              <span className="inline-block translate-y-[-10px] text-[12px] font-light uppercase leading-none tracking-[9.48px] md:translate-y-[-24px] md:text-[14px] md:tracking-[25.9px] xl:translate-y-[-32px] xl:text-[16px] xl:tracking-[36.48px]">
                {sliceTextBlock(subtitle, 2)}
              </span>
            </h2>

            <p className="text-justify text-[14px] font-extralight leading-[1.428] md:shrink md:text-[16px] md:leading-[1.25] xl:text-[18px] xl:leading-[1.333]">
              {excerpt}
            </p>

            <Link
              href="#contacts"
              className="hero-btn transition_prop bg-gray-middle hover:bg-gray-strong focus:bg-gray-strong relative flex h-[53px] w-full items-center justify-center text-[18px] font-bold uppercase leading-[2.666] md:h-[50px] md:leading-normal xl:h-[71px] xl:text-[32px]"
            >
              {promotionBtnLabel}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
