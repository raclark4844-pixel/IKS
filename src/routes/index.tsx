import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing";
import { pageHead, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      path: "/",
    }),
  component: Home,
});

function Home() {
  return <LandingPage />;
}
