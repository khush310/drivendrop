import React from "react";
import { Link } from 'react-router';
import {center} from "../stylesheets/center";
class Messages extends React.Component {
	constructor(props) {
		super(props);
	};
	render(){
		const {store} = this.props;
		const user = store.cursor(["profileUser"]).deref();
		const messagestyle = Object.assign({right: "-65%!important", flexDirection: "column"}, center);
		return (
			<div className="messages" style={messagestyle}>
				<div className="messagealert">
					<div>	Messages</div>
					<div>No unread Messages</div>
				</div>
				<div className="messagealert">
					<div>Notifications</div>
					<div>No new notifications</div>
				</div>
			</div>
		)
	};
}
export default Messages;