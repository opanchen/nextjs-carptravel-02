import { client } from '@/sanity/client';
import { metadataQuery } from './queries/metadataQuery';

import { MetadataCMS } from '@/types';

export const fetchMetadata = async (): Promise<MetadataCMS> => {
  const res: MetadataCMS = await client.fetch(metadataQuery, {
    next: {
      revalidate: 3600, // look for updates to revalidate cache every hour
    },
  });
  return res;
};
