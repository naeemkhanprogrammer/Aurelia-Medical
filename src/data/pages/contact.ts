export const contactPageContent = {
  seo: {
    title: "Contact Us",
    description:
      "Contact Aurelia Medical Group in Red Deer, Alberta — phone, fax, email, clinic hours, directions and parking information.",
  },
  hero: {
    eyebrow: "Contact",
    title: "We're here to help",
    highlight: "here to help",
    description:
      "Call, visit or send us a secure enquiry. Our reception team will be happy to assist you.",
  },
  methods: {
    title: "Get in touch",
    phone: { label: "Call us", description: "Reception, bookings and general questions." },
    fax: { label: "Fax", description: "For healthcare providers and records requests." },
    email: { label: "Email", description: "General, non-medical enquiries only." },
    enquiry: {
      label: "Secure enquiry",
      description: "Send a non-urgent message through our secure enquiry platform.",
      action: "Send an enquiry",
    },
  },
  privacyNote:
    "Please don't include personal health information in email. Use our secure enquiry platform or call the clinic instead.",
  visit: {
    title: "Visit the clinic",
    directionsLabel: "Get directions",
  },
  hours: {
    title: "Clinic hours",
    openNow: "Open now",
    closedNow: "Closed now",
    opensAt: (time: string) => `Opens ${time}`,
    closesAt: (time: string) => `Closes ${time}`,
  },
  map: {
    title: "Find us",
    consentTitle: "Map is loaded on request",
    consentDescription:
      "The map is provided by Google, which may set cookies and receive your IP address. Load it only if you're comfortable, or open directions in your own maps app.",
    loadLabel: "Load map",
  },
} as const;
