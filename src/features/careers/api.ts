import "server-only";

import { careerPositions } from "@/data/careers";
import type { CareerPosition } from "@/types/content";

export async function getOpenPositions(): Promise<readonly CareerPosition[]> {
  return careerPositions;
}
