# Growhouse Documentation

Official documentation for [Growhouse](https://growhouse.co) - the visual canvas platform for growth teams.

**Live site:** [docs.growhouse.co](https://docs.growhouse.co)

## Tech Stack

- [Fumadocs](https://fumadocs.dev) - Documentation framework
- [Next.js](https://nextjs.org) - React framework
- [Tailwind CSS](https://tailwindcss.com) - Styling

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
content/docs/           # Documentation pages (MDX)
├── index.mdx          # Homepage
├── getting-started.mdx
├── canvas/            # Canvas guides
├── mcp-tools/         # MCP documentation
├── api/               # API reference
└── releases/          # Changelog

app/                   # Next.js app
lib/                   # Utilities
public/                # Static assets
```

## Adding Documentation

1. Create a new `.mdx` file in `content/docs/`
2. Add frontmatter with `title` and `description`
3. Update `meta.json` if needed for sidebar order
4. Commit and push - Vercel auto-deploys

## AI Features

This site is AI-ready:

- `/llms.txt` - Documentation index for LLMs
- `/llms-full.txt` - Full content for LLM context
- Search API for MCP integration

## Deployment

Deployed automatically via Vercel on push to `main`.

## License

MIT
