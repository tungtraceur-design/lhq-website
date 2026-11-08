import { works } from "@/lib/content";

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export default function WorkSlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}
