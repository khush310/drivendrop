import React from "react";
import { Link } from 'react-router';
import {center} from "../stylesheets/center";

class Footer extends React.Component {
	render() {
		const stylefooter = Object.assign({width: "100%", height: "11%", cursor: "pointer", background: "#333333", border: "1px solid #333333", boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)"}, center);
		const linkStyle = {width:"50%", borderLeft:"1px solid rgba(3, 2, 2, 0.22)", justifyContent:"center", display:"flex", alignItems:"center", color:"#fff", fontSize:"1.3em"}
		return (<footer style={stylefooter}>
				<Link style={linkStyle} to="/public/findride">
					<span style={{paddingRight:"10px"}}>Search</span>
					<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><g stroke="#fff" stroke-linejoin="round" stroke-miterlimit="10" fill="none"><path strokeLinecap="round" d="M7.5 5.5v16M14.5 10.5v-10M11.497 18.645l-3.997 2.855-7-5v-16l7 5 7-5 7 5v7"/><circle cx="17.305" cy="17.307" r="3.805"/><path strokeLinecap="round" d="M20 20l3.5 3.5"/></g></svg>
				</Link>
				<Link style={linkStyle} to="/public/offerride">
					<span style={{paddingRigh:"10px"}}>Offer</span>
					<svg version="1.1" id="Outline_Icons" xmlns="http://www.w3.org/2000/svg" x="0px"
	 y="0px" width="35px" height="35px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" space="preserve"><g><path fill="none" stroke="#fff" stroke-linejoin="round" stroke-miterlimit="10" d="M5,13.5c2,0,4.5,8,4.5,8H2.842c-0.907,0-1.702-0.611-1.934-1.487C0.294,17.687,0.109,13.5,5,13.5z"/><path fill="none" stroke="#fff" stroke-linejoin="round" stroke-miterlimit="10" d="M19,13.5c-2,0-4.5,8-4.5,8h6.658 c0.907,0,1.702-0.611,1.934-1.487C23.706,17.687,23.891,13.5,19,13.5z"/><path fill="none" stroke="#fff" stroke-linejoin="round" stroke-miterlimit="10" d="M5.953,9.973C6.264,6.865,8.878,4.5,12,4.5s5.736,2.365,6.047,5.473L18.5,13.5c-4.333-2-8.667-2-13,0L5.953,9.973z"/><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8.977,9.736 C9.132,8.184,10.439,7,12,7"/><line fill="none" stroke="#fff" stroke-linejoin="round" stroke-miterlimit="10" x1="9" y1="21.5" x2="15" y2="21.5"/><rect x="17.5" y="21.5" fill="none" stroke="#fff" stroke-linejoin="round" stroke-miterlimit="10" width="4" height="2"/><rect x="2.5" y="21.5" fill="none" stroke="#fff" stroke-linejoin="round" stroke-miterlimit="10" width="4" height="2"/><circle fill="none" stroke="#fff" stroke-linejoin="round" stroke-miterlimit="10" cx="20" cy="17.784" r="1.5"/><circle fill="none" stroke="#fff" stroke-linejoin="round" stroke-miterlimit="10" cx="4" cy="17.784" r="1.5"/></g></svg>
				</Link>
		</footer>
		)
	}
}

export default Footer;