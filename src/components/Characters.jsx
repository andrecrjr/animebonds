import React from "react";
import { Link } from "react-router-dom";

export const EachCharacter = props => {
  const { edges } = props.data.Media.characters;
  const datas = edges.map(data => data.node);
  props.setimg(props.data.Media.bannerImage);

  if (datas.length > 0) {
    return (
      <div className="container--chars">
        {datas.map((data, key) => {
          return (
            <div className="box__char" key={key}>
              <p className="box__char--name">{data.name.full}</p>
              <Link to={`/char/${data.id}?from=index`}>
                <img src={data.image.large} />
              </Link>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};
