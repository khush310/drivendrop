import React from "react";
import { Link } from 'react-router';
import classnames from 'classnames';
import Header from "./header.js";
import Sidebar from "./sidebar";

class FindRide extends React.Component {
	constructor(props) {
		super(props);
		this.state = {active: false};
	};
	onToggleSidebar= (e) => {
		this.setState({active: !this.state.active});
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
		let classes = classnames('stage', {active: this.state.active});
		const {store} = this.props;
		const ride = store.cursor(["currentRide"]).deref();
		return (
			<div className={classes}>
				<Header onToggleSidebar={this.onToggleSidebar}  id="homescreen"></Header>
				<Sidebar currentpage="Switch to Offering" currentlink="/offerride"></Sidebar>
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