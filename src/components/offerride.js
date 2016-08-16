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
				const payload = {
					auth_token: auth_token,
					driver: {__type: "Pointer", className: "_User", objectId: store.cursor(["profileUser", "id"]).deref()},
					src_id: this.state["From/place"].place_id ,
					src_name: this.state["From/place"].formatted_address,
					src_coordinates_lat: this.state["From/place"].geometry.location.lat(),
					src_coordinates_lng: this.state["From/place"].geometry.location.lng(),
					destination_id: this.state["To/place"].place_id  ,
					destination_name: this.state["To/place"].formatted_address,
					destination_coordinates_lat: this.state["To/place"].geometry.location.lat(),
					destination_coordinates_lng : this.state["To/place"].geometry.location.lng(),
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
					             onPlaceChnage={(maps)=> {
					              const state = {};
					              state['From/place'] = maps[0];
												state['To/place'] = maps[1];
					              this.setState(state);
					             }}
					             onSubmit={() => {
												 const state = {};
												 state['From'] = false;
												 state['To'] = false;
												 this.setState(state);
											 }}
					             onClose={() => {
												 const state = {};
												 state['From'] = false;
												 state['To'] = false;
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

                var placeHolder;
                if (fieldName=='From') {
                    placeHolder = 'Leaving From';
                } else if (fieldName=='To') {
                    placeHolder = 'Going To';
                }
				return (
					<div onClick={(e) => {
						const state = {};
						state[fieldName] = true;
						this.setState(state);
					}}>
                        {placeHolder}
					</div>
				)

			}
		}
	}

	render(){
		let classes = classnames('stage', 'offerheader');
		const sectionStyle = Object.assign({},center, {marginTop:"1em", width:"90%", height:"90%", flexDirection:"column", background:"white", boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.47)", justifyContent:"space-between"});
		const button = Object.assign({},buttonStyle, {width: "65%", background:"rgba(0, 0, 0, 0.8)", border: "1px solid rgba(0, 0, 0, 0.8)", marginBottom:"1em"});
		const linkStyle = Object.assign({}, buttonLink, {color: "white", fontSize: "5vw"});
		return (
				<div className={classes}>
					<section style={sectionStyle}>
						<ul id="offerlist" style={{width: "100%", height: "65%", padding: "0", margin:"0", display: "flex",flexDirection:"column"}}>
							<li>
								<div className="lefticons" style={{marginLeft:"0.5em"}}>
									<img style={{width: "100%"}} src="/_assets/images/pickuplocation.png" />
								</div>
								<div className="selecttr" style={{width:"75%", textAlign:"left", fontSize:"1.3em", color:"#7f7f7f", borderBottom:"1px solid #333333", display:"flex", paddingBottom:"0.15em", justifyContent:"space-between"}}>
                                    {this.renderPlacePicker("From")}
                                </div>
							</li>
							<li>
								<div className="lefticons" style={{marginLeft:"0.8em"}}>
									<img style={{width: "100%"}} src="/_assets/images/droplocation.png" />
								</div>
								<div className="selecttr" style={{width:"57%", textAlign:"left", fontSize:"1.3em", color:"#7f7f7f", borderBottom:"1px solid #333333", display:"flex", paddingBottom:"0.15em", justifyContent:"space-between", paddingLeft:"0.4em"}}>
                                    {this.renderPlacePicker("To")}
                                </div>
                                <div><img style={{width: "50%"}} src="/_assets/images/changeroutes.png" /></div>
							</li>
							<li>
								<div className="lefticons" style={{width:"9%", marginLeft:"0.3em"}}>
                                    <img style={{width: "100%"}} src="/_assets/images/time.png" />
								</div>
								<input ref="time" style={{fontSize:"1.1em", fontFamily: "quicksand", color:"#7f7f7f"}} className="selecttr" type="datetime-local" placeholder="Choose date" name="usr_time" />
							</li>
							<li>
								<div className="lefticons">
                                    <img style={{width: "100%"}} src="/_assets/images/user-1.png" />
								</div>
								<input ref="seats" type="number" className="selecttr" name="numberofseats" placeholder="Seats available" id="numseats" />
							</li>
							<li>
								<div className="lefticons">
                                    <img style={{width: "100%"}} src="/_assets/images/womenonly.png" />
								</div>
								<div className="selecttr" style={{width:"75%", textAlign:"left", fontSize:"1.3em", color:"#7f7f7f", borderBottom:"1px solid #333333", display:"flex", paddingBottom:"0.15em", justifyContent:"space-between"}}>
									Women only
									<label className="togglebtn">
										<Toggle
											defaultChecked={this.state.handleWomenOnly}
											ref="womensafety" />
									</label>
								</div>
							</li>
                            <li style={{alignItems: "flex-start", paddingTop: "20px"}}>
                                <div className="lefticons">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" fill="#EA6291"><circle cx="11.5" cy="4" r="3.5"/><path d="M11.5 9c-3.038 0-5.5 4.5-5.5 9.5h3.5v5h4v-5h3.5c0-5-2.463-9.5-5.5-9.5z"/></g></svg>
                                </div>
                                <div className="selecttr" style={{width:"75%", textAlign:"left", fontSize:"1.3em", color:"#fff", display:"flex", paddingBottom:"0.15em", justifyContent:"space-between"}}>
                                    Tap to Add car details
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
