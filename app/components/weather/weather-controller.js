import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()

function drawWeather() {
  let template = ''
 	
	template += _weatherService.Weather.getTemplate()

	document.querySelector('#weather').innerHTML = template
	console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)
}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

}
