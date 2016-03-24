import React from "react";
import Parse from "parse";
import ParseReact from "parse-react";
import Superagent from "superagent";
import Profile from "../components/profile.js";

class Listing extends React.Component {
	constructor() {
		super();
		this.state = {reqStatus:"waiting"}
	};
	renderLoading(){
		return(<div>Loading</div>)
	}
	componentWillUnmount(){

	};
	componentDidMount(){

		Superagent
			.get('https://api.parse.com/1/users/'+this.props.params.id)
			.set('X-Parse-Application-Id', 'OoK90cI6fsUljxChRLEmgbwHhMeaq5qlXJy4CBvM')
			.set('X-Parse-REST-API-Key', '78qvq4B8Q7PsyrAMfxoIXF7KfWRC200Vazx2FdEF')
			.end((err, res) =>{
				this.setState({"result":res.body, "reqStatus":"done"})

			})
	};
	render(){
		return (<div style={{display:"flex", flexDirection:"column", flex:1, width:"100%"}}>
				{this.state.reqStatus == "waiting" ? this.renderLoading() : <Profile store = {this.props.store} user={this.state.result}></Profile>}
			</div>
		)
	};
}
export default Listing;