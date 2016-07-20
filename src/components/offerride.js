import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import {Link} from "react-router";
import classnames from "classnames";
import Toggle from 'react-toggle';
import Superagent from "superagent";
import {buttonStyle, buttonLink} from "../stylesheets/button";
import {center} from "../stylesheets/center";

import PlacePicker from "./placepicker";

class OfferRide extends React.Component {
	constructor(props) {
		super(props);
		this.state = {active: false};
	};
	handleForm = (e) => {
		const {store} = this.props;

		const login_post_data = {
				username: "ram",
				password: "rammahesh"
		};

		Superagent
			.post('http://dndapi.herokuapp.com/api/login')
			//.set('X-Parse-Application-Id', 'OoK90cI6fsUljxChRLEmgbwHhMeaq5qlXJy4CBvM')
			//.set('X-Parse-REST-API-Key', '78qvq4B8Q7PsyrAMfxoIXF7KfWRC200Vazx2FdEF')
			.send(login_post_data)
			.then((res) =>{
				var auth_token = res.body.auth_token;
				console.log(auth_token);
				const payload = {
					auth_token: auth_token,
					driver: {__type: "Pointer", className: "_User", objectId: store.cursor(["profileUser", "id"]).deref()},
					src_id: this.state["From/place"].place_id ,
					src_name: this.state["From/place"].formatted_address,
					src_coordinates_lat: this.state["From/place"].geometry.location.lat,
					src_coordinates_lng: this.state["From/place"].geometry.location.lng,
					destination_id: this.state["To/place"].place_id  ,
					destination_name: this.state["To/place"].formatted_address,
					destination_coordinates_lat: this.state["To/place"].geometry.location.lat,
					destination_coordinates_lng : this.state["To/place"].geometry.location.lng,
					timestamp: {__type: "Date", iso: new Date(this.refs.time.value)},
					seats: parseInt(this.refs.seats.value),
					womensafety: this.refs.womensafety.state.checked
				};

				Superagent
					.post('http://dndapi.herokuapp.com/api/rides')
					//.set('X-Parse-Application-Id', 'OoK90cI6fsUljxChRLEmgbwHhMeaq5qlXJy4CBvM')
					//.set('X-Parse-REST-API-Key', '78qvq4B8Q7PsyrAMfxoIXF7KfWRC200Vazx2FdEF')
					.send(payload)
					.end((err, res) =>{
						console.log(res);
					});

			});

	};



	renderPlacePicker(fieldName) {
		const placeKey = fieldName + "/place";
		if (this.state[fieldName]) {
			return (
				<div style={{position: "fixed", width :"100%", height: "100%", background: "white", zIndex: 999999, left: 0, top: 0}}>
					<PlacePicker style={{}}
					             place={this.state[placeKey]}
					             onPlaceChnage={(place)=> {
					              const state = {};
					              state[placeKey] = place;
					              this.setState(state);
					             }}
					             onSubmit={() => {
												 const state = {};
												 state[fieldName] = false;
												 this.setState(state);
											 }}
					             onClose={() => {
												 const state = {};
												 state[fieldName] = false;
												 this.setState(state);
											}}>
					</PlacePicker>
				</div>
			)
		} else {
			if (this.state[placeKey]) {
				return (
					<div onClick={(e) => {
						const state = {};
						state[fieldName] = true;
						this.setState(state);
					}}>
						{fieldName} - {this.state[placeKey]["address_components"][0].long_name}
					</div>
				)
			} else {
				return (
					<div onClick={(e) => {
						const state = {};
						state[fieldName] = true;
						this.setState(state);
					}}>
						{fieldName} - pick a location
					</div>
				)

			}
		}
	}

	render(){
		let classes = classnames('stage', 'offerheader');
		const sectionStyle = Object.assign({},center, {marginTop:"1em", width:"90%", height:"90%", flexDirection:"column", background:"rgba(158, 158, 158, 0.5)", boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.47)", justifyContent:"space-between"});
		const button = Object.assign({},buttonStyle, {width: "65%", background:"rgba(0, 0, 0, 0.8)", border: "1px solid rgba(0, 0, 0, 0.8)", marginBottom:"1em"});
		const linkStyle = Object.assign({}, buttonLink, {color: "white", fontSize: "5vw"});
		return (
				<div className={classes}>
					<section style={sectionStyle}>
						<ul id="offerlist" style={{width: "100%", height: "65%", padding: "0", margin:"0", display: "flex",flexDirection:"column"}}>
							<li>
								<div className="lefticons" style={{marginLeft:"0.5em"}}>
									<img style={{width: "100%"}} src="/_assets/images/circleyellow.png" />
								</div>
								<div className="selecttr" style={{width:"75%", textAlign:"left", fontSize:"1.3em", color:"#fff", borderBottom:"1px solid #333333", display:"flex", paddingBottom:"0.15em", justifyContent:"space-between"}}>{this.renderPlacePicker("From")}</div>
							</li>
							<li>
								<div className="lefticons" style={{marginLeft:"0.5em"}}>
									<img style={{width: "100%"}} src="/_assets/images/circleblue.png" />
								</div>
								<div className="selecttr" style={{width:"75%", textAlign:"left", fontSize:"1.3em", color:"#fff", borderBottom:"1px solid #333333", display:"flex", paddingBottom:"0.15em", justifyContent:"space-between"}}>{this.renderPlacePicker("To")}</div>
							</li>
							<li>
								<div className="lefticons" style={{width:"9%", marginLeft:"0.5em"}}>
									<svg style={{width:"100%", height:"100%"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g stroke="#000" strokeLinecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none"><circle cx="12" cy="12" r="11.5" /><path d="M11.5 6.5v5.5l6 5.5" /></g></svg>
								</div>
								<input ref="time" style={{fontSize:"1.1em", fontFamily: "quicksand"}} className="selecttr" type="datetime-local" placeholder="Pick time and date" name="usr_time" />
							</li>
							<li>
								<div className="lefticons">
									<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" fill="none"><path d="M6 16.187v2.181l-3.941 1.412c-.944.338-1.559 1.231-1.559 2.231v1.489h15v-1.489c0-1-.616-1.893-1.559-2.231l-3.941-1.412v-2.306"/><ellipse cx="7.901" cy="12.051" rx="3.947" ry="4.739"/><path d="M11.817 11.625l-.374.033c-1.345.259-2.208-.229-2.949-1.524-.443.852-1.831 1.524-2.972 1.524-.562 0-1.045-.115-1.528-.369"/><path strokeLinecap="round" d="M18.031 23.5h3.469v-1.489c0-1-.616-1.893-1.559-2.231l-3.941-1.412v-2.306M13.901 7.315c2.18 0 3.947 2.121 3.947 4.736 0 2.617-1.768 4.739-3.947 4.739M17.817 11.625l-.374.033c-1.345.259-2.208-.229-2.949-1.524M17.521 4.5h6M20.5 1.5v6.016"/></g></svg>
								</div>
								<input ref="seats" type="number" name="numberofseats" placeholder="Seats available" id="numseats" />
							</li>
							<li>
								<div className="lefticons">
									<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" fill="#EA6291"><circle cx="11.5" cy="4" r="3.5"/><path d="M11.5 9c-3.038 0-5.5 4.5-5.5 9.5h3.5v5h4v-5h3.5c0-5-2.463-9.5-5.5-9.5z"/></g></svg>
								</div>
								<div className="selecttr" style={{width:"75%", textAlign:"left", fontSize:"1.3em", color:"#fff", borderBottom:"1px solid #333333", display:"flex", paddingBottom:"0.15em", justifyContent:"space-between"}}>
									Women only
									<label className="togglebtn">
										<Toggle
											defaultChecked={this.state.handleWomenOnly}
											ref="womensafety" />
									</label>
								</div>
							</li>
							<li>
								<textarea name='comment' id='comment' placeholder="Any information about meeting point?" rows="4" cols="50" ></textarea>
							</li>
						</ul>
						<button className="dndbutton" style={button}>
							<div to="/public/offerride2" style={linkStyle} onClick={this.handleForm}>Publish</div>
						</button>
					</section>
				</div>
		)
	};
}
export default OfferRide;
