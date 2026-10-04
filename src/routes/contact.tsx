import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/features/business/data";
import { ContactDetails, OpeningHoursTable } from "@/features/contact/ContactDetails";
import { PageHero } from "@/features/layout/PageHero";
import { Section } from "@/shared/ui/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Marios Garage — Call +357 96 344401, Paphos" },
      {
        name: "description",
        content: `Call Marios Garage on ${business.phoneDisplay}. ${business.address}. Open Monday to Friday, 8:00 to 17:00.`,
      },
      { property: "og:title", content: "Contact Marios Garage, Paphos" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      {
        property: "og:description",
        content: `Phone ${business.phoneDisplay} — open Monday to Friday, 8:00 to 17:00, in ${business.area}.`,
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Call the garage"
        intro="The quickest way to get your car looked at is a phone call. Tell Marios what the car is doing and he'll tell you what's involved."
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          <ContactDetails />
          <OpeningHoursTable />
        </div>
      </Section>
    </>
  );
}
