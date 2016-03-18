import React from "react";
import { Link } from 'react-router';
import {center} from "../stylesheets/center";
class Profile extends React.Component {
	render(){
		const {store} = this.props;
		const user = store.cursor(["profileUser"]).deref();
		return (
			<div className="stage profile" style={{paddingTop: "1em", color: "rgba(61, 61, 61, 0.8)"}}>
				<div style={{width: "25%", borderRadius: "20px", overflow: "hidden", border: "2px solid #00c5d1"}}><img src={user.get("img")} style={{width: "100%"}} /></div>
				<div className="aboutsection" style={{width: "90%", marginTop: "1em"}}>
					<div className="name" style={{fontSize: "1.5em", fontWeight: "bold", paddingBottom: "0.5em", width: "100%"}}>{user.get("name")}</div>

					<div className="abouttitle" style={{fontWeight:"bold", paddingLeft: "0.8em"}}>About</div>
					<div style={{marginTop:"0.5em", marginBottom: "1em", border: "1px solid rgba(158, 158, 158, 0.86)", padding: "0.6em", borderRadius:"5px", borderStyle:"outset"}}>
						<div className="abouttext">{user.get("about")}</div>
					</div>
					<div className="otherinfo">
						<i className="fa fa-3x fa-mobile" style={{color: "rgb(66, 66, 66)", marginLeft:"4px"}}></i>
						<span style={{width: "70%"}}>{user.get("phone")}</span>
						<i className="fa fa-2x fa-check-circle-o" style={{color: "#FFD900"}}></i>
					</div>
					<div className="otherinfo">
						<i className="fa fa-2x fa-envelope" style={{color: "rgb(66, 66, 66)"}}></i>
						<span style={{width: "70%"}}>{user.get("email")}</span>
						<i className="fa fa-2x fa-check-circle-o" style={{color: "#FFD900"}}></i>
					</div>
					<div className="otherinfo">
						<i className="fa fa-2x fa-child" style={{color: "rgb(66, 66, 66)", marginLeft: "5px"}}></i>
						<span style={{width: "70%"}}>ID Verified</span>
						<i className="fa fa-2x fa-check-circle-o" style={{color: "#FFD900"}}></i>
					</div>
					<div style={{height:"7%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1.5em", background: "rgb(0, 197, 207)", borderRadius: "15px"}}>
						<Link to="/public/editprofile/:username" style={{fontWeight: "normal", color: "white", fontSize:"1.2em"}}>Edit Profile</Link>
					</div>
				</div>
			</div>
		)
	};
}
export default Profile;