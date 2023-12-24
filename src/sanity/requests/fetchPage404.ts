import { client } from '@/sanity/client';
import { page404Query } from './queries/page404Query';

import { Page404 } from '@/types';

export const fetchPage404 = async (): Promise<Page404> => {
  const res = await client.fetch(page404Query, {
    next: {
      revalidate: 3600, // look for updates to revalidate cache every hour
    },
  });

  return res;
};
