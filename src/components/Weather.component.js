import React from 'react';
import superagent from 'superagent';

export default class Weather extends React.Component {

	CELSIUS = '&#8451;';
	FAHRENHEIT = '&#8457;';

	constructor() {
		super();
		this.state = {
			location: '', 
			temperature: '',
			weather: '',
			unit: '&#8451;'
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
						<p>{this.state.temperature}</p> 
							<a href="javascript:void(0)">
								<p dangerouslySetInnerHTML={{__html: this.state.unit}}></p>
							</a>
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

	componentDidMount() {
		this.getLocation()
			.then(location => {
				console.log('location', location);
				this.getWeather(location)
					.then(weather => {
						console.log('weather', weather);
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