import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'processes',
  title: 'Processes',
  type: 'document',
  fields: [
    defineField({
      name: 'processImage',
      title: 'Process Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'processHeader',
      title: 'Process Header',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'processParagraph',
      title: 'Process Paragraph',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
