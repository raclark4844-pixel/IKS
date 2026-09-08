import { useEffect, useState } from "react";
import { CircleHelp, Gem, House, Landmark, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { href: "/#main", match: ["", "#", "#main"], label: "Home", ariaLabel: "Home" },
  { href: "/#kayzcharmzz", match: ["#kayzcharmzz"], label: "Kayz", ariaLabel: "KayzCharmzz" },
  { href: "/#true-sparkle", match: ["#true-sparkle"], label: "Sparkle", ariaLabel: "True Sparkle" },
  { href: "/#studio", match: ["#studio"], label: "Studio", ariaLabel: "Studio" },
  { href: "/#faq", match: ["#faq"], label: "FAQ", ariaLabel: "FAQ" },
] as const;

const icons = {
  Home: House,
  Kayz: Sparkles,
  Sparkle: Gem,
  Studio: Landmark,
  FAQ: CircleHelp,
} as const;

function usePageHash() {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const sync = () => setHash(window.location.hash || "");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return hash;
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-fg/10 bg-bg">
      <div className="mx-auto flex h-14 max-w-6xl items-center px-4 sm:h-16 sm:px-6">
        <a href="/#main" className="min-w-0">
          <p className="truncate font-display text-lg font-medium leading-tight tracking-tight text-fg">
            IK’s Charms & True Sparkle
          </p>
          <p className="truncate text-xs tracking-wide text-muted">
            KayzCharmzz · True Sparkle · Cleveland
          </p>
        </a>
      </div>
    </header>
  );
}

export function BottomNav() {
  const hash = usePageHash();

  return (
    <nav
      aria-label="Primary"
      className="bottom-nav fixed inset-x-0 bottom-0 z-40 border-t border-fg/10 bg-bg"
    >
      <ul className="mx-auto grid h-14 max-w-6xl grid-cols-5">
        {tabs.map((tab) => {
          const active = (tab.match as readonly string[]).includes(hash);
          const Icon = icons[tab.label];
          return (
            <li key={tab.href}>
              <a
                href={tab.href}
                aria-label={tab.ariaLabel}
                aria-current={active ? "page" : undefined}
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
