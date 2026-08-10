import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'campeon',
  title: 'Campeón',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre completo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'nombre'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'foto',
      title: 'Foto oficial',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'grado',
      title: 'Grado actual',
      type: 'string',
    }),
    defineField({
      name: 'escuela',
      title: 'Escuela',
      type: 'reference',
      to: [{type: 'escuela'}],
    }),
    defineField({
      name: 'titulo',
      title: 'Título / Campeonato obtenido',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'anio',
      title: 'Año del título',
      type: 'number',
    }),
    defineField({
      name: 'competencia',
      title: 'Competencia / Evento',
      type: 'string',
    }),
    defineField({
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
    }),
    defineField({
      name: 'nivel',
      title: 'Nivel del título',
      type: 'string',
      options: {
        list: [
          {title: 'Nacional', value: 'nacional'},
          {title: 'Internacional', value: 'internacional'},
          {title: 'Mundial', value: 'mundial'},
          {title: 'Panamericano', value: 'panamericano'},
          {title: 'Sudamericano', value: 'sudamericano'},
        ],
      },
    }),
    defineField({
      name: 'bio',
      title: 'Biografía / Trayectoria',
      type: 'text',
    }),
    defineField({
      name: 'logros',
      title: 'Otros logros',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'video',
      title: 'Video destacado (URL)',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'nombre',
      subtitle: 'titulo',
      media: 'foto',
    },
  },
})
