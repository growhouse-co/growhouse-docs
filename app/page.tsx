import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Growhouse Documentation</h1>
      <p className="text-muted-foreground text-lg mb-8 max-w-xl">
        Everything you need to build with Growhouse - the visual canvas platform for growth teams.
      </p>
      <Link
        href="/docs"
        className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
      >
        Get Started
      </Link>
    </main>
  );
}
