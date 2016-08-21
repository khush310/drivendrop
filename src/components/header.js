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
		return (<header className="homeheader appheader" style={{backgroundColor: "#3ebec9", width:"100%", height:"11%", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-around", boxShadow:"2px 3px 5px 1px rgba(153,153,153,0.6)"}} id={this.props.id} link={this.props.link}>
                        <div onClick={this.toggleLeft}>
                            <div className="icon_wrapper">
                                <div id="menuimg"></div>
                            </div>
                        </div>
                        <div className="current offerride-title" >
                            {this.props.title}
                        </div>

                        <div className="lefticons1">
                            <div className="lefticons-wrapper"><div className="icon_wrapper"><div id="locationwhite"></div></div></div>
                            <div onClick={this.toggleRight}><div className="icon_wrapper"><div id="messagewhite"></div></div></div>
                        </div>
			</header>
		)
	};
}
export default Header;