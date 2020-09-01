import React from "react";
import Cells from "./cell";
function Row({ title, data }) {
  let translation = 0;

  const moveSide = (e) => {
    e.preventDefault();
    let widthSlide = document.querySelector(".list__wrapper--slide")
      .clientWidth;
    let widthWrapper = document.querySelector(".list__wrapper").clientWidth;
    if (Math.abs(translation) >= widthSlide - widthWrapper) {
      translation = widthSlide - widthWrapper;
    } else {
      translation = translation - 175;
    }
    document
      .querySelector(".list__wrapper--slide")
      .setAttribute("style", `transform: translateX(${translation}px)`);
    console.log(widthSlide - widthWrapper);
    console.log(Math.abs(translation));
  };

  return (
    <div className="list__section">
      <div className="list__title">{title}</div>
      <div className="list__section--next" onClick={moveSide}></div>
      <div className="list__wrapper">
        <div className="list__wrapper--slide">
          {data && <Cells data={data} />}
        </div>
      </div>
    </div>
  );
}

export default Row;
