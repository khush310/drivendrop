import React from "react";
import Parse from "parse";
import ParseReact from "parse-react";
import Superagent from "superagent";
import Searchresults from "../components/searchresults.js";

class Listings extends React.Component {
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
			.get('https://api.parse.com/1/classes/Listing')
			.set('X-Parse-Application-Id', 'OoK90cI6fsUljxChRLEmgbwHhMeaq5qlXJy4CBvM')
			.set('X-Parse-REST-API-Key', '78qvq4B8Q7PsyrAMfxoIXF7KfWRC200Vazx2FdEF')
			.query({ include: 'driver' })
			.end((err, res) =>{
				this.setState({"results":res.body.results, "reqStatus":"done"})
			})
	};
	render(){
		return (<div style={{display:"flex", flexDirection:"column", flex:1, width:"100%"}}>
				{this.state.reqStatus == "waiting" ? this.renderLoading() : <Searchresults store = {this.props.store} list={this.state.results}></Searchresults>}
			</div>
		)
	};
}
export default Listings;