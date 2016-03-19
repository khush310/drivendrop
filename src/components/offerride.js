import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import {Link} from "react-router";
import classnames from "classnames";
import {buttonStyle, buttonLink} from "../stylesheets/button";
import {center} from "../stylesheets/center";

class OfferRide extends React.Component {
	constructor(props) {
		super(props);
		this.state = {active: false};
	};

	handleFrom= (e) =>{
		const {store} = this.props;
		store.cursor(["offer", "from"]).update(function() {
			return e.target.value;
		});
	};
	handleTo=(e) =>{
		const {store} = this.props;
		store.cursor(["offer", "to"]).update(function () {
			return e.target.value;
		})
	};
	handleTime=(e) =>{
		const {store} = this.props;
		store.cursor(["offer", "time"]).update(function () {
			return e.target.value;
		})
	};

	render(){
		let classes = classnames('stage', 'offerheader');
		const sectionStyle = Object.assign({},center, {marginTop:"2em", width:"86%", height:"60%", flexDirection:"column", background:"rgba(158, 158, 158, 0.5)", boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.47)" });
		const button = Object.assign({},buttonStyle, {width: "75%", background:"rgba(0, 0, 0, 0.8)", margin: "1em", border: "1px solid rgba(0, 0, 0, 0.8)"});
		return (
				<div className={classes}>
					<section style={sectionStyle}>
						<ul id="offerlist" style={{width: "100%", height: "65%", padding: "0", margin:"0", display: "flex",flexDirection:"column"}}>
							<li id="selectFrom">
								<div className="lefticons" style={{marginLeft:"0.5em"}}>
									<img style={{height: "50%"}} src="/_assets/images/circleyellow.png" />
								</div>
								<input onChange={this.handleFrom} type="text" name="from" placeholder="From" id="from" />
							</li>
							<li id="selectTo">
								<div className="lefticons" style={{marginLeft:"0.5em"}}>
									<img style={{height: "50%"}} src="/_assets/images/circleblue.png" />
								</div>
								<input onChange={this.handleTo} type="text" name="to" placeholder="To" id="to" />
							</li>
							<li id="selecTime">
								<div className="lefticons" style={{width:"9%", marginLeft:"0.5em"}}>
									<svg style={{width:"100%", height:"100%"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g stroke="#000" strokeLinecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none"><circle cx="12" cy="12" r="11.5" /><path d="M11.5 6.5v5.5l6 5.5" /></g></svg>
								</div>
								<input onChange={this.handleTime} className="selecttr" type="time" placeholder="hrs:mins" name="usr_time" />
							</li>
						</ul>
						<button className="dndbutton" style={button}>
							<Link to="/public/offerride2" >Continue</Link>
						</button>
					</section>
				</div>
		)
	};
}
export default OfferRide;