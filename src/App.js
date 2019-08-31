import React from "react";
import "normalize.css";
import Header from "./components/Header";
import StyledApp from "./App.style";
import CharactersList from "./components/CharactersList";

function App() {
  return (
    <StyledApp>
      <Header />
      <CharactersList />
    </StyledApp>
  );
}

export default App;
