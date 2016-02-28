import React from "react";
import Header from "./header.js";
class FindRide extends React.Component {
	render(){
		return (
			<div className="stage">
				<Header></Header>
				<section className="findride">
					<ul id="droplist">
						<li id="selectFrom">
							<div className="lefticons">
								<img className="circledest" src="/_assets/images/circleyellow.png" />
							</div>
							<input type="text" name="from" placeholder="From" id="from" />
						</li>
						<li id="selectTo">
							<div className="lefticons">
								<img className="circledest" src="/_assets/images/circleblue.png" />
							</div>
							<input type="text" name="to" placeholder="To" id="to" />
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
					<a href='search.html'>Search ></a>
				</footer>
			</div>
		)
	};
}
export default FindRide;