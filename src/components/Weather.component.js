import React from 'react';
import superagent from 'superagent';

export default class Weather extends React.Component {

	constructor() {
		super();
		this.state = {
			location: '', 
			temperature: '',
			weather: ''
		};
	}

	render() {
		return (
			<div className="row text-center">
				<div className="col-xs-12">

					<div className="row">
						<div className="col-xs-12">{this.state.location}</div>
					</div>

					<div className="row">
						<div className="col-xs-12">{this.state.temperature}</div>
					</div>

					<div className="row">
						<div className="col-xs-12">{this.state.weather}</div>
					</div>
				</div>
			</div>
		);
	}

	componentDidMount() {
		const API_KEY = '158a24e778ceb45f0133225f41883896';

		superagent
			.get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}`)
			end((err, res) => {
				console.log(res.body);
			});
	}
}