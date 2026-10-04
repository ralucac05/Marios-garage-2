import { createFileRoute } from "@tanstack/react-router";
import {
  routineServices,
  routineServicesFooter,
  specialistServices,
} from "@/features/business/data";
import { BrandStrip } from "@/features/brands/BrandStrip";
import { CallButton } from "@/features/contact/ContactDetails";
import { PageHero } from "@/features/layout/PageHero";
import { ServiceGrid } from "@/features/services/ServiceGrid";
import { Section, SectionHeading } from "@/shared/ui/Section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Oil, Brakes, Filters & Engine Repair | Marios Garage" },
      {
        name: "description",
        content:
          "Oil changes, brake service, oil and cabin filter replacement plus complex engine diagnostics and repairs at Marios Garage, Paphos.",
      },
      { property: "og:title", content: "Services at Marios Garage, Paphos" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      {
        property: "og:description",
        content:
          "Routine servicing and complex engine diagnostics for Mercedes, BMW, Honda and other makes.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything from a service to a stripped engine"
        intro="Marios Garage covers the maintenance every car needs and the difficult mechanical work many garages turn away."
      />

      <Section>
        <SectionHeading eyebrow="Routine maintenance" title="Regular servicing" />
        <ServiceGrid services={routineServices} />
        <p className="mt-8 font-display text-sm uppercase tracking-[0.3em] text-silver-dim">
          {routineServicesFooter}
        </p>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Specialist work"
          title="German & Japanese Car Specialist"
          intro="Complete maintenance, diagnostics and mechanical repairs for German and Japanese vehicles, from routine servicing to complex engine work."
        />
        <ServiceGrid services={specialistServices} columns={3} />
      </Section>

      <Section>
        <SectionHeading eyebrow="Makes we work on" title="Brands and models" />
        <BrandStrip />
        <div className="mt-12">
          <CallButton />
        </div>
      </Section>
    </>
  );
}
