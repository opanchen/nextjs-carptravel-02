import { Container } from '@/components/ui';
import { ContactForm } from '@/components/general';

import { sliceTextBlock } from '@/utils/helpers';

import { ContactsProps } from './types';

export const Contacts: React.FC<ContactsProps> = ({ text, form }) => {
  const { heading, contactInfo } = text;

  return (
    <section
      id="contacts"
      className="section background-overlay section-contacts"
    >
      <Container>
        <div className="relative z-[1] flex flex-col gap-[36px] xl:gap-[72px]">
          <h2 className="text-heading">
            {sliceTextBlock(heading, 0, 1)}{' '}
            <span className="font-medium">{sliceTextBlock(heading, 1)}</span>
          </h2>

          <div className="flex flex-col gap-[12px] md:gap-[64px] xl:flex-row xl:gap-[230px]">
            <address className="flex flex-col gap-[26px] not-italic md:flex-row md:gap-[90px] xl:grow xl:flex-col xl:gap-[124px]">
              <ul className="flex flex-col gap-[24px] xl:gap-[64px]">
                <li className="flex flex-row-reverse gap-[20px]">
                  <p className="address-label min-w-[80px]">
                    {contactInfo[0].labelTag}
                  </p>

                  <ul className="translate-y-[-3px] md:w-[220px]">
                    {contactInfo[0].items.map(({ label, value, _key }) => (
                      <li key={_key} className="flex justify-end">
                        <a
                          href={`tel:${value}`}
                          className="contact-link address-text md:block md:text-right"
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="flex flex-row-reverse items-center gap-[20px]">
                  <p className="address-label min-w-[80px]">
                    {contactInfo[1].labelTag}
                  </p>

                  <a
                    href={`mailto:${contactInfo[1].items[0].value}`}
                    className="contact-link address-text xl:translate-y-[-2px]"
                  >
                    {contactInfo[1].items[0].label}
                  </a>
                </li>
              </ul>

              <div className="flex flex-row gap-[20px] self-end xl:flex-row-reverse">
                <p className="address-label pt-[2px] xl:min-w-[80px]">
                  {contactInfo[2].labelTag}
                </p>

                <ul className="min-w-[80px]">
                  {contactInfo[2].items.map(({ _key, value, label }) => (
                    <li key={_key} className="xl:flex xl:justify-end">
                      <a
                        href={value}
                        target="_blank"
                        rel="nofollow noreferrer noopener"
                        className="contact-link address-text xl:block xl:text-right"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </address>

            <ContactForm text={form} />
          </div>
        </div>
      </Container>
    </section>
  );
};
