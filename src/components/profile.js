import React from "react";
import EditHeader from "./edit.js";
class Profile extends React.Component {
	render(){
		const {store} = this.props;
		const user = store.cursor(["profileUser"]).deref();
		return (
			<div className="stage profile">
				<EditHeader previouslink= "this.props.previouslink"></EditHeader>
				<div><img src={user.get("img")} /></div>
				<div className="aboutsection">
					<div className="name">{user.get("name")}</div>
					<div className="about">
						<div className="abouttitle">About {user.get("name")}</div>
						<div className="abouttext">{user.get("about")}</div>
					</div>
					<div className="phoneN">{user.get("phone")}</div>
					<div className="email">{user.get("email")}</div>
					<div className="cardetails">
						<div className="abouttitle">Your car details</div>
						<div className="abouttext">{user.get("cardetails")}</div>
					</div>
				</div>
			</div>
		)
	};
}
export default Profile;