import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';

/**
 * Render markdown source to safe-ish HTML.
 *
 * We intentionally do NOT enable rehype-raw here, so raw HTML embedded in
 * markdown is not interpreted as live HTML. This keeps the first-pass
 * renderer conservative for public paste content.
 */
export async function renderMarkdown(source: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight, { detect: true })
    .use(rehypeStringify)
    .process(source);

  return String(file);
}
