import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  CharactersContainer,
  List,
  Image,
  ImageContainer
} from "./CharactersList.style.js";

const endPoint = "https://gateway.marvel.com:443/v1/public";
const apiKey = "68656f31c3623d9a8cfcc697750b60bc";

function CharactersList({ dispatch, heroes }) {
  //const [heroes, setHeroes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const offset = 0 + 20 * currentPage;
  useEffect(() => {
    axios
      .get(`${endPoint}/characters?apikey=${apiKey}&offset=${offset}&limit=20`)
      .then(response =>
        dispatch({
          type: "FETCH_CHARACTERS",
          payload: response.data.data.results
        })
      );
  }, []);
  return (
    <CharactersContainer>
      <List>
        {heroes &&
          heroes.map(({ name, thumbnail, comics }) => {
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
}

const mapStateToProps = state => ({
  heroes: state.allCharacters
});

export default connect(mapStateToProps)(CharactersList);
