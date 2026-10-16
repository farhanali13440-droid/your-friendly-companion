import { createFileRoute } from "@tanstack/react-router";
import {
  Header, Hero, PainPoints, Empathy, Doctor, Conditions, Process, Options, Pricing,
  Credentials, Faq, FinalCta, Footer, StickyWhatsApp,
} from "@/components/landing/sections";

const TITLE = "Dr. Mohsin Mehmood | Consultant Psychiatrist – Book a Consultation";
const DESC =
  "Professional, nonjudgmental psychiatric consultation with Dr. Mohsin Mehmood, MBBS, FCPS (Psychiatry). In-clinic and online options. Book on WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Empathy />
        <Doctor />
        <Conditions />
        <Process />
        <Options />
        <Pricing />
        <Credentials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
