import React from "react";
import EditHeader from "./edit.js";

class Settings extends React.Component {
	render(){
		const {store} = this.props;
		const user = store.cursor(["profileUser"]).deref();
		return (<div>
				<EditHeader previouslink= "this.props.previouslink"></EditHeader>
				<div className="notification"></div>
				<div className="paymentmethods"></div>
				<div className="appfeedback"></div>
				<div className="version"></div>
				<div className="Log Out"></div>
			</div>
		);
	};
}
export default Settings;