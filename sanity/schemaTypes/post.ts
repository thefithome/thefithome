import {defineType, defineField} from 'sanity'

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
  description: 'Título para Google (recomendado: 50-60 caracteres)',
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

    // TIPO DE CONTENIDO (CLAVE)
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

    // JERARQUÍA (MUY IMPORTANTE)
    defineField({
      name: 'parent',
      title: 'Página padre',
      type: 'reference',
      to: [{ type: 'post' }],
    }),

    // HERO / INTRO
    defineField({
      name: 'intro',
      title: 'Texto introductorio',
      type: 'array',
      of: [{ type: 'block' }],
    }),

    // BLOQUE: PRODUCTOS CLAVE (GRID CLICABLE)
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

    // BLOQUE: GUÍA (H2 + TEXTO)
    defineField({
      name: 'guideTitle',
      title: 'Título guía (H2)',
      type: 'string',
    }),
    defineField({
      name: 'guideContent',
      title: 'Contenido guía',
      type: 'array',
      of: [{ type: 'block' }],
    }),

    // BLOQUE: ELEMENTOS DETALLADOS (H3)
    defineField({
      name: 'sections',
      title: 'Secciones (H3)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Título', type: 'string' },
            {
              name: 'content',
              title: 'Texto',
              type: 'array',
              of: [{ type: 'block' }],
            },
            {
              name: 'image',
              title: 'Imagen',
              type: 'image',
              options: { hotspot: true },
            },
          ],
        },
      ],
    }),

    // ERRORES (SEO)
    defineField({
      name: 'mistakesTitle',
      title: 'Título errores (H2)',
      type: 'string',
    }),
    defineField({
      name: 'mistakes',
      title: 'Errores comunes',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    // FAQ (REUTILIZABLE)
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