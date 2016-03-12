import React from "react";
import { Router, Route, Link, browserHistory } from 'react-router';
import TutorialStep from "./components/tutorialscreen.js";
import Home from "./components/home.js";
import OfferRide from "./components/offerride.js";
import OfferRide2 from "./components/offerride2.js";
import FindRide from "./components/findride.js";
import Sidebar from "./components/sidebar.js";
import Footer from "./components/footer.js";
import SearchResults from "./components/searchresults.js";
import Profile from "./components/profile.js";
import Settings from "./components/settings.js";



class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {active: false};
	};
	handleSwitch= (e) => {
		this.setState({active: false})
	};
	render() {
		const activeSidebar = store.cursor(["temp", "ui", "activesidebar"]).deref();
		return (
			<div style={{width: '100%', height: '100%'}}>
				{this.props.children}
				{activeSidebar ? <Sidebar></Sidebar>:""}
			</div>
		)
	}
}

const routingTree = (
	<Route path="/" component={App}>
		<Route path="/tutorial/:step" component={TutorialStep} />
		<Route path="/home" component={Home} />
		<Route path="/offerride" component={OfferRide} />
		<Route path="/offerride2" component={OfferRide2} />
		<Route path="/findride" component={FindRide} />
		<Route path="/searchresults" component={SearchResults} />
		<Route path="/profile" component={Profile} />
		<Route path="/settings" component={Settings} />
	</Route>
);
export default routingTree;