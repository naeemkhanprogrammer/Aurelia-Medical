import type { MetadataRoute } from "next";

import { env } from "@/config/env";
import { routes } from "@/config/routes";
import { getDoctorSlugs } from "@/features/doctors/api";
import { getServiceSlugs } from "@/features/services/api";

type Entry = MetadataRoute.Sitemap[number];

const STATIC_PAGES: readonly {
  path: string;
  priority: number;
  changeFrequency: Entry["changeFrequency"];
}[] = [
  { path: routes.home, priority: 1, changeFrequency: "weekly" },
  { path: routes.services, priority: 0.9, changeFrequency: "monthly" },
  { path: routes.doctors, priority: 0.9, changeFrequency: "monthly" },
  { path: routes.bookAppointment, priority: 0.9, changeFrequency: "monthly" },
  { path: routes.about, priority: 0.7, changeFrequency: "yearly" },
  { path: routes.contact, priority: 0.8, changeFrequency: "yearly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [doctorSlugs, serviceSlugs] = await Promise.all([getDoctorSlugs(), getServiceSlugs()]);
  const url = (path: string) => new URL(path, env.siteUrl).toString();

  return [
    ...STATIC_PAGES.map((page) => ({
      url: url(page.path),
      priority: page.priority,
      changeFrequency: page.changeFrequency,
    })),
    ...serviceSlugs.map((slug) => ({
      url: url(routes.service(slug)),
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    ...doctorSlugs.map((slug) => ({
      url: url(routes.doctor(slug)),
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
  ];
}
