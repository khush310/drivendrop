import React from "react";
import { Router, Route, Link, browserHistory } from 'react-router';

import SuperApp from "./components/superapp.js";
import App from "./components/app.js";
import TutorialStep from "./components/tutorialscreen.js";
import Home from "./components/home.js";
import OfferRide from "./components/offerride.js";
import OfferRide2 from "./components/offerride2.js";
import FindRide from "./components/findride.js";
import SearchResults from "./components/searchresults.js";
import Profile from "./components/profile.js";
import EditProfile from "./components/editprofile.js";
import Wallet from "./components/wallet.js";
import Chats from "./components/chats.js";
import Notifications from "./components/notifications.js";

const routingTree = (
	<Route path="/" component={SuperApp}>
		<Route path="public" component={App}>
			<Route path="offerride" component={OfferRide} />
			<Route path="offerride2" component={OfferRide2} />
			<Route path="findride" component={FindRide} />
			<Route path="searchresults" component={SearchResults} />
			<Route path="profile/:username" component={Profile}></Route>
			<Route path="editprofile/:username" component={EditProfile}></Route>
			<Route path="notifications" component={Notifications} />
			<Route path="chats" component={Chats} />
			<Route path="wallet" component={Wallet} />
		</Route>
		<Route path="tutorial/:step" component={TutorialStep} />
		<Route path="home" component={Home} />
	</Route>
);
export default routingTree;