import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import {Link} from "react-router";
import classnames from "classnames";

class OfferRide2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {active: false};
	};

	onToggleSidebar = (e) => {
		this.setState({active: !this.state.active});
	};
	handleSeats = (e) => {
		const {store} = this.props;
		store.cursor(["offer", "seats"]).update(function () {
			return e.target.value;
		})
	};
	handleReturn = (e) => {
		const {store} = this.props;
		store.cursor(["offer", "return"]).update(function () {
			return e.target.value;
		})
	};
	handlewomensafety = (e) => {
		const {store} = this.props;
		store.cursor(["offer", "women"]).update(function () {
			return e.target.value;
		})
	};

	render() {
		let classes = classnames('stage', 'offerheader', {active: this.state.active});
		return (<div className={classes}>
			<Link to="/offerride"><Header title="Back"></Header></Link>
			<Sidebar currentpage="Switch to Finding" currentlink="/findride"></Sidebar>
			<section className="selectdrive offersection2 " id="drivebgd">
				<ul>
					<li id="selectSeats">
						<div className="lefticons">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" fill="none"><path d="M6 16.187v2.181l-3.941 1.412c-.944.338-1.559 1.231-1.559 2.231v1.489h15v-1.489c0-1-.616-1.893-1.559-2.231l-3.941-1.412v-2.306"/><ellipse cx="7.901" cy="12.051" rx="3.947" ry="4.739"/><path d="M11.817 11.625l-.374.033c-1.345.259-2.208-.229-2.949-1.524-.443.852-1.831 1.524-2.972 1.524-.562 0-1.045-.115-1.528-.369"/><path strokeLinecap="round" d="M18.031 23.5h3.469v-1.489c0-1-.616-1.893-1.559-2.231l-3.941-1.412v-2.306M13.901 7.315c2.18 0 3.947 2.121 3.947 4.736 0 2.617-1.768 4.739-3.947 4.739M17.817 11.625l-.374.033c-1.345.259-2.208-.229-2.949-1.524M17.521 4.5h6M20.5 1.5v6.016"/></g></svg>
						</div>
						<input onChange={this.handleSeats} type="number" name="numberofseats" placeholder="No. of seats available" id="numseats"/>
					</li>
					<li id="selectWomen">
						<div className="lefticons">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" fill="#EA6291"><circle cx="11.5" cy="4" r="3.5"/><path d="M11.5 9c-3.038 0-5.5 4.5-5.5 9.5h3.5v5h4v-5h3.5c0-5-2.463-9.5-5.5-9.5z"/></g></svg>
						</div>
						<div className="selecttr">Women only
							<div className="onoffswitch">
								<input type="checkbox" onChange={this.handlewomensafety} name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" checked/>
								<label className="onoffswitch-label" for="myonoffswitch"></label>
							</div>
						</div>
					</li>
					<li id="selectReturn">
						<div className="lefticons">
							<svg version="1.1" id="Outline_Icons" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24"><g><path fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" d="M5,13.5c2,0,4.5,8,4.5,8H2.842c-0.907,0-1.702-0.611-1.934-1.487C0.294,17.687,0.109,13.5,5,13.5z"/><path fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" d="M19,13.5c-2,0-4.5,8-4.5,8h6.658c0.907,0,1.702-0.611,1.934-1.487C23.706,17.687,23.891,13.5,19,13.5z"/><path fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" d="M5.953,9.973C6.264,6.865,8.878,4.5,12,4.5s5.736,2.365,6.047,5.473L18.5,13.5c-4.333-2-8.667-2-13,0L5.953,9.973z"/><path fill="none" stroke="#000000" strokeLinecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8.977,9.736C9.132,8.184,10.439,7,12,7"/><line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" x1="9" y1="21.5" x2="15" y2="21.5"/><rect x="17.5" y="21.5" fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" width="4" height="2"/><rect x="2.5" y="21.5" fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" width="4" height="2"/><circle fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" cx="20" cy="17.784" r="1.5"/><circle fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" cx="4" cy="17.784" r="1.5"/></g></svg>
						</div>
						<div className="selecttr">Return
							<div className="onoffswitch">
								<input onChange={this.handleReturn} type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" checked/>
								<label className="onoffswitch-label" for="myonoffswitch"></label>
							</div>
						</div>
					</li>
					<li>
						<textarea name='comment' id='comment' placeholder="Any other information for passengers" rows="4" cols="50" ></textarea>
					</li>
				</ul>
				<button className="continue">
					<Link to="/published" notification="published">Publish</Link>
				</button>
			</section>
			<Sidebar currentpage="Switch to Finding" store={this.props.store} currentlink="/findride" previouslink="/offerride"></Sidebar>
			<Footer onToggleSidebar={this.onToggleSidebar} type="passenger"></Footer>
		</div>)
	};
}
export default OfferRide2;