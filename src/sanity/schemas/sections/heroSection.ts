import { defineField, defineType } from 'sanity';
import { elementField } from '../elementField';

export const heroSection = defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero',
  fields: [
    // defineField({
    //   name: 'element',
    //   type: 'string',
    //   options: {
    //     list: ['section', 'form'],
    //   },
    // }),
    elementField,

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
      name: 'excerpt',
      type: 'text',
    }),
    defineField({
      name: 'promotionBtnLabel',
      type: 'string',
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Hero section',
      };
    },
  },
});
