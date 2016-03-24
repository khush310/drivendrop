import React from "react";
import Header from "./header.js";
class Published extends React.Component {
	render(){
		return (<div>
				<div>Your offer has been published!</div>
				<button className="dndbutton" style={button}>
					<div to="/public/offerride2" style={linkStyle} onClick={this.handleForm}>Go Back </div>
				</button>
		</div>
		)
	};
}
export default Published;