import "server-only";

import { externalResources, resourceDocuments } from "@/data/resources";
import type { ExternalResource, ResourceDocument } from "@/types/content";

export async function getResourceDocuments(): Promise<readonly ResourceDocument[]> {
  return resourceDocuments;
}

export async function getExternalResources(): Promise<readonly ExternalResource[]> {
  return externalResources;
}
