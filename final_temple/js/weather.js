const currentTemp = document.querySelector('#current-temp');
const currenthum = document.querySelector('#current-hum');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const day1Temp = document.querySelector('#day1-temp');
const weatherIcon1 = document.querySelector('#weather-icon1');
const captionDesc1 = document.querySelector('#figcaption1');
const day2Temp = document.querySelector('#day2-temp');
const weatherIcon2 = document.querySelector('#weather-icon2');
const captionDesc2 = document.querySelector('#figcaption2');
const day3Temp = document.querySelector('#day3-temp');
const weatherIcon3 = document.querySelector('#weather-icon3');
const captionDesc3 = document.querySelector('#figcaption3');
const weatheralert = document.querySelector('#alert-weather');

const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=41.7334653&lon=-111.8277686&exclude=minutely,hourly&units=imperial&appid=7bcb523faeae2a7693622e17ed4cfcf2';

async function apiFetch(apiURL) {
		try {
			const response = await fetch(url);
			if (response.ok) {
				const data = await response.json();
//					console.log(data); // this is for testing the call
				displayResults(data);
			} else {
					throw Error(await response.text());
			}
		} catch (error) {
//				console.log(error);
		}
	}

	apiFetch(url);

	function  displayResults(weatherData) {
		const temp = weatherData.current.temp;
		const hum = weatherData.current.humidity;
		currentTemp.innerHTML = `<strong>${temp.toFixed(0)}</strong>`;
		currenthum.innerHTML = `<strong>${hum}</strong>`;

		const iconsrc = `images/weather/${weatherData.current.weather[0].icon}.svg`;
		const desc = weatherData.current.weather[0].description;

		weatherIcon.setAttribute('src', iconsrc);
		weatherIcon.setAttribute('alt', desc);
		captionDesc.textContent = titleCase(desc);
		
		const tempday1 = weatherData.daily[1].temp.max;
		const tempday2 = weatherData.daily[2].temp.max;
		const tempday3 = weatherData.daily[3].temp.max;
		const desc1 = weatherData.daily[1].weather[0].description;
		const desc2 = weatherData.daily[2].weather[0].description;
		const desc3 = weatherData.daily[3].weather[0].description;
		
		day1Temp.innerHTML = `<strong>${tempday1.toFixed(0)}</strong>`;
		day2Temp.innerHTML = `<strong>${tempday2.toFixed(0)}</strong>`;
		day3Temp.innerHTML = `<strong>${tempday3.toFixed(0)}</strong>`;
		
		const iconsrc1 = `images/weather/${weatherData.daily[1].weather[0].icon}.svg`;
		weatherIcon1.setAttribute('src', iconsrc1);
		weatherIcon1.setAttribute('alt', desc1);
		captionDesc1.textContent = titleCase(desc1);

		const iconsrc2 = `images/weather/${weatherData.daily[2].weather[0].icon}.svg`;
		weatherIcon2.setAttribute('src', iconsrc2);
		weatherIcon2.setAttribute('alt', desc2);
		captionDesc2.textContent = titleCase(desc2);

		const iconsrc3 = `images/weather/${weatherData.daily[3].weather[0].icon}.svg`;
		weatherIcon3.setAttribute('src', iconsrc3);
		weatherIcon3.setAttribute('alt', desc3);
		captionDesc3.textContent = titleCase(desc3);
		console.log(`${weatherData.alerts[0].event}`);

		if (weatherData.alerts[0].description !== undefined) {
			weatheralert.innerHTML = `${weatherData.alerts[0].description}`;
			document.getElementById("notify-weather").classList.remove("hidden");
			document.getElementById("alert-weather").classList.remove("hidden");
			document.getElementById("close-weather").classList.remove("hidden");
		}
	}

// Title Case Conversion

	function titleCase(str) {
		return str.toLowerCase().split(' ').map(function(word) {
			return (word.charAt(0).toUpperCase() + word.slice(1));
		}).join(' ');
	}

	function closealert(){
		document.getElementById("notify-weather").classList.add("hidden");
		document.getElementById("alert-weather").classList.add("hidden");
		document.getElementById("close-weather").classList.add("hidden");
	}