import { createFileRoute } from "@tanstack/react-router";
import { KAYZ_URL, SPARKLE_URL, pageHead, SITE_NAME, STUDIO_LOCATION } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About IK’s Charms & True Sparkle | Cleveland",
      description:
        "A Black-owned, woman-led family studio in Cleveland, Ohio — home of KayzCharmzz and True Sparkle since 2021. Meet the house brand.",
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-xs font-medium uppercase tracking-widest text-accent">
        Black-owned · woman-led · family · {STUDIO_LOCATION}
      </p>
      <h1 className="mt-4 font-display text-4xl text-fg sm:text-5xl">
        A Cleveland studio with two sister brands
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        {SITE_NAME} is a Black-owned, woman-led, family studio in Cleveland, Ohio.
        The house opened in 2021 so Lana could share the beautiful pieces already
        covering her table — and so the family could build a second shop for
        original diamond painting kits that look like the people who paint them.
      </p>
      <p className="mt-4 text-base leading-relaxed text-muted">
        KayzCharmzz and True Sparkle are sister brands under IK’s Charms & True
        Sparkle. This parent site tells that story. The catalogs live on each
        shop:{" "}
        <a href={KAYZ_URL} className="text-fg underline decoration-accent/50 underline-offset-4">
          handmade tumblers, candles, and charms at KayzCharmzz
        </a>
        , and{" "}
        <a href={SPARKLE_URL} className="text-fg underline decoration-accent/50 underline-offset-4">
          original diamond painting kits at True Sparkle
        </a>
        .
      </p>
      <section className="mt-12">
        <h2 className="font-display text-3xl text-fg">The 2021 origin</h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Lana started KayzCharmzz because she had so many finished gifts around
          that she needed to share them. Beautiful things, without breaking the
          bank. Custom stayed part of the shop from day one — tumblers in someone’s
          colors, charm mixes with a name, soy candles poured to order. Describe
          the piece on{" "}
          <a href={`${KAYZ_URL}/custom`} className="text-fg underline decoration-accent/50 underline-offset-4">
            the KayzCharmzz custom form
          </a>
          . A photo helps if you have one. It is not required.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          True Sparkle grew beside it. The family wanted diamond painting kits that
          felt like them: glam closets, wildlife at sunset, heroes, holidays, and
          custom photo canvases. If the picture that matters is already on a phone,
          True Sparkle will chart it.
        </p>
      </section>
      <section className="mt-12">
        <h2 className="font-display text-3xl text-fg">What this site is for</h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Use this site to understand the house, reach Lana, and walk through the
          right door. We do not sell the full KayzCharmzz or True Sparkle catalogs
          here on purpose — so Google, and you, can tell the shops apart.
        </p>
      </section>
      <div className="mt-12 overflow-hidden rounded-xl">
        <img
          src="/images/studio-table.jpg"
          alt="IK’s Charms & True Sparkle studio table in Cleveland with KayzCharmzz jewelry tools and True Sparkle diamond painting kits"
          className="aspect-video w-full object-cover"
          width={1792}
          height={1008}
        />
      </div>
    </main>
  );
}
