import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import {Link} from "react-router";
import classnames from "classnames";

class OfferRide extends React.Component {
	constructor(props) {
		super(props);
		this.state = {active: false};
	};
	onToggleSidebar= (e) => {
		this.setState({active: !this.state.active});
	};
	handleFrom= (e) =>{
		const {store} = this.props;
		store.cursor(["currentRide", "from"]).update(function() {
			return e.target.value;
		});
	};
	handleTo=(e) =>{
		const {store} = this.props;
		store.cursor(["currentRide", "to"]).update(function () {
			return e.target.value;
		})
	};
	handleSeats=(e) =>{
		const {store} = this.props;
		store.cursor(["currentRide", "seats"]).update(function () {
			return e.target.value;
		})
	};

	render(){
		let classes = classnames('stage', 'offerheader', {active: this.state.active});
		const {store} = this.props;
		const ride = store.cursor(["currentRide"]).deref();
		return (
				<div className={classes}>
					<Header onToggleSidebar={this.onToggleSidebar}></Header>
					<Sidebar currentpage="Switch to Finding" currentlink="/findride"></Sidebar>
					<section className="selectdrive " id="drivebgd">
						<ul>
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
								<input className="selecttr" type="datetime-local" placeholder="Select Time" name="usr_time" />
							</li>
						</ul>
						<button className="continue"><Link to="/offerride2" >Continue</Link></button>
					</section>
				</div>
		)
	};
}
export default OfferRide;