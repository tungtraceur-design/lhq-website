import { articles } from "@/lib/content";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default function ArticleSlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}
