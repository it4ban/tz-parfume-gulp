import { menuToggle } from './menu-toggle/index';
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
	menuToggle('.category-menu__list', '.category-menu__item', '.category-menu__item--active');
	menuToggle('.letters__list', '.letters__item', '.letters__item--active');
});
