import { type SchemaTypeDefinition } from 'sanity';

// schemas imports...
import { metadata } from '@/sanity/schemas/metadata';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [metadata],
};
