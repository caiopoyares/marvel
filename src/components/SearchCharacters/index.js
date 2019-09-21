import React, { useEffect, useState } from "react";
import axios from "axios";
import queryString from "query-string";
// Get styles from characters list
import { CharactersContainer, List } from "../CharactersList/style";
import CharacterBox from "../CharacterBox";

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
        {HerosResult.length > 0 &&
          HerosResult.map(({ name, thumbnail, comics, id, description }) => {
            return (
              <CharacterBox
                key={name}
                name={name}
                thumbnail={thumbnail}
                comics={comics}
                id={id}
                description={description}
              />
            );
          })}
      </List>
    </CharactersContainer>
  );
};

export default SearchCharacters;
