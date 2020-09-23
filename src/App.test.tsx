import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

describe("App component", () => {
  it("should render", () => {
    const { getByText } = render(<App />);
    expect(getByText("Game of Life")).toBeTruthy();
  });
});
