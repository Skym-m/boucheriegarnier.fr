"use client"; // Assurez-vous d'ajouter cette ligne

import { useEffect, useState } from 'react';
import { client } from '../../sanity/lib/client';
import Link from 'next/link';
import '@/app/styles/articles.css'; // Assurez-vous que le chemin est correct

// Définir l'interface pour le type Article
interface Article {
  title: string;
  slug: { current: string }; // Assurez-vous que le slug est un objet avec une propriété 'current'
  publishedAt: string;
  author: string;
}

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]); // Spécifiez le type pour useState

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
    <section className='articles'>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.slug.current}>
            <Link href={`/articles/${article.slug.current}`} className="article-link">
              <h2>{article.title}</h2>
              <p>Par {article.author}</p>
              <p>Publié le {new Date(article.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Articles;
