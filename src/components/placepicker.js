import React from "react";
import Superagent from "superagent";

class PlacePicker extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	handleSearch = () => {
		console.log("searching")
	};

	render(){
		return(
			<div style={this.props.style}>
				<div style={{height: 40}}>
						<input type="text" onChange={this.handleSearch} name="src" placeholder="pick the location.." />
				</div>
				<div style={{flex: 1}}></div>
				<div style={{height: 40}}>finish</div>
			</div>
		)
	}
}

export default PlacePicker;