export const initialState = {
  selected: {},
};

export const AnimeReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_ANIME":
      return { ...state, selected: { ...action.payload } };
    default:
      return state;
  }
};
