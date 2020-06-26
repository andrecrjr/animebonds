import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { CHAR_ANIME } from "../helper/gqlqueries";
import { getColorImage, colorReduce } from "../helper/";

export const CharPage = (props) => {
  const { error, data, loading } = useQuery(CHAR_ANIME, {
    variables: { char: props.match.params.id },
  });
  const [color, dispatchColor] = React.useReducer(colorReduce);
  React.useEffect(() => {
    if (data) {
      let proxyGoogle =
        "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=";
      //running from Proxy
      getColorImage(
        proxyGoogle +
          encodeURIComponent(data.Character.media.nodes[0].bannerImage),
        dispatchColor
      );
    }
  }, [data]);

  React.useEffect(() => {
    if (data) {
      document.querySelector(
        ".container--general"
      ).style.backgroundImage = `url(${data.Character.media.nodes[0].bannerImage})`;
      if (color) {
        document.querySelector(".block--search h1").style.color = color;
        document.querySelector(
          ".container--chars__title"
        ).style.color = `${color}`;
        document.querySelector(
          ".container--chars__title"
        ).innerText = `${data.Character.media.nodes[0].title.english}`;
      }
    }
  }, [color, data]);

  return (
    <>
      <section className="char__container animate-container">
        {data !== undefined ? (
          <>
            <p className="char__name">{data.Character.name.full}</p>
            <img src={`${data.Character.image.large}`} height="300" />
            <p className="char__description">
              {data.Character.description !== null ? (
                `${data.Character.description.replace(/__/g, "")}`
              ) : (
                <p>No descriptions</p>
              )}
            </p>
          </>
        ) : (
          ``
        )}
      </section>
    </>
  );
};
