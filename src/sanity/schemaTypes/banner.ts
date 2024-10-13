import { defineType } from 'sanity'

export const banner = defineType({
  name: 'banner',
  title: 'Bannière',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Texte',
      type: 'text',
      description: 'Texte de la bannière',
    },
    {
      name: 'eventDate',
      title: 'Date',
      type: 'datetime',
      description: 'Date et heure de l\'événement',
    },
    {
      name: 'location',
      title: 'Lieu',
      type: 'string',
      description: 'Lieu de l\'événement',
    }
  ],
})
