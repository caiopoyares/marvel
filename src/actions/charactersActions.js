export const SAVE_CHARACTER = "SAVE-CHARACTER";
export const FETCH_CHARACTERS = "FETCH_CHARACTERS";

export const saveCharacter = characterObj => {
  return {
    type: SAVE_CHARACTER,
    payload: characterObj
  };
};

export const fetchCharacters = response => {
  return {
    type: "FETCH_CHARACTERS",
    payload: response.data.data.results
  };
};
