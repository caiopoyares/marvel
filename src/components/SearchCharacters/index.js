import React, { useEffect, useState } from "react";
import axios from "axios";
import queryString from "query-string";
// Get styles from characters list
import {
  CharactersContainer,
  List,
  Image,
  ImageContainer
} from "../CharactersList/style";

const apiKey = "68656f31c3623d9a8cfcc697750b60bc";

const SearchCharacters = ({ location }) => {
  const [HerosResult, setHerosResult] = useState([]);

  useEffect(() => {
    const query = queryString.parse(location.search).query;
    const endpoint = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&apikey=${apiKey}`;
    axios(endpoint).then(response =>
      setHerosResult(response.data.data.results)
    );
  }, [location.search]);
  return (
    <CharactersContainer>
      <List>
        {HerosResult &&
          HerosResult.map(({ name, thumbnail, comics }) => {
            return (
              <li key={name}>
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
};

export default SearchCharacters;
