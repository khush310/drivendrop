import React from "react";
import classnames from 'classnames';
import { Link } from 'react-router';
import {center} from "../stylesheets/center";
class Header extends React.Component {
	toggleLeft = (e) => {
		this.props.ontoggleLeft();
	};
	toggleRight = (e) => {
		this.props.ontoggleRight();
	};
	render(){
		const profilestyle = Object.assign({width: "25%", height: "100%", float: "left"}, center);
		const messagestyle = Object.assign({width: "25%", height: "100%", float: "right"}, center);
		return (<header className="homeheader" style={{backgroundColor: "#3ebec9", width:"100%", height:"11%", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-around", boxShadow:"2px 3px 5px 1px rgba(153,153,153,0.6)"}} id={this.props.id} link={this.props.link}>
							<div onClick={this.toggleLeft}>
								<i className="fa fa-2x fa-bars" style={{color:"#f7ffff"}}></i>
							</div>
							<div className="current" style={{color:"fffcff", fontSize:"1.4em"}} >
								{this.props.title}
							</div>

							<div style={{display:"inherit"}}>
                                <div style={{margin: "0em 1em 0em 0em"}}><img style={{width: "100%"}} src="/_assets/images/locationtracking.png" /></div>
                                <div onClick={this.toggleRight}><img style={{width: "100%"}} src="/_assets/images/message.png" /></div>
							</div>
			</header>
		)
	};
}
export default Header;