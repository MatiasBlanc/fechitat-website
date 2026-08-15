import {UsersIcon} from '@sanity/icons/Users'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'comision',
  title: 'Comisiones',
  icon: UsersIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre',
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
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.max(500),
    }),
    defineField({
      name: 'miembros',
      title: 'Integrantes',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'miembroOrganigrama'}],
        }),
      ],
      validation: (Rule) => Rule.min(1).required(),
    }),
    defineField({
      name: 'orden',
      title: 'Orden',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'activo',
      title: 'Activa',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Orden manual',
      name: 'ordenAsc',
      by: [{field: 'orden', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'nombre',
      subtitle: 'descripcion',
    },
  },
})
