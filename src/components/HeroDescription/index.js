import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-loader";
import { connect } from "react-redux";
import { saveCharacter } from "../../actions/charactersActions";

import { CharactersContainer } from "./style";

const apiKey = "68656f31c3623d9a8cfcc697750b60bc";

const HeroDescription = ({
  saveCharacterWithDispatch,
  match,
  charactersFetched
}) => {
  const [heroInfo, setHeroInfo] = useState({});
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const heroId = match.params.heroId;

    const charIndex = charactersFetched.findIndex(
      characterObj => characterObj.id === parseInt(heroId)
    );
    console.log(charIndex);

    if (charIndex !== -1) {
      setHeroInfo(charactersFetched[charIndex]);
      setLoading(false);
    } else {
      const endpoint = `https://gateway.marvel.com:443/v1/public/characters?id=${heroId}&apikey=${apiKey}`;
      axios(endpoint)
        .then(response => {
          const characterObj = response.data.data.results[0];
          setHeroInfo(characterObj);
          saveCharacterWithDispatch(characterObj);
        })
        .then(() => setLoading(false));
    }
  }, [match.params.heroId, charactersFetched, saveCharacterWithDispatch]);

  const {
    thumbnail,
    description,
    name,
    series,
    stories,
    comics,
    urls
  } = heroInfo;

  return Loading ? (
    <Spinner />
  ) : (
    <CharactersContainer>
      {thumbnail.path && (
        <>
          <div className="img-container">
            {thumbnail && (
              <img
                src={`${thumbnail.path}.${thumbnail.extension}`}
                alt={`${name}`}
              />
            )}
          </div>
          <div className="hero-description-box">
            <div className="hero__details">
              <p>
                {comics.available}
                <span>Quadrinhos</span>
              </p>
              <p>
                {series.available}
                <span>Séries</span>
              </p>
              <p>
                {stories.available}
                <span>Histórias</span>
              </p>
            </div>
            <div className="hero-description">
              <h3 className="hero__name">{name}</h3>
              {description !== "" ? (
                <small>{description}</small>
              ) : (
                <small>
                  Sorry, there is no description available for this hero at the
                  moment. Click on this card to get more information about him
                  and his comic books.
                </small>
              )}
            </div>
            {urls.length > 0 && (
              <a
                href={urls[0].url}
                className="detail-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mais detalhes
              </a>
            )}
          </div>
        </>
      )}
    </CharactersContainer>
  );
};

const mapStateToProps = state => {
  return {
    charactersFetched: state.characters.charactersFetched
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveCharacterWithDispatch: characterObj => {
      return dispatch(saveCharacter(characterObj));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroDescription);
