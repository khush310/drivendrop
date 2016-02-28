import React from "react";
import Header from "./header";
import {  Link } from 'react-router'

class Home extends React.Component {
	render(){
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
					<div className="button dndopt" id="optDrive">
						<Link to='/offerride'>Offer a ride</Link>
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