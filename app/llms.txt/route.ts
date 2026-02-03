import { source } from '@/lib/source';

export function GET() {
  const pages = source.getPages();

  const content = `# Growhouse Documentation

> Visual canvas platform for growth teams. Create, collaborate, and share content workflows.

## Pages

${pages
  .map((page) => `- [${page.data.title}](https://docs.growhouse.co${page.url}): ${page.data.description || 'Documentation page'}`)
  .join('\n')}

## Links

- [Growhouse App](https://app.growhouse.co)
- [Marketing Site](https://growhouse.co)
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
