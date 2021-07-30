import { gsap, TweenMax, Expo } from 'gsap';

export const overlay = () => {
	TweenMax.to('.overlay__name', 2, {
		opacity: 0,
		y: -60,
		ease: Expo.easeInOut,
	});
	TweenMax.to('.overlay__title', 2, {
		delay: 0.2,
		opacity: 0,
		y: -60,
		ease: Expo.easeInOut,
	});
	TweenMax.to('.overlay', 2, {
		delay: 0.5,
		top: '-100%',
		ease: Expo.easeInOut,
	});
};

export const content = () => {
	TweenMax.to('.main', 2.7, {
		height: '100vh',
		ease: Expo.easeInOut,
	});
};
