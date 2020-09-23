import React from "react";
import styled from "styled-components";
import { GridType } from "../types";

interface GridProps {
  grid: GridType;
  onDotClick: (x: number, y: number) => void;
}

interface ContainerProps {
  size: number;
}

interface DotProps {
  alive: boolean;
}

const Container = styled.div`
  width: ${({ size }: ContainerProps) => size * 10}px;
  height: ${({ size }: ContainerProps) => size * 10}px;
  background: grey;
  line-height: 0;
  margin: 0 auto;
`;

const Dot = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  background: ${({ alive }: DotProps) => (alive ? "palevioletred" : "grey")};
`;

export function Grid({ grid, onDotClick }: GridProps) {
  return (
    <Container size={grid.length}>
      {grid.map((row, y) =>
        row.map((cell, x) => (
          <Dot
            key={`${x}-${y}`}
            onMouseEnter={(e) => e.buttons === 1 && onDotClick(x, y)}
            onMouseDown={() => onDotClick(x, y)}
            alive={cell}
          />
        ))
      )}
    </Container>
  );
}
