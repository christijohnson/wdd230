const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windspeed = document.querySelector('wind');
let wchill = 0
//const windchill = document.querySelector('chill');

const url = `https://api.openweathermap.org/data/2.5/weather?q=Logan&units=imperial&appid=7bcb523faeae2a7693622e17ed4cfcf2`;

async function apiFetch(apiURL) {
		try {
			const response = await fetch(url);
			if (response.ok) {
				const data = await response.json();
				// console.log(data); // this is for testing the call
				displayResults(data);
			} else {
					throw Error(await response.text());
			}
		} catch (error) {
				console.log(error);
		}
	}

	apiFetch(url);

	function  displayResults(weatherData) {
		const temp = weatherData.main.temp;
		const speed = weatherData.wind.speed;
		currentTemp.innerHTML = `<strong>${temp.toFixed(0)}</strong>`;
		wind.innerHTML = `<strong>${speed.toFixed(0)}</strong>`;

		const iconsrc = `images/weather/${weatherData.weather[0].icon}.svg`;
		const desc = weatherData.weather[0].description;

		weatherIcon.setAttribute('src', iconsrc);
		weatherIcon.setAttribute('alt', desc);
		captionDesc.textContent = titleCase(desc);

		if (temp <= 50 && speed > 3.0) {
			wchill = windchill(temp, speed).toFixed(2);
			document.getElementById('chill').textContent = `${wchill}`;
			//document.getElementById('windchill').classList.remove('hide');
		} else {
			document.getElementById('chill').textContent = 'N/A';
			//document.getElementById('windchill').classList.add('hide');
		};

	}

// Title Case Conversion

	function titleCase(str) {
		return str.toLowerCase().split(' ').map(function(word) {
			return (word.charAt(0).toUpperCase() + word.slice(1));
		}).join(' ');
	}

// wind chill conversion

	function windchill(temp, speed) {
		return (
		35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed,.16)));
	}
