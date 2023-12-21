import { defineArrayMember, defineField, defineType } from 'sanity';
import { elementField } from '../elementField';

export const careerSection = defineType({
  name: 'career',
  type: 'object',
  title: 'Career',
  fields: [
    elementField,

    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
    }),
    defineField({
      name: 'features',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'feature',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              type: 'text',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'promotionFormText',
      type: 'text',
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Career section',
      };
    },
  },
});
