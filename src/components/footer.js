import React from "react";
import { Link } from 'react-router';

class Footer extends React.Component {
	render() {
		return (<footer>
				<Link className="searchride" to="/public/findride">
					Search
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g stroke="#fff" stroke-linejoin="round" stroke-miterlimit="10" fill="none"><path strokeLinecap="round" d="M7.5 5.5v16M14.5 10.5v-10M11.497 18.645l-3.997 2.855-7-5v-16l7 5 7-5 7 5v7"/><circle cx="17.305" cy="17.307" r="3.805"/><path strokeLinecap="round" d="M20 20l3.5 3.5"/></g></svg>
				</Link>
				<Link className="offerride" to="/public/offerride">
					Offer
					<svg version="1.1" id="Outline_Icons" xmlns="http://www.w3.org/2000/svg" x="0px"
	 y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" space="preserve"><g><path fill="none" stroke="#fff" stroke-linejoin="round" stroke-miterlimit="10" d="M5,13.5c2,0,4.5,8,4.5,8H2.842c-0.907,0-1.702-0.611-1.934-1.487C0.294,17.687,0.109,13.5,5,13.5z"/><path fill="none" stroke="#fff" stroke-linejoin="round" stroke-miterlimit="10" d="M19,13.5c-2,0-4.5,8-4.5,8h6.658 c0.907,0,1.702-0.611,1.934-1.487C23.706,17.687,23.891,13.5,19,13.5z"/><path fill="none" stroke="#fff" stroke-linejoin="round" stroke-miterlimit="10" d="M5.953,9.973C6.264,6.865,8.878,4.5,12,4.5s5.736,2.365,6.047,5.473L18.5,13.5c-4.333-2-8.667-2-13,0L5.953,9.973z"/><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8.977,9.736 C9.132,8.184,10.439,7,12,7"/><line fill="none" stroke="#fff" stroke-linejoin="round" stroke-miterlimit="10" x1="9" y1="21.5" x2="15" y2="21.5"/><rect x="17.5" y="21.5" fill="none" stroke="#fff" stroke-linejoin="round" stroke-miterlimit="10" width="4" height="2"/><rect x="2.5" y="21.5" fill="none" stroke="#fff" stroke-linejoin="round" stroke-miterlimit="10" width="4" height="2"/><circle fill="none" stroke="#fff" stroke-linejoin="round" stroke-miterlimit="10" cx="20" cy="17.784" r="1.5"/><circle fill="none" stroke="#fff" stroke-linejoin="round" stroke-miterlimit="10" cx="4" cy="17.784" r="1.5"/></g></svg>
				</Link>
		</footer>
		)
	}
}

export default Footer;