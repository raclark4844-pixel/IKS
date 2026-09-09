import { KAYZ_URL, NAP_LINE, SITE_NAME, SPARKLE_URL, STUDIO_ADDRESS_LINES, STUDIO_EMAIL, STUDIO_PHONE, STUDIO_PHONE_TEL } from "@/lib/seo";

export function NapStrip() {
  return (
    <p className="border-t border-fg/10 py-5 text-center text-xs leading-relaxed text-muted">
      {NAP_LINE}
    </p>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-fg/10 bg-bg">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl text-fg">{SITE_NAME}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Black-owned, woman-led, family studio in Cleveland, Ohio — the house
            brand for KayzCharmzz and True Sparkle.
          </p>
          <p className="mt-4 text-sm text-fg">
            <a href={`mailto:${STUDIO_EMAIL}`}>{STUDIO_EMAIL}</a>
            {" · "}
            <a href={`tel:${STUDIO_PHONE_TEL}`}>{STUDIO_PHONE}</a>
          </p>
          <p className="mt-2 text-sm text-muted">
            {STUDIO_ADDRESS_LINES[0]}
            <br />
            {STUDIO_ADDRESS_LINES[1]}
            <br />
            {STUDIO_ADDRESS_LINES[2]}
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-accent">This house</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="/about" className="text-fg hover:underline">About the studio</a></li>
            <li><a href="/faq" className="text-fg hover:underline">FAQ</a></li>
            <li><a href="/contact" className="text-fg hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-accent">The shops</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={KAYZ_URL} className="text-fg hover:underline">
                Handmade tumblers, candles & charms at KayzCharmzz
              </a>
            </li>
            <li>
              <a href={SPARKLE_URL} className="text-fg hover:underline">
                Original diamond painting kits at True Sparkle
              </a>
            </li>
          </ul>
        </div>
      </div>
      <NapStrip />
    </footer>
  );
}
