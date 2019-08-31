const INITIAL_STATE = {
  charactersFetched: []
};
const characterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_CHARACTERS":
      return {
        ...state,
        charactersFetched: state.charactersFetched.concat(action.payload)
      };
    default:
      return state;
  }
};

export default characterReducer;
