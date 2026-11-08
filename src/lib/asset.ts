export function asset(src: string) {
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${src}`;
}
