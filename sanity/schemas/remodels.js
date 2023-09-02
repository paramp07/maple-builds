import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'remodels',
  title: 'Remodels Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'remodelsHeader',
      description: "Heading",
      title: 'Remodels Header',
      type: 'string',
    }),

    defineField({
      name: 'remodelsSubHeader',
      description: "Sub Heading",
      title: 'Remodels Sub Header',
      type: 'string',
    }),

    defineField({
      name: 'remodelsParagraph',
      description: "Long Paragraph",
      title: 'Remodels Paragraph',
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
