import React from "react";
import { Link } from 'react-router';
import {buttonStyle, buttonLink} from "../stylesheets/button";
class Profile extends React.Component {
	renderEditButton = (e) => {
		const button=Object.assign({},buttonStyle,{height:"11%", width: "80%", margin: "1.5em auto", background: "#00c5d1", borderRadius: "40px", border:"#00c5d1"});
		const linkStyle = Object.assign({}, buttonLink, {color: "white", fontSize: "5vw"});
		return(
		<div style={{width:"100%", height:"100%"}}>
			<button className="dndbutton" style={button}>
				<Link to="/public/editprofile/:username" style={linkStyle}>Edit Profile</Link>
			</button>
		</div>
		)
}
	render(){
		const {store} = this.props;
		const profileuser = this.props.user;
		const otherinfoStyle = {width: "100%", height:"24%", display: "flex", alignItems: "center", justifyContent:"space-around", marginBottom:"1em"};
		const spanStyle = {width: "70%", textAlign:"left"};
		return (
			<div className="stage profile" style={{paddingTop: "1em", color: "rgba(61, 61, 61, 0.8)"}}>
				<div style={{display:"flex", height:"62%", width:"100%", flexDirection:"row", alignItems:"center", justifyContent:"space-around"}}>
					<div style={{width:"25%", height: "80%", borderRadius: "56%", overflow: "hidden", boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)"}}>
						<img src={profileuser.avatar_url} style={{height: "100%"}} />
					</div>
					<div style={{width:"50%", textAlign:"left", height: "100%", textAlign:"left", display: "flex", flexDirection: "column",justifyContent: "center"}}>
						<div className="name" style={{fontSize: "1.5em", fontWeight: "bold", paddingBottom: "0.5em", width: "100%"}}>
							{profileuser.name} Verma
						</div>
						<div className="name" style={{fontSize: "1.5em", width: "100%"}}>
							{profileuser.age} yrs old
						</div>
					</div>
				</div>
				<div className="aboutsection" style={{width: "90%", display:"flex", flexDirection:"column", alignItems:"center"}}>
					<div style={{width:"90%", marginBottom:"2em", boxSizing:"content-box", padding:"1em", border:"1px solid #cecdcd", borderRadius:"7px"}}>
						<div className="abouttext">
							<i className="fa fa-quote-left fa-3x fa-pull-left" style={{color:"989898"}}></i>
							{profileuser.about}
							<i className="fa fa-quote-right fa-1x fa-pull-right" style={{color:"989898"}}></i>
						</div>
					</div>
					<div style={otherinfoStyle}>
						<i className="fa fa-2x fa-mobile" style={{color: "#585858", marginLeft:"1px", fontSize:"2.8em"}}></i>
						<span style={spanStyle}>{profileuser.phoneNumber}</span>
						<i className="fa fa-check-circle-o" style={{color: "#FFD900", fontSize:"1.5em"}}></i>
					</div>
					<div style={otherinfoStyle}>
						<i className="fa fa-envelope" style={{fontSize:"1.8em", color: "#585858"}}></i>
						<span style={spanStyle}>{profileuser.email}</span>
						<i className="fa fa-check-circle-o" style={{color: "#FFD900", fontSize:"1.5em"}}></i>
					</div>
					<div style={otherinfoStyle}>
						<i className="fa fa-2x fa-facebook-square" style={{color: "#585858"}}></i>
						<span style={spanStyle}>XXX friends on Facebook</span>
						<i className="fa fa-check-circle-o" style={{color: "#FFD900", fontSize:"1.5em"}}></i>
					</div>
					{profileuser.objectId == store.cursor(["profileUser", "id"]).deref() ? this.renderEditButton() : ""}
				</div>
			</div>
		)
	};
}
export default Profile;