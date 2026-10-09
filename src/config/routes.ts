/**
 * Every internal route in one place. Components never hardcode paths.
 */
export const routes = {
  home: "/",
  about: "/about",
  doctors: "/doctors",
  doctor: (slug: string) => `/doctors/${slug}`,
  services: "/services",
  service: (slug: string) => `/services/${slug}`,
  bookAppointment: "/book-appointment",
  insurance: "/insurance",
  patientResources: "/patient-resources",
  careers: "/careers",
  contact: "/contact",
  gallery: "/gallery",
  faqs: "/faqs",
  privacyPolicy: "/privacy-policy",
  // Progressive ("coming soon") pages
  referrals: "/referrals",
  newPatients: "/new-patients",
  telemedicine: "/telemedicine",
  communityPrograms: "/community-programs",
} as const;

type RouteValue = (typeof routes)[keyof typeof routes];
/** Static (non-parameterised) routes, used by the sitemap. */
export type StaticRoute = Extract<RouteValue, string>;
