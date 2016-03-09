import React from "react";
import { Link } from 'react-router';
class Sidebar extends React.Component {
	constructor(props) {
		super(props);
	};
	render(){
		return (
			<div className="sidebar">
				<div className="myprofile"><a href="#"><img src="/_assets/images/khush.png" /></a></div>
				<ul>
					<li className="settings"><a href="#">Settings</a></li>
					<li className="invite"><a href="#">Invites Friends</a></li>
				</ul>
				<div className="switchto"><Link to={this.props.currentlink}>{this.props.currentpage}</Link></div>
			</div>
		)
	};
}
export default Sidebar;