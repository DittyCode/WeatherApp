const weatherApi = async (city = 'Warsaw') => {
	const errorMessage = document.querySelector('.form__error');
	try {
		errorMessage.textContent = '';
		const API_KEY = 'f7434c7e718c474b57a10750ebd22a94';
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
		const response = await fetch(url);
		const data = await response.json();
		await renderDataCity(data);
	} catch (error) {
		errorMessage.textContent = 'Type a valid city name';
		console.log(error);
	}
};

const renderDataCity = ({ main, name, weather }) => {
	const weatherTemp = document.querySelector('.weather__temp');
	const weatherDescription = document.querySelector('.weather__description');
	const weatherName = document.querySelector('.weather__title');

	const { temp } = main;
	const { main: title, description } = weather[0];

	weatherName.textContent = name;
	weatherTemp.textContent = convertKelvinToCelsius(temp);
	weatherDescription.textContent = `${title} - ${description}`;
};

const convertKelvinToCelsius = temp => (temp - 273.15).toFixed(1);

export default weatherApi;
