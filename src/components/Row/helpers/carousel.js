export const titleSection = (title) => {
  if (typeof title === "object") {
    title = title.join();
    title = title.replace(",", "-");
  }
  return title.toLowerCase().replace(/ /g, "-");
};

export const moveNext = (e, title, carousel, setCarousel) => {
  e.preventDefault();
  carouselLogic.control(e, titleSection(title), true, carousel, setCarousel);
};

export const moveBefore = (e, title, carousel, setCarousel) => {
  e.preventDefault();
  carouselLogic.control(e, titleSection(title), false, carousel, setCarousel);
};

const carouselLogic = {
  control: (e, title, next = true, carousel, setCarousel) => {
    let genre = `[data-genre=${title}]`;
    let slideCategory = `.list__wrapper--slide${genre}`;
    let wrapperCategory = `.list__wrapper${genre}`;

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
