import React from "react";
import { Link } from 'react-router';
import Header from "./header";
import Footer from "./footer";

class SearchResults extends React.Component {
	render() {
		const {store} = this.props;
		const ride = store.cursor(["currentRide"]).deref();
		const users = store.cursor(["otherUsers"]).deref();

		return (<div className="stage">
							<header className="homeheader">
								<div className="headersections left" id="back">
									<Link to="/findride">
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
							<section className="posts">
								<div className="extrainfo">
									<p className="filter">More Filters</p>
									<p className="numberresults">14 rides available</p>
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
				<Footer></Footer>
			</div>
		)
	}
}

export default SearchResults;