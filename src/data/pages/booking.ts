import { routes } from "@/config/routes";

export const bookingPageContent = {
  seo: {
    title: "Book an Appointment",
    description:
      "Book an appointment with Aurelia Medical Group in Red Deer, Alberta through our secure online booking partner.",
  },
  hero: {
    eyebrow: "Appointments",
    title: "Book your appointment",
    highlight: "appointment",
    description:
      "Booking is handled by our secure online booking partner. Choose a service below, or continue straight to booking.",
  },
  continueLabel: "Continue to secure booking",
  leavingNotice:
    "You'll be taken to our booking partner's secure website in a new tab. Aurelia Medical Group does not collect or store health information on this website.",
  steps: {
    title: "How booking works",
    items: [
      { title: "Choose your service", description: "Select the type of care you need." },
      {
        title: "Continue securely",
        description: "Pick a time on our booking partner's secure platform.",
      },
      {
        title: "Get confirmation",
        description: "You'll receive a confirmation and reminders from the platform.",
      },
    ],
  },
  byServiceTitle: "Book by service",
  referralBadge: "Referral required",
  directBadge: "Book directly",
  phone: {
    title: "Prefer to call?",
    description: "Our reception team is happy to help you book by phone during clinic hours.",
  },
  newPatients: {
    title: "New to Aurelia?",
    description: "Register as a new patient before your first family medicine visit.",
    linkLabel: "New patient information",
    href: routes.newPatients,
  },
} as const;
