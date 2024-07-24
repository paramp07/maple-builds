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
          { title: "Custom Home", value: "customHomeBuild" },
          { title: "Kitchen Remodel", value: "kitchenRemodel" },
          { title: "Bathroom Remodel", value: "bathroomRemodel" },
          { title: "Full Home Remodel", value: "fullHomeRemodel" },
          { title: "Addition", value: "addition" },
          { title: "Custom Projects", value: "customProjects" },
          { title: "Paint", value: "paint" },

        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
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
      title: 'Interior Designer',
      type: 'string',
    }),

    defineField({
      name: 'architecturalDesign',
      title: 'Architectural Design',
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
