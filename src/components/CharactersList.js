import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CharactersContainer,
  List,
  Image,
  ImageContainer
} from "./CharactersList.style.js";

const endPoint = "https://gateway.marvel.com:443/v1/public";
const apiKey = "68656f31c3623d9a8cfcc697750b60bc";

function CharactersList() {
  const [heroes, setHeroes] = useState([]);
  useEffect(() => {
    axios
      .get(`${endPoint}/characters?apikey=${apiKey}`)
      .then(
        response =>
          setHeroes(response.data.data.results) ||
          console.log(response.data.data.results)
      );
  }, []);
  return (
    <CharactersContainer>
      <List>
        {heroes &&
          heroes.map(({ name, thumbnail, comics }) => {
            return (
              <li key={name} style={{ textAlign: "center" }}>
                <ImageContainer>
                  <Image
                    src={`${thumbnail.path}.${thumbnail.extension}`}
                    alt={name}
                  />
                </ImageContainer>
                <h4 style={{ marginBottom: ".2rem", marginTop: ".8rem" }}>
                  {name}
                </h4>
                <small style={{ color: "#777" }}>
                  Presente em{" "}
                  <span style={{ fontWeight: 700 }}>{comics.available}</span>{" "}
                  quadrinhos
                </small>
              </li>
            );
          })}
      </List>
    </CharactersContainer>
  );
}

export default CharactersList;
