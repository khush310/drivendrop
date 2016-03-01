import React from "react";
import Header from "./header.js";
import { Link } from 'react-router';

class FindRide extends React.Component {
	constructor() {
		super();
	};
	saveFrom= (e) =>{
	const {store} = this.props;
	store.cursor(["currentRide", "from"]).update(function() {
		return e.target.value;
	});
};
	saveTo=(e) =>{
		const {store} = this.props;
		store.cursor(["currentRide", "to"]).update(function () {
			return e.target.value;
		})
	};

	render(){
		const {store} = this.props;
		const ride = store.cursor(["currentRide"]).deref();
		return (
			<div className="stage">
				<header className="homeheader">
					<div className="headersections left" id="back">
						<Link to="/home">
							<svg id="backicon" version="1.1" id="Outline_Icons" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24">
								<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="18.5,0.55.5,12 18.5,23.5 " />
							</svg>
						</Link>
					</div>
					<div className="destsrc center">Destination</div>
					<div className="headersections right" id="messages">
						<svg className="icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<g stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none">
								<path d="M23.5 18c0 .828-.672 1.5-1.5 1.5h-20c-.828 0-1.5-.672-1.5-1.5v-12c0-.829.672-1.5 1.5-1.5h20c.828 0 1.5.671 1.5 1.5v12zM20.5 8.5l-8.5 5.5-8.5-5.5M3.5 16l3.5-2M20.5 16l-3.5-2" />
							</g>
						</svg>
					</div>
				</header>
				<section className="findride">
					<ul id="droplist">
						<li id="selectFrom">
							<div className="lefticons">
								<img className="circledest" src="/_assets/images/circleyellow.png" />
							</div>
							<input onChange={this.saveFrom} type="text" name="from" placeholder="From" id="from" />
						</li>
						<li id="selectTo">
							<div className="lefticons">
								<img className="circledest" src="/_assets/images/circleblue.png" />
							</div>
							<input onChange={this.saveTo} type="text" name="to" placeholder="To" id="to" />
						</li>
						<li id="selecTime">
							<div className="lefticons">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<g stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none">
										<circle cx="12" cy="12" r="11.5" />
										<path d="M11.5 6.5v5.5l6 5.5" />
									</g>
								</svg>
							</div>
							<div className="selecttr">Select Time</div>
						</li>
						<li id="selectWomen">
							<div className="lefticons">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<g stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" fill="#EA6291">
										<circle cx="11.5" cy="4" r="3.5" />
										<path d="M11.5 9c-3.038 0-5.5 4.5-5.5 9.5h3.5v5h4v-5h3.5c0-5-2.463-9.5-5.5-9.5z" />
									</g>
								</svg>
							</div>
							<div className="selecttr">Women only
								<div className="onoffswitch">
									<input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" checked />
									<label className="onoffswitch-label" for="myonoffswitch"></label>
								</div>
							</div>
						</li>
					</ul>
				</section>
				<section id="dropbgd"></section>
				<footer className="howitworks">
					<Link to='/searchresults'>Search ></Link>
				</footer>
			</div>
		)
	}
}
export default FindRide;