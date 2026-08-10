import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'competidor',
  title: 'Competidor',
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
      title: 'Foto',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'grado',
      title: 'Grado / Cinturón',
      type: 'string',
      options: {
        list: [
          {title: 'Cinturón Blanco', value: 'blanco'},
          {title: 'Cinturón Amarillo', value: 'amarillo'},
          {title: 'Cinturón Naranja', value: 'naranja'},
          {title: 'Cinturón Verde', value: 'verde'},
          {title: 'Cinturón Azul', value: 'azul'},
          {title: 'Cinturón Marrón', value: 'marron'},
          {title: 'Cinturón Negro 1° Dan', value: 'negro_1'},
          {title: 'Cinturón Negro 2° Dan', value: 'negro_2'},
          {title: 'Cinturón Negro 3° Dan', value: 'negro_3'},
          {title: 'Cinturón Negro 4° Dan', value: 'negro_4'},
          {title: 'Cinturón Negro 5° Dan', value: 'negro_5'},
          {title: 'Cinturón Negro 6° Dan', value: 'negro_6'},
          {title: 'Cinturón Negro 7° Dan', value: 'negro_7'},
          {title: 'Cinturón Negro 8° Dan', value: 'negro_8'},
          {title: 'Cinturón Negro 9° Dan', value: 'negro_9'},
          {title: 'Cinturón Negro 10° Dan', value: 'negro_10'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'esCinturonNegro',
      title: 'Es cinturón negro',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'escuela',
      title: 'Escuela',
      type: 'reference',
      to: [{type: 'escuela'}],
    }),
    defineField({
      name: 'peso',
      title: 'Categoría de peso',
      type: 'string',
    }),
    defineField({
      name: 'edad',
      title: 'Edad',
      type: 'number',
    }),
    defineField({
      name: 'activo',
      title: 'Competidor activo',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'logros',
      title: 'Logros / Palmarés',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'anio', title: 'Año', type: 'number'},
            {name: 'competencia', title: 'Competencia', type: 'string'},
            {name: 'posicion', title: 'Posición', type: 'string'},
            {name: 'categoria', title: 'Categoría', type: 'string'},
          ],
        },
      ],
    }),
    defineField({
      name: 'bio',
      title: 'Biografía',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'nombre',
      subtitle: 'grado',
      media: 'foto',
    },
  },
})
