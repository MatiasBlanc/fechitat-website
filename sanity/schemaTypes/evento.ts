import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'evento',
  title: 'Evento',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'titulo'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fecha',
      title: 'Fecha del evento',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fechaFin',
      title: 'Fecha de fin (si es multi-día)',
      type: 'datetime',
    }),
    defineField({
      name: 'tipo',
      title: 'Tipo de evento',
      type: 'string',
      options: {
        list: [
          {title: 'Competencia', value: 'competencia'},
          {title: 'Seminario', value: 'seminario'},
          {title: 'Examen', value: 'examen'},
          {title: 'Exhibición', value: 'exhibicion'},
          {title: 'Otro', value: 'otro'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'estado',
      title: 'Estado',
      type: 'string',
      options: {
        list: [
          {title: 'Próximo', value: 'proximo'},
          {title: 'En curso', value: 'en_curso'},
          {title: 'Finalizado', value: 'finalizado'},
          {title: 'Cancelado', value: 'cancelado'},
        ],
      },
      initialValue: 'proximo',
    }),
    defineField({
      name: 'lugar',
      title: 'Lugar / Venue',
      type: 'string',
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
      name: 'flyer',
      title: 'Flyer / Imagen principal',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'galeria',
      title: 'Galería de fotos del evento',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
    }),
    defineField({
      name: 'categorias',
      title: 'Categorías',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Formas (Tul)', value: 'formas'},
          {title: 'Combate', value: 'combate'},
          {title: 'Rotura de habilidad', value: 'rotura_habilidad'},
          {title: 'Rotura de potencia', value: 'rotura_potencia'},
          {title: 'Defensa personal', value: 'defensa_personal'},
          {title: 'Infantil', value: 'infantil'},
          {title: 'Cadete', value: 'cadete'},
          {title: 'Juvenil', value: 'juvenil'},
          {title: 'Adulto', value: 'adulto'},
          {title: 'Senior', value: 'senior'},
        ],
      },
    }),
    defineField({
      name: 'participantes',
      title: 'Número de participantes',
      type: 'number',
    }),
    defineField({
      name: 'resultados',
      title: 'Resultados',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'categoria', title: 'Categoría', type: 'string'},
            {name: 'primerLugar', title: '1er Lugar', type: 'string'},
            {name: 'segundoLugar', title: '2do Lugar', type: 'string'},
            {name: 'tercerLugar', title: '3er Lugar', type: 'string'},
          ],
        },
      ],
    }),
    defineField({
      name: 'destacado',
      title: 'Evento destacado',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'fecha',
      media: 'flyer',
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString('es-CL') : '',
        media,
      }
    },
  },
})
