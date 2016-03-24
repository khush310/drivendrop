import React from "react";
import Parse from "parse";
import ParseReact from "parse-react";
import Superagent from "superagent";
import ListingComponent from "../components/listing.js";

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
			.get('https://api.parse.com/1/classes/Listing/'+this.props.params.id)
			.set('X-Parse-Application-Id', 'OoK90cI6fsUljxChRLEmgbwHhMeaq5qlXJy4CBvM')
			.set('X-Parse-REST-API-Key', '78qvq4B8Q7PsyrAMfxoIXF7KfWRC200Vazx2FdEF')
			.query({ include: 'driver' })
			.end((err, res) =>{
				console.log(res)
				console.log(this.props.params.id)
				this.setState({"result":res.body, "reqStatus":"done"});
				console.log("loaded complete")
			})
	};
	render(){
		return (<div style={{display:"flex", flexDirection:"column", flex:1, width:"100%"}}>
				{this.state.reqStatus == "waiting" ? this.renderLoading() : <ListingComponent store = {this.props.store} object={this.state.result}></ListingComponent>}
			</div>
		)
	};
}
export default Listing;