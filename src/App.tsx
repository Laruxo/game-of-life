import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Game } from "./components/Game";

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: #333333;
`;

export function App() {
  return (
    <>
      <GlobalStyle />
      <Title>Game of Life</Title>
      <Game />
    </>
  );
}
