import React from "react";
import { Link } from 'react-router';
import {center} from "../stylesheets/center";
class EditProfile extends React.Component {
	render(){
		const {store} = this.props;
		const user = store.cursor(["profileUser"]).deref();
		return (
			<div className="stage profile" style={{paddingTop: "1em", color: "rgb(111, 110, 110)"}}>
				<div className="otherinfo">
					Name
					<input type="text" placeholder={user.get("name")}/>
				</div>
				<div className="otherinfo">
					Surname
					<input type="text" placeholder={user.get("surname")}/>
				</div>
				<div className="otherinfo">
					Sex
					<input type="text" placeholder={user.get("gender")}/>
				</div>
				<div className="otherinfo">
					Why we should travel together
					<input type="text" placeholder={user.get("about")}/>
				</div>
				<div className="otherinfo">
					Email
					<input type="text" placeholder={user.get("email")}/>
				</div>
				<div className="otherinfo">
					Phone Number
					<input type="text" placeholder={user.get("phone")}/>
				</div>
			</div>
		)
	};
}
export default EditProfile;