import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { CharactersContainer, List, Image, ImageContainer, StyledLink } from "./style";

import SeeMoreBtn from "./SeeMoreBtn";

const endPoint = "https://gateway.marvel.com:443/v1/public";
const apiKey = "68656f31c3623d9a8cfcc697750b60bc";

function CharactersList({ dispatch, heroes }) {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const offset = 0 + 20 * currentPage;
    axios
      .get(`${endPoint}/characters?apikey=${apiKey}&offset=${offset}&limit=20`)
      .then(response =>
        dispatch({
          type: "FETCH_CHARACTERS",
          payload: response.data.data.results
        })
      ).then(data => console.log(data));
  }, [currentPage, dispatch]);
  return (
    <CharactersContainer>
      <List>
        {heroes &&
          heroes.map(({ name, thumbnail, comics, id }) => {
            return (
              <li key={name}>
                <StyledLink to={`/hero/${id}`}>
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
                </StyledLink>
              </li>
            );
          })}
      </List>
      <SeeMoreBtn
        currPage={currentPage}
        nextPage={() => setCurrentPage(currPage => currPage + 1)}
      />
    </CharactersContainer>
  );
}

const mapStateToProps = state => ({
  heroes: state.characters.charactersFetched
});

export default connect(mapStateToProps)(CharactersList);