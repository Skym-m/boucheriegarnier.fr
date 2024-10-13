import { type SchemaTypeDefinition } from 'sanity'
import { banner } from './banner' // Import du schéma de la bannière
import { article } from './article' // Import du schéma des articles

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [banner, article], // Ajout des schémas de la bannière et des articles
}
