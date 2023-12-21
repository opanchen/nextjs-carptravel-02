import { defineField, defineType } from 'sanity';
import { elementField } from '../elementField';

export const gallerySection = defineType({
  name: 'gallery',
  type: 'object',
  fields: [
    elementField,
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'sliderButtons',
      type: 'object',
      fields: [
        defineField({
          name: 'prevBtnLabel',
          title: 'Previous button label',
          type: 'string',
        }),
        defineField({
          name: 'nextBtnLabel',
          title: 'Next button label',
          type: 'string',
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Gallery section',
      };
    },
  },
});
