import { SAVE_CHARACTER, FETCH_CHARACTERS } from "../actions/charactersActions";

const INITIAL_STATE = {
  allCharacters: [],
  charactersFetched: []
};
const characterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        allCharacters: state.allCharacters.concat(action.payload)
      };
    case SAVE_CHARACTER:
      const exists = state.charactersFetched.findIndex(
        characterObj => characterObj.id === action.payload.id
      );
      return exists === -1
        ? {
            ...state,
            charactersFetched: [...state.charactersFetched, action.payload]
          }
        : state;

    default:
      return state;
  }
};

export default characterReducer;
