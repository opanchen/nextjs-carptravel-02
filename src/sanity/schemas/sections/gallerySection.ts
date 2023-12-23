import { defineArrayMember, defineField, defineType } from 'sanity';
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
      name: 'galleryItems',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'galleryItem',
          type: 'object',
          fields: [
            defineField({
              name: 'order',
              description: 'Select unique number from 1 to 3',
              type: 'number',
              validation: Rule => Rule.positive().integer().max(3).required(),
            }),
            defineField({
              name: 'name',
              type: 'string',
            }),
            defineField({
              name: 'desc',
              description: 'Describe the item (image)',
              type: 'string',
            }),
          ],
        }),
      ],
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
