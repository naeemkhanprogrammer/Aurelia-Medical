export interface NavItem {
  label: string;
  href: string;
  /** Match nested routes (e.g. /doctors/[slug]) when computing the active state. */
  matchNested?: boolean;
}

export interface NavGroup {
  title: string;
  items: readonly NavItem[];
}

export type SocialPlatform = "facebook" | "instagram" | "linkedin";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}
