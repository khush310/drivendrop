import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import { Link } from 'react-router';
import classnames from 'classnames';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {active: false};
	};
	onToggleSidebar= (e) => {
		this.setState({active: !this.state.active});
	};

	handleClick = (e) => {
		const {store} = this.props;
		store.cursor(["currentUser", "name"]).update(function() {
			return "John Doe"
		});
	};

	render = () => {
		let classes = classnames('stage', {active: this.state.active});
		const {store} = this.props;
		const name = store.cursor(["currentUser", "name"]).deref();
		return (
			<div className={classes} id="opt">
				<Sidebar currentpage="Switch to Finding" currentlink="/findride"></Sidebar>
				<div className="options">
					<div className="button dndopt" id="optDropped">
						<Link to='/findride' type="passenger">Find a ride</Link>
					</div>
					<div className="button dndopt" id="optDrive">
						<Link to='/offerride' type="driver">Offer a ride</Link>
					</div>
				</div>
			</div>
		)
	};
}

export default Home;