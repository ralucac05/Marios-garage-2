import { createFileRoute } from "@tanstack/react-router";
import { business, trustPoints } from "@/features/business/data";
import { CallButton } from "@/features/contact/ContactDetails";
import { PhotoGallery } from "@/features/gallery/PhotoGallery";
import { PageHero } from "@/features/layout/PageHero";
import { Card, CardBody, CardTitle } from "@/shared/ui/Card";
import { Section, SectionHeading } from "@/shared/ui/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Marios Garage — Trusted Mechanic in Paphos" },
      {
        name: "description",
        content:
          "Marios Garage is an independent car repair and maintenance workshop in Agia Varvara, Paphos, handling routine servicing and complex engine faults.",
      },
      { property: "og:title", content: "About Marios Garage, Paphos" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      {
        property: "og:description",
        content:
          "An independent Paphos workshop for routine servicing and difficult engine repairs.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="An independent garage in Paphos"
        intro={`${business.name} is a ${business.category.toLowerCase()} in ${business.area}, looking after local drivers' cars from routine servicing through to engine work that needs real diagnosis.`}
      />

      <Section>
        <SectionHeading
          eyebrow="How we work"
          title="Straight answers, careful work"
          intro="Cars come in for two reasons: to be kept healthy, or because something has gone wrong that nobody has managed to explain. Both get the same attention."
        />
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
        <SectionHeading eyebrow="The workshop" title="Inside Marios Garage" />
        <PhotoGallery />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Get in touch"
          title="Have a problem you want looked at?"
          intro="A quick phone call is usually the fastest way to find out what's involved."
        />
        <div className="mt-10">
          <CallButton />
        </div>
      </Section>
    </>
  );
}
