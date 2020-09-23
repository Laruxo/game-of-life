import { calculateState, countNeighbours } from "./game";

describe("game logic", () => {
  describe("countNeighbours", () => {
    it("should work with filled grid", () => {
      const grid = [
        [true, true, true],
        [true, true, true],
        [true, true, true],
      ];
      expect(countNeighbours(grid, 0, 0)).toBe(3);
      expect(countNeighbours(grid, 0, 1)).toBe(5);
      expect(countNeighbours(grid, 0, 2)).toBe(3);
      expect(countNeighbours(grid, 1, 0)).toBe(5);
      expect(countNeighbours(grid, 1, 1)).toBe(8);
      expect(countNeighbours(grid, 1, 2)).toBe(5);
      expect(countNeighbours(grid, 2, 0)).toBe(3);
      expect(countNeighbours(grid, 2, 1)).toBe(5);
      expect(countNeighbours(grid, 2, 2)).toBe(3);
    });
    it("should work with all dead cells", () => {
      const grid = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ];
      expect(countNeighbours(grid, 0, 0)).toBe(0);
      expect(countNeighbours(grid, 0, 1)).toBe(0);
      expect(countNeighbours(grid, 1, 1)).toBe(0);
    });
    it("should work with mix of alive and dead cells", () => {
      const grid = [
        [false, false, false],
        [true, true, false],
        [false, false, true],
      ];
      expect(countNeighbours(grid, 0, 0)).toBe(2);
      expect(countNeighbours(grid, 0, 1)).toBe(1);
      expect(countNeighbours(grid, 1, 1)).toBe(2);
    });
  });

  describe("calculateState", () => {
    it("should handle underpopulated alive cell", () => {
      const grid = [
        [false, false, false],
        [false, true, false],
        [false, false, true],
      ];
      expect(calculateState(grid, 1, 1)).toBe(false);
    });
    it("should handle overpopulated alive cell", () => {
      const grid = [
        [true, true, true],
        [true, true, true],
        [true, true, true],
      ];
      expect(calculateState(grid, 1, 1)).toBe(false);
    });
    it("should handle regular alive cell", () => {
      const grid = [
        [true, true, true],
        [false, true, false],
        [false, false, false],
      ];
      expect(calculateState(grid, 1, 1)).toBe(true);
    });
    it("should handle reproduction ready dead cell", () => {
      const grid = [
        [true, true, true],
        [false, false, false],
        [false, false, false],
      ];
      expect(calculateState(grid, 1, 1)).toBe(true);
    });
    it("should handle regular dead cell", () => {
      const grid = [
        [false, false, true],
        [false, false, false],
        [false, false, false],
      ];
      expect(calculateState(grid, 1, 1)).toBe(false);
    });
  });
});
