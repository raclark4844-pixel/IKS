import { createFileRoute } from "@tanstack/react-router";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { KAYZ_URL, SPARKLE_URL, pageHead } from "@/lib/seo";

const faqs = [
  {
    q: "What is IK’s Charms & True Sparkle?",
    a: `IK’s Charms & True Sparkle is a Black-owned, woman-led, family studio in Cleveland, Ohio — the parent house of KayzCharmzz (${KAYZ_URL}) and True Sparkle (${SPARKLE_URL}).`,
  },
  {
    q: "What does KayzCharmzz sell?",
    a: `KayzCharmzz sells handmade jewelry, tumblers, soy candles, junk phone cases, beaded pens, and custom gifts. Custom orders welcome — a photo is optional. Shop handmade gifts at ${KAYZ_URL}. Original diamond painting kits live at True Sparkle.`,
  },
  {
    q: "What does True Sparkle sell?",
    a: `True Sparkle sells original diamond painting kits — glam, wildlife, heroes, holidays, and beginner art — plus custom photo-to-kit. Shop original diamond painting kits at ${SPARKLE_URL}.`,
  },
  {
    q: "Are the shops Black-owned?",
    a: "Yes. KayzCharmzz and True Sparkle are sister brands under IK’s Charms & True Sparkle, a Black-owned, woman-led, family studio in Cleveland, Ohio.",
  },
  {
    q: "Can I turn a photo into a diamond painting kit?",
    a: `Yes. Send a portrait, pet, wedding, or game-day photo through ${SPARKLE_URL}/custom. True Sparkle charts a layout, size, and drill type for you.`,
  },
  {
    q: "Can I order a custom KayzCharmzz piece?",
    a: `Yes. Custom is part of the KayzCharmzz shop — tumblers, jewelry, candles, junk cases, and pens made to order in Cleveland. Describe the vision at ${KAYZ_URL}/custom. A photo helps if you have one. It is not required.`,
  },
];

export const Route = createFileRoute("/faq")({
  head: () =>
    pageHead({
      title: "FAQ | IK’s Charms & True Sparkle Cleveland",
      description:
        "Who we are, what each sister shop sells, how to order a custom KayzCharmzz piece, and how to order a custom photo diamond painting kit from the Cleveland studio.",
      path: "/faq",
    }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }}
      />
      <p className="text-xs font-medium uppercase tracking-widest text-accent">FAQ</p>
      <h1 className="mt-4 font-display text-4xl text-fg sm:text-5xl">Questions, answered</h1>
      <p className="mt-4 text-muted">
        Short answers. For a catalog, visit the shop that owns the product.
      </p>
      <Accordion.Root type="single" collapsible className="mt-10 divide-y divide-fg/10 border-y border-fg/10">
        {faqs.map((item) => (
          <Accordion.Item key={item.q} value={item.q}>
            <Accordion.Header>
              <Accordion.Trigger className="group flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left font-medium text-fg">
                {item.q}
                <ChevronDown className="size-4 shrink-0 text-muted transition-transform duration-150 group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden pb-5 text-base leading-relaxed text-muted">
              {item.a}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </main>
  );
}
