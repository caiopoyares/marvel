export const SAVE_CHARACTER = "SAVE-CHARACTER";
export const FETCH_CHARACTERS = "FETCH_CHARACTERS";
export const SAVE_HEIGHT = "SAVE_HEIGHT";

export const saveCharacter = characterObj => {
  return {
    type: SAVE_CHARACTER,
    payload: characterObj
  };
};

export const fetchCharacters = response => {
  return {
    type: FETCH_CHARACTERS,
    payload: response.data.data.results
  };
};

export const saveHeight = height => {
  return {
    type: SAVE_HEIGHT,
    payload: height
  };
};
