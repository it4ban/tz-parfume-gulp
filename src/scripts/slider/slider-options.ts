import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export const headerSliderOptions = {
	spaceBetween: 20,

	pagination: {
		el: '.swiper-pagination',
	},

	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	modules: [Navigation, Pagination, Autoplay],
};

export const brandSliderOptions = {
	loop: true,
	slidesPerView: 5,
	spaceBetween: 20,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	centeredSlides: true,

	breakpoints: {
		1200: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 10,
		},

		768: {
			slidesPerView: 3,
			spaceBetween: 10,
		},

		0: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
	},

	navigation: {
		nextEl: '.brand-slider__buttons-next',
		prevEl: '.brand-slider__buttons-prev',
	},
	modules: [Navigation, Autoplay],
};

export const newSliderOptions = {
	breakpoints: {
		1200: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 10,
		},

		768: {
			slidesPerView: 2,
			spaceBetween: 10,
		},

		664: {
			slidesPerView: 2,
			spaceBetween: 10,
		},

		0: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
	},

	navigation: {
		nextEl: '.new__button--next',
		prevEl: '.new__button--prev',
	},
	spaceBetween: 20,
	slidesPerView: 4,
	modules: [Navigation],
};

export const blogSliderOptions = {
	breakpoints: {
		1200: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 10,
		},

		768: {
			slidesPerView: 2,
			spaceBetween: 10,
		},

		664: {
			slidesPerView: 2,
			spaceBetween: 10,
		},

		0: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
	},

	navigation: {
		nextEl: '.blog__button--next',
		prevEl: '.blog__button--prev',
	},
	spaceBetween: 20,
	slidesPerView: 4,
	modules: [Navigation],
};

export const hitSliderOptions = {
	breakpoints: {
		1200: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 10,
		},

		768: {
			slidesPerView: 2,
			spaceBetween: 10,
		},

		664: {
			slidesPerView: 2,
			spaceBetween: 10,
		},

		0: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
	},

	navigation: {
		nextEl: '.hit__button--next',
		prevEl: '.hit__button--prev',
	},
	spaceBetween: 20,
	slidesPerView: 4,
	modules: [Navigation],
};

export const reccomendSliderOptions = {
	breakpoints: {
		1200: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 10,
		},

		768: {
			slidesPerView: 2,
			spaceBetween: 10,
		},

		664: {
			slidesPerView: 2,
			spaceBetween: 10,
		},

		0: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
	},

	navigation: {
		nextEl: '.reccomend__button--next',
		prevEl: '.reccomend__button--prev',
	},
	spaceBetween: 20,
	slidesPerView: 4,
	modules: [Navigation],
};
