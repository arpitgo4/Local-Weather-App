import React from 'react';
import superagent from 'superagent';

export default class Weather extends React.Component {

	CELSIUS = 'C';
	FAHRENHEIT = 'F';

	constructor() {
		super();
		this.state = {
			location: '', 
			temperature: '',
			weather: '',
			unit: this.CELSIUS
		};
	}

	render() {
		return (
			<div className="row text-center weather">
				<div className="col-xs-12">
					<div className="row">
						<div className="col-xs-12">
							<p>{this.state.location}</p>
						</div>
					</div>

					<div className="row">
						<div className="col-xs-12">
							<p>{this.state.temperature} &deg;</p> 
							<p onClick={this.toggleUnit.bind(this)} id="temp-unit" >{this.state.unit}</p>	
						</div>
					</div>

					<div className="row">
						<div className="col-xs-12">
							<p>{this.state.weather}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}

	toggleUnit() {
		const temp = this.state.temperature;
		const currUnit = this.state.unit;
		let toggledTemp, toggledUnit;
		switch(currUnit) {
			case this.CELSIUS: 
				toggledUnit = this.FAHRENHEIT;
				toggledTemp = Math.round(((9/5) * temp) + 32);
				break;
			case this.FAHRENHEIT: 
				toggledUnit = this.CELSIUS;
				toggledTemp = Math.round((temp - 32) * (5/9));
			break;
		}
		console.log('state', { ...this.state, temperature: toggledTemp, unit: toggledUnit });
		this.setState({ ...this.state, temperature: toggledTemp, unit: toggledUnit });
	}

	componentDidMount() {
		this.getLocation()
			.then(location => {
				this.getWeather(location)
					.then(weather => {
						this.setState(
							{ 
							 	location: `${location.body.city}, ${location.body.country}`,
								temperature: weather.body.main.temp,
								weather: weather.body['weather'][0].main 
							}
						);
					});
			});
	}

	getWeather({city, country}) {
		const API_KEY = '158a24e778ceb45f0133225f41883896';

		return superagent
				.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
	}

	getLocation() {
		return superagent
			.get('https://ipinfo.io/json');
	}
}