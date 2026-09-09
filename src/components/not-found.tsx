import { KAYZ_URL, SPARKLE_URL } from "@/lib/seo";

export function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-xs font-medium uppercase tracking-widest text-accent">404</p>
      <h1 className="mt-3 font-display text-4xl text-fg">This page isn’t here</h1>
      <p className="mt-4 text-muted">
        The parent studio introduces two shops. Try home, or go straight to a catalog.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a href="/" className="rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-fg">
          Back home
        </a>
        <a href={KAYZ_URL} className="rounded-full border border-fg/15 px-5 py-3 text-sm text-fg">
          KayzCharmzz handmade gifts
        </a>
        <a href={SPARKLE_URL} className="rounded-full border border-fg/15 px-5 py-3 text-sm text-fg">
          True Sparkle diamond painting kits
        </a>
        <a href="/contact" className="rounded-full border border-fg/15 px-5 py-3 text-sm text-fg">
          Contact
        </a>
      </div>
    </main>
  );
}
