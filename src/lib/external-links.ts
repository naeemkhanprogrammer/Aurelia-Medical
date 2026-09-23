import { externalLinks } from "@/config/external-links";
import type { ExternalLinkKey } from "@/types/common";

type ParamKeys<K extends ExternalLinkKey> = (typeof externalLinks)[K] extends { params: infer P }
  ? keyof P
  : never;

/**
 * Build the outbound URL for a third-party platform, optionally pre-selecting
 * values the platform supports (e.g. service). Only non-identifying values are
 * ever passed — never patient data.
 */
export function buildExternalUrl<K extends ExternalLinkKey>(
  key: K,
  values?: Partial<Record<ParamKeys<K>, string | undefined>>,
): string {
  const link = externalLinks[key];
  const url = new URL(link.url);

  if (values && "params" in link) {
    const params: Readonly<Record<string, string>> = link.params;
    for (const [name, value] of Object.entries(values)) {
      const queryKey = params[name];
      if (queryKey && typeof value === "string" && value.length > 0) {
        url.searchParams.set(queryKey, value);
      }
    }
  }
  return url.toString();
}

export function getExternalLink(key: ExternalLinkKey) {
  return externalLinks[key];
}
