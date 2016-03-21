import React from "react";
import { Link } from 'react-router';
import {center} from "../stylesheets/center";
class Profile extends React.Component {
	render(){
		const {store} = this.props;
		const user = store.cursor(["profileUser"]).deref();
		return (
			<div className="stage profile" style={{paddingTop: "1em", color: "rgba(61, 61, 61, 0.8)"}}>
				<div style={{display:"flex", height:"25%", width:"100%", flexDirection:"row", alignItems:"center", justifyContent:"space-around"}}>
					<div style={{height: "100%", borderRadius: "56%", overflow: "hidden", boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)"}}><img src={user.get("img")} style={{height: "100%"}} /></div>
					<div>
						<div className="name" style={{fontSize: "1.5em", fontWeight: "bold", paddingBottom: "0.5em", width: "100%"}}>
							{user.get("name")}
						</div>
						<div className="name" style={{fontSize: "1.5em", fontWeight: "bold", paddingBottom: "0.5em", width: "100%"}}>
							{user.get("age")}
						</div>
					</div>
				</div>
				<div className="aboutsection" style={{width: "90%", marginTop: "1em", display:"flex", flexDirection:"column", alignItems:"baseline"}}>

					<div className="abouttitle" style={{fontWeight:"bold", paddingLeft: "0.8em"}}>About</div>
					<div style={{marginTop:"0.5em", marginBottom: "1em", border: "1px solid rgba(158, 158, 158, 0.86)", padding: "0.6em", borderRadius:"5px", borderStyle:"outset"}}>
						<div className="abouttext">
							<i className="fa fa-quote-left fa-3x fa-pull-left fa-border"></i>
							{user.get("about")}
						</div>
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