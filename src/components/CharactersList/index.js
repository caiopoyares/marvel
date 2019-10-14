import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { CharactersContainer, List } from "./style";
import CharacterBox from "../CharacterBox";
import Spinner from "react-loader";
import { fetchCharacters } from "../../actions/charactersActions";

import SeeMoreBtn from "./SeeMoreBtn";

const endPoint = "https://gateway.marvel.com:443/v1/public";
const apiKey = "68656f31c3623d9a8cfcc697750b60bc";

function CharactersList({ heroes, fetchCharactersWithDispatch, location }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const offset = 0 + 20 * currentPage;
    if (heroes.length !== 0 && heroes.length > offset) {
      setLoading(false);
    } else {
      axios
        .get(
          `${endPoint}/characters?apikey=${apiKey}&offset=${offset}&limit=20`
        )
        .then(response => fetchCharactersWithDispatch(response))
        .then(() => setLoading(false));
    }

    if (location.offsetY === false) {
      return;
    } else {
      setTimeout(() => {
        window.scrollTo(0, location.offsetY);
      }, 0);
    }
  }, [
    currentPage,
    fetchCharactersWithDispatch,
    heroes.length,
    location.offsetY
  ]);

  return Loading ? (
    <Spinner />
  ) : (
    <CharactersContainer>
      <List>
        {heroes &&
          heroes.map(({ name, thumbnail, comics, id, description }, index) => {
            return (
              <CharacterBox
                key={index}
                name={name}
                thumbnail={thumbnail}
                comics={comics}
                id={id}
                description={description}
              />
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
  heroes: state.characters.allCharacters
});

const mapDispatchToProps = dispatch => {
  return {
    fetchCharactersWithDispatch: characters =>
      dispatch(fetchCharacters(characters))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharactersList);
