import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'contactUsImage',
      title: 'Contact Us Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'ctaHeader',
      title: 'CTA Header',
      type: 'string',
    }),
    
    defineField({
      name: 'ctaParagraph',
      title: 'CTA Paragraph',
      type: 'string',
    }),

    defineField({
      name: 'teamSectionTag',
      title: 'Team Section Tag',
      type: 'string',
    }),
    
    defineField({
      name: 'teamSectionHeader',
      title: 'Team Section Header',
      type: 'string',
    }),

    defineField({
      name: 'teamSectionParagraph',
      title: 'Team Section Paragraph',
      type: 'string',
    }),
    defineField({
        name: 'missionSectionHeader',
        title: 'Mission Section Header',
        type: 'string',
      }),
  
    defineField({
      name: 'missionSectionParagraph',
      title: 'Mission Section Paragraph',
      type: 'string',
    }),
    defineField({
      name: 'serviceSectionTag',
      title: 'Service Section Tag',
      type: 'string',
    }),
    
    defineField({
      name: 'serviceSectionHeader',
      title: 'Service Section Header',
      type: 'string',
    }),

    defineField({
      name: 'serviceSectionParagraph',
      title: 'Service Section Paragraph',
      type: 'string',
    }),
    defineField({
      name: 'generalContractingImage',
      title: 'General Contracting Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'customHomesImage',
      title: 'Custom Homes Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'additionsImage',
      title: 'Additions Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'remodelsImage',
      title: 'Remodels and Renovations Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
