import { defineArrayMember, defineField, defineType } from 'sanity';
import { elementField } from '../elementField';

export const servicesSection = defineType({
  name: 'services',
  type: 'object',
  title: 'Services',
  fields: [
    elementField,

    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'offerList',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'offer',
          type: 'object',
          fields: [
            defineField({
              name: 'order',
              description: 'Select unique number from 1 to 5',
              type: 'number',
              validation: Rule => Rule.positive().integer().max(5).required(),
            }),
            defineField({
              name: 'shortcut',
              type: 'string',
            }),
            defineField({
              name: 'title',
              type: 'string',
            }),
            defineField({
              name: 'tagline',
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
  ],

  preview: {
    prepare() {
      return {
        title: 'Services section',
      };
    },
  },
});
