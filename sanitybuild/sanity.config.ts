import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'


export default defineConfig({
  name: 'default',
  title: 'fuchsia-wombat',

  projectId: 'ev0t89bl',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), ...( [])],

  schema: {
    types: schemaTypes,
  },
})

