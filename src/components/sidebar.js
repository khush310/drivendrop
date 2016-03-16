import React from "react";
import { Link } from 'react-router';
class Sidebar extends React.Component {
	constructor(props) {
		super(props);
	};
	toggleBack = (e) => {
		this.props.ontoggle();
	};
	render(){
		const {store} = this.props;
		const user = store.cursor(["profileUser"]).deref();
		return (
			<div className="sidebar" style={{left:'-65%!important'}}>
				<div className="myprofile">
					<Link onClick={this.toggleBack} to="/public/profile/:username" store={this.props.store}>
						<img src={user.get("img")} />
					</Link>
				</div>
				<ul>
					<li><Link onClick={this.toggleBack} to="/public/wallet">Wallet</Link></li>
					<li className="settings"><Link to="/public/settings">Settings</Link></li>
					<li className="invite"><a href="/home">Invites Friends</a></li>
				</ul>
			</div>
		)
	};
}
export default Sidebar;