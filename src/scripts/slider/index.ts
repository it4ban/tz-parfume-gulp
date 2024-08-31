import Swiper from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ISliderProps } from './slider.interface';

export const createSlider = (swiperContainer: string, swiperOptions: ISliderProps) =>
	new Swiper(swiperContainer, {
		...swiperOptions,
	});
