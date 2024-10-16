import { defineType } from 'sanity'

export const article = defineType({
	name: 'article',
	title: 'Article',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			description: 'Titre de l\'article',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			description: 'Slug pour l\'URL de l\'article',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [{ type: 'block' }],
			description: 'Contenu de l\'article',
		},
		{
			name: 'publishedAt',
			title: 'Published At',
			type: 'datetime',
			description: 'Date de publication',
		},
		{
			name: 'author',
			title: 'Author',
			type: 'string',
			description: 'Auteur de l\'article',
		}
	]
})
