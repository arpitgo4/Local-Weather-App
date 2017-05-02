import React from 'react';

export default class Header extends React.Component {
	render() {
		return (
			<div className="header text-center">
				<div className="row">
						<div className="col-xs-12">
							<p>Free C<i className="" />de Camp</p>
						</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<p>Weather App</p>
					</div>
				</div>
			</div>
		);
	}
}