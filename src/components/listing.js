import React from "react";
import { Link } from 'react-router';
import {buttonStyle, buttonLink} from "../stylesheets/button";
import {center} from "../stylesheets/center";
import classnames from 'classnames';
import moment from "moment";

class Listing extends React.Component {

	render(){
		const spanStyle = {width: "70%", textAlign:"left"};
		const containerStyle={display:"flex", justifyContent:"flex-start", width:"90%", alignItems:"center"};
		return (<div style={{width:"100%", height:"100%", display:"flex", alignItems:'center', flexDirection:"column", flex:"1"}}>
				<div style={{width:"100%", fontSize:"1.3em", margin:"1em"}}>{moment(this.props.object.time.iso).format("ddd D, MMMM - h:m")}</div>
				<div style={containerStyle}>
					<div style={{width:"30px", height:"30px", margin:"0, 2em 1em 0"}}>
						<img style={{width: "100%"}} src="/_assets/images/circleyellow.png" />
					</div>
					<div>{this.props.object.src}</div>
				</div>
				<div style={containerStyle}>
					<div className="lefticons">
						<img style={{width: "100%"}} src="/_assets/images/circleblue.png" />
					</div>
					<div>{this.props.object.destination}</div>
				</div>

				<div>{this.props.object.seats} available</div>
				<div>
					<div>{this.props.object.driver.username} {this.props.object.driver.lastname}</div>
					{this.props.object.driver.age} years old
					{this.props.object.driver.rating}
					<div>
						<i className="fa fa-2x fa-mobile" style={{color: "#585858", marginLeft:"4px"}}></i>
						<span style={spanStyle}>{this.props.object.driver.phoneNumber}</span>
					</div>
					<div>
						<i className="fa fa-envelope" style={{fontSize:"1.5em", color: "#585858"}}></i>
						<span style={spanStyle}>{this.props.object.driver.email}</span>
					</div>
					<div>
						<i className="fa fa-2x fa-child" style={{color: "#585858"}}></i>
						<span style={spanStyle}>ID Verified</span>
					</div>

				</div>

			</div>

		)
	}
};
export default Listing;