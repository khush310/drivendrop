import React from "react";
import BurgerMenu from 'react-burger-menu';
import { Link } from 'react-router';
import classnames from 'classnames';
import Header from "./header.js";
import Footer from "./footer.js";
import Sidebar from "./sidebar";

class FindRide extends React.Component {
	constructor(props) {
		super(props);
		this.state = {active: false};
	};
	onToggleSidebar= (e) => {
		this.setState({active: !this.state.active});
	};
	saveSrc= (e) =>{
		const {store} = this.props;
		store.cursor(["findRide", "from"]).update(function() {
			return e.target.value;
		});
	};
	saveDestination=(e) =>{
		const {store} = this.props;
		store.cursor(["findRide", "to"]).update(function () {
			return e.target.value;
		})
	};
	selectTime = (e) =>{
		const {store} = this.props;
		store.cursor(["findRide", "time"]).update(function () {
			return e.target.value;
		})
	};
	womenonly = (e) =>{
		const {store} = this.props;
		store.cursor(["findRide", "women"]).update(function () {
			return e.target.value;
		})
	}
	render(){
		const {store} = this.props;
		let classes = classnames('stage', 'findride', {active: this.state.active});
		return (
			<div className={classes}>
				<section className="findsection">
					<ul id="findlist">
						<li id="selectFrom">
							<div className="lefticons">
								<img className="circledest" src="/_assets/images/circleyellow.png" />
							</div>
							<input onChange={this.saveSrc} type="text" name="from" placeholder="From" id="from" />
						</li>
						<li id="selectTo">
							<div className="lefticons">
								<img className="circledest" src="/_assets/images/circleblue.png" />
							</div>
							<input onChange={this.saveDestination} type="text" name="to" placeholder="To" id="to" />
						</li>
						<li id="selecTime">
							<div className="lefticons">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g stroke="#000" strokeLinecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none"><circle cx="12" cy="12" r="11.5" /><path d="M11.5 6.5v5.5l6 5.5" /></g></svg>
							</div>
							<input onChange={this.selectTime} className="selecttr" type="time" placeholder="hrs:mins" name="usr_time" />
						</li>
						<li id="selectWomen">
							<div className="lefticons">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" fill="#EA6291"><circle cx="11.5" cy="4" r="3.5" /><path d="M11.5 9c-3.038 0-5.5 4.5-5.5 9.5h3.5v5h4v-5h3.5c0-5-2.463-9.5-5.5-9.5z" /></g></svg>
							</div>
							<div className="selecttr">Women only
								<div className="onoffswitch">
									<input onChange={this.womenonly} value={store.cursor(["findRide", "women"]).deref()} type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" checked={store.cursor(["findRide", "women"]).deref()} id="myonoffswitch" />
									<label className="onoffswitch-label" for="myonoffswitch"></label>
								</div>
							</div>
						</li>
					</ul>
					<Link className="button" id="searchbtn" to="/searchresults">Search</Link>
				</section>
			</div>
		)
	}
};
export default FindRide;