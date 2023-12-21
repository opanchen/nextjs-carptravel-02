import { client } from '@/sanity/client';
import { pageQuery } from './queries/pageQuery';

import {
  AboutSectionText,
  CareerSectionText,
  ContactsSectionText,
  FormText,
  GallerySectionText,
  HeroSectionText,
  PageData,
  PageResponse,
  ServicesSectionText,
} from '@/types';

export const fetchPage = async (): Promise<PageData> => {
  const res: PageResponse = await client.fetch(pageQuery, {
    next: {
      //   revalidate: 3600, // look for updates to revalidate cache every hour
      revalidate: 10,
    },
  });

  return {
    hero: res.pageBuilder.find(
      ({ _type }) => _type === 'hero',
    ) as HeroSectionText,

    about: res.pageBuilder.find(
      ({ _type }) => _type === 'about',
    ) as AboutSectionText,

    services: res.pageBuilder.find(
      ({ _type }) => _type === 'services',
    ) as ServicesSectionText,

    career: res.pageBuilder.find(
      ({ _type }) => _type === 'career',
    ) as CareerSectionText,

    gallery: res.pageBuilder.find(
      ({ _type }) => _type === 'gallery',
    ) as GallerySectionText,

    contacts: res.pageBuilder.find(
      ({ _type }) => _type === 'contacts',
    ) as ContactsSectionText,

    form: res.pageBuilder.find(({ _type }) => _type === 'form') as FormText,
  };
};
