import React from "react";
import { Link } from 'react-router';

class Messages extends React.Component {
	constructor(props) {
		super(props);
	};
	toggleBack = (e) => {
		this.props.ontoggle();
	};
	render(){
		const {store} = this.props;
		const user = store.cursor(["profileUser"]).deref();
		const mess = store.cursor(["messages"]).deref();
		const noti = store.cursor(["notifications"]).deref();
		return (
			<div className="messages" style={{right: "-65%!important", flexDirection: "column", display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
				<div className="messagealert">
					<div style={{fontWeight: "bold", padding: "1em", fontSize: "1.3em", color: "rgb(0, 197, 209)", background: "white"}}>	Messages</div>
					<Link onClick={this.toggleBack} to="/public/chats" style={{paddingTop: "1em", color: "white", flex: "0.7", background: "rgb(0, 197, 209)", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px"}}>
						{mess.get("count")} unread Messages
					</Link>
				</div>
				<div className="messagealert">
					<div style={{fontWeight: "bold", padding: "1em", fontSize: "1.3em", color: "rgb(0, 197, 209)", background: "white"}}>Notifications</div>
					<Link onClick={this.toggleBack} to="/public/notifications" style={{paddingTop: "1em", color: "white", flex: "0.7", background: "rgb(0, 197, 209)", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px"}}>
						{noti.get("count")} new notifications
					</Link>
				</div>
			</div>
		)
	};
}
export default Messages;