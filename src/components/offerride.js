import React from "react";
import Header from "./header";


class OfferRide extends React.Component {
	handleFrom= (e) =>{
		console.log(e.target.value);
		const {store} = this.props;
		store.cursor(["currentRide", "from"]).update(function() {
			return e.target.value;
		});
	}
	render(){
		const {store} = this.props;
		const from = store.cursor(["currentRide", "from"]).deref();
		return (
				<div className="stage">
					<Header></Header>
					going from  {from}
					<section className="selectdrive ">
						<ul>
							<li id="selectFrom">
								<div className="lefticons">
									<img className="circledest" src="/_assets/images/circleyellow.png" />
								</div>
								<input onChange={this.handleFrom} type="text" name="from" placeholder="sdfsdf" id="from" />
							</li>
							<li id="selectTo">
								<div className="lefticons">
									<img className="circledest" src="/_assets/images/circleblue.png" />
								</div>
								<input type="text" name="to" placeholder="To" id="to" />
							</li>
							<li id="selectSeats">
								<div className="lefticons">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
										<g stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" fill="none">
											<path d="M6 16.187v2.181l-3.941 1.412c-.944.338-1.559 1.231-1.559 2.231v1.489h15v-1.489c0-1-.616-1.893-1.559-2.231l-3.941-1.412v-2.306" />
											<ellipse cx="7.901" cy="12.051" rx="3.947" ry="4.739" />
											<path d="M11.817 11.625l-.374.033c-1.345.259-2.208-.229-2.949-1.524-.443.852-1.831 1.524-2.972 1.524-.562 0-1.045-.115-1.528-.369" />
											<path stroke-linecap="round" d="M18.031 23.5h3.469v-1.489c0-1-.616-1.893-1.559-2.231l-3.941-1.412v-2.306M13.901 7.315c2.18 0 3.947 2.121 3.947 4.736 0 2.617-1.768 4.739-3.947 4.739M17.817 11.625l-.374.033c-1.345.259-2.208-.229-2.949-1.524M17.521 4.5h6M20.5 1.5v6.016" />
										</g>
									</svg>
								</div>
								<input type="number" pattern="[0-4]*" name="numberofseats" placeholder="Number of seats available" id="numseats" />
							</li>
							<li id="selectReturn">
								<div className="lefticons">
									<svg version="1.1" id="Outline_Icons" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24">
									<g>
										<path fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" d="M5,13.5c2,0,4.5,8,4.5,8H2.842c-0.907,0-1.702-0.611-1.934-1.487C0.294,17.687,0.109,13.5,5,13.5z" />
										<path fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" d="M19,13.5c-2,0-4.5,8-4.5,8h6.658c0.907,0,1.702-0.611,1.934-1.487C23.706,17.687,23.891,13.5,19,13.5z" />
										<path fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" d="M5.953,9.973C6.264,6.865,8.878,4.5,12,4.5s5.736,2.365,6.047,5.473L18.5,13.5c-4.333-2-8.667-2-13,0L5.953,9.973z" />
										<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8.977,9.736C9.132,8.184,10.439,7,12,7" />
										<line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" x1="9" y1="21.5" x2="15" y2="21.5" />
										<rect x="17.5" y="21.5" fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" width="4" height="2" />
										<rect x="2.5" y="21.5" fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" width="4" height="2" />
										<circle fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" cx="20" cy="17.784" r="1.5" />
										<circle fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" cx="4" cy="17.784" r="1.5" />
									</g>
									</svg>
								</div>
								<div className="selecttr">Return
									<div className="onoffswitch">
										<input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" checked />
										<label className="onoffswitch-label" for="myonoffswitch"></label>
									</div></div>
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
						</ul>
					</section>
					<section id="drivebgd"></section>
					{this.props.footer}
				</div>
		)
	};
}
export default OfferRide;