import React from "react";
import Header from "./header";
import { Link } from 'react-router';
import {buttonStyle, buttonLink} from "../stylesheets/button";
import {center} from "../stylesheets/center";

class Home extends React.Component {
	render(){
		const blueButton = Object.assign(buttonStyle, {width: "90%", background:"#00c5d1", margin: "1em"});
		const yellowButton = Object.assign(buttonStyle, {width: "90%", background:"#ffd900", margin: "1em"});
		const centered = Object.assign(center, {width: "100%", flex: "0.8", flexDirection:"column"});
		const linkstyle = Object.assign(buttonLink, {fontSize: "5vw", fontWeight: "bolder"})

		return (
			<div className="stage home" id="opt">
				<div style={centered}>
					<div style={yellowButton}>
						<Link to='/public/findride' style={linkstyle} type="passenger">Find a ride</Link>
					</div>
					<div style={blueButton}>
						<Link to='/public/offerride' style={linkstyle} type="driver">Offer a ride</Link>
					</div>
				</div>
			</div>
		)
	};
}
export default Home;