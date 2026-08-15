import {defineArrayMember, defineField, defineType} from 'sanity'

const listaDeTexto = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'array',
    of: [defineArrayMember({type: 'string'})],
  })

const camposGrado = [
  defineField({
    name: 'rango',
    title: 'Rango de grado',
    type: 'string',
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'cinturon',
    title: 'Cinturón',
    type: 'string',
    validation: (Rule) => Rule.required(),
  }),
  listaDeTexto('posiciones', 'Posiciones'),
  listaDeTexto('ataquesBrazo', 'Ataques con brazos'),
  listaDeTexto('ataquesPierna', 'Ataques con piernas'),
  listaDeTexto('defensas', 'Defensas'),
  listaDeTexto('formas', 'Formas / Tuls'),
  listaDeTexto('combate', 'Combate'),
  listaDeTexto('defensaPersonal', 'Defensa personal'),
  listaDeTexto('rotura', 'Rotura'),
  listaDeTexto('teoria', 'Teoría'),
]

export default defineType({
  name: 'programaExamen',
  title: 'Programa de examen',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción introductoria',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.max(500),
    }),
    defineField({
      name: 'grados',
      title: 'Grados y requisitos',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'grado',
          title: 'Grado',
          type: 'object',
          fields: camposGrado,
          preview: {
            select: {title: 'rango', subtitle: 'cinturon'},
            prepare({title, subtitle}) {
              return {title: title ?? 'Grado sin rango', subtitle: subtitle ?? ''}
            },
          },
        }),
      ],
      validation: (Rule) => Rule.min(1).required(),
    }),
    defineField({
      name: 'activo',
      title: 'Activo',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {title: 'titulo', activo: 'activo'},
    prepare({title, activo}) {
      return {
        title,
        subtitle: activo === false ? 'Borrador inactivo' : 'Publicado en el sitio',
      }
    },
  },
})
