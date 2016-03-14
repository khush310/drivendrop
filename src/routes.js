import React from "react";
import { Router, Route, Link, browserHistory } from 'react-router';
import classnames from "classnames";

import TutorialStep from "./components/tutorialscreen.js";
import Header from "./components/header.js";
import Home from "./components/home.js";
import OfferRide from "./components/offerride.js";
import OfferRide2 from "./components/offerride2.js";
import FindRide from "./components/findride.js";
import Sidebar from "./components/sidebar.js";
import Footer from "./components/footer.js";
import SearchResults from "./components/searchresults.js";
import Profile from "./components/profile.js";
import Settings from "./components/settings.js";
import Messages from "./components/messages.js";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {active: false};
	};
	toggleLeft = (e) => {
		this.setState({active: !this.state.active});
	};
	toggleRight= (e) => {
		this.setState({active: !this.state.active});
	};
	render() {
		const {store} = this.props;
		let classes = classnames("wrapper", {active: this.state.active});
		return (
			<div  className={classes} style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
				<Header title="Offer a Ride" ontoggleLeft={this.toggleLeft}></Header>
				{this.props.children}
				<Sidebar store={this.props.store}></Sidebar>
				<Footer></Footer>
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