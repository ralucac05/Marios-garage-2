import { business } from "@/features/business/data";
import { RotatingCar } from "@/features/hero/RotatingCar";
import { useScrollProgress } from "@/features/hero/useScrollRotation";
import { ButtonLink, ButtonRouterLink } from "@/shared/ui/Button";

/**
 * Cinematic hero with a car whose angle follows the section's native scroll
 * progress. Nothing is pinned and scrolling is never intercepted.
 */
export function CinematicHero() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  return (
    <div ref={ref} className="relative h-screen">
      <div className="flex h-screen flex-col items-center justify-center overflow-hidden px-6 pb-10 pt-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, oklch(0.28 0.008 260), oklch(0.13 0.004 260) 65%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 flex w-full max-w-6xl flex-col items-center text-center">
          <p className="eyebrow">{business.area}</p>
          <h1 className="text-metal mt-3 text-5xl font-extrabold leading-[0.95] sm:text-6xl md:text-7xl">
            {business.name}
          </h1>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base md:text-lg">
            {business.tagline}
          </p>

          <RotatingCar progress={progress} className="mt-12" />

          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <ButtonRouterLink to="/contact" size="lg">
              Contact
            </ButtonRouterLink>
            <ButtonLink href={business.phoneHref} variant="outline" size="lg">
              Call {business.phoneDisplay}
            </ButtonLink>
          </div>

          <p
            className="mt-8 text-[0.7rem] uppercase tracking-[0.3em] text-silver-dim transition-opacity duration-500"
            style={{ opacity: Math.max(0, 1 - progress * 6) }}
          >
            Scroll
          </p>
        </div>
      </div>
    </div>
  );
}
