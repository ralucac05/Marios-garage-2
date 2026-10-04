import { business, openingHours } from "@/features/business/data";
import { ButtonLink } from "@/shared/ui/Button";

export function CallButton({ size = "lg" }: { size?: "md" | "lg" }) {
  return (
    <ButtonLink href={business.phoneHref} size={size}>
      Call {business.phoneDisplay}
    </ButtonLink>
  );
}

export function ContactDetails() {
  return (
    <div className="surface-panel rounded-xl p-8 md:p-10">
      <dl className="space-y-6">
        <div>
          <dt className="eyebrow">Phone</dt>
          <dd className="mt-2">
            <a
              href={business.phoneHref}
              className="font-display text-2xl font-bold tracking-tight text-foreground underline-offset-4 hover:text-primary hover:underline md:text-3xl"
            >
              {business.phoneDisplay}
            </a>
          </dd>
        </div>
        <div>
          <dt className="eyebrow">Address</dt>
          <dd className="mt-2 text-base text-muted-foreground">
            {business.address}
            <br />
            <span className="text-sm">{business.area}</span>
          </dd>
        </div>
        <div>
          <dt className="eyebrow">Find us</dt>
          <dd className="mt-2">
            <a
              href={business.googleListingUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-silver underline underline-offset-4 hover:text-primary"
            >
              Open the garage on Google
            </a>
          </dd>
        </div>
      </dl>

      <div className="mt-8 flex flex-wrap gap-3">
        <CallButton />
      </div>
    </div>
  );
}

export function OpeningHoursTable() {
  return (
    <div className="surface-panel rounded-xl p-8 md:p-10">
      <p className="eyebrow">Opening hours</p>
      <table className="mt-5 w-full text-sm">
        <caption className="sr-only">Marios Garage opening hours</caption>
        <tbody>
          {openingHours.map((entry) => (
            <tr key={entry.day} className="border-b border-border/60 last:border-0">
              <th scope="row" className="py-3 text-left font-medium text-foreground">
                {entry.day}
              </th>
              <td
                className={`py-3 text-right ${entry.closed ? "text-silver-dim" : "text-muted-foreground"}`}
              >
                {entry.hours}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
