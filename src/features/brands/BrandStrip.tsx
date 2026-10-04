import { brands } from "@/features/business/data";

export function BrandStrip() {
  return (
    <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {brands.map((brand) => (
        <li key={brand.name} className="bg-surface p-7 transition-colors hover:bg-surface-raised">
          <p className="font-display text-lg font-bold tracking-tight md:text-xl">{brand.name}</p>
          <p className="mt-2 text-sm text-muted-foreground">{brand.note}</p>
        </li>
      ))}
    </ul>
  );
}
