import React, { Component } from 'react';

import Header from './Header.component';
import Sun from './Sun.component';
import Footer from './Footer.component';

export default class App extends Component {
	render() {
		return (
			<div className="container-fluid">
				<Header />
				<Sun />
				<Footer />
			</div>
		);
	}
}