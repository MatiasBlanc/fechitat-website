import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hitoHistorico',
  title: 'Hito Histórico',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título del hito',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fecha',
      title: 'Fecha',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'anio',
      title: 'Año (para ordenamiento)',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
    }),
    defineField({
      name: 'imagen',
      title: 'Imagen',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'tipo',
      title: 'Tipo de hito',
      type: 'string',
      options: {
        list: [
          {title: 'Fundación', value: 'fundacion'},
          {title: 'Competencia', value: 'competencia'},
          {title: 'Logro', value: 'logro'},
          {title: 'Reconocimiento', value: 'reconocimiento'},
          {title: 'Evento importante', value: 'evento'},
          {title: 'Cambio organizacional', value: 'organizacional'},
        ],
      },
    }),
    defineField({
      name: 'destacado',
      title: 'Hito destacado',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'orden',
      title: 'Orden cronológico',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'anio',
      media: 'imagen',
    },
  },
  orderings: [
    {
      title: 'Cronológico',
      name: 'cronologico',
      by: [{field: 'anio', direction: 'asc'}],
    },
  ],
})
