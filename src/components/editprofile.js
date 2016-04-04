import React from "react";
import { Link } from 'react-router';
import {buttonStyle, buttonLink} from "../stylesheets/button";
class EditProfile extends React.Component {
	constructor(props) {
		super(props);
	};
	saveName= (e) => {
		const {store} = this.props;
		store.cursor(["profileUser", "name"]).update(function () {
			return e.target.value;
		})
	};
	saveSurname= (e) => {
		const {store} = this.props;
		store.cursor(["profileUser", "surname"]).update(function () {
			return e.target.value;
		})
	};
	saveGender= (e) => {
		const {store} = this.props;
		store.cursor(["profileUser", "gender"]).update(function () {
			return e.target.value;
		})
	};
	saveAbout= (e) => {
		const {store} = this.props;
		store.cursor(["profileUser", "about"]).update(function () {
			return e.target.value;
		})
	};
	savePhone= (e) => {
		const {store} = this.props;
		store.cursor(["profileUser", "phone"]).update(function () {
			return e.target.value;
		})
	};
	saveEmail= (e) => {
		const {store} = this.props;
		store.cursor(["profileUser", "email"]).update(function () {
			return e.target.value;
		})
	};
	
	render(){
		const {store} = this.props;
		const user = store.cursor(["profileUser"]).deref();
		const nameStyle = {display:"flex", width:"85%", borderBottom:"1px solid rgba(66, 66, 66, 0.5)", justifyContent:"space-around", alignItems:"center", height:"60px"};
		const inputStyle = {width:"60%", borderBottom:"none"};
		const button=Object.assign({},buttonStyle,{height:"7%", width: "80%", margin: "1.5em 0", background: "#00c5d1", borderRadius: "40px", border:"#00c5d1"});
		const linkStyle = Object.assign({}, buttonLink, {color: "white", fontSize: "5vw"});

		return (
			<div className="stage editprofile" style={{paddingTop: "1em", color: "rgb(111, 110, 110)", overflow:"scroll"}}>
				<div style={{fontWeight:"bold", fontSize:"1.2em"}}>About</div>
				<div style={{height: "15%", width: "100%", marginBottom:"1em"}}>
					<i style={{margin:"0"}} className="fa fa-quote-left fa-2x fa-pull-left fa-border"></i>
					<input style={{width: "80%", fontSize: "1em", height:"100%", borderBottom:"none"}} type="text" onChange={this.saveAbout} placeholder={user.get("about")}/>
				</div>
				<div style={{fontWeight:"bold", fontSize:"1.2em"}}>Name</div>y

				<div style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center", margin:"1em"}}>
					<div style={nameStyle}>
						<span>First Name</span>
						<input type="text" style={inputStyle} onChange={this.saveName} placeholder={user.get("name")}/>
					</div>
					<div style={nameStyle}>
						<span>Last Name</span>
						<input type="text" style={inputStyle} onChange={this.saveSurname} placeholder={user.get("surname")}/>
					</div>
				</div>

				<div className="heading">Private Details</div>
				<div style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center", margin:"1em"}}>
					<div style={nameStyle}>
						<span>Sex</span>
						<input type="text" style={inputStyle} onChange={this.saveGender} placeholder={user.get("gender")}/>
					</div>
					<div style={nameStyle}>
						<span>Email</span>
						<input type="text" style={inputStyle} onChange={this.saveEmail} placeholder={user.get("email")}/>
					</div>
					<div style={nameStyle}>
						<span>Phone No.</span>
						<input type="text" style={{width:"65%", borderBottom:"none"}} onChange={this.savePhone} placeholder={user.get("phone")}/>
					</div>
					<div style={nameStyle}>
						<span>ID Proof</span>
						<input type="text" style={{width:"65%", borderBottom:"none"}} onChange={this.saveID} placeholder="Add Id proof"/>
					</div>
				</div>
				<div className="dndbutton" style={button}>
					<Link style={linkStyle} to="/public/profile/:username">Save</Link>
				</div>
			</div>
		)
	};
}
export default EditProfile;