export interface Sized {
  width: number;
  height: number;
}

/**
 * Greedy masonry distribution: each item goes into the currently shortest
 * column (heights measured as height/width, i.e. relative to column width).
 * Returns item indexes per column, preserving order within each column.
 */
export function distributeIntoColumns(items: readonly Sized[], columnCount: number): number[][] {
  const columns: number[][] = Array.from({ length: columnCount }, () => []);
  const heights: number[] = Array.from({ length: columnCount }, () => 0);

  items.forEach((item, index) => {
    let shortest = 0;
    for (let column = 1; column < columnCount; column += 1) {
      if ((heights[column] ?? 0) < (heights[shortest] ?? 0)) shortest = column;
    }
    columns[shortest]?.push(index);
    heights[shortest] = (heights[shortest] ?? 0) + item.height / item.width;
  });

  return columns;
}
