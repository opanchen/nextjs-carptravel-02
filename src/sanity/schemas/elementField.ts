import { defineField } from 'sanity';

export const elementField = defineField({
  name: 'element',
  type: 'string',
  options: {
    list: ['section', 'form'],
  },
});
