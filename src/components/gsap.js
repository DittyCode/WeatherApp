import { gsap, TweenMax, Expo } from 'gsap';

export const overlay = () => {
	TweenMax.to('.overlay__name', 3, {
		opacity: 0,
		y: -60,
		ease: Expo.easeInOut,
	});
	TweenMax.to('.overlay__title', 3, {
		delay: 0.2,
		opacity: 0,
		y: -60,
		ease: Expo.easeInOut,
	});
	TweenMax.to('.overlay', 3, {
		delay: 0.5,
		top: '-100%',
		ease: Expo.easeInOut,
	});
};
