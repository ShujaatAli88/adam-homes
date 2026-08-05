import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/ui/ContactForm";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact High Ground Land Solutions | West Alabama Land Management",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        crumb="Home / Contact"
        bgImage="/images/forest.jpg"
        titleTone="dark"
      />
      <section className="bg-surface-2 px-5 py-16 sm:py-24">
        <Reveal>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
