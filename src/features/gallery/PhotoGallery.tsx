import { garagePhotos } from "@/features/business/data";

export function PhotoGallery() {
  return (
    <ul className="mt-12 grid gap-5 sm:grid-cols-2">
      {garagePhotos.map((photo) => (
        <li
          key={photo.caption}
          className="group relative overflow-hidden rounded-xl border border-border"
        >
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            width={1280}
            height={960}
            className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
          <p className="absolute bottom-4 left-5 font-display text-sm font-semibold uppercase tracking-[0.2em] text-silver">
            {photo.caption}
          </p>
        </li>
      ))}
    </ul>
  );
}
