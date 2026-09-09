export const SITE_TITLE =
  "IK’s Charms & True Sparkle | KayzCharmzz Handmade Gifts + True Sparkle Diamond Painting Kits | Black-Owned Cleveland";

export const SITE_DESCRIPTION =
  "Shop KayzCharmzz for handmade jewelry, charms, tumblers, candles, and custom gifts in Cleveland. Shop True Sparkle for original diamond painting kits — glam, wildlife, heroes, holidays, and beginner-friendly art. One Black woman-led family studio.";

export const KAYZ_URL = "https://kayzcharmzz.grok.me";
export const SPARKLE_URL = "https://aurora-brook-zest-cosmic.grok.me";

export const STUDIO_EMAIL = "lana@ikscharmsandtwosparkles.com";
export const STUDIO_PHONE = "216-309-0331";
export const STUDIO_PHONE_TEL = "+12163090331";
export const STUDIO_LOCATION = "Cleveland, Ohio";
export const STUDIO_EST = "Est. 2021";
export const SOCIAL_INSTAGRAM = "https://www.instagram.com/kayzcharmzz";
export const SOCIAL_FACEBOOK = "https://www.facebook.com/kayzcharmzz";
export const SOCIAL_TIKTOK = "https://www.tiktok.com/@mamk40";

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "#organization",
      name: "IK’s Charms & True Sparkle",
      alternateName: ["IK's Charms and True Sparkle", "IK’s Charms & True Sparkle"],
      description:
        "Parent company of KayzCharmzz and True Sparkle. Black-owned, woman-led, family-owned studio in Cleveland, Ohio.",
      url: "/",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cleveland",
        addressRegion: "OH",
        addressCountry: "US",
      },
      areaServed: { "@type": "Country", name: "United States" },
      email: STUDIO_EMAIL,
      telephone: STUDIO_PHONE_TEL,
      founder: {
        "@type": "Person",
        description: "Black woman-led family studio",
      },
      ownershipFundingInfo: "Black woman-led family studio",
      sameAs: [KAYZ_URL, SPARKLE_URL, SOCIAL_INSTAGRAM, SOCIAL_FACEBOOK, SOCIAL_TIKTOK],
      subOrganization: [{ "@id": "#kayzcharmzz" }, { "@id": "#truesparkle" }],
      brand: [{ "@id": "#kayzcharmzz" }, { "@id": "#truesparkle" }],
    },
    {
      "@type": ["Brand", "LocalBusiness", "JewelryStore"],
      "@id": "#kayzcharmzz",
      name: "KayzCharmzz",
      alternateName: ["Kayz Charmzz", "Kayz charms Cleveland"],
      url: KAYZ_URL,
      email: STUDIO_EMAIL,
      telephone: STUDIO_PHONE_TEL,
      description:
        "Handmade jewelry, charms, tumblers, candles, custom gifts, and classes from a Black-owned, woman-led boutique in Cleveland, Ohio.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cleveland",
        addressRegion: "OH",
        addressCountry: "US",
      },
      areaServed: { "@type": "Country", name: "United States" },
      parentOrganization: { "@id": "#organization" },
    },
    {
      "@type": ["Brand", "LocalBusiness", "HobbyShop"],
      "@id": "#truesparkle",
      name: "True Sparkle",
      url: SPARKLE_URL,
      email: STUDIO_EMAIL,
      telephone: STUDIO_PHONE_TEL,
      description:
        "Original diamond painting kits — glam, wildlife, heroes, holidays, and beginner-friendly art with round or square drills. Turn your photos into a kit. Woman-owned diamond painting studio in Cleveland, Ohio.",
      slogan: "Create it. Sparkle it. Make it yours.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cleveland",
        addressRegion: "OH",
        addressCountry: "US",
      },
      areaServed: { "@type": "Country", name: "United States" },
      parentOrganization: { "@id": "#organization" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is IK’s Charms & True Sparkle?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "IK’s Charms & True Sparkle is a Black-owned, woman-led, family-owned studio in Cleveland, Ohio — the parent house of KayzCharmzz (https://kayzcharmzz.grok.me) and True Sparkle (https://aurora-brook-zest-cosmic.grok.me), where you can shop original kits or turn your photos into a kit.",
          },
        },
        {
          "@type": "Question",
          name: "What does KayzCharmzz sell?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "KayzCharmzz sells handmade jewelry, charm bracelets and earrings, custom tumblers, glitter tumblers, soy candles, beaded pens, and custom gifts from a woman-led, family-owned boutique in Cleveland. Shop at https://kayzcharmzz.grok.me. Sister brand True Sparkle is at https://aurora-brook-zest-cosmic.grok.me.",
          },
        },
        {
          "@type": "Question",
          name: "What does True Sparkle sell?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "True Sparkle sells original diamond painting kits — glam, wildlife, heroes, holidays, and beginner-friendly art with round or square drills — from a woman-led, family-owned studio in Cleveland. True Sparkle will also turn your photos into a kit. Shop at https://aurora-brook-zest-cosmic.grok.me. KayzCharmzz handmade gifts are at https://kayzcharmzz.grok.me.",
          },
        },
        {
          "@type": "Question",
          name: "Are KayzCharmzz and True Sparkle Black-owned?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. KayzCharmzz and True Sparkle are both Black-owned, woman-led, and family-owned, based in Cleveland, Ohio, under IK’s Charms & True Sparkle. Visit https://kayzcharmzz.grok.me and https://aurora-brook-zest-cosmic.grok.me.",
          },
        },
        {
          "@type": "Question",
          name: "Can I turn my photos into a True Sparkle kit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. True Sparkle will turn your photos into a diamond painting kit from the woman-led, family-owned studio in Cleveland, Ohio. Send a photo through https://aurora-brook-zest-cosmic.grok.me/contact. Handmade gifts from KayzCharmzz are at https://kayzcharmzz.grok.me.",
          },
        },
      ],
    },
  ],
} as const;
