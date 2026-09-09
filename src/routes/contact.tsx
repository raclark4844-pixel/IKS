import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SocialLinks } from "@/components/social-links";
import { JsonLd } from "@/components/json-ld";
import {
  KAYZ_URL,
  SPARKLE_URL,
  STUDIO_CONTACT,
  STUDIO_EMAIL,
  STUDIO_EST,
  STUDIO_LOCATION,
  STUDIO_PHONE,
  STUDIO_PHONE_TEL,
  pageHead,
  trackEvent,
} from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact IK’s Charms & True Sparkle | Cleveland",
      description:
        "Email Lana Moss, call the Cleveland studio, or send a note. Same inbox for KayzCharmzz handmade gifts and True Sparkle diamond painting kits.",
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1fr_1.2fr]">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact IK’s Charms & True Sparkle",
          url: "https://www.ikscharmsandtwosparkles.com/contact",
        }}
      />
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-accent">Write Lana</p>
        <h1 className="mt-4 font-display text-4xl text-fg sm:text-5xl">
          Contact the Cleveland studio
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
          Questions, pickups, and custom ideas — Lana Moss reads every note. Same
          studio inbox for{" "}
          <a href={KAYZ_URL} className="text-fg underline decoration-accent/50 underline-offset-4">
            KayzCharmzz handmade gifts
          </a>{" "}
          and{" "}
          <a href={SPARKLE_URL} className="text-fg underline decoration-accent/50 underline-offset-4">
            True Sparkle original diamond painting kits
          </a>
          . For a custom tumbler or charm mix, use{" "}
          <a href={`${KAYZ_URL}/custom`} className="text-fg underline decoration-accent/50 underline-offset-4">
            the KayzCharmzz custom form
          </a>
          — a photo is optional. For a photo diamond painting kit, use{" "}
          <a href={`${SPARKLE_URL}/custom`} className="text-fg underline decoration-accent/50 underline-offset-4">
            True Sparkle custom kits
          </a>
          .
        </p>
        <div className="mt-10 space-y-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-accent">Contact</p>
            <p className="mt-3 text-fg">{STUDIO_CONTACT}</p>
          </div>
          <a
            href={`mailto:${STUDIO_EMAIL}`}
            className="flex min-h-11 items-start gap-3 text-fg"
            onClick={() => trackEvent("email_click")}
          >
            <Mail className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
            {STUDIO_EMAIL}
          </a>
          <a href={`tel:${STUDIO_PHONE_TEL}`} className="flex min-h-11 items-start gap-3 text-fg">
            <Phone className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
            {STUDIO_PHONE}
          </a>
          <p className="flex min-h-11 items-start gap-3 text-fg">
            <MapPin className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
            {STUDIO_LOCATION} · {STUDIO_EST}
          </p>
          <div className="overflow-hidden rounded-xl border border-fg/10">
            <iframe
              title="Cleveland, Ohio map"
              src="https://maps.google.com/maps?q=Cleveland%2C%20Ohio&z=11&output=embed"
              className="aspect-video w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <SocialLinks className="-ml-1" />
        </div>
      </div>
      <ContactForm />
    </main>
  );
}
