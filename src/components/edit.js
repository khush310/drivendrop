import React from "react";
import classnames from 'classnames';
import { Link } from 'react-router';
class EditHeader extends React.Component {
	render(){
		return (<header className="homeheader" id={this.props.id} link={this.props.link}>
				<Link className="close" to="/findride">Close</Link>
				<div className="edit">Edit</div>
			</header>
		)
	};
}
export default EditHeader;