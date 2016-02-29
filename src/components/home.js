import React from "react";
import Header from "./header";
import {  Link } from 'react-router'

class Home extends React.Component {
	constructor() {
		super();
	}

	handleClick = (e) => {
		console.log(this.props);
		const {store} = this.props;
		store.cursor(["currentUser", "name"]).update(function() {
			return "John Doe"
		});
	};

	render = () => {
		console.log(this.props);
		const {store} = this.props;
		const name = store.cursor(["currentUser", "name"]).deref();
		return (
			<div className="stage" id="opt">
				<Header name="khushboo" id="homescreen"></Header>
				<div id="sidebar">
					<ul>
						<li className="myprofile"><a href="profile.html">My profile</a></li>
						<li className="wallet"><a href="#">Wallet</a></li>
						<li className="settings"><a href="#">Settings</a></li>
						<li className="invite"><a href="#">Invites Friends</a></li>
						<li className="help"><a href="#">Help</a></li>
					</ul>
				</div>
				<div className="options">
					<div
						onClick={this.handleClick}
					>click me</div>
					<div className="button dndopt" id="optDrive">
						<Link to='/offerride'>{name}</Link>
					</div>
					<div className="button dndopt" id="optDropped">
						<a href='/findride'>Find a ride</a>
					</div>
				</div>
				<footer>footer</footer>
			</div>
		)
	};
}

export default Home;