import {DocumentPdfIcon} from '@sanity/icons/DocumentPdf'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'documentoOficial',
  title: 'Documento oficial',
  icon: DocumentPdfIcon,
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
      title: 'Tipo de documento',
      type: 'string',
      options: {
        list: [
          {title: 'Protocolo', value: 'protocolo'},
          {title: 'Reglamento', value: 'reglamento'},
          {title: 'Estatuto', value: 'estatuto'},
          {title: 'Política', value: 'politica'},
          {title: 'Formulario', value: 'formulario'},
          {title: 'Comunicado', value: 'comunicado'},
          {title: 'Otro', value: 'otro'},
        ],
      },
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
      name: 'archivo',
      title: 'Archivo PDF',
      type: 'file',
      options: {accept: '.pdf,application/pdf'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'version',
      title: 'Versión',
      description: 'Ejemplo: 1.0, 2025 o Edición 2025.',
      type: 'string',
    }),
    defineField({
      name: 'fechaPublicacion',
      title: 'Fecha de publicación',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fechaVigencia',
      title: 'Fecha de entrada en vigencia',
      type: 'date',
    }),
    defineField({
      name: 'estado',
      title: 'Estado',
      type: 'string',
      options: {
        list: [
          {title: 'Vigente', value: 'vigente'},
          {title: 'Archivado', value: 'archivado'},
        ],
        layout: 'radio',
      },
      initialValue: 'vigente',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'comision',
      title: 'Comisión responsable',
      type: 'reference',
      to: [{type: 'comision'}],
    }),
    defineField({
      name: 'orden',
      title: 'Orden',
      type: 'number',
      initialValue: 0,
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
      title: 'Más recientes',
      name: 'fechaDesc',
      by: [{field: 'fechaPublicacion', direction: 'desc'}],
    },
    {
      title: 'Orden manual',
      name: 'ordenAsc',
      by: [{field: 'orden', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'titulo',
      tipo: 'tipo',
      estado: 'estado',
    },
    prepare({title, tipo, estado}) {
      const etiquetas: Record<string, string> = {
        protocolo: 'Protocolo',
        reglamento: 'Reglamento',
        estatuto: 'Estatuto',
        politica: 'Política',
        formulario: 'Formulario',
        comunicado: 'Comunicado',
        otro: 'Otro',
      }

      return {
        title,
        subtitle: `${etiquetas[tipo] ?? tipo ?? 'Documento'} · ${estado === 'archivado' ? 'Archivado' : 'Vigente'}`,
      }
    },
  },
})
