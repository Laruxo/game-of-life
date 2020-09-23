import { GridType } from "../types";

export function countNeighbours(grid: GridType, x: number, y: number): number {
  return [
    // top row
    grid?.[y + 1]?.[x - 1],
    grid?.[y + 1]?.[x],
    grid?.[y + 1]?.[x + 1],
    // center row
    grid?.[y]?.[x - 1],
    grid?.[y]?.[x + 1],
    // bottom row
    grid?.[y - 1]?.[x - 1],
    grid?.[y - 1]?.[x],
    grid?.[y - 1]?.[x + 1],
  ].filter(Boolean).length;
}

export function calculateState(grid: GridType, x: number, y: number): boolean {
  const neighbours = countNeighbours(grid, x, y);
  if (grid[y][x]) {
    if (neighbours < 2) {
      // alive cell dies by underpopulation
      return false;
    } else if (neighbours > 3) {
      // alive cell dies by overpopulation
      return false;
    }
    // cell lives to next generation
    return true;
  }
  // dead cell
  if (neighbours === 3) {
    return true; // dead cell reproduction
  }
  return false;
}
