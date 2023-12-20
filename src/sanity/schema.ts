import { type SchemaTypeDefinition } from 'sanity';

import { metadata } from '@/sanity/schemas/metadata';
import { pageType } from './schemas/pageType';
import { formType } from './schemas/formType';
import {
  aboutSection,
  careerSection,
  contactsSection,
  gallerySection,
  heroSection,
  servicesSection,
} from './schemas/sections';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    metadata,
    pageType,
    heroSection,
    aboutSection,
    servicesSection,
    careerSection,
    gallerySection,
    contactsSection,
    formType,
  ],
};
