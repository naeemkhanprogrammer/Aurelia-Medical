/**
 * Shared UI microcopy (buttons, aria-labels, status text).
 * Centralised so the site can be translated later without touching components —
 * see docs/01-architecture.md § i18n.
 */
export const uiStrings = {
  skipToContent: "Skip to main content",
  primaryNavLabel: "Main",
  footerNavLabel: "Footer",
  mobileNavLabel: "Mobile",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  homeLinkLabel: "Aurelia Medical Group — home",
  bookAppointment: "Book Appointment",
  findDoctor: "Find a Doctor",
  learnMore: "Learn more",
  viewProfile: "View profile",
  viewAll: "View all",
  opensInNewTab: "(opens in a new tab)",
  previous: "Previous",
  next: "Next",
  callUs: "Call",
  orCall: "Or call",
  emailUs: "Email",
  closed: "Closed",
  getDirections: "Get directions",
  breadcrumbLabel: "Breadcrumb",
  breadcrumbHome: "Home",
  yearsExperience: (years: number) => `${years}+ years experience`,
  ratingLabel: (rating: number) => `Rated ${rating} out of 5`,
  acceptingPatients: "Accepting new patients",
  notAcceptingPatients: "Not currently accepting new patients",
  referralRequired: "Referral required",
  placeholderLinkWarning:
    "Placeholder link — the clinic's platform URL has not been configured yet.",
  footer: {
    contactTitle: "Contact Us",
    hoursTitle: "Clinic Hours",
    stayConnectedTitle: "Stay Connected",
    stayConnectedText: "Sign up for clinic updates and health tips from our team.",
    subscribeLabel: "Subscribe to updates",
    privacyNote: "We respect your privacy.",
    socialTitle: "Follow us",
    copyright: (year: number, name: string) => `© ${year} ${name}. All rights reserved.`,
  },
  error: {
    title: "Something went wrong",
    description:
      "We couldn't load this page. Please try again, or contact the clinic if the problem continues.",
    retry: "Try again",
  },
  notFound: {
    eyebrow: "Error 404",
    title: "We couldn't find that page",
    description: "The page may have moved or no longer exists. Try one of these instead:",
    homeLabel: "Back to home",
  },
  loading: "Loading…",
  emergencyNotice:
    "In a medical emergency, call 911 or go to the nearest emergency department. For 24/7 health advice, call Health Link at 811.",
  emergencyLabel: "Medical emergency?",
} as const;
