import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'customHomeBuilds',
  title: 'Custom Home Builds Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'customHomeBuildsHeader',
      description: "Heading",
      title: 'Custom Home Builds Header',
      type: 'string',
    }),

    defineField({
      name: 'customHomeBuildsSubHeader',
      description: "Sub Heading",
      title: 'Custom Home Builds Sub Header',
      type: 'string',
    }),

    defineField({
      name: 'customHomeBuildsParagraph',
      description: "Long Paragraph",
      title: 'Custom Home Builds Paragraph',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
