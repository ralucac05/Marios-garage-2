import { customerReviews } from "@/features/business/data";
import { Card } from "@/shared/ui/Card";

export function ReviewCards({ limit }: { limit?: number }) {
  const reviews = typeof limit === "number" ? customerReviews.slice(0, limit) : customerReviews;

  return (
    <div className="mt-12 grid items-start gap-5 md:grid-cols-2">
      {reviews.map((review) => (
        <Card key={review.id} className="h-full">
          <div className="flex items-center gap-3" aria-label="5 out of 5 stars">
            <span className="text-primary" aria-hidden="true">★★★★★</span>
            <span className="font-display text-xs uppercase tracking-[0.2em] text-silver-dim">
              Customer review
            </span>
          </div>
          <blockquote className="mt-5 whitespace-pre-line text-base leading-7 text-foreground/90">
            “{review.text}”
          </blockquote>
        </Card>
      ))}
    </div>
  );
}