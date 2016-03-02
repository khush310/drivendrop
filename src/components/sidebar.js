import React from "react";
import { Link } from 'react-router';
class Sidebar extends React.Component {
	render(){
		return (
			<div className="sidebar">
				<ul>
					<li className="myprofile"><a href="profile.html">My profile</a></li>
					<li className="wallet"><a href="#">Wallet</a></li>
					<li className="settings"><a href="#">Settings</a></li>
					<li className="invite"><a href="#">Invites Friends</a></li>
					<li className="help"><a href="#">Help</a></li>
				</ul>
				<div className="switchto"><Link to={this.props.currentlink}>{this.props.currentpage}</Link></div>
			</div>
		)
	};
}
export default Sidebar;