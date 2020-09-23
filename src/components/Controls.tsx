import React, { Dispatch, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.3rem;
`;

const Form = styled.form`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.3rem;
`;

const Input = styled.input`
  flex: 1;
`;

const Button = styled.button`
  flex: 1;
`;

interface ControlsProps {
  size: number;
  setSize: Dispatch<number>;
  speed: number;
  setSpeed: Dispatch<number>;
  isPaused: boolean;
  togglePause: () => void;
  reset: () => void;
  randomize: () => void;
  save: () => void;
  load: () => void;
}

export function Controls({
  size,
  setSize,
  speed,
  setSpeed,
  isPaused,
  togglePause,
  reset,
  randomize,
  save,
  load,
}: ControlsProps) {
  const [gameSpeed, setGameSpeed] = useState(speed);

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const input = form[0] as HTMLInputElement;
          setSize(Number(input.value));
        }}
      >
        <label htmlFor="size">Grid Size:</label>
        <Input name="size" type="number" defaultValue={size} min={3} max={50} />
        <Button>Save</Button>
      </Form>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          setSpeed(gameSpeed);
        }}
      >
        <label htmlFor="size">Game speed:</label>
        <Input
          type="number"
          value={gameSpeed}
          onChange={(e) => setGameSpeed(Number(e.target.value))}
          min={10}
        />
        <Button>Save</Button>
      </Form>

      <Container>
        <Button type="button" onClick={togglePause}>
          {isPaused ? "Play" : "Pause"}
        </Button>

        <Button type="button" onClick={reset}>
          Reset
        </Button>

        <Button type="button" onClick={randomize}>
          Randomize
        </Button>
      </Container>

      <Container>
        <Button type="button" onClick={save}>
          Save
        </Button>
        <Button type="button" onClick={load}>
          Load
        </Button>
      </Container>
    </>
  );
}
