import { type SchemaTypeDefinition } from 'sanity'
import { banner } from './banner'
import { article } from './article'

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [banner, article],
}
