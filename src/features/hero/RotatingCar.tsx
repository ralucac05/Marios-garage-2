import { lazy, Suspense } from "react";
import { ClientOnly } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import rightAsset from "@/assets/mercedes-right.png.asset.json";

const CarCanvas = lazy(() => import("./CarCanvas"));
const TURN_DEGREES = 350;

function getRotation(progress: number) {
  return Math.min(1, Math.max(0, progress)) * TURN_DEGREES;
}

const fallback = <img src={rightAsset.url} alt="" aria-hidden="true" className="h-full w-full object-contain" />;

/** Native page scroll controls both the turn and the supplied model's door clip. */
export function RotatingCar({ progress, className }: { progress: number; className?: string }) {
  const angle = getRotation(progress);
  const clampedProgress = angle / TURN_DEGREES;

  return (
    <div
      className={cn(
        "relative mx-auto h-[38vh] min-h-64 w-full max-w-5xl select-none sm:h-[45vh]",
        className,
      )}
      data-rotation-angle={angle}
      role="img"
      aria-label="Mercedes-Benz E-Class rotating as its doors open when scrolling down and close when scrolling up"
    >
      <ClientOnly fallback={fallback}>
        <Suspense fallback={fallback}>
          <CarCanvas progress={clampedProgress} />
        </Suspense>
      </ClientOnly>
    </div>
  );
}
