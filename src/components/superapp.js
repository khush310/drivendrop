import React from "react";

class SuperApp extends React.Component{
	constructor(props) {
		super(props);
	};
	render() {
		return(<div>{this.props.children}</div>)
	}
}

export default SuperApp;