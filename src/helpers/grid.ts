import { GridType } from "../types";

export function generateEmptyGrid(size: number): GridType {
  return Array.from({ length: size }, () => Array(size).fill(false));
}

export function generateGrid(
  size: number,
  fillFunc: (x: number, y: number) => boolean
): GridType {
  return Array.from({ length: size }, (_, y) =>
    Array.from({ length: size }, (_, x) => fillFunc(x, y))
  );
}
