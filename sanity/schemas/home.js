import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'mainPicture',
      title: 'Main Home Page Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'workSectionTag',
      title: 'Work Section Tag',
      type: 'string',
    }),
    
    defineField({
      name: 'workSectionHeader',
      title: 'Work Section Header',
      type: 'string',
    }),

    defineField({
      name: 'workSectionParagraph',
      title: 'Work Section Paragraph',
      type: 'string',
    }),

    defineField({
      name: 'remodelsSectionImage',
      title: 'Remodels Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'customHomesSectionImage',
      title: 'Custom Homes Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'testimonialSectionTag',
      title: 'Testimonial Section Tag',
      type: 'string',
    }),
    
    defineField({
      name: 'testimonialSectionHeader',
      title: 'Testimonial Section Header',
      type: 'string',
    }),

    defineField({
      name: 'testimonialSectionParagraph',
      title: 'Testimonial Section Paragraph',
      type: 'string',
    }),

  ],
})
