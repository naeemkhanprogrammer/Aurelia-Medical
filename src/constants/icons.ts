/**
 * Every icon that content/config may reference by name.
 * Data files store an `IconName` string (serialisable, CMS-friendly); the
 * <Icon> component maps it to the actual SVG. Add a name here + in the registry
 * (`src/components/ui/icon.tsx`) to make a new icon available to content.
 */
export const ICON_NAMES = [
  "family",
  "lungs",
  "brain",
  "heart-pulse",
  "hand-heart",
  "stethoscope",
  "users",
  "map-pin",
  "phone",
  "mail",
  "clock",
  "calendar",
  "calendar-check",
  "shield-check",
  "file-text",
  "video",
  "user-plus",
  "clipboard",
  "receipt",
  "star",
  "thumbs-up",
  "check",
  "award",
  "languages",
  "graduation-cap",
  "briefcase",
  "building",
  "handshake",
  "sparkles",
  "baby",
  "activity",
  "book-open",
  "info",
  "help-circle",
  "accessibility",
  "megaphone",
  "lock",
  "badge-check",
] as const;

export type IconName = (typeof ICON_NAMES)[number];
