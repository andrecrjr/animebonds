import React, { useState } from "react";
import Cells from "./cell";
function Row({ title, data }) {
  const [carousel, setCarousel] = useState(0);
  const moveNext = (e) => {
    e.preventDefault();
    carouselLogic.control(title, e, true, carousel, setCarousel);
  };

  const moveBefore = (e) => {
    e.preventDefault();
    carouselLogic.control(title, e, false, carousel, setCarousel);
  };

  return (
    <div className="list__section">
      <div className="list__title">{title}</div>
      <div className="list__section--next" onClick={moveNext}></div>
      <div className="list__section--next after" onClick={moveBefore}></div>
      <div className="list__section--shadow"></div>

      <div className={`list__wrapper  ${title.toLowerCase()}`}>
        <div className={`list__wrapper--slide ${title.toLowerCase()}`}>
          {data && <Cells data={data} />}
        </div>
      </div>
    </div>
  );
}

const carouselLogic = {
  control: (title, e, next = true, carousel, setCarousel) => {
    let slideCategory = `.list__wrapper--slide.${title.toLowerCase()}`;
    let wrapperCategory = `.list__wrapper.${title.toLowerCase()}`;
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
      .querySelector(`.list__wrapper--slide.${title.toLowerCase()}`)
      .setAttribute("style", `transform: translateX(-${carousel}px)`);
  },
};

export default Row;
