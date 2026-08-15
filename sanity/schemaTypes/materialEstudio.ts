import {defineField, defineType} from 'sanity'

/**
 * Material de estudio: contenido técnico de referencia (guías por grado,
 * terminología, reglamentos). Se diferencia del blog en que no es editorial:
 * no caduca, se ordena manualmente y puede incluir archivos descargables.
 */
export default defineType({
  name: 'materialEstudio',
  title: 'Material de estudio',
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
      name: 'tipo',
      title: 'Tipo de recurso',
      type: 'string',
      options: {
        list: [
          {title: 'Fundamentos', value: 'fundamentos'},
          {title: 'Vocabulario', value: 'vocabulario'},
          {title: 'Técnica', value: 'tecnica'},
          {title: 'Grados', value: 'grados'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción breve',
      type: 'text',
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: 'grado',
      title: 'Grado recomendado',
      type: 'string',
      options: {
        list: [
          {title: 'Todos los grados', value: 'general'},
          {title: 'Blanco', value: 'blanco'},
          {title: 'Amarillo', value: 'amarillo'},
          {title: 'Verde', value: 'verde'},
          {title: 'Azul', value: 'azul'},
          {title: 'Rojo', value: 'rojo'},
          {title: 'Negro', value: 'negro'},
        ],
      },
      initialValue: 'general',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'archivo',
      title: 'Archivo descargable (PDF)',
      description: 'Opcional. Si se sube un archivo, se muestra botón de descarga.',
      type: 'file',
      options: {accept: '.pdf'},
    }),
    defineField({
      name: 'contenido',
      title: 'Contenido',
      description: 'Opcional. Texto enriquecido con Portable Text.',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    }),
    defineField({
      name: 'recursos',
      title: 'Lista de contenidos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'rotulo', title: 'Rótulo', type: 'string'},
            {name: 'items', title: 'Ítems', type: 'array', of: [{type: 'string'}]},
          ],
        },
      ],
    }),
    defineField({
      name: 'orden',
      title: 'Orden',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'activo',
      title: 'Activo',
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
      title: 'titulo',
      subtitle: 'tipo',
    },
    prepare({title, subtitle}) {
      const etiquetas: Record<string, string> = {
        fundamentos: 'Fundamentos',
        vocabulario: 'Vocabulario',
        tecnica: 'Técnica',
        grados: 'Grados',
      }
      return {
        title,
        subtitle: etiquetas[subtitle] ?? subtitle ?? '',
      }
    },
  },
})