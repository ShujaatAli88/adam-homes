import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PhonePopover from "@/components/ui/PhonePopover";
import ContactForm from "@/components/ui/ContactForm";
import Reveal from "@/components/ui/Reveal";
import { contact } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact High Ground Land Solutions | West Alabama Land Management",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" crumb="Home / Contact" />
      <section className="bg-white px-5 py-16 text-center sm:py-20">
        <Reveal>
          <h2 className="mb-8 text-[clamp(1.5rem,4vw,2.25rem)] font-semibold text-brand-900">
            {contact.title}
          </h2>
          <PhonePopover />
        </Reveal>
      </section>
      <section className="bg-surface-2 px-5 py-16 sm:py-24">
        <Reveal>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
