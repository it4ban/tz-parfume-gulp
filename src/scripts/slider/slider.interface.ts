import {
	AutoplayOptions,
	NavigationOptions,
	PaginationOptions,
	SwiperModule,
	SwiperOptions,
} from 'swiper/types';

export interface ISliderProps {
	loop?: boolean;
	centeredSlides?: boolean;
	spaceBetween?: number;
	slidesPerView?: number;
	pagination?: PaginationOptions;
	autoplay?: AutoplayOptions;
	breakpoints?: SwiperOptions['breakpoints'];
	navigation?: NavigationOptions;
	modules?: SwiperModule[];
}
