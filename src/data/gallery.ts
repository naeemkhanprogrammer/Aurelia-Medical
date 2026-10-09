import type { GalleryCategory, GalleryImage } from "@/types/content";

export const galleryCategories: readonly GalleryCategory[] = [
  { id: "facility", label: "Our Facility" },
  { id: "patient-care", label: "Patient Care" },
  { id: "team", label: "Our Team" },
  { id: "community", label: "Community" },
];

/**
 * ⚠️ DUMMY STOCK PHOTOS (Unsplash License — free for commercial use, no attribution
 * required; `credit` kept for our records). These are NOT Aurelia's staff or facility.
 * Replace with the clinic's own photography before launch: drop files into
 * /public/images/gallery and update `src`/`width`/`height`/`alt`/`caption`, then delete `credit`.
 * Only publish people with written consent; never show identifiable patients.
 * Categories with no images are hidden automatically.
 */
export const galleryImages: readonly GalleryImage[] = [
  {
    id: "family-consultation",
    src: "/images/gallery/family-consultation.jpg",
    blurDataURL:
      "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADwAQCdASoMAAcAA4BaJQBdgCPgdFeJ1WAA/ACnCowGEFXaZGytsthQVfCU5FAjvN7+XbtCrU5/YIQ4hsAAAA==",
    width: 1600,
    height: 900,
    categoryId: "patient-care",
    caption: "Family medicine consultation",
    alt: "A family physician listening to a patient during a consultation",
    credit: "Vitaly Gariev — https://unsplash.com/photos/iyeUwItlIPk",
  },
  {
    id: "waiting-area",
    src: "/images/gallery/waiting-area.jpg",
    blurDataURL:
      "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADwAQCdASoKAAwAA4BaJZwAAueGz7ZrigAA/ugc/ngDm08kdI914Ckspp2b/JFKZAl96Hpxz2b5sT+Yk5OBwNSUwR+Bpj0ukD8CAA==",
    width: 1368,
    height: 1600,
    categoryId: "facility",
    caption: "Calm, modern waiting area",
    alt: "Modern waiting area with black chairs and an olive tree",
    credit: "Amy Vosters — https://unsplash.com/photos/pxOQ-P97sA8",
  },
  {
    id: "nursing-team",
    src: "/images/gallery/nursing-team.jpg",
    blurDataURL:
      "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAAAQAgCdASoIAAwAA4BaJbAC7AEDferkWH4AAP7KrB77F4qVdVj9v31n83+tfpl0aalFxd1IsuQ1h7X0Ouul6u09PfGS3YqmDwRpnuI0+I8/HutgAAA=",
    width: 1067,
    height: 1600,
    categoryId: "team",
    caption: "Our nursing team",
    alt: "Smiling nurse in teal scrubs with arms crossed",
    credit: "Ocho Artex Media — https://unsplash.com/photos/rm7rZYdl3rY",
  },
  {
    id: "male-physician",
    src: "/images/gallery/male-physician.jpg",
    blurDataURL:
      "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAQCdASoMAAcAA4BaJYwAAutrGTKZKAD+3b87PD4lq+5qrwp99zAZ0LaCXE2EBtPHSoIULh/eTQb8uLr48iEvz3kEAA==",
    width: 1600,
    height: 900,
    categoryId: "team",
    caption: "Experienced physicians",
    alt: "Smiling male physician in a white coat with arms crossed",
    credit: "Vitaly Gariev — https://unsplash.com/photos/XqMo4OlBnh0",
  },
  {
    id: "pediatric-checkup",
    src: "/images/gallery/pediatric-checkup.jpg",
    blurDataURL:
      "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoMAAcAA4BaJZQAAvyD9WVWd4AA/uaYpXzJxaE9lyIgX2Ne652iSXkD1icJZl5UOomJdFha56kRrI3QBLjMSAAA",
    width: 1600,
    height: 900,
    categoryId: "patient-care",
    caption: "Paediatric check-up",
    alt: "Physician examining a young boy with a stethoscope while his mother watches",
    credit: "Vitaly Gariev — https://unsplash.com/photos/QY8-IuUV3wk",
  },
  {
    id: "female-physician",
    src: "/images/gallery/female-physician.jpg",
    blurDataURL:
      "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADwAQCdASoMAAcAA4BaJZQAD4xtpGbVwAQA/sB5mD67qjjWTzbTaUo3SYpUrPsxSIGG+q1cj7UwYaYdEgzWxGXAgAA=",
    width: 1600,
    height: 900,
    categoryId: "team",
    caption: "Welcoming, unhurried care",
    alt: "Smiling female physician with a stethoscope at her desk",
    credit: "Vitaly Gariev — https://unsplash.com/photos/_zbqco3m7dA",
  },
  {
    id: "bright-lounge",
    src: "/images/gallery/bright-lounge.jpg",
    blurDataURL:
      "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoJAAwAA4BaJQBYdh6RukB7TAgAzi7ej2lWm98r3X6uo6CMrfV/Z5qLS0Qo/OHN6lHvj/bVcMBGmYxWJy61MAAA",
    width: 1200,
    height: 1600,
    categoryId: "facility",
    caption: "Bright, light-filled spaces",
    alt: "Bright lounge with floor-to-ceiling windows and chairs",
    credit: "Sixteen Miles Out — https://unsplash.com/photos/7BxQRsH3f0c",
  },
  {
    id: "specialist-consultation",
    src: "/images/gallery/specialist-consultation.jpg",
    blurDataURL:
      "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoMAAcAA4BaJYwAAxYUE+DKmgAA/oX0gfzZc5jhjc4QxOohFqy+GnA80t2g8lzx3jXKrWL714mx38fJIctilIAA",
    width: 1600,
    height: 900,
    categoryId: "patient-care",
    caption: "Specialist consultation",
    alt: "Senior physician explaining a treatment plan to a patient",
    credit: "Vitaly Gariev — https://unsplash.com/photos/7-l5EL7YHI4",
  },
  {
    id: "clinic-hallway",
    src: "/images/gallery/clinic-hallway.jpg",
    blurDataURL:
      "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADQAQCdASoIAAwAA4BaJaACdADc6n3MAADN0g6/8EEMu39wde2e+hvA8qi6yMxX/DW4qk6HXG5tey+BJWq/AAAA",
    width: 1067,
    height: 1600,
    categoryId: "facility",
    caption: "Warm, welcoming interiors",
    alt: "Warmly lit hallway with framed botanical art and seating",
    credit: "Enio Pereira da Silva — https://unsplash.com/photos/mISkLiMzypI",
  },
  {
    id: "physician-portrait",
    src: "/images/gallery/physician-portrait.jpg",
    blurDataURL:
      "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAACwAQCdASoJAAwAA4BaJYwCdADZKTwAAP5oGfadn7O5bgzSHAZKSNMpOe7Fl9s8o/SjQUqAiOaV6mvRxmpACAAA",
    width: 1245,
    height: 1600,
    categoryId: "team",
    caption: "Dedicated to your health",
    alt: "Physician with a stethoscope standing with arms crossed",
    credit: "Vaibhav Vivian — https://unsplash.com/photos/3HIroMoyre8",
  },
  {
    id: "family-visit",
    src: "/images/gallery/family-visit.jpg",
    blurDataURL:
      "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAQCdASoMAAcAA4BaJQBWACBTz/8oAAD+vJxaAkCjthGu8hy33df0Ylu/G2Yce3ntdYCRuVCKcb1ak5g8ky1iflAAAA==",
    width: 1600,
    height: 900,
    categoryId: "patient-care",
    caption: "Care for the whole family",
    alt: "Physician talking with a mother and her young son",
    credit: "Vitaly Gariev — https://unsplash.com/photos/EiL21cqvo58",
  },
  {
    id: "blood-pressure-check",
    src: "/images/gallery/blood-pressure-check.jpg",
    blurDataURL:
      "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAAAQAgCdASoJAAwAA4BaJbACdAEXfPCB8QQAAOIn/p4mJPfHc88lhx2PdzcXwGaGtKPcv2AybL25gOCI18FqTRLjqdP+wek6CzbUGMZIb0H6AAAA",
    width: 1160,
    height: 1600,
    categoryId: "patient-care",
    caption: "Routine health checks",
    alt: "Nurse checking a patient's blood pressure",
    credit: "CDC — https://unsplash.com/photos/Y2lUjUiay-o",
  },
  {
    id: "care-team",
    src: "/images/gallery/care-team.jpg",
    blurDataURL:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADwAQCdASoMAAgAA4BaJZQC7AELX83BtgAA/vfxA6+JbczOFcEOzJ7MxMQjJKLeC7b1dmpGgAA=",
    width: 1600,
    height: 1096,
    categoryId: "team",
    caption: "Working together for you",
    alt: "Healthcare team walking down a bright corridor",
    credit: "Luis Melendez — https://unsplash.com/photos/Pd4lRfKo16U",
  },
];
