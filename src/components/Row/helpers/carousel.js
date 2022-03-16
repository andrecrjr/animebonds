export const titleSection = (title) => {
	if (typeof title === "object") {
		title = title.join();
		title = title.replace(",", "-");
		title = title.replace(" ", "-");
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
	control: (e, title, next, carousel, setCarousel) => {
		let genre = `[data-genre=${title}]`;
		let slideCategory = `.list__wrapper--slide${genre}`;
		let widthSlide = document.querySelector(slideCategory).clientWidth;

		let cell = document.querySelector(".list__section").clientWidth;

		if (carousel >= 0 && carousel <= widthSlide - cell) {
			if (next) {
				setCarousel((oldCarousel) => oldCarousel + cell);
			}
		}
		if (!next && carousel > 0) {
			setCarousel((oldCarousel) => Math.abs(oldCarousel - cell));
		}
	},
};
