import { GridType } from "../types";

export function saveGrid(grid: GridType) {
  localStorage.setItem("grid", JSON.stringify(grid));
}

export function loadGrid() {
  const loaded = localStorage.getItem("grid");
  if (loaded) {
    try {
      return JSON.parse(loaded);
    } catch (error) {
      console.error(error);
      localStorage.removeItem("grid");
    }
  }

  return null;
}
