import { source } from '@/lib/source';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  const pages = source.getPages();

  let content = `# Growhouse Documentation - Full Content

> This file contains the complete documentation for Growhouse, optimized for LLM consumption.

`;

  for (const page of pages) {
    const filePath = path.join(process.cwd(), 'content/docs', `${page.file.path}`);

    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      // Remove frontmatter
      const contentWithoutFrontmatter = fileContent.replace(/^---[\s\S]*?---\n/, '');

      content += `## ${page.data.title}\n\n`;
      content += `URL: https://docs.growhouse.co${page.url}\n\n`;
      content += contentWithoutFrontmatter;
      content += '\n\n---\n\n';
    } catch {
      content += `## ${page.data.title}\n\n`;
      content += `URL: https://docs.growhouse.co${page.url}\n\n`;
      content += `${page.data.description || 'No description available.'}\n\n---\n\n`;
    }
  }

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
