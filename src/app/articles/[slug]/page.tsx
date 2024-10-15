import { client } from '../../../sanity/lib/client';
import { PortableText } from '@portabletext/react'; 
import '@/app/styles/articles.css';

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const query = `*[_type == "article" && slug.current == $slug][0]{
    title,
    content,
    publishedAt,
    author
  }`;
  
  const article = await client.fetch(query, { slug: params.slug });

  if (!article) {
    return <p>Article introuvable</p>;
  }

  // Configuration des composants personnalisés pour le rendu du contenu
  const customComponents = {
    block: {
      h1: ({ children }: any) => <h1 className="custom-h1">{children}</h1>,
      h2: ({ children }: any) => <h2 className="custom-h2">{children}</h2>,
      h3: ({ children }: any) => <h3 className="custom-h3">{children}</h3>,
      h4: ({ children }: any) => <h4 className="custom-h4">{children}</h4>,
      h5: ({ children }: any) => <h5 className="custom-h5">{children}</h5>,
      normal: ({ children }: any) => <p className="custom-paragraph">{children}</p>,
    },
    marks: {
      strong: ({ children }: any) => <strong className="custom-strong">{children}</strong>,
      link: ({ children, value }: any) => (
        <a href={value.href} className="custom-link">
          {children}
        </a>
      ),
    },
    list: {
      bullet: ({ children }: any) => <ul className="custom-ul">{children}</ul>,
      number: ({ children }: any) => <ol className="custom-ol">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }: any) => <li className="custom-li">{children}</li>,
      number: ({ children }: any) => <li className="custom-li">{children}</li>,
    },
  };

  return (
    <article>
      <h1>{article.title}</h1>
      <p>
        Par {article.author} le {new Date(article.publishedAt).toLocaleDateString()}
      </p>

      {/* Rendu du contenu de l'article avec PortableText */}
      <div className="article-content">
        <PortableText value={article.content} components={customComponents} />
      </div>
    </article>
  );
}
