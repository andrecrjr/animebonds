import { getPalette } from "react-palette";
import { SEARCH_ANIME_QUERY } from "./gqlqueries";

export { SEARCH_ANIME_QUERY };
export const colorReduce = (state, action) => {
  switch (action.type) {
    case "ADD_COLOR":
      return [action.payload];
    default:
      return state;
  }
};

export const getColorImage = async (imgBg, dispatchColor) => {
  try {
    const color = await getPalette(imgBg);
    dispatchColor({ type: "ADD_COLOR", payload: color.vibrant });
  } catch (e) {
    console.log(e);
  }
};
