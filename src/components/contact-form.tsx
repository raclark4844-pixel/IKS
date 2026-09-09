"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { STUDIO_EMAIL, trackEvent } from "@/lib/seo";

const fieldClass =
  "mt-2 min-h-12 w-full rounded-full border border-fg/15 bg-bg px-5 text-sm text-fg outline-none placeholder:text-muted/40 focus:border-accent";
const areaClass =
  "mt-2 min-h-40 w-full resize-y rounded-2xl border border-fg/15 bg-bg px-5 py-3 text-sm text-fg outline-none placeholder:text-muted/40 focus:border-accent";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setError("Name, email, and a message are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email so we can write back.");
      return;
    }

    const subject = `IK’s Charms & True Sparkle message from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    trackEvent("generate_lead", { form: "contact" });
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="w-full" noValidate>
      <label className="block">
        <span className="text-xs font-medium uppercase tracking-widest text-muted">
          Name
        </span>
        <input name="name" autoComplete="name" required className={fieldClass} />
      </label>
      <label className="mt-5 block">
        <span className="text-xs font-medium uppercase tracking-widest text-muted">
          Email
        </span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          className={fieldClass}
        />
      </label>
      <label className="mt-5 block">
        <span className="text-xs font-medium uppercase tracking-widest text-muted">
          Phone
        </span>
        <input name="phone" type="tel" autoComplete="tel" className={fieldClass} />
      </label>
      <label className="mt-5 block">
        <span className="text-xs font-medium uppercase tracking-widest text-muted">
          Message
        </span>
        <textarea name="message" required className={areaClass} />
      </label>

      {error ? (
        <p className="mt-4 text-sm text-accent" role="alert">
          {error}
        </p>
      ) : null}
      {sent ? (
        <p className="mt-4 text-sm text-muted">
          Your email app should open with the message ready. If nothing opens,
          send it directly to {STUDIO_EMAIL}.
        </p>
      ) : null}

      <Button type="submit" size="lg" className="mt-8 w-full rounded-full">
        Email Lana
      </Button>
    </form>
  );
}
