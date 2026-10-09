import type { GalleryCategory, GalleryImage } from "@/types/content";

export const galleryCategories: readonly GalleryCategory[] = [
  { id: "facility", label: "Our Facility" },
  { id: "care-spaces", label: "Care Spaces" },
  { id: "team", label: "Our Team" },
  { id: "community", label: "Community" },
];

/**
 * ⚠️ PLACEHOLDER IMAGES (generated, branded). Replace each `src` with a real photo
 * in /public/images/gallery and update `width`/`height`/`alt` to match.
 * Only publish people with written consent; never show identifiable patients.
 */
export const galleryImages: readonly GalleryImage[] = [
  {
    id: "clinic-exterior",
    src: "/images/gallery/clinic-exterior.jpg",
    width: 1600,
    height: 1067,
    categoryId: "facility",
    caption: "Clinic exterior",
    alt: "Exterior of Aurelia Medical Group in Red Deer",
  },
  {
    id: "reception",
    src: "/images/gallery/reception.jpg",
    width: 1067,
    height: 1600,
    categoryId: "facility",
    caption: "Reception & waiting area",
    alt: "Bright reception desk and waiting area",
  },
  {
    id: "family-consult-room",
    src: "/images/gallery/family-consult-room.jpg",
    width: 1400,
    height: 1400,
    categoryId: "care-spaces",
    caption: "Family medicine consult room",
    alt: "Family medicine consultation room",
  },
  {
    id: "respirology-suite",
    src: "/images/gallery/respirology-suite.jpg",
    width: 1600,
    height: 1067,
    categoryId: "care-spaces",
    caption: "Respirology suite",
    alt: "Respirology suite with breathing-test equipment",
  },
  {
    id: "child-friendly-room",
    src: "/images/gallery/child-friendly-room.jpg",
    width: 1067,
    height: 1600,
    categoryId: "care-spaces",
    caption: "Child & family room",
    alt: "Calm, child-friendly consultation room",
  },
  {
    id: "nurses-station",
    src: "/images/gallery/nurses-station.jpg",
    width: 1600,
    height: 1067,
    categoryId: "facility",
    caption: "Nursing station",
    alt: "Nursing station",
  },
  {
    id: "care-team",
    src: "/images/gallery/care-team.jpg",
    width: 1600,
    height: 1067,
    categoryId: "team",
    caption: "Our care team",
    alt: "Aurelia physicians and care team",
  },
  {
    id: "lobby-detail",
    src: "/images/gallery/lobby-detail.jpg",
    width: 1400,
    height: 1400,
    categoryId: "facility",
    caption: "Lobby detail",
    alt: "Design detail in the clinic lobby",
  },
  {
    id: "allied-health-room",
    src: "/images/gallery/allied-health-room.jpg",
    width: 1067,
    height: 1600,
    categoryId: "care-spaces",
    caption: "Allied health room",
    alt: "Allied health treatment room",
  },
  {
    id: "telemedicine-room",
    src: "/images/gallery/telemedicine-room.jpg",
    width: 1600,
    height: 1067,
    categoryId: "care-spaces",
    caption: "Telemedicine room",
    alt: "Private room for virtual appointments",
  },
  {
    id: "community-event",
    src: "/images/gallery/community-event.jpg",
    width: 1400,
    height: 1400,
    categoryId: "community",
    caption: "Community health day",
    alt: "Aurelia team at a community health event",
  },
  {
    id: "patient-education",
    src: "/images/gallery/pharmacy-corner.jpg",
    width: 1067,
    height: 1600,
    categoryId: "community",
    caption: "Patient education corner",
    alt: "Patient education materials display",
  },
];
