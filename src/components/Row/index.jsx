import React, { useState } from "react";
import Cells from "./cell";
function Row({ title, data, search = false }) {
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
      <div className="list__title">{`${
        search ? `Searching for ` : ""
      }${title}`}</div>

      <div className="list__section--next" onClick={moveNext}></div>
      <div className="list__section--next after" onClick={moveBefore}></div>
      <div className="list__section--shadow"></div>

      <div
        className={`list__wrapper  ${title.toLowerCase().replace(/ /g, "-")}`}
      >
        <div
          className={`list__wrapper--slide ${title
            .toLowerCase()
            .replace(/ /g, "-")}`}
        >
          {data && <Cells data={data} search={search} searchTitle={title} />}
        </div>
      </div>
    </div>
  );
}

const carouselLogic = {
  control: (title, e, next = true, carousel, setCarousel) => {
    let slugTitle = title.toLowerCase().replace(/ /g, "-");
    let slideCategory = `.list__wrapper--slide.${slugTitle}`;
    let wrapperCategory = `.list__wrapper.${slugTitle}`;

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
      .querySelector(`.list__wrapper--slide.${slugTitle}`)
      .setAttribute("style", `transform: translateX(-${carousel}px)`);
  },
};

export default Row;
