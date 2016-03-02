import React from "react";
import { Router, Route, Link, browserHistory } from 'react-router';
import TutorialStep from "./components/tutorialscreen.js";
import Home from "./components/home.js";
import OfferRide from "./components/offerride.js";
import FindRide from "./components/findride.js";
import SearchResults from "./components/searchresults.js";

class App extends React.Component {
	render() {
		return (
			<div style={{width: '100%', height: '100%'}}>
				{this.props.children}
			</div>
		)
	}
}

const routingTree = (
	<Route path="/" component={App}>
		<Route path="/tutorial/:step" component={TutorialStep} />
		<Route path="/home" component={Home} />
		<Route path="/offerride" component={OfferRide} />
		<Route path="/findride" component={FindRide} />
		<Route path="/searchresults" component={SearchResults} />
	</Route>
);
export default routingTree;