import Link from 'next/link';

import { Container } from '@/components/ui';

import { fetchPage404 } from '@/sanity/requests/fetchPage404';
import { getStaticData, sliceTextBlock } from '@/utils/helpers';

const NotFound = async () => {
  const dynamicData = await fetchPage404();
  const { page404 } = await getStaticData();

  const { heading, tagline, subtitle, promotionText, promotionBtnLabel } =
    dynamicData || page404;

  return (
    <section className="background-overlay section-gallery h-screen pb-[56px] pt-[104px] md:pb-[64px] md:pt-[124px] xl:pb-[104px] xl:pt-[130px]">
      <Container>
        <div className="flex min-h-[70vh] flex-col gap-[32px] md:gap-[64px]">
          <div className="flex flex-col-reverse gap-[24px] md:gap-[36px]">
            <h1 className="text-heading self-start">
              <span className="font-medium">
                {sliceTextBlock(heading, 0, 1)}
              </span>{' '}
              {sliceTextBlock(heading, 1)}
            </h1>

            <p className="flex flex-col items-end self-end text-[14px] font-thin uppercase leading-[1.665] xl:text-[20px]">
              <span>{sliceTextBlock(subtitle, 0, 3)}</span>
              <span className="text-center text-[12px] font-extralight xl:text-[16px]">
                {sliceTextBlock(subtitle, 3)}
              </span>
            </p>
          </div>

          <div className="flex grow flex-col justify-between">
            <p className="text-primary md:self-start">{tagline}</p>

            <div className="flex flex-col gap-[20px] md:w-[40%] md:self-end xl:w-[35%]">
              <p className="text-primary self-center md:self-end md:text-left">
                {sliceTextBlock(promotionText, 0, 4)}{' '}
                <br className="hidden md:block" />
                {sliceTextBlock(promotionText, 4)}
              </p>

              <Link
                href="/"
                className="hero-btn transition_prop bg-gray-middle hover:bg-gray-strong focus:bg-gray-strong  relative flex h-[53px] w-full items-center justify-center text-[18px] font-bold uppercase leading-[2.666] md:h-[50px] md:leading-normal xl:h-[71px] xl:text-[32px]"
              >
                {promotionBtnLabel}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
