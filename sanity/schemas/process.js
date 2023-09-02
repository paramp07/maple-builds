import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'process',
  title: 'Process Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'ourProcessBackgroundImage',
      title: 'Our Process Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'ourProcessHeader',
      title: 'Our Process Header',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'ourProcessParagraph',
      title: 'Our Process Paragraph',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
