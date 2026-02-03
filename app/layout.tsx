import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Growhouse Docs',
    default: 'Growhouse Docs',
  },
  description: 'Documentation for Growhouse - Visual canvas for growth teams',
  openGraph: {
    title: 'Growhouse Docs',
    description: 'Documentation for Growhouse - Visual canvas for growth teams',
    url: 'https://docs.growhouse.co',
    siteName: 'Growhouse Docs',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
