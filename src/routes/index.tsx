import { createFileRoute } from "@tanstack/react-router";
import {
  business,
  routineServices,
  routineServicesFooter,
  specialistServices,
  trustPoints,
} from "@/features/business/data";
import { BrandStrip } from "@/features/brands/BrandStrip";
import { CinematicHero } from "@/features/hero/CinematicHero";
import { PhotoGallery } from "@/features/gallery/PhotoGallery";
import { RatingSummary } from "@/features/reviews/RatingSummary";
import { ReviewCards } from "@/features/reviews/ReviewCards";
import { ContactDetails, OpeningHoursTable } from "@/features/contact/ContactDetails";
import { ServiceGrid } from "@/features/services/ServiceGrid";
import { Section, SectionHeading } from "@/shared/ui/Section";
import { Card, CardBody, CardTitle } from "@/shared/ui/Card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marios Garage — Car Service & Engine Repair in Paphos" },
      {
        name: "description",
        content:
          "Marios Garage in Paphos: oil changes, brakes, filters and complex engine diagnostics for Mercedes, BMW, Honda and more. Call +357 96 344401.",
      },
      { property: "og:title", content: "Marios Garage — Car Service & Engine Repair in Paphos" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      {
        property: "og:description",
        content:
          "Routine maintenance and difficult engine repairs, handled properly. Rated 4.3 on Google. Call +357 96 344401.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <CinematicHero />

      <Section id="services">
        <SectionHeading
          eyebrow="Routine maintenance"
          title="The everyday work, done properly"
          intro="Servicing that keeps a car healthy between the big jobs — booked in quickly and finished the same day wherever possible."
        />
        <ServiceGrid services={routineServices} />
        <p className="mt-8 font-display text-sm uppercase tracking-[0.3em] text-silver-dim">
          {routineServicesFooter}
        </p>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Difficult jobs"
          title="Engine diagnostics and complex repairs"
          intro="When a fault is hard to pin down, the car needs a mechanic who will follow the evidence instead of replacing parts and hoping."
        />
        <ServiceGrid services={specialistServices} columns={3} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Expertise"
          title="Mercedes, BMW, Honda and more"
          intro="Years of hands-on work across German and Japanese makes, from routine servicing to engine-deep repairs."
        />
        <BrandStrip />
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading eyebrow="Inside the garage" title="Where the work happens" />
        <PhotoGallery />
      </Section>

      <Section>
        <SectionHeading eyebrow="Reputation" title="What customers say" />
        <RatingSummary />
        <ReviewCards limit={2} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {trustPoints.map((point) => (
            <Card key={point.title} className="h-full">
              <CardTitle>{point.title}</CardTitle>
              <CardBody>{point.body}</CardBody>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Contact"
          title="Talk to Marios"
          intro={`Call the garage directly on ${business.phoneDisplay}, or drop in during opening hours.`}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <ContactDetails />
          <OpeningHoursTable />
        </div>
      </Section>
    </>
  );
}
