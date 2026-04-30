import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {assist} from '@sanity/assist'

export default defineConfig({
  name: 'default',
  title: 'The Fit Home',

  projectId: 'cr5byafe',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    assist(),
  ],

  schema: {
    types: schemaTypes,
  },
})