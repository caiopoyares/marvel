import React, { useState, useEffect } from "react";
import axios from "axios";

import { CharactersContainer } from "./style";

const apiKey = "68656f31c3623d9a8cfcc697750b60bc";

const HeroDescription = ({ match }) => {
  const [heroInfo, setHeroInfo] = useState({});

  useEffect(() => {
    const heroId = match.params.heroId;
    const endpoint = `https://gateway.marvel.com:443/v1/public/characters?id=${heroId}&apikey=${apiKey}`;
    axios(endpoint).then(
      response =>
        setHeroInfo(response.data.data.results[0]) ||
        console.log(response.data.data.results[0])
    );
  }, [match.params.heroId]);

  const {
    thumbnail,
    description,
    name,
    series,
    stories,
    comics,
    urls
  } = heroInfo;

  return (
    <CharactersContainer>
      {thumbnail && (
        <>
          <div className="img-container">
            {thumbnail && (
              <img
                src={`${thumbnail.path}.${thumbnail.extension}`}
                alt={`${thumbnail.name}`}
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

export default HeroDescription;
