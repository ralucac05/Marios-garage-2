import type { Service } from "@/features/business/data";
import { Card, CardBody, CardTitle } from "@/shared/ui/Card";

export function ServiceGrid({ services, columns = 2 }: { services: Service[]; columns?: 2 | 3 }) {
  return (
    <ul
      className={`mt-12 grid gap-5 ${columns === 3 ? "md:grid-cols-3" : "sm:grid-cols-2"}`}
    >
      {services.map((service) => (
        <li key={service.id}>
          <Card className="h-full">
            <CardTitle>{service.title}</CardTitle>
            <CardBody>{service.description}</CardBody>
          </Card>
        </li>
      ))}
    </ul>
  );
}
