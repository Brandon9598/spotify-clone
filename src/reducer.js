// State is how the app currently works
export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
};

// Reducer is how we manipulate data
const reducer = (state, action) => {
  // Action -> type, [payload]
  console.log("Action", action);
  switch (action?.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      console.log("Action not recognized");
      return state;
  }
};

export default reducer;
