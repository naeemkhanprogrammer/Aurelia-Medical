import "server-only";

import { faqCategories } from "@/data/faqs";
import type { FaqCategory } from "@/types/content";

export async function getFaqCategories(): Promise<readonly FaqCategory[]> {
  return faqCategories;
}
