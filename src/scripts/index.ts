import { createSlider } from './slider';
import {
	headerSliderOptions,
	brandSliderOptions,
	newSliderOptions,
	hitSliderOptions,
	reccomendSliderOptions,
	blogSliderOptions,
} from './slider/slider-options';

createSlider('.swiper', headerSliderOptions);
createSlider('.brand-slider', brandSliderOptions);
createSlider('.new-slider', newSliderOptions);
createSlider('.blog-slider', blogSliderOptions);
createSlider('.hit-slider', hitSliderOptions);
createSlider('.reccomend-slider', reccomendSliderOptions);

document.addEventListener('DOMContentLoaded', () => {
	const categoryMenu = document.querySelector('.category-menu__list');
	const categoryMenuItems = document.querySelectorAll('.category-menu__item');

	categoryMenuItems.forEach((categoryMenuItem) => {
		categoryMenuItem.addEventListener('click', () => {
			const activeItem = categoryMenu?.querySelector('.category-menu__item--active');
			if (activeItem) {
				activeItem.classList.remove('category-menu__item--active');
			}

			categoryMenuItem.classList.add('category-menu__item--active');
		});
	});
});
