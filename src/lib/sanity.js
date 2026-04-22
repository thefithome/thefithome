import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'cr5byafe',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})