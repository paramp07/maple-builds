import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'testimonialImage',
      title: 'Testimonial Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'testimonialHeader',
      title: 'Testimonial Header',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'testimonialParagraph',
      title: 'Testimonial Paragraph',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'testimonialAuthor',
      title: 'Testimonial Author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
