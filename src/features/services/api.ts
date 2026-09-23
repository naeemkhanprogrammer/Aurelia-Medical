import "server-only";

import { services } from "@/data/services";
import type { Service } from "@/types/content";

/**
 * Service data access. Async by design: today it reads static data, later it can
 * call a CMS/API without changing any caller (see docs/01-architecture.md).
 */
const byOrder = (a: Service, b: Service) => a.order - b.order;

export async function getServices(): Promise<readonly Service[]> {
  return [...services].sort(byOrder);
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  return services.find((service) => service.slug === slug);
}

export async function getServicesBySlugs(slugs: readonly string[]): Promise<readonly Service[]> {
  return services.filter((service) => slugs.includes(service.slug)).sort(byOrder);
}

export async function getServiceSlugs(): Promise<readonly string[]> {
  return services.map((service) => service.slug);
}
