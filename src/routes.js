import React from "react";
import { Router, Route, Link, browserHistory } from 'react-router'

import OfferRide from "./components/offerride.js";
import Home from "./components/home.js";
import FindRide from "./components/findride.js";

class App extends React.Component {

	render() {
		return (
			<div style={{width: '100%', height: '100%'}}>{this.props.children}</div>
		)
	}
}


const routingTree = (
	<Route path="/" component={App}>
		<Route path="/home" component={Home} />
		<Route path="/findride" component={FindRide} />
		<Route path="/offerride" component={OfferRide} />
	</Route>
);
export default routingTree;