import React from "react";
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import SuperApp from "./components/superapp.js";
import App from "./components/app.js";
import ListingsProvider from "./providers/listings.js";
import ListingProvider from "./providers/listing.js";
import UserProvider from "./providers/user.js";
import TutorialStep from "./components/tutorialscreen.js";
import Login from "./components/login.js";
import Home from "./components/home.js";
import OfferRide from "./components/offerride.js";
import Published from "./components/published.js";
import FindRide from "./components/findride.js";
import SearchResults from "./components/searchresults.js";
import Listing from "./components/listing.js";
import Profile from "./components/profile.js";
import EditProfile from "./components/editprofile.js";
import Wallet from "./components/wallet.js";
import Chats from "./components/chats.js";
import Notifications from "./components/notifications.js";
import Map from "./components/map.js";

const routingTree = (
	<Route path="/" component={SuperApp}>
		<Route path="public" component={App}>
			<Route path="offerride" component={OfferRide} />
			<Route path="findride" component={FindRide} />
			<Route path="searchresults" component={ListingsProvider} />
			<Route path="published" component={Published} />
			<Route path="listing/:id" component={ListingProvider} />
			<Route path="profile/:id" component={UserProvider}></Route>
			<Route path="editprofile/:username" component={EditProfile}></Route>
			<Route path="notifications" component={Notifications} />
			<Route path="chats" component={Chats} />
			<Route path="wallet" component={Wallet} />
			<Route path="map" component={Map} />
		</Route>
		<Route path="tutorial/:step" component={TutorialStep} />
		<IndexRoute component={Home} />
		<Route path="home" component={Home} />
		<Route path="login" component={Login} />
	</Route>
);
export default routingTree;