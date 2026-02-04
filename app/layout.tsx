import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.growhouse.co'),
  title: {
    template: '%s | Growhouse Docs',
    default: 'Growhouse Docs - Visual Canvas for Growth Teams',
  },
  description:
    'Official documentation for Growhouse - the visual canvas platform for growth teams. Learn about MCP tools, API integration, canvas features, and collaboration.',
  keywords: [
    'Growhouse',
    'documentation',
    'visual canvas',
    'growth teams',
    'MCP tools',
    'Model Context Protocol',
    'AI integration',
    'collaboration',
    'content creation',
  ],
  authors: [{ name: 'Growhouse', url: 'https://growhouse.co' }],
  creator: 'Growhouse',
  publisher: 'Growhouse',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Growhouse Docs - Visual Canvas for Growth Teams',
    description:
      'Official documentation for Growhouse - the visual canvas platform for growth teams. MCP tools, API reference, and guides.',
    url: 'https://docs.growhouse.co',
    siteName: 'Growhouse Docs',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Growhouse Docs',
    description: 'Documentation for Growhouse - Visual canvas for growth teams',
    creator: '@growhouse',
  },
  alternates: {
    canonical: 'https://docs.growhouse.co',
  },
  other: {
    'llms.txt': 'https://docs.growhouse.co/llms.txt',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://docs.growhouse.co" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
