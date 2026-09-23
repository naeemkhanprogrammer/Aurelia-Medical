import "server-only";

import { doctors } from "@/data/doctors";
import type { Doctor } from "@/types/content";

/** Doctor data access — see note in features/services/api.ts. */
const byOrder = (a: Doctor, b: Doctor) => a.order - b.order;

export async function getDoctors(): Promise<readonly Doctor[]> {
  return [...doctors].sort(byOrder);
}

export async function getFeaturedDoctors(): Promise<readonly Doctor[]> {
  return doctors.filter((doctor) => doctor.featured).sort(byOrder);
}

export async function getDoctorBySlug(slug: string): Promise<Doctor | undefined> {
  return doctors.find((doctor) => doctor.slug === slug);
}

export async function getDoctorsByService(serviceSlug: string): Promise<readonly Doctor[]> {
  return doctors.filter((doctor) => doctor.serviceSlugs.includes(serviceSlug)).sort(byOrder);
}

export async function getDoctorSlugs(): Promise<readonly string[]> {
  return doctors.map((doctor) => doctor.slug);
}
