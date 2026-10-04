import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "surface-panel group rounded-xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-silver-dim/50",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-lg font-semibold tracking-tight md:text-xl">{children}</h3>;
}

export function CardBody({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{children}</p>;
}
