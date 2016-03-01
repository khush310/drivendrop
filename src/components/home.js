import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from 'react-router';

class Home extends React.Component {
	constructor() {
		super();
	};

	handleClick = (e) => {
		const {store} = this.props;
		store.cursor(["currentUser", "name"]).update(function() {
			return "John Doe"
		});
	};

	render = () => {
		const {store} = this.props;
		const name = store.cursor(["currentUser", "name"]).deref();
		return (
			<div className="stage" id="opt">
				<Header id="homescreen"></Header>
				<div id="sidebar">
					<ul>
						<li className="myprofile"><a href="#">My profile</a></li>
						<li className="wallet"><a href="#">Wallet</a></li>
						<li className="settings"><a href="#">Settings</a></li>
						<li className="invite"><a href="#">Invites Friends</a></li>
						<li className="help"><a href="#">Help</a></li>
					</ul>
				</div>
				<div className="options">
					<div className="button dndopt" id="optDrive">
						<Link to='/offerride'>Offer a ride</Link>
					</div>
					<div className="button dndopt" id="optDropped">
						<Link to='/findride'>Find a ride</Link>
					</div>
				</div>
				<Footer></Footer>
			</div>
		)
	};
}

export default Home;