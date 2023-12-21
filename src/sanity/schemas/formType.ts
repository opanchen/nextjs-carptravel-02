import { defineArrayMember, defineField, defineType } from 'sanity';
import { elementField } from './elementField';

export const formType = defineType({
  name: 'form',
  type: 'object',
  fields: [
    elementField,

    defineField({
      name: 'submitBtnLabel',
      type: 'string',
    }),
    defineField({
      name: 'fields',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'field',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              type: 'string',
            }),
            defineField({
              name: 'input',
              type: 'string',
              description: 'Select input type',
              options: {
                list: [
                  'fullName',
                  'email',
                  'position',
                  'phone',
                  'message',
                  'checkbox',
                ],
              },
            }),
            defineField({
              name: 'placeholder',
              type: 'string',
            }),
            defineField({
              name: 'validationErrorText',
              type: 'string',
            }),
            defineField({
              name: 'requiredErrorText',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Form',
      };
    },
  },
});
