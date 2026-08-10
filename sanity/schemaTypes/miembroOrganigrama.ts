import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'miembroOrganigrama',
  title: 'Miembro del Organigrama',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre completo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cargo',
      title: 'Cargo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nivel',
      title: 'Nivel jerárquico',
      type: 'string',
      options: {
        list: [
          {title: 'Presidencia', value: 'presidencia'},
          {title: 'Vicepresidencia', value: 'vicepresidencia'},
          {title: 'Directiva', value: 'directiva'},
          {title: 'Comisión', value: 'comision'},
          {title: 'Asesor', value: 'asesor'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'foto',
      title: 'Foto',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'email',
      title: 'Email institucional',
      type: 'string',
    }),
    defineField({
      name: 'telefono',
      title: 'Teléfono',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Breve biografía',
      type: 'text',
    }),
    defineField({
      name: 'orden',
      title: 'Orden de aparición',
      type: 'number',
      description: 'Menor número = aparece primero',
    }),
    defineField({
      name: 'activo',
      title: 'Miembro activo',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'nombre',
      subtitle: 'cargo',
      media: 'foto',
    },
  },
  orderings: [
    {
      title: 'Orden jerárquico',
      name: 'ordenAsc',
      by: [{field: 'orden', direction: 'asc'}],
    },
  ],
})
