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
      title: 'Instructor',
      type: 'string',
    }),
    defineField({
      name: 'foto',
      title: 'Foto del Dojang',
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
      name: 'ubicacion',
      title: 'Ubicación (mapa)',
      description:
        'Opcional. Si se completa, la escuela aparece como marcador en el mapa\ninteractivo con sus coordenadas exactas. Si queda vacío, se geocodifica\nla ciudad automáticamente al momento de mostrar el mapa.',
      type: 'object',
      fields: [
        {name: 'lat', title: 'Latitud', type: 'number', validation: (R) => R.min(-90).max(90)},
        {name: 'lng', title: 'Longitud', type: 'number', validation: (R) => R.min(-180).max(180)},
      ],
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
