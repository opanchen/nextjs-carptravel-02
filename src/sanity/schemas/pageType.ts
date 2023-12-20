import { defineArrayMember, defineField, defineType } from 'sanity';

export const pageType = defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          name: 'hero',
          type: 'hero',
        }),
        defineArrayMember({
          name: 'about',
          type: 'about',
        }),
        defineArrayMember({
          name: 'services',
          type: 'services',
        }),
        defineArrayMember({
          name: 'career',
          type: 'career',
        }),
        defineArrayMember({
          name: 'gallery',
          type: 'gallery',
        }),
        defineArrayMember({
          name: 'contacts',
          type: 'contacts',
        }),
        defineArrayMember({
          name: 'form',
          type: 'form',
        }),
      ],
    }),
  ],
});
