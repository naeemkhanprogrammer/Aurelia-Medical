export const galleryPageContent = {
  seo: {
    title: "Gallery",
    description:
      "Take a look inside Aurelia Medical Group in Red Deer, Alberta — our facility, care spaces, team and community.",
  },
  hero: {
    eyebrow: "Gallery",
    title: "A look inside Aurelia",
    highlight: "inside Aurelia",
    description:
      "Modern, welcoming spaces designed around your comfort — explore our clinic before your first visit.",
  },
  filterLabel: "Filter gallery",
  allLabel: "All",
  resultsLabel: (count: number) => `${count} ${count === 1 ? "photo" : "photos"}`,
  openImageLabel: (caption: string) => `Open image: ${caption}`,
  lightbox: {
    label: "Image viewer",
    close: "Close",
    previous: "Previous image",
    next: "Next image",
    counter: (current: number, total: number) => `${current} / ${total}`,
  },
  emptyState: "No photos in this category yet.",
} as const;
