import React, { useState, useContext } from "react";
import { PageContext } from '../contexts'
import Cells from "./cell";
function Row({ title, data, search = false }) {
  const [carousel, setCarousel] = useState(0);
  const { pageState } = useContext(PageContext)
  const moveNext = (e) => {
    e.preventDefault();
    carouselLogic.control(titleSection(title || pageState.search.textSearch), e, true, carousel, setCarousel);
  };

  const moveBefore = (e) => {
    e.preventDefault();
    carouselLogic.control(titleSection(title || pageState.search.textSearch), e, false, carousel, setCarousel);
  };

  const titleSection = (title) => {
    console.log(title)
    return title.toLowerCase().replace(/ /g, "-")
  }
  return (
    <div className="list__section">
      <div className="list__title">{`${
        typeof pageState !== "undefined" ? `Searching for ` : ""
        }${title || pageState.search.textSearch}`}</div>

      <div className="list__section--next" onClick={moveNext}></div>
      <div className="list__section--next after" onClick={moveBefore}></div>
      <div className="list__section--shadow"></div>

      <div
        className={`list__wrapper  ${titleSection(title || pageState.search.textSearch)}`}
      >
        <div
          className={`list__wrapper--slide ${titleSection(title || pageState.search.textSearch)}`}
        >
          {data && <Cells data={data} />}
        </div>
      </div>
    </div>
  );
}

const carouselLogic = {
  control: (title, e, next = true, carousel, setCarousel) => {

    let slideCategory = `.list__wrapper--slide.${title}`;
    let wrapperCategory = `.list__wrapper.${title}`;

    let widthSlide = document.querySelector(slideCategory).clientWidth;
    let widthWrapper = document.querySelector(wrapperCategory).clientWidth;
    //get second cell with the offsetLeft
    let cell = document
      .querySelector(wrapperCategory)
      .querySelectorAll(".list__cell")[1];
    if (carousel >= 0 && carousel <= widthSlide - widthWrapper) {
      if (next) {
        setCarousel(carousel + cell.offsetLeft);
      }
    }
    if (!next && carousel >= 0 && carousel <= widthSlide + widthWrapper) {
      setCarousel(Math.abs(carousel - cell.offsetLeft));
    }
    document
      .querySelector(`.list__wrapper--slide.${title}`)
      .setAttribute("style", `transform: translateX(-${carousel}px)`);
  },
};

export default Row;
