import { defineField, defineType } from 'sanity';

export const page404 = defineType({
  name: 'page404',
  type: 'document',
  title: 'Not Found page',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
    }),
    defineField({
      name: 'promotionText',
      type: 'string',
    }),
    defineField({
      name: 'promotionBtnLabel',
      type: 'string',
    }),
  ],
});
