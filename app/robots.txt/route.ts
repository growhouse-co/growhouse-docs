export function GET() {
  const content = `# Growhouse Documentation
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://docs.growhouse.co/sitemap.xml

# AI Crawlers - explicitly allow all major AI bots
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Anthropic-AI
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: CCBot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: meta-externalagent
Allow: /

User-agent: Diffbot
Allow: /

User-agent: cohere-ai
Allow: /

# LLM-friendly content
# llms.txt: https://docs.growhouse.co/llms.txt
# llms-full.txt: https://docs.growhouse.co/llms-full.txt
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
