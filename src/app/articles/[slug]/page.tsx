import { client } from '../../../sanity/lib/client';

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

  return (
    <article>
      <h1>{article.title}</h1>
      <p>Par {article.author} le {new Date(article.publishedAt).toLocaleDateString()}</p>
      <div>
        {article.content.map((block: any, index: number) => (
          <p key={index}>{block.children[0].text}</p>
        ))}
      </div>
    </article>
  );
}
