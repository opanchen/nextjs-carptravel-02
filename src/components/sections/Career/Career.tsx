import { Container } from '@/components/ui';
import { CareerForm } from '@/components/general';

import { sliceTextBlock } from '@/utils/helpers';

import { CareerProps } from './types';

export const Career: React.FC<CareerProps> = ({ text, form }) => {
  const { heading, subtitle, tagline, features, promotionFormText } = text;

  return (
    <section id="career">
      <div className="section background-overlay section-career">
        <Container>
          <div className="flex flex-col gap-[36px] md:gap-[12px] xl:gap-[24px]">
            <div className="flex flex-col gap-[24px] md:flex-row md:justify-between md:gap-0">
              <h2 className="text-heading md:leading-tight">
                {sliceTextBlock(heading, 0, 1)}{' '}
                <span className="font-medium">
                  {sliceTextBlock(heading, 1)}
                </span>
              </h2>

              <p className="md:leadind-[1.538] w-[180px] self-end text-[14px] font-extralight leading-[1.428] md:w-[220px] md:self-auto md:pt-[8px] md:text-justify md:text-[13px] xl:w-[292px] xl:pt-[16px] xl:text-[18px] xl:leading-[1.333]">
                {tagline}
              </p>
            </div>

            <div className="flex items-start gap-[20px] xl:justify-end xl:gap-[24px]">
              <div className="flex flex-col gap-[36px] md:relative md:pt-[96px] xl:pt-[88px]">
                <h3 className="w-[180px] self-end text-right text-[30px] font-extralight uppercase md:absolute md:right-0 md:top-0 xl:right-[309px] xl:text-[36px] xl:leading-[1.083]">
                  {subtitle}
                </h3>

                <ul className="flex w-[182px] flex-col gap-[16px] text-right md:w-auto md:shrink-0 md:gap-[24px]">
                  {features.map(({ _key, title, description }) => (
                    <li
                      key={_key}
                      className="flex flex-col gap-[8px] xl:flex-row xl:justify-end xl:gap-[24px]"
                    >
                      <h4 className="offer-text-title xl:translate-y-[-3px]">
                        {title}
                      </h4>

                      <p className="offer-text-desc xl:w-[285px] xl:text-left">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden flex-col gap-[24px] md:inline-flex md:pt-[96px] xl:pt-[88px]">
                <p className="text-primary w-[180px]  self-end md:w-[220px] md:self-start xl:w-[234px]">
                  <span>{sliceTextBlock(promotionFormText, 0, 4)}</span>
                  <br />
                  {sliceTextBlock(promotionFormText, 4)}
                </p>

                <CareerForm text={form} />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Render form as another section for mobile dimension */}
      <div className="section background-overlay section-career md:hidden">
        <Container>
          <div className="flex flex-col gap-[24px] md:inline-flex">
            <p className="text-primary w-[180px] self-end md:w-[220px] md:self-start xl:w-[234px]">
              <span>{sliceTextBlock(promotionFormText, 0, 4)}</span>
              <br />
              {sliceTextBlock(promotionFormText, 4)}
            </p>

            <CareerForm text={form} />
          </div>
        </Container>
      </div>
    </section>
  );
};
