import { groq } from "next-sanity";

export const bannerQuery = groq`
  *[_type == "banner"] | order(_updatedAt desc)[0]{
    text,
    location,
    eventDate
  }
`;

export const articlesQuery = groq`
  *[_type == "article"] | order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    author
  }
`;

export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0]{
    title,
    content,
    publishedAt,
    author
  }
`;
