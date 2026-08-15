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
      name: 'grado',
      title: 'Grado marcial',
      description: 'Opcional. Se muestra junto al nombre en la página de la federación.',
      type: 'string',
      options: {
        list: [
          {title: '10° Gup', value: '10° Gup'},
          {title: '9° Gup', value: '9° Gup'},
          {title: '8° Gup', value: '8° Gup'},
          {title: '7° Gup', value: '7° Gup'},
          {title: '6° Gup', value: '6° Gup'},
          {title: '5° Gup', value: '5° Gup'},
          {title: '4° Gup', value: '4° Gup'},
          {title: '3° Gup', value: '3° Gup'},
          {title: '2° Gup', value: '2° Gup'},
          {title: '1° Gup', value: '1° Gup'},
          {title: '1er Dan', value: '1er Dan'},
          {title: '2do Dan', value: '2do Dan'},
          {title: '3er Dan', value: '3er Dan'},
          {title: '4to Dan', value: '4to Dan'},
          {title: '5to Dan', value: '5to Dan'},
          {title: '6to Dan', value: '6to Dan'},
          {title: '7mo Dan', value: '7mo Dan'},
          {title: '8vo Dan', value: '8vo Dan'},
          {title: '9no Dan', value: '9no Dan'},
        ],
        layout: 'dropdown',
      },
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
