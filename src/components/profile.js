import React from "react";
import { Link } from 'react-router';
import {buttonStyle, buttonLink} from "../stylesheets/button";
class Profile extends React.Component {
	render(){
		const {store} = this.props;
		const user = store.cursor(["profileUser"]).deref();
		const otherinfoStyle = {width: "100%", height:"7%", display: "flex", alignItems: "center", justifyContent:"space-around"};
		const spanStyle = {width: "70%", textAlign:"left"};
		const button=Object.assign({},buttonStyle,{height:"7%", width: "80%", margin: "1.5em 0", background: "#00c5d1", borderRadius: "40px", border:"#00c5d1"});
		const linkStyle = Object.assign({}, buttonLink, {color: "white", fontSize: "5vw"});
		return (
			<div className="stage profile" style={{paddingTop: "1em", color: "rgba(61, 61, 61, 0.8)"}}>
				<div style={{display:"flex", height:"25%", width:"100%", flexDirection:"row", alignItems:"center", justifyContent:"space-around"}}>
					<div style={{height: "80%", borderRadius: "56%", overflow: "hidden", boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)"}}>
						<img src={user.get("img")} style={{height: "100%"}} />
					</div>
					<div style={{width:"50%", textAlign:"left", height: "100%", textAlign:"left", display: "flex", flexDirection: "column",justifyContent: "center"}}>
						<div className="name" style={{fontSize: "1.5em", fontWeight: "bold", paddingBottom: "0.5em", width: "100%"}}>
							{user.get("name")} Verma
						</div>
						<div className="name" style={{fontSize: "1.5em", width: "100%"}}>
							{user.get("age")}
						</div>
					</div>
				</div>
				<div className="aboutsection" style={{width: "90%", display:"flex", flexDirection:"column", alignItems:"center"}}>
					<div style={{width:"100%", marginBottom:"1em"}}>
						<div className="abouttext">
							<i className="fa fa-quote-left fa-3x fa-pull-left" style={{color:"989898"}}></i>
							{user.get("about")}jnd;jsnfjsnxj x,fj bxb,jcx,jh jxhfb sjhlbslhdbvsljiusdvhli svlsvsdvksvdkshvskhvs
							<i className="fa fa-quote-right fa-1x fa-pull-right" style={{color:"989898"}}></i>
						</div>
					</div>
					<div style={otherinfoStyle}>
						<i className="fa fa-3x fa-mobile" style={{color: "rgb(66, 66, 66)", marginLeft:"4px"}}></i>
						<span style={spanStyle}>{user.get("phone")}</span>
						<i className="fa fa-2x fa-check-circle-o" style={{color: "#FFD900"}}></i>
					</div>
					<div style={otherinfoStyle}>
						<i className="fa fa-2x fa-envelope" style={{color: "rgb(66, 66, 66)"}}></i>
						<span style={spanStyle}>{user.get("email")}</span>
						<i className="fa fa-2x fa-check-circle-o" style={{color: "#FFD900"}}></i>
					</div>
					<div style={otherinfoStyle}>
						<i className="fa fa-2x fa-child" style={{color: "rgb(66, 66, 66)", marginLeft: "5px"}}></i>
						<span style={spanStyle}>ID Verified</span>
						<i className="fa fa-2x fa-check-circle-o" style={{color: "#FFD900"}}></i>
					</div>
					<button className="dndbutton" style={button}>
						<Link to="/public/editprofile/:username" style={linkStyle}>Edit Profile</Link>
					</button>
				</div>
			</div>
		)
	};
}
export default Profile;