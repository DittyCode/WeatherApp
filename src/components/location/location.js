import weatherApi from '../weather/weatherApi';

const title = document.querySelector('.weather__title');
title.textContent = 'Loading...';

const location = () => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(currentLocation);
	} else {
		console.error("Browser doesn't support geolocation");
	}
};

const currentLocation = async ({ coords }) => {
	const { latitude, longitude } = coords;
	await cityApi(latitude, longitude);
};

const cityApi = async (lat, lon) => {
	try {
		const apiKey = 'pk.117e0bda798ba8b322db4e28494b001a';
		const api = `https://us1.locationiq.com/v1/reverse.php?key=${apiKey}&lat=${lat}&lon=${lon}&format=json`;
		const response = await fetch(api);
		const data = await response.json();
		await cityWeather(data);
	} catch (error) {
		console.log(error);
	}
};

const cityWeather = ({ address }) => {
	const { village } = address;
	weatherApi(village);
};

export { location, currentLocation };
