import React from "react";
import { Link } from 'react-router';
class Messages extends React.Component {
	constructor(props) {
		super(props);
	};
	render(){
		const {store} = this.props;
		const user = store.cursor(["profileUser"]).deref();
		return (
			<div className="messages">
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
export default Messages;