import React from "react";
import classnames from 'classnames';

class Header extends React.Component {
	render(){
		return (<header className="homeheader" id={this.props.id}>
							<div className="current">
								{this.props.title}
							</div>
						</header>
		)
	};
}
export default Header;