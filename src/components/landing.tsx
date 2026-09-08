import * as Accordion from "@radix-ui/react-accordion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KAYZ_URL, SPARKLE_URL, jsonLd } from "@/lib/seo";

export function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <main id="main">
        <Hero />
        <BrandDoors />
        <KayzShop />
        <Studio />
        <KayzCustom />
        <SparkleKits />
        <Faq />
        <SeoNote />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="relative h-80 w-full overflow-hidden sm:h-auto sm:aspect-video sm:max-h-dvh">
        <img
          src="/images/hero-house.jpg"
          alt="IK’s Charms & True Sparkle studio still life: KayzCharmzz rose gold glitter tumbler, charm bracelet, and soy candle beside a True Sparkle diamond painting kit close-up, Black-owned Cleveland studio"
          className="absolute inset-0 size-full object-cover object-center"
          width={1792}
          height={1008}
          fetchPriority="high"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-bg to-transparent" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative -mt-16 rounded-xl bg-bg px-5 py-8 shadow-border sm:-mt-24 sm:px-10 sm:py-10">
          <p className="stagger-in text-xs font-medium uppercase tracking-widest text-accent">
            Black-owned · woman-led · family-owned · Cleveland, Ohio
          </p>
          <h1 className="stagger-in mt-4 max-w-4xl font-display text-3xl font-medium leading-tight text-fg sm:text-5xl md:text-6xl">
            IK’s Charms & True Sparkle — home of KayzCharmzz and True Sparkle
          </h1>
          <p className="stagger-in mt-6 max-w-2xl text-base leading-relaxed text-fg sm:text-lg">
            IK’s Charms & True Sparkle is a Black-owned, woman-led, family-owned studio
            in Cleveland, Ohio — home of KayzCharmzz and True Sparkle. KayzCharmzz is
            the handmade boutique for jewelry, charm bracelets and earrings, custom
            tumblers, glitter tumblers, soy candles, and beaded pens: beautiful gifts
            without breaking the bank. True Sparkle is the woman-owned diamond painting
            studio for original diamond painting kits — glam, wildlife, heroes,
            holidays, and beginner diamond painting kits with round or square drills.
            Turn your photos into a kit. Create it. Sparkle it. Make it yours.
          </p>
          <div className="stagger-in mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={KAYZ_URL} rel="noopener" target="_blank">
                Shop KayzCharmzz handmade gifts
                <ArrowUpRight />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={SPARKLE_URL} rel="noopener" target="_blank">
                Shop True Sparkle diamond painting kits
                <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandDoors() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid gap-6 md:grid-cols-2">
        <article
          id="kayzcharmzz"
          className="flex scroll-mt-20 flex-col overflow-hidden rounded-xl bg-surface shadow-border"
        >
          <div className="aspect-photo overflow-hidden rounded-t-xl">
            <img
              src="/images/kayz-tumbler-bracelet.jpg"
              alt="KayzCharmzz rose gold glitter tumbler and charm bracelet Cleveland"
              className="size-full object-cover"
              width={1600}
              height={1200}
              loading="lazy"
            />
          </div>
          <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-widest text-accent">
              Handmade boutique · Est. 2021
            </p>
            <h2 className="font-display text-3xl font-medium text-fg">
              Shop KayzCharmzz handmade gifts
            </h2>
            <p className="text-base leading-relaxed text-muted">
              KayzCharmzz is Kay M’s Black-owned jewelry shop in Cleveland — a
              handmade boutique of charm bracelets and earrings, custom tumblers,
              glitter tumblers, soy candles, and beaded pens. Custom orders and
              classes with Kay keep the work personal. Beautiful gifts without
              breaking the bank, from a woman-owned gift shop in Cleveland, Ohio.
            </p>
            <div className="mt-auto pt-2">
              <Button asChild>
                <a href={KAYZ_URL} rel="noopener" target="_blank">
                  Shop KayzCharmzz handmade gifts
                  <ArrowUpRight />
                </a>
              </Button>
            </div>
          </div>
        </article>

        <article
          id="true-sparkle"
          className="flex scroll-mt-20 flex-col overflow-hidden rounded-xl bg-surface shadow-border"
        >
          <div className="aspect-photo overflow-hidden rounded-t-xl">
            <img
              src="/images/sparkle-hands.jpg"
              alt="True Sparkle diamond painting — placing drills on an original kit, Black-owned Cleveland studio"
              className="size-full object-cover"
              width={1600}
              height={1067}
              loading="lazy"
            />
          </div>
          <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-widest text-accent">
              Original kits · Turn your photos into a kit
            </p>
            <h2 className="font-display text-3xl font-medium text-fg">
              Shop True Sparkle diamond painting kits
            </h2>
            <p className="text-base leading-relaxed text-muted">
              True Sparkle designs original diamond painting kits you want to hang —
              glam, wildlife, heroes, holidays, and beginner diamond painting kits.
              Choose round or square drills from this Black-owned diamond painting
              studio, a woman-owned diamond painting studio in Cleveland. Send a
              portrait, a pet, a wedding, a game-day shot — True Sparkle will turn
              your photos into a kit you can hang. Create it. Sparkle it. Make it
              yours.
            </p>
            <div className="mt-auto flex flex-col gap-3 pt-2">
              <Button asChild>
                <a href={SPARKLE_URL} rel="noopener" target="_blank">
                  Shop True Sparkle diamond painting kits
                  <ArrowUpRight />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={`${SPARKLE_URL}/#shop`} rel="noopener" target="_blank">
                  Turn your photos into a kit
                  <ArrowUpRight />
                </a>
              </Button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

const kayzShop = [
  {
    href: "/shop/betty-boop-tumbler",
    file: "kayz-betty-boop.jpg",
    title: "Betty Boop 20oz Tumbler",
    alt: "KayzCharmzz Betty Boop 20oz hot and cold tumbler Cleveland",
  },
  {
    href: "/shop/snow-globe-tumbler",
    file: "kayz-snow-globe.jpg",
    title: "Snow Globe Tumbler",
    alt: "KayzCharmzz snow globe tumbler handmade gift Cleveland",
  },
  {
    href: "/shop/junk-case-tumbler-set",
    file: "kayz-junk-set.jpg",
    title: "Junk Phone Case and Tumbler Set",
    alt: "KayzCharmzz junk phone case and matching tumbler set Cleveland",
  },
  {
    href: "/shop/pink-junk-pixel-case",
    file: "kayz-pink-case.jpg",
    title: "Pink Freestyle Bling Case",
    alt: "KayzCharmzz pink freestyle bling junk Pixel 10 case Cleveland",
  },
  {
    href: "/shop/margarita-candle-set",
    file: "kayz-margarita.jpg",
    title: "Frozen Margarita Candle Set",
    alt: "KayzCharmzz blueberry and watermelon frozen margarita soy candle set Cleveland",
  },
  {
    href: "/shop/french-vanilla-candle",
    file: "kayz-vanilla.jpg",
    title: "French Vanilla Coffee Soy Candle",
    alt: "KayzCharmzz French vanilla coffee soy candle Cleveland",
  },
  {
    href: "/shop/banana-pudding-candle",
    file: "kayz-banana.jpg",
    title: "Banana Pudding Whipped Candle",
    alt: "KayzCharmzz banana pudding whipped soy candle Cleveland",
  },
  {
    href: "/shop/floral-pens-set",
    file: "kayz-floral-pens.jpg",
    title: "Floral Beaded Pens + Lip Gloss",
    alt: "KayzCharmzz floral beaded pens and lip gloss set Cleveland",
  },
  {
    href: "/shop/heart-drop-earrings",
    file: "kayz-heart-earrings.jpg",
    title: "I Love You Heart Drop Earrings",
    alt: "KayzCharmzz I Love You heart drop earrings handmade jewelry Cleveland",
  },
] as const;

function KayzShop() {
  return (
    <section className="border-y border-fg/10 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Beautiful gifts, without breaking the bank
        </p>
        <h3 className="mt-4 max-w-3xl font-display text-3xl font-medium text-fg sm:text-4xl">
          From the KayzCharmzz shop
        </h3>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted">
          Tumblers, junk cases, soy candles, beaded pens, and handmade jewelry —
          pieces Kay actually has on the table. Shop KayzCharmzz for glitter
          tumblers, charm bracelets and earrings, and candles you can smell from
          the listing. Custom stays open; the shelf is ready now.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {kayzShop.map((item) => (
            <a
              key={item.href}
              href={`${KAYZ_URL}${item.href}`}
              rel="noopener"
              target="_blank"
              className="overflow-hidden rounded-lg bg-bg shadow-border transition-shadow duration-150 hover:shadow-border-hover"
            >
              <figure>
                <img
                  src={`/images/${item.file}`}
                  alt={item.alt}
                  className="aspect-[3/4] w-full object-cover"
                  width={800}
                  height={1067}
                  loading="lazy"
                />
                <figcaption className="px-3 py-3 text-sm leading-snug text-muted">{item.title}</figcaption>
              </figure>
            </a>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild>
            <a href={`${KAYZ_URL}/shop`} rel="noopener" target="_blank">
              Shop KayzCharmzz handmade gifts
              <ArrowUpRight />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Studio() {
  return (
    <section id="studio" className="scroll-mt-20 border-y border-fg/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-xl">
          <img
            src="/images/studio-table.jpg"
            alt="IK’s Charms & True Sparkle family studio table in Cleveland with KayzCharmzz handmade jewelry tools and True Sparkle diamond painting kits"
            className="aspect-video size-full object-cover"
            width={1792}
            height={1008}
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            One house · two catalogs
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium text-fg sm:text-4xl">
            Black-owned, woman-led family studio in Cleveland, Ohio
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            IK’s Charms and True Sparkle is a woman-owned family business in
            Cleveland — a Black woman-led studio Cleveland families actually know.
            The work is made here:{" "}
            <a href={KAYZ_URL} rel="noopener" className="text-fg underline decoration-accent/50 underline-offset-4">
              handmade gifts Cleveland
            </a>{" "}
            on one table,{" "}
            <a href={SPARKLE_URL} rel="noopener" className="text-fg underline decoration-accent/50 underline-offset-4">
              diamond painting kits
            </a>{" "}
            on the other. A family-owned gift shop Cleveland visitors can trust,
            and a Black-owned business Cleveland, Ohio can point to with pride.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            KayzCharmzz began in 2021 when Kay M had so many beautiful items around
            that she needed to share them. True Sparkle grew beside it so painters
            could hang original work — not another aisle print — and turn your
            photos into a kit that is only yours. Two sister brands. One Cleveland
            handmade gifts house.
          </p>
        </div>
      </div>
    </section>
  );
}

function KayzCustom() {
  return (
    <section id="kayz-custom" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Kayz Charmzz · custom is part of the shop
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium text-fg sm:text-4xl">
            KayzCharmzz custom orders and classes
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Tell Kay the vision. She will bring it to life — a glitter tumbler,
            matching charm bracelets and earrings Cleveland can wear the same day, a
            soy candles Cleveland favorite in French vanilla coffee.{" "}
            <a href={KAYZ_URL} rel="noopener" className="text-fg underline decoration-accent/50 underline-offset-4">
              custom tumblers and jewelry
            </a>{" "}
            sit beside beaded pens and ready-to-gift sets. Custom orders Cleveland
            families send for birthdays live next to the shelf. Classes with Kay
            cover jewelry online by the hour, and candles on request.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            The{" "}
            <a href={KAYZ_URL} rel="noopener" className="text-fg underline decoration-accent/50 underline-offset-4">
              KayzCharmzz shop
            </a>{" "}
            is still a handmade boutique Cleveland gift-givers use: Kayz charms
            Cleveland, a Black-owned jewelry shop Cleveland, a woman-owned gift shop
            Cleveland Ohio — beautiful gifts without breaking the bank.
          </p>
          <div className="mt-8">
            <Button asChild variant="outline">
              <a href={KAYZ_URL} rel="noopener" target="_blank">
                Visit KayzCharmzz
                <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
        <div className="grid min-w-0 grid-cols-2 gap-3">
          <figure className="col-span-2 min-w-0 overflow-hidden rounded-lg">
            <img
              src="/images/kayz-charms.jpg"
              alt="KayzCharmzz custom gold charm jewelry — handmade bracelets and earrings Cleveland"
              className="aspect-photo w-full object-cover"
              width={1408}
              height={1408}
              loading="lazy"
            />
          </figure>
          <figure className="min-w-0 overflow-hidden rounded-lg">
            <img
              src="/images/kayz-heart-earrings.jpg"
              alt="KayzCharmzz I Love You Heart Drop Earrings handmade jewelry Cleveland"
              className="aspect-photo w-full object-cover"
              width={1408}
              height={1408}
              loading="lazy"
            />
          </figure>
          <figure className="min-w-0 overflow-hidden rounded-lg">
            <img
              src="/images/kayz-floral-pens.jpg"
              alt="KayzCharmzz Floral Beaded Pens and Lip Gloss Set Cleveland"
              className="aspect-photo w-full object-cover"
              width={1024}
              height={1536}
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

const sparkleKits = [
  {
    slug: "barbie",
    file: "sparkle-barbie.jpg",
    title: "Sparkle Glam Closet",
    alt: "True Sparkle Sparkle Glam Closet diamond painting kit Cleveland",
  },
  {
    slug: "gala",
    file: "sparkle-gala.jpg",
    title: "Diamond Gala Romance",
    alt: "True Sparkle Diamond Gala Romance diamond painting kit Cleveland",
  },
  {
    slug: "queen",
    file: "sparkle-queen.jpg",
    title: "Jewel-Toned Mosaic Queen",
    alt: "True Sparkle Jewel-Toned Mosaic Queen diamond painting kit Cleveland",
  },
  {
    slug: "fairy",
    file: "sparkle-fairy.jpg",
    title: "Enchanted Fairy Portrait",
    alt: "True Sparkle Enchanted Fairy Portrait diamond painting kit Cleveland",
  },
  {
    slug: "lioness",
    file: "sparkle-lioness.jpg",
    title: "Lioness Family at Sunset",
    alt: "True Sparkle Lioness Family at Sunset Safari diamond painting kit",
  },
  {
    slug: "polar",
    file: "sparkle-polar.jpg",
    title: "Festive Winter Departure",
    alt: "True Sparkle Festive Winter Departure holiday diamond painting kit",
  },
  {
    slug: "halloween",
    file: "sparkle-halloween.jpg",
    title: "Enchanted Halloween Masquerade",
    alt: "True Sparkle Enchanted Halloween Masquerade Fairy diamond painting kit",
  },
  {
    slug: "candy",
    file: "sparkle-candy.jpg",
    title: "Sparkling Sweet Treats",
    alt: "True Sparkle Sparkling Sweet Treats Candy Land diamond painting kit",
  },
  {
    slug: "firefighter",
    file: "sparkle-firefighter.jpg",
    title: "Firefighter Heroes",
    alt: "True Sparkle Firefighter Heroes diamond painting kit Cleveland",
  },
  {
    slug: "steelers",
    file: "sparkle-steelers.jpg",
    title: "Glamorous Game Day Lounge",
    alt: "True Sparkle Glamorous Game Day Lounge diamond painting kit",
  },
  {
    slug: "puppy",
    file: "sparkle-puppy.jpg",
    title: "Puppy Playground",
    alt: "True Sparkle Puppy Playground diamond painting kit Cleveland",
  },
  {
    slug: "waves",
    file: "sparkle-waves.jpg",
    title: "Riding Waves in Paradise",
    alt: "True Sparkle Riding Waves in Paradise diamond painting kit",
  },
] as const;

function SparkleKits() {
  return (
    <section className="border-y border-fg/10 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Create it. Sparkle it. Make it yours.
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-medium text-fg sm:text-4xl">
          True Sparkle original kits you want to hang
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted">
          True Sparkle original kits are designed here, not pulled from a craft
          aisle. Glam diamond painting for nights in. Wildlife diamond painting kits
          for the wall. Holiday diamond painting kits when the house wants light.
          Heroes and game-day canvases. Beginner diamond painting kits with a clear
          chart. Round or square drills — round is faster, square sits tighter. And
          if the picture is already yours, True Sparkle will turn your photos into a
          kit. Shop{" "}
          <a href={SPARKLE_URL} rel="noopener" className="text-fg underline decoration-accent/50 underline-offset-4">
            original diamond art kits
          </a>{" "}
          in the{" "}
          <a href={SPARKLE_URL} rel="noopener" className="text-fg underline decoration-accent/50 underline-offset-4">
            True Sparkle catalog
          </a>
          .
        </p>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {sparkleKits.map((kit) => (
            <a
              key={kit.slug}
              href={`${SPARKLE_URL}/?kit=${kit.slug}`}
              rel="noopener"
              target="_blank"
              className="overflow-hidden rounded-lg bg-bg shadow-border transition-shadow duration-150 hover:shadow-border-hover"
            >
              <figure>
                <img
                  src={`/images/${kit.file}`}
                  alt={kit.alt}
                  className="aspect-square w-full object-cover"
                  width={800}
                  height={800}
                  loading="lazy"
                />
                <figcaption className="px-3 py-3 text-sm leading-snug text-muted">{kit.title}</figcaption>
              </figure>
            </a>
          ))}
        </div>
        <div className="mt-10 rounded-xl bg-bg px-6 py-8 shadow-border sm:px-8">
          <h3 className="font-display text-2xl font-medium text-fg">
            Turn your photos into a True Sparkle kit
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            A portrait. A pet. A wedding. A game-day shot that still makes the room
            go quiet. Send the photo — True Sparkle will turn your photos into a kit:
            charted, drilled, and ready to place. Catalog canvases for the collection.
            Custom photos for the ones that are only yours.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <a href={SPARKLE_URL} rel="noopener" target="_blank">
              Shop True Sparkle diamond painting kits
              <ArrowUpRight />
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={`${SPARKLE_URL}/#shop`} rel="noopener" target="_blank">
              Turn your photos into a kit
              <ArrowUpRight />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "What is IK’s Charms & True Sparkle?",
    a: (
      <>
        IK’s Charms & True Sparkle is a Black-owned, woman-led, family-owned studio
        in Cleveland, Ohio — the parent house of two sister shops:{" "}
        <a href={KAYZ_URL} rel="noopener" className="text-fg underline decoration-accent/50 underline-offset-4">
          KayzCharmzz
        </a>{" "}
        for handmade gifts, and{" "}
        <a href={SPARKLE_URL} rel="noopener" className="text-fg underline decoration-accent/50 underline-offset-4">
          True Sparkle
        </a>{" "}
        for original diamond painting kits — and to turn your photos into a kit.
      </>
    ),
  },
  {
    q: "What does KayzCharmzz sell?",
    a: (
      <>
        KayzCharmzz sells handmade jewelry, charm bracelets and earrings, custom
        tumblers, glitter tumblers, soy candles, beaded pens, and custom gifts from
        a woman-led, family-owned boutique in Cleveland. Shop KayzCharmzz at{" "}
        <a href={KAYZ_URL} rel="noopener" className="text-fg underline decoration-accent/50 underline-offset-4">
          kayzcharmzz.grok.me
        </a>
        . Sister brand True Sparkle lives at{" "}
        <a href={SPARKLE_URL} rel="noopener" className="text-fg underline decoration-accent/50 underline-offset-4">
          the True Sparkle catalog
        </a>
        .
      </>
    ),
  },
  {
    q: "What does True Sparkle sell?",
    a: (
      <>
        True Sparkle sells original diamond painting kits — glam, wildlife, heroes,
        holidays, and beginner-friendly art with round or square drills — from a
        woman-led, family-owned studio in Cleveland. True Sparkle will also turn
        your photos into a kit. Shop True Sparkle at{" "}
        <a href={SPARKLE_URL} rel="noopener" className="text-fg underline decoration-accent/50 underline-offset-4">
          aurora-brook-zest-cosmic.grok.me
        </a>
        . Handmade gifts from KayzCharmzz are at{" "}
        <a href={KAYZ_URL} rel="noopener" className="text-fg underline decoration-accent/50 underline-offset-4">
          the KayzCharmzz shop
        </a>
        .
      </>
    ),
  },
  {
    q: "Are KayzCharmzz and True Sparkle Black-owned?",
    a: (
      <>
        Yes. KayzCharmzz and True Sparkle are both Black-owned, woman-led, and
        family-owned, based in Cleveland, Ohio, under IK’s Charms & True Sparkle.
        Visit{" "}
        <a href={KAYZ_URL} rel="noopener" className="text-fg underline decoration-accent/50 underline-offset-4">
          KayzCharmzz
        </a>{" "}
        and{" "}
        <a href={SPARKLE_URL} rel="noopener" className="text-fg underline decoration-accent/50 underline-offset-4">
          True Sparkle
        </a>
        .
      </>
    ),
  },
  {
    q: "Can I turn my photos into a True Sparkle kit?",
    a: (
      <>
        Yes. True Sparkle will turn your photos into a diamond painting kit from the
        woman-led, family-owned studio in Cleveland, Ohio. Send a photo through{" "}
        <a href={`${SPARKLE_URL}/contact`} rel="noopener" className="text-fg underline decoration-accent/50 underline-offset-4">
          True Sparkle
        </a>
        . Handmade gifts from KayzCharmzz are at{" "}
        <a href={KAYZ_URL} rel="noopener" className="text-fg underline decoration-accent/50 underline-offset-4">
          the KayzCharmzz shop
        </a>
        .
      </>
    ),
  },
];

function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-20 sm:px-6">
      <h2 className="font-display text-3xl font-medium text-fg">Questions, answered</h2>
      <Accordion.Root type="single" collapsible className="mt-10 divide-y divide-fg/10 border-y border-fg/10">
        {faqs.map((item) => (
          <Accordion.Item key={item.q} value={item.q}>
            <Accordion.Header>
              <Accordion.Trigger className="group flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left font-medium text-fg">
                {item.q}
                <ChevronDown className="size-4 shrink-0 text-muted transition-transform duration-150 group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden pb-5 text-base leading-relaxed text-muted data-[state=closed]:animate-none">
              {item.a}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}

function SeoNote() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 pb-28 sm:px-6">
      <div className="rounded-xl bg-surface px-6 py-10 shadow-border sm:px-10">
        <h2 className="font-display text-2xl font-medium text-fg">
          Both catalogs, in plain English
        </h2>
        <p className="mt-5 text-base leading-relaxed text-fg">
          IK’s Charms and True Sparkle is a family-owned gift shop in Cleveland and a
          Black-owned business in Cleveland, Ohio.{" "}
          <a href={KAYZ_URL} rel="noopener" target="_blank" className="underline decoration-accent/50 underline-offset-4">
            KayzCharmzz
          </a>{" "}
          is the handmade boutique: jewelry, charm bracelets and earrings, custom
          tumblers and jewelry, glitter tumblers, soy candles, beaded pens, custom
          orders, and classes with Kay — beautiful gifts without breaking the bank.{" "}
          <a href={SPARKLE_URL} rel="noopener" target="_blank" className="underline decoration-accent/50 underline-offset-4">
            True Sparkle
          </a>{" "}
          is the woman-owned diamond painting studio: original diamond painting kits
          and diamond art kits Cleveland painters hang, from glam diamond painting
          and wildlife diamond painting kits to holiday diamond painting kits and
          beginner diamond painting kits, with round or square drills. True Sparkle
          will also turn your photos into a kit. One Black woman-led studio. Two
          catalogs. Create it. Sparkle it. Make it yours.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-fg/10 bg-bg">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl text-fg">IK’s Charms & True Sparkle</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Black-owned, woman-led, family-owned studio in Cleveland, Ohio. Parent
            house of KayzCharmzz and True Sparkle.
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-accent">KayzCharmzz</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Handmade jewelry, custom tumblers, soy candles, beaded pens, and classes
            with Kay — beautiful gifts without breaking the bank, from a Black-owned
            jewelry shop in Cleveland.
          </p>
          <a href={KAYZ_URL} rel="noopener" target="_blank" className="mt-3 inline-flex min-h-11 items-center text-sm text-fg">
            Shop KayzCharmzz handmade gifts
            <ArrowUpRight className="ml-1 size-4" />
          </a>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-accent">True Sparkle</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Original diamond painting kits you want to hang — glam, wildlife, heroes,
            holidays, beginner-friendly art. Round or square drills. Turn your photos
            into a kit. Create it. Sparkle it. Make it yours.
          </p>
          <a href={SPARKLE_URL} rel="noopener" target="_blank" className="mt-3 inline-flex min-h-11 items-center text-sm text-fg">
            Shop True Sparkle diamond painting kits
            <ArrowUpRight className="ml-1 size-4" />
          </a>
          <a href={`${SPARKLE_URL}/contact`} rel="noopener" target="_blank" className="inline-flex min-h-11 items-center text-sm text-fg">
            Turn your photos into a kit
            <ArrowUpRight className="ml-1 size-4" />
          </a>
        </div>
      </div>
      <p className="border-t border-fg/10 py-6 text-center text-xs text-muted">
        IK’s Charms & True Sparkle · KayzCharmzz · True Sparkle · Cleveland, Ohio
      </p>
    </footer>
  );
}
