import { Link } from "@tanstack/react-router";
import { business, openingHours } from "@/features/business/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/40 px-6 py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-extrabold uppercase tracking-[0.2em] text-silver">
            {business.name}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">{business.category}</p>
          <p className="mt-1 text-sm text-muted-foreground">{business.area}</p>
          <p className="mt-4 text-xs text-muted-foreground">
            3D car by{" "}
            <a href="https://sketchfab.com/3d-models/mercedes-e-class-w212-119c5e10733142b197aa53b86f6aeb04" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-primary">Peter_D</a>
            {" "}· CC BY 4.0
          </p>
        </div>

        <div>
          <p className="eyebrow">Contact</p>
          <a
            href={business.phoneHref}
            className="mt-3 block text-base text-foreground hover:text-primary"
          >
            {business.phoneDisplay}
          </a>
          <p className="mt-2 text-sm text-muted-foreground">{business.address}</p>
          <a
            href={business.googleListingUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block text-sm text-silver underline underline-offset-4 hover:text-primary"
          >
            Google listing
          </a>
        </div>

        <div>
          <p className="eyebrow">Hours</p>
          <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
            <li>Monday – Friday: {openingHours[0]?.hours}</li>
            <li>Saturday &amp; Sunday: Closed</li>
          </ul>
          <ul className="mt-5 flex flex-wrap gap-4 text-xs uppercase tracking-[0.18em] text-silver-dim">
            <li>
              <Link to="/services" className="hover:text-foreground">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="hover:text-foreground">
                Reviews
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
