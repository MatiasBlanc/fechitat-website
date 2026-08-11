import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'escuela',
  title: 'Escuela',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre de la escuela',
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
      name: 'instructor',
      title: 'Instructor principal',
      type: 'string',
    }),
    defineField({
      name: 'foto',
      title: 'Foto del dojang',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'logo',
      title: 'Logo de la escuela',
      type: 'image',
    }),
    defineField({
      name: 'direccion',
      title: 'Dirección',
      type: 'string',
    }),
    defineField({
      name: 'ciudad',
      title: 'Ciudad',
      type: 'string',
    }),
    defineField({
      name: 'region',
      title: 'Región',
      type: 'string',
    }),

    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp',
      type: 'string',
    }),
    defineField({
      name: 'redes',
      title: 'Redes sociales',
      type: 'object',
      fields: [
        {name: 'instagram', title: 'Instagram', type: 'url'},
        {name: 'facebook', title: 'Facebook', type: 'url'},
        {name: 'youtube', title: 'YouTube', type: 'url'},
      ],
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
    }),
    defineField({
      name: 'activo',
      title: 'Escuela activa',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'nombre',
      subtitle: 'ciudad',
      media: 'logo',
    },
  },
})
