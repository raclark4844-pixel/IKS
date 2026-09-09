import { CircleHelp, Gem, House, Landmark, Mail, Sparkles } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { KAYZ_URL, SPARKLE_URL } from "@/lib/seo";

const tabs = [
  { href: "/", label: "Home", ariaLabel: "Home", match: (p: string) => p === "/" },
  { href: "/about", label: "About", ariaLabel: "About", match: (p: string) => p.startsWith("/about") },
  { href: KAYZ_URL, label: "Kayz", ariaLabel: "KayzCharmzz handmade gifts", match: () => false, external: true },
  { href: SPARKLE_URL, label: "Sparkle", ariaLabel: "True Sparkle diamond painting kits", match: () => false, external: true },
  { href: "/faq", label: "FAQ", ariaLabel: "FAQ", match: (p: string) => p.startsWith("/faq") },
  { href: "/contact", label: "Contact", ariaLabel: "Contact", match: (p: string) => p.startsWith("/contact") },
] as const;

const icons = {
  Home: House,
  About: Landmark,
  Kayz: Sparkles,
  Sparkle: Gem,
  FAQ: CircleHelp,
  Contact: Mail,
} as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-fg/10 bg-bg">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <a href="/" className="min-w-0">
          <p className="truncate font-display text-lg font-medium leading-tight tracking-tight text-fg">
            IK’s Charms & True Sparkle
          </p>
          <p className="truncate text-xs tracking-wide text-muted">
            KayzCharmzz · True Sparkle · Cleveland
          </p>
        </a>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          <a href="/about" className="text-xs uppercase tracking-widest text-muted hover:text-fg">
            About
          </a>
          <a href={KAYZ_URL} className="text-xs uppercase tracking-widest text-muted hover:text-fg">
            KayzCharmzz
          </a>
          <a href={SPARKLE_URL} className="text-xs uppercase tracking-widest text-muted hover:text-fg">
            True Sparkle
          </a>
          <a href="/faq" className="text-xs uppercase tracking-widest text-muted hover:text-fg">
            FAQ
          </a>
          <a href="/contact" className="text-xs uppercase tracking-widest text-muted hover:text-fg">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav
      aria-label="Primary"
      className="bottom-nav fixed inset-x-0 bottom-0 z-40 border-t border-fg/10 bg-bg"
    >
      <ul className="mx-auto grid h-14 max-w-6xl grid-cols-6">
        {tabs.map((tab) => {
          const active = tab.match(pathname);
          const Icon = icons[tab.label];
          const external = "external" in tab && tab.external;
          return (
            <li key={tab.href}>
              <a
                href={tab.href}
                aria-label={tab.ariaLabel}
                aria-current={active ? "page" : undefined}
                rel={external ? "noopener" : undefined}
                className={cn(
                  "flex h-14 min-h-11 flex-col items-center justify-center gap-0.5 px-1 text-center text-xs tracking-wide transition-colors duration-150",
                  active ? "text-accent" : "text-muted hover:text-fg",
                )}
              >
                <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
                <span>{tab.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
