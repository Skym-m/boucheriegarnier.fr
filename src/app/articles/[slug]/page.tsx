import { PortableText, PortableTextComponents } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import { notFound } from "next/navigation";
import "@/app/styles/articles.css";
import { formatFrenchDate } from "@/lib/date";
import { client } from "@/sanity/lib/client";
import { articleBySlugQuery } from "@/sanity/lib/queries";

interface Article {
  title: string;
  content: PortableTextBlock[];
  publishedAt?: string;
  author?: string;
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

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
    link: ({ children, value }) => {
      const href = (value as { href?: string } | undefined)?.href;
      const linkProps =
        href && href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {};

      return (
        <a href={href ?? "#"} className="custom-link" {...linkProps}>
          {children}
        </a>
      );
    },
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

async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    return await client.fetch<Article | null>(
      articleBySlugQuery,
      { slug },
      { next: { revalidate: 60 } }
    );
  } catch (error) {
    console.error("Unable to fetch article", error);
    return null;
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <article>
      <h1>{article.title}</h1>
      <p>
        Par {article.author ?? "Maison Garnier"} le {formatFrenchDate(article.publishedAt)}
      </p>

      <div className="article-content">
        <PortableText value={article.content ?? []} components={customComponents} />
      </div>
    </article>
  );
}
