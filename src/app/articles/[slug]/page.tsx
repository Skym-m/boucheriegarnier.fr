import { client } from '../../../sanity/lib/client';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';
import '@/app/styles/articles.css';

interface Article {
  title: string;
  content: PortableTextBlock[];
  publishedAt: string;
  author: string;
}

// Définir le type de Params en tant que Promise
type Params = Promise<{ slug: string }>;

export default async function ArticlePage({ params }: { params: Params }) {
  // Attente de la résolution de params avant d'utiliser slug
  const { slug } = await params;

  const query = `*[_type == "article" && slug.current == $slug][0]{
    title,
    content,
    publishedAt,
    author
  }`;

  // Fetch l'article avec le slug
  const article: Article | null = await client.fetch(query, { slug });

  if (!article) {
    return <p>Actualité introuvable</p>;
  }

  // Configuration des composants personnalisés pour le rendu du contenu
  const customComponents: PortableTextComponents = {
    block: {
      h1: ({ children }) => <h1 className="custom-h1">{children}</h1>,
      h2: ({ children }) => <h2 className="custom-h2">{children}</h2>,
      h3: ({ children }) => <h3 className="custom-h3">{children}</h3>,
      h4: ({ children }) => <h4 className="custom-h4">{children}</h4>,
      h5: ({ children }) => <h5 className="custom-h5">{children}</h5>,
      normal: ({ children }) => <p className="custom-paragraph">{children}</p>,
    },
    marks: {
      strong: ({ children }) => <strong className="custom-strong">{children}</strong>,
      link: ({ children, value }) => (
        <a href={value.href} className="custom-link">
          {children}
        </a>
      ),
    },
    list: {
      bullet: ({ children }) => <ul className="custom-ul">{children}</ul>,
      number: ({ children }) => <ol className="custom-ol">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li className="custom-li">{children}</li>,
      number: ({ children }) => <li className="custom-li">{children}</li>,
    },
  };

  return (
    <article>
      <h1>{article.title}</h1>
      <p>
        Par {article.author} le {new Date(article.publishedAt).toLocaleDateString()}
      </p>

      {/* Rendu du contenu de l'article */}
      <div className="article-content">
        <PortableText value={article.content} components={customComponents} />
      </div>
    </article>
  );
}
