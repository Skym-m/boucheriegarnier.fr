import Link from "next/link";
import "@/app/styles/articles.css";
import { formatFrenchDate } from "@/lib/date";
import { client } from "@/sanity/lib/client";
import { articlesQuery } from "@/sanity/lib/queries";

interface Article {
  _id: string;
  title: string;
  slug?: { current?: string };
  publishedAt?: string;
  author?: string;
}

function hasSlug(article: Article): article is Article & { slug: { current: string } } {
  return typeof article.slug?.current === "string" && article.slug.current.length > 0;
}

async function getArticles(): Promise<Article[]> {
  try {
    const articles = await client.fetch<Article[]>(articlesQuery, {}, { next: { revalidate: 60 } });
    return Array.isArray(articles) ? articles : [];
  } catch (error) {
    console.error("Unable to fetch articles", error);
    return [];
  }
}

export default async function ArticlesPage() {
  const articles = (await getArticles()).filter(hasSlug);

  return (
    <section id="articles">
      <div className="articles">
        <h1>Actualités</h1>
        {articles.length > 0 ? (
          <ul>
            {articles.map((article) => (
              <li key={article._id}>
                <Link href={`/articles/${article.slug.current}`} className="article-link">
                  <h2>{article.title}</h2>
                  <h4>Par {article.author ?? "Maison Garnier"}</h4>
                  <h4>Publié le {formatFrenchDate(article.publishedAt)}</h4>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <h4>Aucune actualité n&apos;est disponible pour le moment.</h4>
        )}
      </div>
    </section>
  );
}
