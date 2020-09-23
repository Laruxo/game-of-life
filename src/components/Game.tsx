import React, { useEffect, useState } from "react";
import { GridType } from "../types";
import { generateEmptyGrid, generateGrid } from "../helpers/grid";
import { calculateState } from "../helpers/game";
import { Controls } from "./Controls";
import { Grid } from "./Grid";
import { saveGrid, loadGrid } from "../helpers/storage";

// Generate random cell, small bias towards empty cell
const random = () => Math.random() > 0.7;

export function Game() {
  const [isPaused, setPaused] = useState(true);
  const [speed, setSpeed] = useState(100);
  const [grid, setGrid] = useState<GridType>(() => generateGrid(25, random));

  const onDotClick = (x: number, y: number) => {
    setGrid((old) => {
      const newGrid = JSON.parse(JSON.stringify(old));
      newGrid[y][x] = !newGrid[y][x];
      return newGrid;
    });
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setGrid((oldGrid) =>
        generateGrid(oldGrid.length, (x, y) => calculateState(oldGrid, x, y))
      );
    }, speed);

    return () => {
      clearInterval(interval);
    };
  }, [speed, isPaused]);

  return (
    <>
      <Controls
        size={grid.length}
        setSize={(size) => setGrid(generateGrid(size, random))}
        speed={speed}
        setSpeed={setSpeed}
        isPaused={isPaused}
        togglePause={() => setPaused(!isPaused)}
        reset={() => {
          setPaused(true);
          setGrid(generateEmptyGrid(grid.length));
        }}
        randomize={() => setGrid(generateGrid(grid.length, random))}
        save={() => saveGrid(grid)}
        load={() => setGrid(loadGrid() ?? generateEmptyGrid(25))}
      />

      <Grid grid={grid} onDotClick={onDotClick} />
    </>
  );
}
