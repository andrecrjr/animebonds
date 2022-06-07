export const initialState = {
  selected: { cont: 0, click: 0 },
};

export const AnimeReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_ANIME":
      return {
        ...state,
        selected: {
          cont: 1,
          ...action.payload,
          click: state.selected.click + 1,
        },
      };
    default:
      return state;
  }
};