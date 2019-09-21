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
          <div>
            <div className="hero-description">
              <h3 className="hero__name">{name}</h3>
              {description !== "" && (
                <p className="hero__subtitle">{description}</p>
              )}
              <p>
                <span>Quadrinhos: </span>
                {comics.available}
              </p>
              <p>
                <span>Séries: </span>
                {series.available}
              </p>
              <p>
                <span>Histórias: </span>
                {stories.available}
              </p>
              <p>
                <span>Quadrinhos: </span>
                {comics.available}
              </p>
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
