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
      name: 'sensei',
      title: 'Sensei / Instructor principal',
      type: 'string',
    }),
    defineField({
      name: 'foto',
      title: 'Foto del dojo',
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
      name: 'telefono',
      title: 'Teléfono',
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
      name: 'estilos',
      title: 'Estilos que enseñan',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Karate', value: 'karate'},
          {title: 'Kobudo', value: 'kobudo'},
          {title: 'Jiu Jitsu', value: 'jiu_jitsu'},
          {title: 'Kickboxing', value: 'kickboxing'},
          {title: 'Otro', value: 'otro'},
        ],
      },
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
