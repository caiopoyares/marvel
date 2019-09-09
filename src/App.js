import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "normalize.css";

import Header from "./components/Header";
import StyledApp from "./App.style";
import CharactersList from "./components/CharactersList";
import SearchCharacters from "./components/SearchCharacters";
import HeroDescription from "./components/HeroDescription";

function App() {
  return (
    <StyledApp>
      <Router>
        <Header />
        <Route path="/" exact component={CharactersList} />
        <Route path="/search" component={SearchCharacters} />
        <Route path="/hero/:heroId" component={HeroDescription} />
      </Router>
    </StyledApp>
  );
}

export default App;
