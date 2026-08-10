import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'galeria',
  title: 'Álbum de Galería',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título del álbum',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'titulo'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fecha',
      title: 'Fecha',
      type: 'date',
    }),
    defineField({
      name: 'evento',
      title: 'Evento relacionado',
      type: 'reference',
      to: [{type: 'evento'}],
    }),
    defineField({
      name: 'portada',
      title: 'Foto de portada',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'fotos',
      title: 'Fotos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'titulo',
              title: 'Título de la foto',
              type: 'string',
            },
            {
              name: 'descripcion',
              title: 'Descripción',
              type: 'string',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción del álbum',
      type: 'text',
    }),
    defineField({
      name: 'categorias',
      title: 'Categorías',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Competencias', value: 'competencias'},
          {title: 'Seminarios', value: 'seminarios'},
          {title: 'Exámenes', value: 'examenes'},
          {title: 'Vida federativa', value: 'federativa'},
          {title: 'Entrenamientos', value: 'entrenamientos'},
        ],
      },
    }),
    defineField({
      name: 'destacado',
      title: 'Álbum destacado',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'fecha',
      media: 'portada',
    },
  },
})
