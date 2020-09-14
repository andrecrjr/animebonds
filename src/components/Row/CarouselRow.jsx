import React, { useState, useContext } from "react";
import { moveNext, moveBefore, titleSection } from "./helpers/carousel";
import { PageContext } from "../contexts";
import Cells from "./cell";

export function CarouselRow({ title = "", data = {} }) {
  const [carousel, setCarousel] = useState(0);
  const { pageState } = useContext(PageContext);

  return (
    <div className="list__section">
      <div className="list__title">{`${
        typeof pageState !== "undefined" ? `Searching for ` : ""
      }${title || pageState.search.textSearch}`}</div>

      <div
        className="list__section--next"
        onClick={(e) =>
          moveNext(
            e,
            title || pageState.search.textSearch,
            carousel,
            setCarousel
          )
        }
      ></div>
      <div
        className="list__section--next after"
        onClick={(e) =>
          moveBefore(
            e,
            title || pageState.search.textSearch,
            carousel,
            setCarousel
          )
        }
      ></div>
      <div className="list__section--shadow"></div>

      <div
        className={`list__wrapper  ${titleSection(
          title || pageState.search.textSearch
        )}`}
      >
        <div
          className={`list__wrapper--slide ${titleSection(
            title || pageState.search.textSearch
          )}`}
        >
          {data && <Cells data={data} />}
        </div>
      </div>
    </div>
  );
}
