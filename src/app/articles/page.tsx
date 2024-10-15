"use client";

import { useEffect, useState } from 'react';
import { client } from '../../sanity/lib/client';
import Link from 'next/link';
import '@/app/styles/articles.css';

// Définir l'interface pour le type Article
interface Article {
	title: string;
	slug: { current: string };
	publishedAt: string;
	author: string;
}

const Articles = () => {
	const [articles, setArticles] = useState<Article[]>([]);

	useEffect(() => {
		const fetchArticles = async () => {
			const query = `*[_type == "article"]{title, slug, publishedAt, author}`;
			const data = await client.fetch(query);
			setArticles(data);
		};

		fetchArticles();
	}, []);

	if (!articles.length) return <p>Chargement des articles...</p>; // Message de chargement si aucun article n'est chargé

	return (
		<section id='articles'>
			<div className='articles'>
			<h1>Articles</h1>
				<ul>
					{articles.map((article) => (
						<li key={article.slug.current}>
							<Link href={`/articles/${article.slug.current}`} className="article-link">
								<h2>{article.title}</h2>
								<h4>Par {article.author}</h4>
								<h4>Publié le {new Date(article.publishedAt).toLocaleDateString()}</h4>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default Articles;
