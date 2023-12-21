import { client } from '@/sanity/client';
import { sectionsQuery } from './queries/sectionsQuery';

import { SectionList, SectionListResponse } from '@/types/SectionList';

export const fetchSections = async (): Promise<SectionList> => {
  const res: SectionListResponse = await client.fetch(sectionsQuery, {
    next: {
      //   revalidate: 3600, // look for updates to revalidate cache every hour
      revalidate: 10,
    },
  });
  return res.pageBuilder;
};
