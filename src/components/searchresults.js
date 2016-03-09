import React from "react";
import { Link } from 'react-router';
import classnames from 'classnames';
import Header from "./header.js";
import Footer from "./footer.js";
import Sidebar from "./sidebar";

class SearchResults extends React.Component {
	constructor(props) {
		super(props);
		this.state = {active: false};
	};
	onToggleSidebar= (e) => {
		this.setState({active: !this.state.active});
	};
	render() {
		let classes = classnames('stage', 'searchresults', {active: this.state.active});
		const {store} = this.props;
		const ride = store.cursor(["currentRide"]).deref();
		const users = store.cursor(["otherUsers"]).deref();
		const search = store.cursor(["search"]).deref();

		return (<div className={classes}>
							<Header title={search.destination}></Header>
							<section className="posts">
								<div className="extrainfo">
									<p className="filter">More Filters</p>
									<p className="numberresults">{search.results} rides available</p>
								</div>
								{users.map(function(user){
									return(<div className="post">
													<div className="time">{user.departure_time}</div>
													<div className="seats">{user.seats_available} seats available</div>
													<div className="minidp"><img src="/_assets/images/user.png" /></div>
													<div className="leavingfrom">Leaving from {user.depart_location}</div>
													<div className="driverinfo">
														<div className="driver">{user.name}, {user.age}</div>
														<div className="mutual">{user.mutual_friends} mutual friends</div>
														<div className="rating"><img src="/_assets/images/stars.png" /></div>
														<div className="rating"><img src="/_assets/images/stars.png" /></div>
														<div className="rating"><img src="/_assets/images/stars.png" /></div>
														<div className="rating"><img src="/_assets/images/stars.png" /></div>
													</div>
												</div>)
								})}
						</section>
						<Footer onToggleSidebar={this.onToggleSidebar} type="passenger"></Footer>
						<Sidebar currentpage="Switch to Offering" currentlink="/offerride"></Sidebar>
					</div>
					)
	}
}

export default SearchResults;