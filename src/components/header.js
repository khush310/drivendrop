import React from "react";
import classnames from 'classnames';
import { Link } from 'react-router';
class Header extends React.Component {
	render(){
		return (<header className="homeheader" id={this.props.id} link={this.props.link}>
							<div className="current">
								{this.props.title}
							</div>
						</header>
		)
	};
}
export default Header;