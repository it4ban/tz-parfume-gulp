import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
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
});

const brandSlider = new Swiper('.brand-slider', {
	loop: true,
	slidesPerView: 5,
	spaceBetween: 20,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	centeredSlides: true,

	navigation: {
		nextEl: '.brand-slider__buttons-next',
		prevEl: '.brand-slider__buttons-prev',
	},
	modules: [Navigation, Autoplay],
});

const newSlider = new Swiper('.new-slider', {
	spaceBetween: 20,
	slidesPerView: 4,
});

const blogSlider = new Swiper('.blog-slider', {
	spaceBetween: 20,
	slidesPerView: 4,
});

const hitSlider = new Swiper('.hit-slider', {
	spaceBetween: 20,
	slidesPerView: 4,
});

const reccomendSlider = new Swiper('.reccomend-slider', {
	spaceBetween: 20,
	slidesPerView: 4,
});
