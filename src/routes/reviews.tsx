import { createFileRoute } from "@tanstack/react-router";
import { reviewSummary, trustPoints } from "@/features/business/data";
import { CallButton } from "@/features/contact/ContactDetails";
import { PageHero } from "@/features/layout/PageHero";
import { RatingSummary } from "@/features/reviews/RatingSummary";
import { ReviewCards } from "@/features/reviews/ReviewCards";
import { Card, CardBody, CardTitle } from "@/shared/ui/Card";
import { Section, SectionHeading } from "@/shared/ui/Section";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Marios Garage, Paphos" },
      {
        name: "description",
        content: `Marios Garage is rated ${reviewSummary.rating} from ${reviewSummary.count} Google reviews by drivers in Paphos, Cyprus.`,
      },
      { property: "og:title", content: "Reviews of Marios Garage, Paphos" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      {
        property: "og:description",
        content: `Rated ${reviewSummary.rating} out of 5 from ${reviewSummary.count} Google reviews.`,
      },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title={`Rated ${reviewSummary.rating} on Google`}
        intro={`${reviewSummary.count} customers have rated Marios Garage on its Google listing. Read a selection of their experiences below.`}
      />

      <Section>
        <RatingSummary />
        <ReviewCards />
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
          eyebrow="Next step"
          title="Bring your car in"
          intro="Call the garage and describe the problem — you'll get an honest view of what it needs."
        />
        <div className="mt-10">
          <CallButton />
        </div>
      </Section>
    </>
  );
}
