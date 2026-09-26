import type { ContactConfig } from "@/types/site";

/**
 * Clinic contact details. ⚠️ ALL VALUES ARE PLACEHOLDERS — replace once the clinic confirms.
 */
export const contactConfig: ContactConfig = {
  phone: { display: "(403) 555-1234", e164: "+14035551234" },
  fax: { display: "(403) 555-1235", e164: "+14035551235" },
  email: "info@aureliamedical.ca",
  address: {
    street: "5010 50th Street",
    city: "Red Deer",
    region: "Alberta",
    regionCode: "AB",
    postalCode: "T4N 1X7",
    country: "Canada",
    countryCode: "CA",
  },
  geo: { latitude: 52.2681, longitude: -113.8112 },
  timeZone: "America/Edmonton",
  hours: [
    {
      label: "Mon – Thu",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "18:00",
    },
    { label: "Friday", days: ["Friday"], opens: "08:00", closes: "16:00" },
    { label: "Saturday", days: ["Saturday"] },
    { label: "Sunday", days: ["Sunday"] },
  ],
  hoursNote: "Urgent care by appointment",
  visitInfo: [
    {
      title: "Parking",
      description:
        "Free patient parking is available on site, including accessible stalls near the entrance.",
    },
    {
      title: "Accessibility",
      description:
        "Step-free, wheelchair-accessible entrance, elevator access and accessible washrooms.",
    },
    {
      title: "Public transit",
      description: "Served by Red Deer Transit routes stopping on 50th Street.",
    },
  ],
  map: {
    embedUrl: "https://www.google.com/maps?q=5010+50+Street,+Red+Deer,+AB+T4N+1X7&output=embed",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=5010+50+Street,+Red+Deer,+AB+T4N+1X7",
    title: "Map showing the location of Aurelia Medical Group in Red Deer, Alberta",
  },
};
