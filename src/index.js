import { overlay } from './components/gsap';
import initWeather from './components/weather/weather';
import weatherApi from './components/weather/weatherApi';
import './scss/styles.scss';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
	e.preventDefault();
	const input = e.target.firstElementChild;
	weatherApi(input.value);
});

initWeather();

overlay();
