import React from 'react';

export default class Sun extends React.Component {
	render() {
		return (
			<div className="row sun">
				<div className="col-xs-12 text-center">
					<i className="wi wi-day-sunny" />
					{/*<i className="wi wi-snow" />
					<i className="wi wi-clear" />
					<i className="wi wi-thunderstorm" />
					<i className="wi wi-drizzle" />
					<i className="wi wi-clouds" />
					<i className="wi wi-rain" />*/}
				</div>
			</div>
		);
	}
}