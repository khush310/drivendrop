import React from "react";
import { Link } from 'react-router';
import Header from "./header.js";
import Footer from "./footer.js";
import Sidebar from "./sidebar";
import moment from "moment";
import {buttonStyle, buttonLink} from "../stylesheets/button";
import classnames from 'classnames';
import Superagent from "superagent";

class SearchResults extends React.Component {
	constructor(props) {
		super(props);
		this.state = {active: false};
	};

	renderEmpty = (e) =>{
		return(<div style={{width:"100%", height:"100%", background:"white", padding:"4em 1em", fontSize:"1.2em"}}>
					Sorry, we could not find a ride with your preferences. Try to modify the criteria and search again.
			</div>
		)
	};
	handleAskRequest = (listingId) =>{
		const {store} = this.props;
		const payload = {
			userid: {__type: "Pointer", className: "_User", objectId: store.cursor(["profileUser", "id"]).deref()},
			listingid: {__type: "Pointer", className: "Listing", objectId:listingId},
			accepted_status: false
		}
		Superagent
			.post('https://api.parse.com/1/classes/Passenger')
			.set('X-Parse-Application-Id', 'OoK90cI6fsUljxChRLEmgbwHhMeaq5qlXJy4CBvM')
			.set('X-Parse-REST-API-Key', '78qvq4B8Q7PsyrAMfxoIXF7KfWRC200Vazx2FdEF')
			.send(payload)
			.end((err, res) =>{
				console.log(res);
			})
	};
	renderList = (e) => {
		return(<div>{this.props.list.map ((listing) =>{
				const blueButton = Object.assign({},buttonStyle, buttonLink, {width: "20%", height:"46%", background:"#00c5d1", margin: "0.5em 0", border: "1px solid #00c5d1", borderRadius:"56%", fontSize: "5vw", fontWeight: "bolder"});
				const user = listing.driver;

				return(
					<div style={{width:"95%", display:"flex", height:"25%", background:"#fff", margin:"0.5em auto"}}>
						<div>
							<div style={{width:"44%", float:"left", textAlign:"left", fontWeight:"bold", margin:"0.5em 0 0 0.5em"}}>{moment(listing.timestamp.iso).format("ddd, D, h:mA")}</div>
								<div style={{width:"50%", float:"right", color:"rgb(216, 82, 128)", textAlign:"right", margin:"0.5em 0.5em 0 0", fontWeight:"bold"}}>{listing.seats} seats available</div>
								<div style={{width:"22%", float:"left", margin:"1em 0.5em", borderRadius:"55%", overflow:"hidden"}}>
									<img src={user.avatar_url} style={{width:"100%"}} />
								</div>
								<div style={{textAlign:"right", fontSize:"0.9em", margin:"0 0.5em 0 0"}}>Leaving from <span>{listing.src}</span></div>
								<div style={{width:"42%", height:"55%", margin:"0.5em", float:"left", textAlign:"left"}}>
									<div className="driver">{listing.driver.username}, {listing.driver.age}</div>
									<div className="mutual">{} mutual friends</div>
									<div className="rating"><img src="/_assets/images/stars.png" /></div>
									<div className="rating"><img src="/_assets/images/stars.png" /></div>
									<div className="rating"><img src="/_assets/images/stars.png" /></div>
									<div className="rating"><img src="/_assets/images/stars.png" /></div>
								</div>
								<div className="dndbutton" style={blueButton} onClick={(e) =>{this.handleAskRequest(listing.objectId)}}>
									Ask
								</div>
						</div>
					</div>
				)
			})}
			</div>
		)
	}
	render() {
		const {store} = this.props;
		const search = store.cursor(["search"]).deref();
		return (<div className="stage">
							<section style={{height:"100%", width:"100%", overflow:"scroll", background:"rgb(239, 239, 239)", position:"relative"}}>
								{this.props.list.length > 0 ? this.renderList() : this.renderEmpty()}
							</section>
						</div>
		)
	}
}

export default SearchResults;