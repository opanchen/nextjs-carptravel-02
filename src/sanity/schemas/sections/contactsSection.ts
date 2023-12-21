import { defineArrayMember, defineField, defineType } from 'sanity';
import { elementField } from '../elementField';

export const contactsSection = defineType({
  name: 'contacts',
  type: 'object',
  fields: [
    elementField,

    defineField({
      name: 'heading',
      type: 'string',
    }),

    defineField({
      name: 'contactInfo',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'contactsBlock',
          type: 'object',
          fields: [
            defineField({
              name: 'type',
              type: 'string',
              description: 'Select contacts block type',
              options: {
                list: ['phone', 'email', 'socials'],
              },
            }),
            defineField({
              name: 'labelTag',
              type: 'string',
            }),

            defineField({
              name: 'items',
              type: 'array',
              of: [
                defineArrayMember({
                  name: 'item',
                  description:
                    'Enter contact item information (phone number, email or link to social network)',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'label',
                      type: 'string',
                    }),
                    defineField({
                      name: 'value',
                      type: 'string',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Contacts section',
      };
    },
  },
});
