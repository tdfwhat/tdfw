import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const singletonListItem = (
  S: StructureBuilder,
  typeName: string,
  title?: string
) =>
  S.listItem()
    .title(title || typeName)
    .id(typeName)
    .child(S.document().schemaType(typeName).documentId(typeName))

const singletonActions = new Set(["publish", "discardChanges", "restore"])
const singletonTypes = new Set(["main"])

const structure = (S: StructureBuilder) => 
  S.list()
    .id("conent")
    .title("Content")
    .items([
      singletonListItem(S, "main", "Main")
    ])

export default defineConfig({
  name: 'default',
  title: 'tdfw',

  projectId: 'o8bcoztu',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: structure
    }), 
    visionTool()
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
