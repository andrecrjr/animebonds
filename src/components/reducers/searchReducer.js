export const initialState = {
  search: { search: false, textSearch: "" },
};
export const PageReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_ANIME":
      return { ...state, search: action.payload };
    default:
      return state;
  }
};
