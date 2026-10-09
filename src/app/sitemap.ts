import type { MetadataRoute } from "next";

import { env } from "@/config/env";
import { routes } from "@/config/routes";
import {
  communityProgramsPageContent,
  newPatientsPageContent,
  referralsPageContent,
  telemedicinePageContent,
} from "@/data/pages/progressive";
import { getDoctorSlugs } from "@/features/doctors/api";
import { getServiceSlugs } from "@/features/services/api";

type Entry = MetadataRoute.Sitemap[number];
type Page = { path: string; priority: number; changeFrequency: Entry["changeFrequency"] };

const STATIC_PAGES: readonly Page[] = [
  { path: routes.home, priority: 1, changeFrequency: "weekly" },
  { path: routes.services, priority: 0.9, changeFrequency: "monthly" },
  { path: routes.doctors, priority: 0.9, changeFrequency: "monthly" },
  { path: routes.bookAppointment, priority: 0.9, changeFrequency: "monthly" },
  { path: routes.contact, priority: 0.8, changeFrequency: "yearly" },
  { path: routes.about, priority: 0.7, changeFrequency: "yearly" },
  { path: routes.gallery, priority: 0.6, changeFrequency: "monthly" },
  { path: routes.insurance, priority: 0.6, changeFrequency: "yearly" },
  { path: routes.patientResources, priority: 0.6, changeFrequency: "monthly" },
  { path: routes.faqs, priority: 0.6, changeFrequency: "monthly" },
  { path: routes.careers, priority: 0.5, changeFrequency: "weekly" },
  { path: routes.privacyPolicy, priority: 0.2, changeFrequency: "yearly" },
];

/** Progressive pages are only listed once their content is published (they're noindex until then). */
const PROGRESSIVE_PAGES = [
  { path: routes.referrals, content: referralsPageContent },
  { path: routes.newPatients, content: newPatientsPageContent },
  { path: routes.telemedicine, content: telemedicinePageContent },
  { path: routes.communityPrograms, content: communityProgramsPageContent },
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [doctorSlugs, serviceSlugs] = await Promise.all([getDoctorSlugs(), getServiceSlugs()]);
  const url = (path: string) => new URL(path, env.siteUrl).toString();

  const published: Page[] = PROGRESSIVE_PAGES.filter((page) => page.content.published).map(
    (page) => ({
      path: page.path,
      priority: 0.6,
      changeFrequency: "monthly",
    }),
  );

  return [
    ...[...STATIC_PAGES, ...published].map((page) => ({
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
