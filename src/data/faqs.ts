import type { FaqCategory } from "@/types/content";

/** FAQs. ⚠️ Placeholder answers — must be reviewed and approved by the clinic. */
export const faqCategories: readonly FaqCategory[] = [
  {
    id: "appointments",
    title: "Appointments & booking",
    items: [
      {
        id: "how-to-book",
        question: "How do I book an appointment?",
        answer: [
          "You can book online through our secure booking partner using any “Book Appointment” button on this website, or call our reception team during clinic hours.",
        ],
      },
      {
        id: "virtual-visits",
        question: "Do you offer virtual appointments?",
        answer: [
          "Yes. Many follow-up and some initial appointments can be done virtually. Choose “Virtual visit” when booking, or ask our reception team whether your appointment is suitable.",
        ],
      },
      {
        id: "cancel",
        question: "How do I cancel or reschedule?",
        answer: [
          "Use the link in your booking confirmation, or call the clinic. We ask for at least 24 hours' notice so we can offer the time to another patient.",
        ],
      },
      {
        id: "what-to-bring",
        question: "What should I bring to my appointment?",
        answer: [
          "Please bring your Alberta Personal Health Card (or provincial health card), a list of your current medications, and any relevant test results or referral documents.",
        ],
      },
    ],
  },
  {
    id: "new-patients",
    title: "New patients",
    items: [
      {
        id: "accepting",
        question: "Are you accepting new patients?",
        answer: [
          "Our family practice is registering new patients. Availability can change quickly, so please check the New Patients page or call the clinic for the latest status.",
        ],
      },
      {
        id: "register",
        question: "How do I register as a new patient?",
        answer: [
          "Registration is completed online through our secure patient registration platform, linked from the New Patients page.",
        ],
      },
    ],
  },
  {
    id: "referrals",
    title: "Referrals & specialist care",
    items: [
      {
        id: "need-referral",
        question: "Do I need a referral to see a specialist?",
        answer: [
          "Yes. Respirology, Internal Medicine and Child Psychiatry require a referral from a physician or nurse practitioner. Family Medicine does not.",
        ],
      },
      {
        id: "referral-status",
        question: "How will I know my referral was received?",
        answer: [
          "We contact patients directly once a referral has been triaged. If you haven't heard from us within two weeks, please call the clinic.",
        ],
      },
    ],
  },
  {
    id: "billing",
    title: "Insurance & billing",
    items: [
      {
        id: "ahcip",
        question: "Are visits covered by Alberta Health Care?",
        answer: [
          "Medically necessary physician services are covered by the Alberta Health Care Insurance Plan (AHCIP) when you present a valid Alberta Personal Health Card.",
        ],
      },
      {
        id: "uninsured",
        question: "Are there any fees?",
        answer: [
          "Some services are not covered by AHCIP, such as sick notes, forms and missed-appointment fees. See our Insurance & Billing page for details.",
        ],
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy",
    items: [
      {
        id: "data",
        question: "Does this website collect my health information?",
        answer: [
          "No. This website does not collect or store personal health information. Booking, registration and referrals are handled by secure, dedicated platforms operated for the clinic.",
        ],
      },
    ],
  },
];
