const carouselLogic = {
  control: (title, next, carousel, setCarousel) => {
    const genre = `[data-genre=${title}]`;
    const slideCategory = `.list__wrapper--slide${genre}`;
    const widthSlide = document.querySelector(slideCategory).clientWidth;

    const cell = document.querySelector('.list__section').clientWidth;

    if (carousel >= 0 && carousel <= widthSlide - cell) {
      if (next) {
        setCarousel((oldCarousel) => oldCarousel + cell);
      }
    }
    if (!next && carousel > 0) {
      setCarousel((oldCarousel) => Math.abs(oldCarousel - cell));
    }
  }
};

export const titleSection = (title) => {
  if (typeof title === 'object') {
    // eslint-disable-next-line no-param-reassign
    title = title.join().replace(',', '-').replace(' ', '-');
  }
  return title.toLowerCase().replace(/ /g, '-');
};

export const moveNext = (e, title, carousel, setCarousel) => {
  e.preventDefault();
  carouselLogic.control(titleSection(title), true, carousel, setCarousel);
};

export const moveBefore = (e, title, carousel, setCarousel) => {
  e.preventDefault();
  carouselLogic.control(titleSection(title), false, carousel, setCarousel);
};
