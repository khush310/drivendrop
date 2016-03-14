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
	}
	render(){
		const profilestyle = Object.assign({width: "25%", height: "100%", float: "left"}, center);
		const messagestyle = Object.assign({width: "25%", height: "100%", float: "right"}, center);
		return (<header className="homeheader" id={this.props.id} link={this.props.link}>
							<div onClick={this.toggleLeft} style={profilestyle}>
								<svg className="icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" fill="none"><path d="M9.5 13.281v2.719l-5.009 1.789c-1.194.427-1.991 1.558-1.991 2.825v1.886h19v-1.886c0-1.268-.797-2.398-1.991-2.825l-5.009-1.789v-2.906" /><ellipse cx="11.875" cy="8" rx="5" ry="6" /><path d="M16.828 7.453l-.453.047c-1.703.328-2.797-.289-3.734-1.93-.563 1.078-2.322 1.93-3.766 1.93-.711 0-1.323-.146-1.936-.466" /></g></svg>
							</div>
							<div className="current">
								{this.props.title}
							</div>
							<div onClick={this.toggleLeft} style={messagestyle}>
								<svg className="icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g stroke="#000" strokeLinecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none"><path d="M23.5 18c0 .828-.672 1.5-1.5 1.5h-20c-.828 0-1.5-.672-1.5-1.5v-12c0-.829.672-1.5 1.5-1.5h20c.828 0 1.5.671 1.5 1.5v12zM20.5 8.5l-8.5 5.5-8.5-5.5M3.5 16l3.5-2M20.5 16l-3.5-2" /></g></svg>
							</div>
			</header>
		)
	};
}
export default Header;