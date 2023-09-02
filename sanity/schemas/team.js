import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'team',
  title: 'Team Members',
  type: 'document',
  fields: [
    defineField({
      name: 'memberName',
      title: 'Member Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'memberPosition',
      title: 'Member Position',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Member Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
