import React from "react";
import Header from "./header";
import { Link } from 'react-router';

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
		const {store} = this.props;
		const name = store.cursor(["currentUser", "name"]).deref();
		return (
			<div className="stage home" id="opt">
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