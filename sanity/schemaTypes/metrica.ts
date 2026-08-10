import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'metrica',
  title: 'Métrica de la Federación',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título de la métrica',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Ej: "50+ Cinturones Negros", "150+ Competidores Activos"',
    }),
    defineField({
      name: 'valor',
      title: 'Valor numérico',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sufijo',
      title: 'Sufijo',
      type: 'string',
      description: 'Ej: "+", "k", "%"',
      initialValue: '+',
    }),
    defineField({
      name: 'icono',
      title: 'Icono',
      type: 'string',
      description: 'Emoji o nombre de icono',
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
    }),
    defineField({
      name: 'orden',
      title: 'Orden de aparición',
      type: 'number',
    }),
    defineField({
      name: 'activo',
      title: 'Visible en el sitio',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'valor',
    },
    prepare({title, subtitle}) {
      return {
        title,
        subtitle: `${subtitle}+`,
      }
    },
  },
  orderings: [
    {
      title: 'Orden',
      name: 'orden',
      by: [{field: 'orden', direction: 'asc'}],
    },
  ],
})
