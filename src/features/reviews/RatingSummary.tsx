import { reviewSummary } from "@/features/business/data";
import { ButtonLink } from "@/shared/ui/Button";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={i <= Math.round(rating) ? "text-primary" : "text-secondary-foreground/25"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function RatingSummary({ compact = false }: { compact?: boolean }) {
  return (
    <div className="surface-panel mt-12 rounded-xl p-8 md:p-10">
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-baseline gap-3">
            <p className="font-display text-5xl font-extrabold">{reviewSummary.rating}</p>
            <Stars rating={reviewSummary.rating} />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Rated {reviewSummary.rating} out of 5 from {reviewSummary.count} {reviewSummary.source}.
          </p>
        </div>
        <ButtonLink
          href={reviewSummary.url}
          target="_blank"
          rel="noreferrer"
          variant="outline"
        >
          Read the reviews
        </ButtonLink>
      </div>

      {!compact ? (
        <p className="mt-8 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
          The customer comments below are reproduced as provided. Visit Google to see the full
          profile and latest reviews.
        </p>
      ) : null}
    </div>
  );
}
