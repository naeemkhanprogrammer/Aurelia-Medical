import { describe, expect, it } from "vitest";

import { distributeIntoColumns } from "@/lib/masonry";

const L = { width: 3, height: 2 };
const P = { width: 2, height: 3 };
const S = { width: 1, height: 1 };

const columnHeight = (items: { width: number; height: number }[], column: number[]) =>
  column.reduce((sum, index) => sum + items[index]!.height / items[index]!.width, 0);

describe("distributeIntoColumns", () => {
  it("keeps every item exactly once", () => {
    const items = [L, P, S, L, P, L];
    const columns = distributeIntoColumns(items, 3);
    expect(columns.flat().sort()).toEqual([0, 1, 2, 3, 4, 5]);
  });

  it("puts everything in one column when columnCount is 1", () => {
    expect(distributeIntoColumns([L, P, S], 1)).toEqual([[0, 1, 2]]);
  });

  it("balances column heights better than sequential filling", () => {
    const items = [L, P, S, L, P, L, L, S, P, L, S, P];
    const columns = distributeIntoColumns(items, 3);
    const heights = columns.map((column) => columnHeight(items, column));
    expect(Math.max(...heights) - Math.min(...heights)).toBeLessThan(1);
  });
});
