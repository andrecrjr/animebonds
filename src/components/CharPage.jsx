import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { CHAR_ANIME } from "../helper/gqlqueries";

export const CharPage = props => {
  const { error, data, loading } = useQuery(CHAR_ANIME, {
    variables: { char: props.match.params.id }
  });

  return (
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
  );
};
