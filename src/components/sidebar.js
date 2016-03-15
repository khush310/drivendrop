import React from "react";
import { Link } from 'react-router';
class Sidebar extends React.Component {
	constructor(props) {
		super(props);
	};
	render(){
		const {store} = this.props;
		const user = store.cursor(["profileUser"]).deref();
		return (
			<div className="sidebar" style={{left:'-65%!important'}}>
				<div className="myprofile">
					<Link to="/profile" store={this.props.store}>
						<img src={user.get("img")} />
					</Link>
				</div>
				<ul>
					<li className="settings"><Link to="/settings">Settings</Link></li>
					<li className="invite"><a href="#">Invites Friends</a></li>
				</ul>
			</div>
		)
	};
}
export default Sidebar;