import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    
    defineField({
      title: "Type Of Project",
      description: "Pick the type of your project",
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Custom Home Build", value: "customHomeBuild" },
          { title: "Remodel", value: "remodel" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 256,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'photographer',
      title: 'Photographer',
      type: 'string',
    }),

    defineField({
      name: 'interior',
      title: 'Interior/Exterior Designer',
      type: 'string',
    }),

    defineField({
      name: 'architecturalDesign',
      title: 'Architectural Design',
      type: 'string',
    }),

    defineField({
      name: 'landscape',
      title: 'Landscape',
      type: 'string',
    }),

    defineField({
      name: 'Images',
      type: 'array', // supports drag'n'drop of multiple files
      options: {
        layout: 'grid'
      },
      of: [{
        type: 'image'
      }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],
})
