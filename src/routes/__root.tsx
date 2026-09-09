import { createRootRoute, HeadContent, Outlet, Scripts, redirect } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { BottomNav, SiteHeader } from "@/components/chrome";
import { SiteFooter } from "@/components/nap-footer";
import { JsonLd } from "@/components/json-ld";
import { gaId, pageHead, jsonLd, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/seo";
import { canonicalRedirectUrl } from "@/lib/canonical-host";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  beforeLoad: async () => {
    if (typeof window !== "undefined") return;
    try {
      const { getRequest } = await import("@tanstack/react-start/server");
      const request = getRequest();
      const forwarded = request.headers.get("x-forwarded-host");
      const host = (forwarded || request.headers.get("host") || "").split(":")[0];
      const proto = request.headers.get("x-forwarded-proto") || "https";
      const path = new URL(request.url).pathname + new URL(request.url).search;
      const dest = canonicalRedirectUrl(`${proto}://${host}${path}`);
      if (dest) throw redirect({ href: dest });
    } catch (err) {
      if (err && typeof err === "object" && "href" in err) throw err;
    }
  },
  head: () => {
    const seo = pageHead({
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      path: "/",
    });
    const id = gaId();
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#0a0908" },
        ...seo.meta,
      ],
      links: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "stylesheet", href: appCss },
        { rel: "manifest", href: "/__grok/manifest.webmanifest" },
        { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Outfit:wght@400;500;600&display=swap",
        },
        ...seo.links,
      ],
      scripts: id
        ? [
            { src: `https://www.googletagmanager.com/gtag/js?id=${id}`, async: true },
            {
              children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}');`,
            },
          ]
        : [],
    };
  },
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
        <JsonLd data={jsonLd} />
      </head>
      <body className="bg-bg text-fg pb-nav">
        <PreviewHostBridge />
        <AuthProvider>
          <SiteHeader />
          <Outlet />
          <SiteFooter />
          <BottomNav />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
