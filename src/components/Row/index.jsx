import React from "react";
import Cells from "./cell";
function Row({ title, data }) {
  let translation = 0;

  const moveNext = (e) => {
    e.preventDefault();
    translation = carouselLogic.next(translation, title, e);
  };

  const moveBefore = (e) => {
    e.preventDefault();
    translation = carouselLogic.before(translation, title, e);
  };

  return (
    <div className="list__section">
      <div className="list__title">{title}</div>
      <div className="list__section--next" onClick={moveNext}></div>
      <div className="list__section--next after" onClick={moveBefore}></div>
      <div className={`list__wrapper  ${title.toLowerCase()}`}>
        <div className={`list__wrapper--slide ${title.toLowerCase()}`}>
          {data && <Cells data={data} />}
        </div>
      </div>
    </div>
  );
}

const carouselLogic = {
  before: (translation, title, e) => {
    let slideCategory = `.list__wrapper--slide.${title.toLowerCase()}`;
    let wrapperCategory = `.list__wrapper.${title.toLowerCase()}`;
    let widthSlide = document.querySelector(slideCategory).clientWidth;
    let widthWrapper = document.querySelector(wrapperCategory).clientWidth;
    if ((translation) => 0 && translation <= widthSlide - widthWrapper) {
      translation = Math.abs(translation - 175);
    }
    document
      .querySelector(`.list__wrapper--slide.${title.toLowerCase()}`)
      .setAttribute("style", `transform: translateX(-${translation}px)`);
    return translation;
  },
  next: (translation, title, e) => {
    let slideCategory = `.list__wrapper--slide.${title.toLowerCase()}`;
    let wrapperCategory = `.list__wrapper.${title.toLowerCase()}`;
    let widthSlide = document.querySelector(slideCategory).clientWidth;
    let widthWrapper = document.querySelector(wrapperCategory).clientWidth;
    if (translation >= 0 && translation <= widthSlide - widthWrapper) {
      translation = Math.abs(translation + 175);
    }
    document
      .querySelector(`.list__wrapper--slide.${title.toLowerCase()}`)
      .setAttribute("style", `transform: translateX(-${translation}px)`);
    return translation;
  },
};

export default Row;
