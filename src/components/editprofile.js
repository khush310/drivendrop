import React from "react";
import { Link } from 'react-router';
import {center} from "../stylesheets/center";
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
		return (
			<div className="stage editprofile" style={{paddingTop: "1em", color: "rgb(111, 110, 110)", overflow:"scroll"}}>
				<div className="heading">About</div>
				<div style={{height: "15%", width: "100%", borderBottom: "1px solid rgba(61, 61, 61, 0.2)"}}>
					<i className="fa fa-quote-left fa-2x fa-pull-left fa-border"></i>
					<input style={{width: "85%", fontSize: "1em", height:"100%", }} type="text" onChange={this.saveAbout} placeholder={user.get("about")}/>
				</div>

				<div className="heading">Name</div>
				<div>
					<div className="otherinfo editinfo">
						<span>First Name</span>
						<input type="text" onChange={this.saveName} placeholder={user.get("name")}/>
					</div>
					<div className="otherinfo editinfo">
						<span>Last Name</span>
						<input type="text" onChange={this.saveSurname} placeholder={user.get("surname")}/>
					</div>
				</div>

				<div className="heading">Private Details</div>
				<div>
					<div className="otherinfo editinfo">
						<span>Sex</span>
						<input type="text" onChange={this.saveGender} placeholder={user.get("gender")}/>
					</div>
					<div className="otherinfo editinfo">
						<span>Email</span>
						<input type="text" onChange={this.saveEmail} placeholder={user.get("email")}/>
					</div>
					<div className="otherinfo editinfo">
						<span>Phone No.</span>
						<input type="text" onChange={this.savePhone} placeholder={user.get("phone")}/>
					</div>
				</div>
				<div  style={{border:"1px solid red"}}>
					<Link to="/public/profile/:username">Save</Link>
				</div>
			</div>
		)
	};
}
export default EditProfile;