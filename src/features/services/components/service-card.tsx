import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { routes } from "@/config/routes";
import { uiStrings } from "@/data/common";
import type { Service } from "@/types/content";

/** Large service card for the services overview page. */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card interactive padding="lg" className="group flex h-full flex-col">
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-16 place-items-center rounded-xl bg-primary text-accent">
          <Icon name={service.icon} className="size-8" />
        </span>
        {service.referralRequired && <Badge variant="accent">{uiStrings.referralRequired}</Badge>}
      </div>
      <h2 className="mt-6 text-h3">
        <Link
          href={routes.service(service.slug)}
          className="after:absolute after:inset-0 after:rounded-xl after:content-[''] focus-visible:outline-none"
        >
          {service.name}
        </Link>
      </h2>
      <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{service.summary}</p>
      <span
        aria-hidden
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-heading"
      >
        {uiStrings.learnMore}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Card>
  );
}
