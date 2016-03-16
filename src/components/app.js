import React from "react";
import classnames from "classnames";
import Header from "./header.js";
import Sidebar from "./sidebar.js";
import Messages from "./messages.js";
import Footer from "./footer.js";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {active: false, check: false};
	};
	toggleLeft = (e) => {
		this.setState({active: !this.state.active});
	};
	toggleRight= (e) => {
		this.setState({check: !this.state.check});
	};
	render() {
		const {store} = this.props;
		let classes = classnames("wrapper", {leftactive: this.state.active}, {rightactive: this.state.check});
		return (
			<div  className={classes} style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
				<Header title="Offer a Ride" ontoggleLeft={this.toggleLeft} ontoggleRight={this.toggleRight}></Header>
				{this.props.children}
				<Sidebar store={this.props.store}></Sidebar>
				<Messages store={this.props.store} ontoggle={this.toggleRight}></Messages>
				<Footer></Footer>
			</div>
		)
	}
}
export default App;