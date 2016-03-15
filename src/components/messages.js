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
				<div className="messagealert" style={{background:"rgb(0, 197, 209)", overflow: "hidden", display: "flex", flexDirection:"column"}}>
					<div style={{fontWeight: "bold", padding: "1em", fontSize: "1.3em", color: "rgb(0, 197, 209)", background: "white"}}>	Messages</div>
					<Link to="/inbox" style={{paddingTop: "1em", color: "white", flex: "0.8"}}>No unread Messages</Link>
				</div>
				<div className="messagealert" style={{background:"rgb(0, 197, 209)", overflow: "hidden"}}>
					<div style={{fontWeight: "bold", padding: "1em", fontSize: "1.3em", color: "rgb(0, 197, 209)", background: "white"}}>Notifications</div>
					<Link to="/notifications" style={{paddingTop: "1em", color: "white"}}>No new notifications</Link>
				</div>
			</div>
		)
	};
}
export default Messages;