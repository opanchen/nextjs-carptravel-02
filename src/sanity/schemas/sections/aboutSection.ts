import { defineArrayMember, defineField, defineType } from 'sanity';

export const aboutSection = defineType({
  name: 'about',
  type: 'object',
  title: 'About',
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
      name: 'text',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'excerpt',
          type: 'text',
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'About section',
      };
    },
  },
});
