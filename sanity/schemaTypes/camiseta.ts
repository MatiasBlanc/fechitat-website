import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'camiseta',
  title: 'Camiseta / Uniforme',
  type: 'document',
  icon: () => '👕',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Nombre / Evento',
      type: 'string',
      description: 'Ej: Campeonato Nacional 2022',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'periodo',
      title: 'Año / Período',
      type: 'string',
      description: 'Ej: 2022 o 2021-2022',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'anioOrden',
      title: 'Año para ordenar',
      type: 'number',
      description: 'Número entero para ordenar cronológicamente (ej: 2022)',
      validation: (Rule) => Rule.required().integer().min(1990).max(2100),
    }),
    defineField({
      name: 'imagenFrente',
      title: 'Imagen — Frente',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imagenDorso',
      title: 'Imagen — Dorso',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'coloresPrincipales',
      title: 'Colores principales',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'nombre', title: 'Nombre del color', type: 'string'},
            {name: 'hex', title: 'Hex (ej: #D21111)', type: 'string'},
          ],
          preview: {
            select: {title: 'nombre', subtitle: 'hex'},
          },
        },
      ],
    }),
    defineField({
      name: 'disenador',
      title: 'Diseñador / Proveedor',
      type: 'string',
    }),
    defineField({
      name: 'lugarEvento',
      title: 'País o ciudad del evento',
      type: 'string',
      description: 'Ej: Santiago, Chile o Lima, Perú',
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción corta',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'activo',
      title: 'Visible en el sitio',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Año (más reciente primero)',
      name: 'anioDesc',
      by: [{field: 'anioOrden', direction: 'desc'}],
    },
    {
      title: 'Año (más antiguo primero)',
      name: 'anioAsc',
      by: [{field: 'anioOrden', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'periodo',
      media: 'imagenFrente',
    },
  },
})
