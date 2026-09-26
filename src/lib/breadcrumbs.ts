import { routes } from "@/config/routes";
import { uiStrings } from "@/data/common";

export interface Crumb {
  name: string;
  path: string;
}

/** Home → …trail. Used for both the visual breadcrumbs and BreadcrumbList JSON-LD. */
export function buildBreadcrumbs(...trail: Crumb[]): Crumb[] {
  return [{ name: uiStrings.breadcrumbHome, path: routes.home }, ...trail];
}
