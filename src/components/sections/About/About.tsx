import { Container } from '@/components/ui';

import { sliceTextBlock } from '@/utils/helpers';

import { AboutProps } from './types';

export const About: React.FC<AboutProps> = ({ text }) => {
  const { heading, tagline, text: textArrr } = text;

  return (
    <section id="about" className="background-overlay section-about section">
      <Container>
        <div className="relative flex flex-col gap-[40px] md:gap-[64px]">
          <div className="flex flex-col gap-[8px] md:flex-row md:items-start md:gap-[76px] xl:gap-[24px]">
            <h2 className="text-heading shrink-0 md:leading-none xl:translate-y-[-6px]">
              <span className="md:text-justify">
                {sliceTextBlock(heading, 0, 1)}
              </span>{' '}
              <span className="font-medium">{sliceTextBlock(heading, 1)}</span>
            </h2>

            <div className="flex w-[180px] flex-col gap-[20px] md:w-auto md:gap-[16px] xl:w-[292px]">
              <p className="text-primary">
                <span className="font-normal">
                  {sliceTextBlock(textArrr[0], 0, 4)}
                </span>{' '}
                {sliceTextBlock(textArrr[0], 4)}
              </p>

              <p className="text-primary">
                <span className="font-normal">
                  {sliceTextBlock(textArrr[1], 0, 2)}
                </span>{' '}
                {sliceTextBlock(textArrr[1], 2)}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[40px] xl:flex-row-reverse xl:items-center xl:justify-between xl:gap-0">
            <p className="text-primary inline-flex w-[180px] flex-col self-end md:absolute md:bottom-[124px] md:left-0 md:w-[220px] xl:static xl:w-auto">
              <span className="font-normal uppercase">
                {sliceTextBlock(tagline, 0, 2)}
              </span>

              <span className="text-right font-normal uppercase">
                {sliceTextBlock(tagline, 2, 5)}
              </span>

              <span className=" tracking-[-0.14px] md:tracking-[0.32px] xl:tracking-[2.16px]">
                {sliceTextBlock(tagline, 5)}
              </span>
            </p>

            <p className="text-primary md:w-[464px] md:self-end xl:w-[604px]">
              <span className="font-normal">
                {sliceTextBlock(textArrr[2], 0, 3)}
              </span>{' '}
              {sliceTextBlock(textArrr[2], 3)}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
