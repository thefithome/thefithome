import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    // HERO
    defineField({
      name: 'heroTitle',
      title: 'H1',
      type: 'string',
    }),
    defineField({
      name: 'heroText',
      title: 'Texto principal',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagen de fondo',
      type: 'image',
      options: { hotspot: true },
    }),

    // VALUE PROPS
    defineField({
      name: 'valuePropsTitle',
      title: 'Título sección propuesta de valor (H2)',
      type: 'string',
    }),
    defineField({
      name: 'valueProps',
      title: 'Propuesta de valor',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    // INTRO + FACTORES
    defineField({
      name: 'introTitle',
      title: 'Título sección intro (H2)',
      type: 'string',
    }),
    defineField({
      name: 'introText',
      title: 'Texto introductorio',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'factors',
      title: 'Factores a tener en cuenta',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'H3', type: 'string' },
            {
              name: 'text',
              title: 'Texto',
              type: 'array',
              of: [{ type: 'block' }],
            },
          ],
        },
      ],
    }),

    // CATEGORÍAS
    defineField({
      name: 'categoriesTitle',
      title: 'Título categorías (H2)',
      type: 'string',
    }),
    defineField({
      name: 'categories',
      title: 'Categorías',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Nombre', type: 'string' },
            { name: 'icon', title: 'Emoji', type: 'string' },
            { name: 'slug', title: 'Slug', type: 'string' },
            { name: 'description', title: 'Descripción', type: 'string' },
          ],
        },
      ],
    }),

    // ERRORES
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

    // FAQ
    defineField({
      name: 'faqTitle',
      title: 'Título FAQ (H2)',
      type: 'string',
    }),
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