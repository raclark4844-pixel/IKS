export { gaId, trackEvent } from "@/lib/analytics";

export const SITE_NAME = "IK’s Charms & True Sparkle";
export const SITE_ORIGIN = "https://www.ikscharmsandtwosparkles.com";
export const SITE_TITLE = "IK’s Charms & True Sparkle | KayzCharmzz + True Sparkle";
export const SITE_DESCRIPTION =
  "Black-owned, woman-led Cleveland studio. Meet KayzCharmzz handmade gifts and True Sparkle original diamond painting kits — then shop each brand.";

export const KAYZ_URL = "https://www.kayzcharmzz.com";
export const SPARKLE_URL = "https://www.truesparkles.com";

export const STUDIO_CONTACT = "Lana Moss";
export const STUDIO_EMAIL = "lana@ikscharmsandtwosparkles.com";
export const STUDIO_PHONE = "216-309-0331";
export const STUDIO_PHONE_TEL = "+12163090331";
export const STUDIO_STREET = "35966 Detroit Rd";
export const STUDIO_UNIT = "#1022";
export const STUDIO_CITY = "Avon";
export const STUDIO_STATE = "Ohio";
export const STUDIO_STATE_CODE = "OH";
export const STUDIO_ZIP = "44011";
export const STUDIO_LOCATION = "Avon, Ohio";
export const STUDIO_ADDRESS = "35966 Detroit Rd #1022, Avon, Ohio 44011";
export const STUDIO_ADDRESS_LINES = ["35966 Detroit Rd", "#1022", "Avon, Ohio 44011"] as const;
export const STUDIO_MAP_QUERY = "35966 Detroit Rd #1022, Avon, Ohio 44011";
export const STUDIO_EST = "Est. 2021";
export const NAP_LINE = `${SITE_NAME} · ${STUDIO_ADDRESS} · ${STUDIO_EMAIL} · ${STUDIO_PHONE}`;

export const SOCIAL_INSTAGRAM = "https://www.instagram.com/kayzcharmzz";
export const SOCIAL_FACEBOOK = "https://www.facebook.com/kayzcharmzz";
export const SOCIAL_TIKTOK = "https://www.tiktok.com/@mamk40";
export const SOCIAL_YOUTUBE = "https://www.youtube.com/@kaythecreator-zc7dl";

export const LEGACY_HOSTS = [
  "winter-lark-trail-plum.grok.me",
  "iks-alpha.vercel.app",
  "ikscharmsandtwosparkles.com",
] as const;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized === "/" ? "/" : normalized}`;
}

export function pageHead({
  title,
  description,
  path,
  image = "/og.jpg",
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
}) {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(image);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "author", content: SITE_NAME },
      { name: "geo.region", content: "US-OH" },
      { name: "geo.placename", content: "Avon" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: ogImage },
      { property: "og:type", content: type },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "Store"],
      "@id": `${SITE_ORIGIN}/#organization`,
      name: SITE_NAME,
      alternateName: ["IK's Charms and True Sparkle", "IK’s Charms & True Sparkle"],
      description:
        "Parent house of KayzCharmzz and True Sparkle. Black-owned, woman-led, family studio in Cleveland, Ohio.",
      url: SITE_ORIGIN,
      image: absoluteUrl("/og.jpg"),
      email: STUDIO_EMAIL,
      telephone: STUDIO_PHONE_TEL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "35966 Detroit Rd #1022",
        addressLocality: "Avon",
        addressRegion: "OH",
        postalCode: "44011",
        addressCountry: "US",
      },
      areaServed: { "@type": "Country", name: "United States" },
      founder: {
        "@type": "Person",
        name: STUDIO_CONTACT,
        email: STUDIO_EMAIL,
        jobTitle: "Contact",
      },
      sameAs: [KAYZ_URL, SPARKLE_URL, SOCIAL_INSTAGRAM, SOCIAL_FACEBOOK, SOCIAL_TIKTOK, SOCIAL_YOUTUBE],
      subOrganization: [
        { "@id": `${KAYZ_URL}/#organization` },
        { "@id": `${SPARKLE_URL}/#organization` },
      ],
      brand: [
        { "@id": `${KAYZ_URL}/#organization` },
        { "@id": `${SPARKLE_URL}/#organization` },
      ],
    },
    {
      "@type": ["Organization", "Store", "JewelryStore"],
      "@id": `${KAYZ_URL}/#organization`,
      name: "KayzCharmzz",
      url: KAYZ_URL,
      email: STUDIO_EMAIL,
      telephone: STUDIO_PHONE_TEL,
      description:
        "Handmade jewelry, tumblers, soy candles, junk phone cases, beaded pens, and custom gifts from a Black-owned boutique in Cleveland, Ohio.",
      parentOrganization: { "@id": `${SITE_ORIGIN}/#organization` },
      address: {
        "@type": "PostalAddress",
        streetAddress: "35966 Detroit Rd #1022",
        addressLocality: "Avon",
        addressRegion: "OH",
        postalCode: "44011",
        addressCountry: "US",
      },
    },
    {
      "@type": ["Organization", "Store", "HobbyShop"],
      "@id": `${SPARKLE_URL}/#organization`,
      name: "True Sparkle",
      url: SPARKLE_URL,
      email: STUDIO_EMAIL,
      telephone: STUDIO_PHONE_TEL,
      description:
        "Original diamond painting kits and custom photo-to-kit service from a woman-owned studio in Cleveland, Ohio.",
      slogan: "Create it. Sparkle it. Make it yours.",
      parentOrganization: { "@id": `${SITE_ORIGIN}/#organization` },
      address: {
        "@type": "PostalAddress",
        streetAddress: "35966 Detroit Rd #1022",
        addressLocality: "Avon",
        addressRegion: "OH",
        postalCode: "44011",
        addressCountry: "US",
      },
    },
  ],
} as const;
