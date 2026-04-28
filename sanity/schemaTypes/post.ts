import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',

  fields: [

    // SEO BÁSICO
    defineField({
      name: 'seoTitle',
      title: 'SEO Title (<title>)',
      type: 'string',
      description: 'Título para Google (50-60 caracteres)',
    }),
    defineField({
      name: 'title',
      title: 'H1',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'description',
      title: 'Meta description',
      type: 'string',
    }),

    // 🔹 TIPO DE CONTENIDO
    defineField({
      name: 'type',
      title: 'Tipo de contenido',
      type: 'string',
      options: {
        list: [
          { title: 'Categoría', value: 'category' },
          { title: 'Subcategoría', value: 'subcategory' },
          { title: 'Guía / Comparativa', value: 'guide' },
        ],
        layout: 'radio',
      },
    }),

    // 🔹 JERARQUÍA
    defineField({
      name: 'parent',
      title: 'Página padre',
      type: 'reference',
      to: [{ type: 'post' }],
    }),

    // 🔹 CONTENIDO PRINCIPAL
    defineField({
      name: 'content',
      title: 'Contenido',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' }
      ],
    }),

    // 🔹 CARDS (ENLAZADO INTERNO)
    defineField({
      name: 'featuredItems',
      title: 'Elementos clave (cards)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Título', type: 'string' },
            { name: 'description', title: 'Descripción', type: 'string' },
            {
              name: 'link',
              title: 'Enlace',
              type: 'reference',
              to: [{ type: 'post' }],
            },
          ],
        },
      ],
    }),

    // 🔹 FAQ
    defineField({
      name: 'faq',
      title: 'Preguntas frecuentes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Pregunta', type: 'string' },
            {
              name: 'answer',
              title: 'Respuesta',
              type: 'array',
              of: [{ type: 'block' }],
            },
          ],
        },
      ],
    }),

  ],
})